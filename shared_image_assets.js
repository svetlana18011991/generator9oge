// Keep one copy of each embedded image while preserving self-contained exports.
(function () {
    'use strict';
    const bySource = new Map();
    const images = [];
    const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7#oge-image-';
    const markerPattern = new RegExp(placeholder + '(\\d+)', 'g');
    const encodedMarkerPattern = new RegExp(encodeURIComponent(placeholder) + '(\\d+)', 'g');

    function imageBlobUrl(source) {
        const comma = source.indexOf(',');
        const binary = atob(source.slice(comma + 1));
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return URL.createObjectURL(new Blob([bytes], {type: source.slice(5, source.indexOf(';'))}));
    }

    function compact(html) {
        return String(html).replace(/data:image\/[a-zA-Z0-9.+-]+;base64,[a-zA-Z0-9+/=]+/g, source => {
            if (source.length < 1024) return source;
            let image = bySource.get(source);
            if (!image) {
                try { image = {source, url: imageBlobUrl(source), id: images.length}; }
                catch { return source; }
                images.push(image);
                bySource.set(source, image);
            }
            return image.url;
        });
    }

    // This function is embedded in downloaded HTML. It has no app dependencies.
    function hydrateSharedImages(sources, prefix, pattern) {
        const urls = {};
        const markers = new RegExp(pattern, 'g');
        function resolve(value) {
            return value.replace(markers, (match, id) => {
                if (!urls[id]) {
                    let source = sources[id];
                    if (!source) {
                        const image = document.querySelector(`[data-oge-image-source="${id}"]`);
                        source = image?.localName === 'img' ? image.getAttribute('src') :
                            image?.getAttribute('href') || image?.getAttribute('xlink:href');
                    }
                    if (!source?.startsWith('data:image/')) return match;
                    const comma = source.indexOf(',');
                    const binary = atob(source.slice(comma + 1));
                    const bytes = new Uint8Array(binary.length);
                    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
                    urls[id] = URL.createObjectURL(new Blob([bytes], {type: source.slice(5, source.indexOf(';'))}));
                }
                return urls[id];
            });
        }
        function update(element) {
            if (element.nodeType !== 1) return;
            if (element.tagName === 'STYLE' && element.textContent.includes(prefix)) {
                element.textContent = resolve(element.textContent);
            }
            for (const attribute of Array.from(element.attributes)) {
                if (attribute.value.includes(prefix)) {
                    const value = resolve(attribute.value);
                    if (value !== attribute.value) element.setAttribute(attribute.name, value);
                }
            }
        }
        function hydrate(root) {
            update(root);
            if (root.querySelectorAll) root.querySelectorAll('img, image, source, [style], style').forEach(update);
        }
        new MutationObserver(records => {
            for (const record of records) {
                if (record.type === 'attributes') update(record.target);
                else record.addedNodes.forEach(hydrate);
            }
        }).observe(document.documentElement, {
            childList: true, subtree: true, attributes: true,
            attributeFilter: ['src', 'srcset', 'href', 'xlink:href', 'style']
        });
        hydrate(document.documentElement);
        document.addEventListener('DOMContentLoaded', () => hydrate(document.documentElement), {once: true});
    }

    function isInitiallyHidden(element) {
        for (let node = element; node; node = node.parentElement) {
            if (node.hasAttribute('hidden') || node.style?.display === 'none') return true;
        }
        return false;
    }

    function restoreStaticImages(html, selector, sources) {
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const inlineSources = new Set();
        const imageAttributes = new Set(['src', 'srcset', 'href', 'xlink:href']);
        for (const element of parsed.querySelectorAll('img, svg image, source')) {
            if (!element.closest(selector) || isInitiallyHidden(element)) continue;
            const tag = element.localName;
            const primary = tag === 'img' ? element.getAttribute('src') :
                tag === 'image' ? element.getAttribute('href') || element.getAttribute('xlink:href') : null;
            let restored = false;
            for (const attribute of element.attributes) {
                if (!imageAttributes.has(attribute.name) || !attribute.value.includes(placeholder)) continue;
                const value = attribute.value.replace(markerPattern, (marker, id) => sources[id] || marker);
                if (value !== attribute.value) {
                    attribute.value = value;
                    restored = true;
                }
            }
            if (!restored) continue;
            if (tag === 'img') element.setAttribute('loading', 'eager');
            if (primary?.startsWith(placeholder)) {
                const id = primary.slice(placeholder.length);
                if (sources[id] && !inlineSources.has(id)) {
                    element.setAttribute('data-oge-image-source', id);
                    inlineSources.add(id);
                }
            }
        }
        const doctype = html.match(/^\s*<!doctype[^>]*>/i)?.[0] || '';
        const restoredHTML = doctype + parsed.documentElement.outerHTML;
        const referenced = new Set();
        for (const pattern of [markerPattern, encodedMarkerPattern]) {
            for (const [,id] of restoredHTML.matchAll(pattern)) referenced.add(id);
        }
        // Hidden copies can reuse bytes stored in an initial image element.
        for (const id of Object.keys(sources)) {
            if (inlineSources.has(id) || !referenced.has(id)) delete sources[id];
        }
        return restoredHTML;
    }

    function pack(html, {staticImagesIn} = {}) {
        html = compact(html);
        const sources = {};
        for (const image of images) {
            const encoded = encodeURIComponent(image.url);
            if (!html.includes(image.url) && !html.includes(encoded)) continue;
            const marker = placeholder + image.id;
            html = html.split(image.url).join(marker).split(encoded).join(encodeURIComponent(marker));
            sources[image.id] = image.source;
        }
        if (!Object.keys(sources).length) return html;
        if (staticImagesIn) html = restoreStaticImages(html, staticImagesIn, sources);
        const script = '<script data-oge-shared-images>(' + hydrateSharedImages.toString() + ')(' +
            JSON.stringify(sources) + ',' + JSON.stringify(placeholder) + ',' + JSON.stringify(markerPattern.source) + ');</' + 'script>';
        return html.replace(/<head\b[^>]*>/i, head => head + script);
    }

    window.ogeCompactEmbeddedImages = compact;
    window.ogePackSharedImages = pack;
}());
