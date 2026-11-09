// Optional download resources must never delay opening the generator.
(function () {
    'use strict';
    const loads = new Map();
    function loadScript(name, ready) {
        if (ready()) return Promise.resolve();
        if (loads.has(name)) return loads.get(name);
        const job = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            let timer;
            function finish(error) {
                clearTimeout(timer);
                script.onload = script.onerror = null;
                if (error) {script.remove(); reject(error);} else resolve();
            }
            script.src = name + '?v=20261109-startup-1';
            script.onload = () => finish(ready() ? null : new Error('Неполный файл ' + name));
            script.onerror = () => finish(new Error('Не удалось загрузить ' + name));
            timer = setTimeout(() => finish(new Error('Превышено время загрузки ' + name)), 45000);
            document.head.appendChild(script);
        });
        loads.set(name, job);
        job.catch(() => loads.delete(name));
        return job;
    }
    function exportResources() {
        return loadScript('export-resources.js', () => typeof window.ogeOfflineMathJaxHTML === 'function' && !!window.ogeSeasonalBackgroundCSS);
    }
    function decorativeResources() {
        return loadScript('offline_assets_bundle.js', () => !!window.EMBEDDED_ASSETS?.['cat_1.png']);
    }
    // One action owns the settings until its resources and download are ready.
    // This prevents a slow first download from silently exporting a later variant.
    let pending = false;
    async function withResources(load, action, receiver, args) {
        if (pending) return;
        pending = true;
        const locked = Array.from(document.body.children)
            .filter(node => node.id !== 'startup-status' && !/^(SCRIPT|STYLE)$/.test(node.tagName))
            .map(node => ({node, inert: node.inert}));
        const status = document.getElementById('startup-status');
        const message = document.getElementById('startup-message');
        const retry = document.getElementById('startup-retry');
        locked.forEach(({node}) => {node.inert = true;});
        message.textContent = 'Подготавливаем материалы…';
        retry.hidden = true;
        status.hidden = false;
        try {
            await load();
            return await action.apply(receiver, args);
        } catch (error) {
            console.error(error);
            alert('Не удалось подготовить материалы. Проверьте соединение и нажмите нужную кнопку ещё раз.\n' + error.message);
        } finally {
            locked.forEach(({node, inert}) => {node.inert = inert;});
            status.hidden = true;
            pending = false;
        }
    }
    for (const name of ['downloadStudentHTML', 'downloadPrintPDF', 'downloadAnswers',
        'generateTowerGame', 'generateMotivationGame', 'generateBattleGame',
        'generatePresentation1', 'generatePresentation2', 'generatePresentation3',
        'generateCustomPresentationFromEditor']) {
        const action = window[name];
        if (typeof action !== 'function') continue;
        window[name] = function (...args) {
            const resources = async () => {
                const jobs = [exportResources()];
                if (name.startsWith('generate')) jobs.push(decorativeResources());
                if (name === 'generateTowerGame') jobs.push(loadScript('tower_template.js', () => typeof window.TOWER_TEMPLATE === 'string'));
                if (name === 'generateMotivationGame') jobs.push(loadScript('motivation_template.js', () => typeof window.MOTIVATION_TEMPLATE === 'string'));
                if (name === 'generateBattleGame') jobs.push(loadScript('battle_template.js', () => typeof BATTLE_TEMPLATE === 'string'));
                await Promise.all(jobs);
            };
            return withResources(resources, action, this, args);
        };
    }
    const generate = window.safeGenerateVariant;
    window.safeGenerateVariant = function (event, mode = 'manual') {
        if (event) {event.preventDefault(); event.stopPropagation();}
        const sticker = document.getElementById('sticker-select').value;
        if (mode === 'full' || sticker === 'none' || sticker === 'custom' || window.EMBEDDED_ASSETS?.['cat_1.png']) {
            return generate.call(this, event, mode);
        }
        const savedEvent = event && {currentTarget: event.currentTarget, preventDefault() {}, stopPropagation() {}};
        return withResources(decorativeResources, generate, this, [savedEvent, mode]);
    };
}());
