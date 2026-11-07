// Keep one copy of each embedded image while preserving self-contained exports.
(function () {
    'use strict';
    const bySource = new Map();
    const images = [];
    const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7#oge-image-';

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
    function hydrateSharedImages(sources, prefix) {
        const urls = {};
        function resolve(value) {
            return value.replace(/data:image\/gif;base64,R0lGODlhAQABAIAAAAAAAP\/\/\/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7#oge-image-(\d+)/g, (match, id) => {
                if (!sources[id]) return match;
                if (!urls[id]) {
                    const source = sources[id], comma = source.indexOf(',');
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

    function pack(html) {
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
        const script = '<script data-oge-shared-images>(' + hydrateSharedImages.toString() + ')(' +
            JSON.stringify(sources) + ',' + JSON.stringify(placeholder) + ');</' + 'script>';
        return html.replace(/<head\b[^>]*>/i, head => head + script);
    }

    window.ogeCompactEmbeddedImages = compact;
    window.ogePackSharedImages = pack;
}());
