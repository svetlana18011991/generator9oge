
    window.ASSETS_URL = "https://svetlana18011991.github.io/generator11prof/";
    window.getEmbeddedAssetUrl = function(name) {
        return (window.EMBEDDED_ASSETS && window.EMBEDDED_ASSETS[name]) ? window.EMBEDDED_ASSETS[name] : (new URL(name, document.baseURI).href);
    };
    window.SCRIPT_END = "</" + "script>";

    window.applyOfflinePresentationThumbs = function() {
        var t1 = document.getElementById('thumb1');
        if (t1) t1.style.backgroundImage = "url('" + window.getEmbeddedAssetUrl('p1.jpg') + "')";
        var t2 = document.getElementById('thumb2');
        if (t2) t2.style.backgroundImage = "url('" + window.getEmbeddedAssetUrl('f1.png') + "')";
        var t3 = document.getElementById('thumb3');
        if (t3) t3.style.backgroundImage = "url('" + window.getEmbeddedAssetUrl('s2.png') + "')";
    };
    document.addEventListener('DOMContentLoaded', window.applyOfflinePresentationThumbs);


    let globalStickerPool = [];
    let lastStickerPack = "";
    let lastStickerId = -1;

    const CUSTOM_STICKER_STORAGE_KEY = 'egeCustomStickerPackV1';
    const CUSTOM_STICKER_MAX_COUNT = 15;
    const CUSTOM_STICKER_MAX_SIDE = 320;
    const CUSTOM_STICKER_MAX_SOURCE_SIZE = 8 * 1024 * 1024;
    window.customStickerPack = [];

    function loadCustomStickerPack() {
        try {
            const raw = localStorage.getItem(CUSTOM_STICKER_STORAGE_KEY);
            const arr = raw ? JSON.parse(raw) : [];
            window.customStickerPack = Array.isArray(arr) ? arr.filter(src => typeof src === 'string' && src.startsWith('data:image/')).slice(0, CUSTOM_STICKER_MAX_COUNT) : [];
        } catch (e) {
            window.customStickerPack = [];
        }
        updateCustomStickerButton();
        renderCustomStickerGrid();
    }

    function saveCustomStickerPack() {
        try {
            localStorage.setItem(CUSTOM_STICKER_STORAGE_KEY, JSON.stringify(window.customStickerPack || []));
        } catch (e) {
            showCustomStickerStatus('Пакет получился слишком тяжёлым для сохранения в браузере. В текущей сессии стикеры будут работать, но после обновления страницы могут пропасть.', true);
        }
        updateCustomStickerButton();
    }

    function getCustomStickerPack() {
        return Array.isArray(window.customStickerPack) ? window.customStickerPack.filter(Boolean) : [];
    }

    function updateCustomStickerButton() {
        const btn = document.getElementById('custom-sticker-btn');
        const select = document.getElementById('sticker-select');
        if (!btn || !select) return;
        const count = getCustomStickerPack().length;
        btn.style.display = select.value === 'custom' ? 'inline-block' : 'none';
        btn.textContent = count ? `Настроить (${count})` : 'Добавить стикеры';
    }

    function showCustomStickerStatus(message, isError) {
        const status = document.getElementById('custom-sticker-status');
        if (!status) return;
        status.textContent = message || '';
        status.style.color = isError ? '#ff8a80' : '#8fd694';
    }

    window.handleStickerSelectChange = function() {
        updateCustomStickerButton();
        const select = document.getElementById('sticker-select');
        if (select && select.value === 'custom') openCustomStickerModal();
    };

    window.openCustomStickerModal = function() {
        renderCustomStickerGrid();
        const modal = document.getElementById('custom-sticker-modal');
        if (modal) modal.style.display = 'flex';
    };

    window.closeCustomStickerModal = function() {
        const modal = document.getElementById('custom-sticker-modal');
        if (modal) modal.style.display = 'none';
        updateCustomStickerButton();
    };

    window.useCustomStickerPackAndClose = function() {
        const select = document.getElementById('sticker-select');
        if (select) select.value = 'custom';
        saveCustomStickerPack();
        closeCustomStickerModal();
    };

    function renderCustomStickerGrid() {
        const grid = document.getElementById('custom-sticker-grid');
        if (!grid) return;
        const pack = getCustomStickerPack();
        grid.innerHTML = '';
        if (!pack.length) {
            grid.innerHTML = '<div class="custom-sticker-empty">Пока нет своих стикеров. Нажмите «Выбрать картинки» и загрузите PNG, JPG или WebP.</div>';
            showCustomStickerStatus('', false);
            updateCustomStickerButton();
            return;
        }
        pack.forEach((src, index) => {
            const card = document.createElement('div');
            card.className = 'custom-sticker-card';
            card.innerHTML = `<img src="${src}" alt="Стикер ${index + 1}"><button type="button" onclick="removeCustomSticker(${index})">Удалить</button>`;
            grid.appendChild(card);
        });
        showCustomStickerStatus(`В пакете ${pack.length} стикер(ов). Они уже сохранены в base64 и будут встроены в готовые файлы.`, false);
        updateCustomStickerButton();
    }

    window.removeCustomSticker = function(index) {
        window.customStickerPack.splice(index, 1);
        saveCustomStickerPack();
        renderCustomStickerGrid();
    };

    window.clearCustomStickerPack = function() {
        if (!confirm('Очистить весь свой пакет стикеров?')) return;
        window.customStickerPack = [];
        saveCustomStickerPack();
        renderCustomStickerGrid();
    };

    function readFileAsDataUrl(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = () => reject(new Error('Не удалось прочитать файл'));
            reader.readAsDataURL(file);
        });
    }

    function loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('Не удалось открыть изображение'));
            img.src = src;
        });
    }

    async function compressStickerFile(file) {
        if (!file || !file.type || !file.type.startsWith('image/')) throw new Error('Можно загружать только изображения.');
        if (file.size > CUSTOM_STICKER_MAX_SOURCE_SIZE) throw new Error(`Файл «${file.name}» слишком большой. Максимум 8 МБ.`);

        const dataUrl = await readFileAsDataUrl(file);
        const img = await loadImage(dataUrl);
        const scale = Math.min(1, CUSTOM_STICKER_MAX_SIDE / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
        const w = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
        const h = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, w, h);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, w, h);

        let result = '';
        try {
            result = canvas.toDataURL('image/webp', 0.86);
            if (!result || !result.startsWith('data:image/webp')) result = canvas.toDataURL('image/png');
        } catch (e) {
            result = canvas.toDataURL('image/png');
        }
        return result;
    }

    window.handleCustomStickerUpload = async function(event) {
        const input = event.target;
        const files = Array.from(input.files || []);
        if (!files.length) return;
        let added = 0;
        let errors = [];
        for (const file of files) {
            if (getCustomStickerPack().length >= CUSTOM_STICKER_MAX_COUNT) {
                errors.push(`Достигнут лимит ${CUSTOM_STICKER_MAX_COUNT} стикеров.`);
                break;
            }
            try {
                const compressed = await compressStickerFile(file);
                window.customStickerPack.push(compressed);
                added++;
            } catch (e) {
                errors.push(e.message || `Не удалось обработать ${file.name}`);
            }
        }
        saveCustomStickerPack();
        renderCustomStickerGrid();
        input.value = '';
        if (errors.length) showCustomStickerStatus(`Добавлено: ${added}. ${errors.join(' ')}`, true);
        else showCustomStickerStatus(`Добавлено стикеров: ${added}. Все картинки автоматически уменьшены и переведены в base64.`, false);
    };

    document.addEventListener('DOMContentLoaded', loadCustomStickerPack);


    const sciQuotes = {
        1: "«Математика — царица наук,<br>а арифметика —<br>царица математики».<br>К. Ф. Гаусс",
        2: "«Математика — это язык,<br>на котором говорят<br>все точные науки».<br>Н. И. Лобачевский",
        3: "«То, что мы знаем, — это капля,<br>а то, что мы не знаем, — океан».<br>Исаак Newton",
        4: "«В геометрии нет царского пути».<br>Евклид",
        5: "«Числа правят миром».<br>Пифагор"
    };

    let currentInteractiveHTML = "";
    let currentPrintHTML = "";
    let currentAnswersHTML = "";
    window.customBgDataUrl = window.customBgDataUrl || "";

    window.currentGeneratedTasks = [];
    window.selectedBlockTitles = [];
    window.mainCanvases = {};

    window.autoFixSVGArrows = function(container) {
        if(!container) return;
        let svgNs = 'http://www.w3.org/2000/svg';

        function getInheritedStrokeColor(el) {
            let s = el.getAttribute('stroke') || el.style.stroke;
            if (s && s !== 'none') return s;
            if (el.parentElement && el.parentElement.tagName && el.parentElement.tagName.toLowerCase() !== 'svg') {
                return getInheritedStrokeColor(el.parentElement);
            }
            return '#000';
        }

        function getInheritedStrokeWidth(el) {
            let sw = el.getAttribute('stroke-width') || el.style.strokeWidth;
            if (sw) return parseFloat(sw);
            if (el.parentElement && el.parentElement.tagName && el.parentElement.tagName.toLowerCase() !== 'svg') {
                return getInheritedStrokeWidth(el.parentElement);
            }
            return 1;
        }

        container.querySelectorAll('svg').forEach(svg => {
            svg.style.overflow = 'visible';
            function drawArrow(el) {
                if (el.dataset.arrowDrawn) return;
                let pts = null;
                let tag = el.tagName.toLowerCase();
                if (tag === 'line') {
                    pts = [{x: parseFloat(el.getAttribute('x1')), y: parseFloat(el.getAttribute('y1'))}, {x: parseFloat(el.getAttribute('x2')), y: parseFloat(el.getAttribute('y2'))}];
                } else if (tag === 'path') {
                    let d = el.getAttribute('d');
                    if (!d || d.toLowerCase().includes('z')) return;
                    let nums = d.match(/[+-]?\d*\.?\d+/g);
                    if (nums && nums.length >= 4) {
                        pts = [{x: parseFloat(nums[nums.length-4]), y: parseFloat(nums[nums.length-3])}, {x: parseFloat(nums[nums.length-2]), y: parseFloat(nums[nums.length-1])}];
                    }
                }
                if (pts && !isNaN(pts[0].x)) {
                    let p1 = pts[0], p2 = pts[1];
                    let dx = p2.x - p1.x, dy = p2.y - p1.y;
                    let len = Math.sqrt(dx*dx + dy*dy);
                    if (len > 0.1) {
                        let angle = Math.atan2(dy, dx);
                        let sw = getInheritedStrokeWidth(el);
                        let headlen = Math.max(8, sw * 3.5);
                        let color = getInheritedStrokeColor(el);
                        let p3 = {x: p2.x - headlen * Math.cos(angle - Math.PI / 7), y: p2.y - headlen * Math.sin(angle - Math.PI / 7)};
                        let p4 = {x: p2.x - headlen * Math.cos(angle + Math.PI / 7), y: p2.y - headlen * Math.sin(angle + Math.PI / 7)};
                        let arrow = document.createElementNS(svgNs, 'polygon');
                        arrow.setAttribute('points', `${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`);
                        arrow.setAttribute('fill', color);
                        el.parentNode.appendChild(arrow);
                        el.dataset.arrowDrawn = "true";
                    }
                }
            }
            svg.querySelectorAll('[marker-end]').forEach(el => {
                el.removeAttribute('marker-end');
                drawArrow(el);
            });
        });
    };


    function getUniqueTaskIds() {
        const seenTitles = new Set();

        return Object.keys(window.database || {})
            .sort((a, b) => {
                let numA = parseInt(a.replace(/\D/g, '')) || 0;
                let numB = parseInt(b.replace(/\D/g, '')) || 0;
                return numA - numB;
            })
            .filter(tid => {
                const data = window.database[tid];
                if (!data || !data.title) return false;

                // Задания 1–5 ОГЭ формируются единым связанным комплектом.
                const taskNumber = parseInt(String(tid).replace(/\D/g, '')) || 0;
                if (taskNumber >= 1 && taskNumber <= 5) return false;
                // Задания 6–25, включая вторую часть 20–25, подключены к генератору.
                if (taskNumber > 25) return false;

                const title = data.title.trim();
                if (seenTitles.has(title)) {
                    console.warn('Повторное задание скрыто:', tid, title);
                    return false;
                }

                seenTitles.add(title);
                return true;
            });
    }


    function getOgeTrainerThemeIds() {
        return Object.keys(window.ogePracticeDatabase || {}).filter(themeId => {
            const theme = window.ogePracticeDatabase[themeId];
            return Boolean(theme && theme.sourceStatus !== 'inactive' && theme.catalog && Array.isArray(theme.catalog.prototypes) && theme.catalog.prototypes.length > 0);
        });
    }

    function getOgeScenarioThemeIds() {
        return Object.keys(window.ogePracticeDatabase || {}).filter(themeId => {
            const theme = window.ogePracticeDatabase[themeId];
            return Boolean(theme && theme.sourceStatus !== 'inactive' && Array.isArray(theme.scenarios) && theme.scenarios.length > 0);
        });
    }

    function renderPracticeCatalog(themeId, theme) {
        const catalog = theme.catalog;
        const count = catalog && Array.isArray(catalog.prototypes) ? catalog.prototypes.length : 0;
        return `<div class="practice-catalog-summary">
            При выборе темы в тренажёр автоматически попадут все её прототипы.
            <span class="practice-catalog-count">${count} заданий</span>
        </div>`;
    }

    function renderPracticeScenarios(themeId, theme) {
        const scenarios = Array.isArray(theme.scenarios) ? theme.scenarios : [];
        return scenarios.map((scenario, scenarioIndex) => {
            let groups = '';
            const summaryParts = [];
            const totalVariants = [1,2,3,4,5].reduce((sum, n) => sum + ((scenario.tasks && Array.isArray(scenario.tasks[n])) ? scenario.tasks[n].length : 0), 0);
            for (let taskNumber = 1; taskNumber <= 5; taskNumber++) {
                const tasks = scenario.tasks && Array.isArray(scenario.tasks[taskNumber]) ? scenario.tasks[taskNumber] : [];
                const defaultIndexes = getScenarioDefaultTaskIndexes(scenario, taskNumber);
                const defaultCount = defaultIndexes.length;
                summaryParts.push(`№${taskNumber}: ${defaultCount > 0 && defaultCount === tasks.length ? 'все' : defaultCount}`);
                const options = tasks.map((task, taskIndex) => `
                    <label class="practice-type-item" onmouseenter="showPracticeScenarioTooltip('${themeId}', ${scenarioIndex}, ${taskNumber}, ${taskIndex}, event)" onmouseleave="hideTooltip()" onmousemove="moveTooltip(event)">
                        <input type="checkbox"
                            data-practice-scenario-theme="${themeId}"
                            data-practice-scenario-index="${scenarioIndex}"
                            data-practice-scenario-number="${taskNumber}"
                            data-practice-scenario-task-index="${taskIndex}"
                            ${defaultIndexes.includes(taskIndex) ? 'checked' : ''}
                            onchange="handlePracticeScenarioTaskToggle(this, '${themeId}', ${scenarioIndex}, ${taskNumber});">
                        <span>${task.typeTitle || `${taskNumber}.${taskIndex + 1}`} 👁️${task.workbookDefault === true ? ' <small style="color:#0f766e;">Из тетради</small>' : task.workbookDefault === false ? ' <small style="color:#a16207;">Дополнительное</small>' : ''}</span>
                    </label>`).join('');
                groups += `
                    <div class="practice-number-group">
                        <div class="practice-number-head">
                            <div class="practice-number-title">Задание ${taskNumber}</div>
                            <span class="practice-number-status" id="practice-scenario-count-${themeId}-${scenarioIndex}-${taskNumber}">Выбрано: ${defaultCount} из ${tasks.length}</span>
                        </div>
                        <label class="practice-type-all">
                            <input type="checkbox" id="practice-scenario-all-${themeId}-${scenarioIndex}-${taskNumber}" ${defaultCount > 0 && defaultCount === tasks.length ? 'checked' : ''} onchange="toggleAllPracticeScenarioNumber('${themeId}', ${scenarioIndex}, ${taskNumber}, this.checked)">
                            Все варианты задания ${taskNumber}
                        </label>
                        <div class="practice-type-grid">${options || '<span style="color:#b91c1c;">Варианты пока не добавлены.</span>'}</div>
                    </div>`;
            }
            return `
                <div class="practice-theme-card practice-scenario-card" style="margin-top:10px;">
                    <div class="practice-theme-head">
                        <label class="practice-theme-check">
                            <input type="checkbox" id="practice-scenario-${themeId}-${scenarioIndex}" data-practice-scenario-checkbox="1" data-practice-scenario-theme-id="${themeId}" data-practice-scenario-index-id="${scenarioIndex}" checked onchange="handlePracticeScenarioCheckboxChange('${themeId}');">
                            <span>${scenario.title || `Сюжет ${scenarioIndex + 1}`}<span class="practice-hierarchy-badge">${totalVariants} вариантов</span></span>
                        </label>
                        <button type="button" class="btn-settings" onclick="togglePracticeScenarioDetails('${themeId}', ${scenarioIndex}); event.stopPropagation();">Задания</button>
                    </div>
                    <div class="practice-scenario-status" id="practice-scenario-summary-${themeId}-${scenarioIndex}">${summaryParts.join(' · ')}</div>
                    <div id="practice-scenario-details-${themeId}-${scenarioIndex}" class="practice-theme-details">
                        <div class="practice-level-caption">Шаг 3. Оставьте допустимые варианты каждого номера</div>
                        ${groups}
                    </div>
                </div>`;
        }).join('');
    }

    function renderOgeTrainerRow() {
        const themeIds = getOgeTrainerThemeIds();
        if (themeIds.length === 0) return '';
        let settingsHTML = `
            <label class="proto-select-all" title="Выбрать или снять все темы тренажёра">
                <input type="checkbox" id="practice-trainer-theme-all" onchange="toggleAllPracticeTrainerThemes(this.checked)">
                <span>Выбрать все темы / снять все</span>
            </label>`;

        themeIds.forEach(themeId => {
            const theme = window.ogePracticeDatabase[themeId];
            const count = theme.catalog.prototypes.length;
            settingsHTML += `
                <div class="practice-theme-card">
                    <div class="practice-theme-head">
                        <label class="practice-theme-check">
                            <input type="checkbox" id="practice-trainer-theme-${themeId}" data-practice-trainer-theme-checkbox="1" onchange="handlePracticeTrainerThemeChange()">
                            <span>${theme.title}<span class="practice-catalog-count">${count}</span></span>
                        </label>
                    </div>
                    <div style="display:block; padding-top:8px;">${renderPracticeCatalog(themeId, theme)}</div>
                </div>`;
        });

        return `
            <div class="task-row" id="practice-trainer-row">
                <div class="row-header">
                    <label onclick="toggleSettings('practice-trainer')">
                        <span>Задания 1–5. Тренажёры по прототипам (${themeIds.length} тем)</span>
                        <button type="button" class="btn-settings" onclick="toggleSettings('practice-trainer'); event.stopPropagation();">⚙️ Выбрать темы</button>
                    </label>
                    <div id="practice-trainer-selected-count" style="font-size:14px; color:#8fd49b; font-weight:700; padding:7px 4px; white-space:nowrap;">0 заданий</div>
                </div>
                <div class="practice-row-note">Отметьте тему — все прототипы её каталога автоматически войдут в тренажёр в установленном порядке.</div>
                <div id="protos-practice-trainer" class="proto-list practice-settings-list">${settingsHTML}</div>
            </div>`;
    }

    function renderOgeScenarioRow() {
        const themeIds = getOgeScenarioThemeIds();
        if (themeIds.length === 0) return '';
        let settingsHTML = `
            <div class="practice-flow-guide">
                <span class="practice-flow-step"><b>1</b> Темы</span><span class="practice-flow-arrow">→</span>
                <span class="practice-flow-step"><b>2</b> Сюжеты</span><span class="practice-flow-arrow">→</span>
                <span class="practice-flow-step"><b>3</b> Варианты заданий</span>
            </div>
            <div class="practice-level-caption">Шаг 1. Оставьте нужные темы</div>
            <label class="proto-select-all" title="Выбрать или снять все темы сюжетов">
                <input type="checkbox" id="practice-scenario-theme-all" checked onchange="toggleAllPracticeScenarioThemes(this.checked)">
                <span>Все темы</span>
            </label>`;

        themeIds.forEach(themeId => {
            const theme = window.ogePracticeDatabase[themeId];
            const scenarioCount = theme.scenarios.length;
            settingsHTML += `
                <div class="practice-theme-card practice-theme-level">
                    <div class="practice-theme-head">
                        <label class="practice-theme-check">
                            <input type="checkbox" id="practice-scenario-theme-${themeId}" data-practice-scenario-theme-checkbox="1" checked onchange="handlePracticeScenarioThemeChange('${themeId}')">
                            <span>${theme.title}<span class="practice-catalog-count">${scenarioCount} сюжет.</span></span>
                        </label>
                        <button type="button" class="btn-settings" onclick="togglePracticeScenarioThemeDetails('${themeId}'); event.stopPropagation();">Сюжеты</button>
                    </div>
                    <div class="practice-theme-status" id="practice-theme-scenario-status-${themeId}">Выбрано сюжетов: ${scenarioCount} из ${scenarioCount}</div>
                    <div id="practice-scenario-theme-details-${themeId}" class="practice-theme-details">
                        <div class="practice-level-caption">Шаг 2. Оставьте нужные сюжеты</div>
                        ${renderPracticeScenarios(themeId, theme)}
                    </div>
                </div>`;
        });

        return `
            <div class="task-row" id="practice-scenarios-row">
                <div class="row-header">
                    <label onclick="toggleSettings('practice-scenarios')">
                        <span>Задания 1–5. Комплекты по сюжетам (${themeIds.length} тем)</span>
                        <button type="button" class="btn-settings" onclick="toggleSettings('practice-scenarios'); event.stopPropagation();">⚙️ Настроить</button>
                    </label>
                    <div class="count-stepper" onclick="event.stopPropagation();">
                        <span style="font-size:13px; color:#8fd49b; margin-right:5px;">комплектов:</span>
                        <button type="button" class="count-btn" onclick="adjustTaskCount('practice-scenarios', -1, event)" title="Уменьшить количество комплектов">−</button>
                        <input type="number" id="count-practice-scenarios" min="0" value="0" oninput="ogeHandleScenarioCountInput()" onchange="ogeHandleScenarioCountInput()" title="Количество полных комплектов по пять заданий">
                        <button type="button" class="count-btn" onclick="adjustTaskCount('practice-scenarios', 1, event)" title="Увеличить количество комплектов">+</button>
                    </div>
                </div>
                <div class="practice-row-note"><b>Число справа — количество комплектов.</b> 8 тем, по 3 варианта из рабочей тетради — 24 комплекта. Каждый комплект содержит пять связанных заданий. Все темы и сюжеты изначально выбраны. Варианты из тетради выбраны сразу; дополнительные можно включить в настройках заданий.</div>
                <div id="protos-practice-scenarios" class="proto-list practice-settings-list">${settingsHTML}</div>
            </div>`;
    }

    function renderOgePracticeRows() {
        return renderOgeTrainerRow() + renderOgeScenarioRow();
    }

    function toggleAllPracticeTrainerThemes(checked) {
        document.querySelectorAll('[data-practice-trainer-theme-checkbox="1"]').forEach(cb => cb.checked = checked);
        const master = document.getElementById('practice-trainer-theme-all');
        if (master) { master.checked = checked; master.indeterminate = false; }
        updatePracticeTrainerSelectedCount();
        updateTaskTotal();
    }

    function handlePracticeTrainerThemeChange() {
        const boxes = [...document.querySelectorAll('[data-practice-trainer-theme-checkbox="1"]')];
        const master = document.getElementById('practice-trainer-theme-all');
        if (master && boxes.length) {
            const checkedCount = boxes.filter(cb => cb.checked).length;
            master.checked = checkedCount === boxes.length;
            master.indeterminate = checkedCount > 0 && checkedCount < boxes.length;
        }
        updatePracticeTrainerSelectedCount();
        updateTaskTotal();
    }

    function getPracticeTrainerSelectedTaskCount() {
        let selectedCount = 0;
        getOgeTrainerThemeIds().forEach(themeId => {
            const cb = document.getElementById(`practice-trainer-theme-${themeId}`);
            const theme = window.ogePracticeDatabase && window.ogePracticeDatabase[themeId];
            if (cb && cb.checked && theme && theme.catalog && Array.isArray(theme.catalog.prototypes)) {
                selectedCount += theme.catalog.prototypes.length;
            }
        });
        return selectedCount;
    }

    function updatePracticeTrainerSelectedCount() {
        const count = getPracticeTrainerSelectedTaskCount();
        const label = document.getElementById('practice-trainer-selected-count');
        if (label) {
            const ending = count % 10 === 1 && count % 100 !== 11 ? 'задание'
                : ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100) ? 'задания' : 'заданий');
            label.textContent = `${count} ${ending}`;
        }
    }

    function updatePracticeScenarioNumberStatus(themeId, scenarioIndex, taskNumber) {
        const boxes = getPracticeScenarioNumberBoxes(themeId, scenarioIndex, taskNumber);
        const checkedCount = boxes.filter(cb => cb.checked).length;
        const status = document.getElementById(`practice-scenario-count-${themeId}-${scenarioIndex}-${taskNumber}`);
        if (status) status.textContent = `Выбрано: ${checkedCount} из ${boxes.length}`;
    }

    function updatePracticeScenarioSummary(themeId, scenarioIndex) {
        const parts = [];
        for (let taskNumber = 1; taskNumber <= 5; taskNumber++) {
            const boxes = getPracticeScenarioNumberBoxes(themeId, scenarioIndex, taskNumber);
            const checkedCount = boxes.filter(cb => cb.checked).length;
            parts.push(`№${taskNumber}: ${checkedCount > 0 && checkedCount === boxes.length ? 'все' : checkedCount}`);
            updatePracticeScenarioNumberStatus(themeId, scenarioIndex, taskNumber);
            syncPracticeScenarioNumberMaster(themeId, scenarioIndex, taskNumber);
        }
        const summary = document.getElementById(`practice-scenario-summary-${themeId}-${scenarioIndex}`);
        if (summary) summary.textContent = parts.join(' · ');
    }

    function updatePracticeThemeScenarioStatus(themeId) {
        const boxes = [...document.querySelectorAll(`[data-practice-scenario-checkbox="1"][data-practice-scenario-theme-id="${themeId}"]`)];
        const checkedCount = boxes.filter(cb => cb.checked).length;
        const status = document.getElementById(`practice-theme-scenario-status-${themeId}`);
        if (status) status.textContent = `Выбрано сюжетов: ${checkedCount} из ${boxes.length}`;
    }

    // Ручные фильтры сохраняются при изменении количества комплектов.
    // Первый «+» после сброса восстанавливает темы и варианты из тетради.
    window.ogeScenarioFiltersCustomized = false;
    function ogeSelectEveryScenarioFilter() {
        getOgeScenarioThemeIds().forEach(themeId => setPracticeScenarioThemeSelection(themeId, true));
        const master = document.getElementById('practice-scenario-theme-all');
        if (master) { master.checked = true; master.indeterminate = false; }
    }

    function handlePracticeScenarioCheckboxChange(themeId) {
        window.ogeScenarioFiltersCustomized = true;
        updatePracticeThemeScenarioStatus(themeId);
        updateTaskTotal();
    }

    // Выбор темы включает её полные комплекты с вариантами из тетради.
    // Изменение количества комплектов не меняет выбранные вручную сюжеты.
    function setPracticeScenarioThemeSelection(themeId, checked) {
        const themeBox = document.getElementById(`practice-scenario-theme-${themeId}`);
        if (themeBox) { themeBox.checked = checked; themeBox.indeterminate = false; }
        const theme = window.ogePracticeDatabase?.[themeId];
        (theme?.scenarios || []).forEach((_, scenarioIndex) => {
            const scenarioBox = document.getElementById(`practice-scenario-${themeId}-${scenarioIndex}`);
            if (scenarioBox) { scenarioBox.checked = checked; scenarioBox.indeterminate = false; }
            if (checked) applyPracticeScenarioDefaultSelection(themeId, scenarioIndex);
            updatePracticeScenarioSummary(themeId, scenarioIndex);
        });
        updatePracticeThemeScenarioStatus(themeId);
    }

    function toggleAllPracticeScenarioThemes(checked) {
        window.ogeScenarioFiltersCustomized = true;
        getOgeScenarioThemeIds().forEach(themeId => setPracticeScenarioThemeSelection(themeId, checked));
        handlePracticeScenarioThemeChange();
    }

    function handlePracticeScenarioThemeChange(themeId) {
        window.ogeScenarioFiltersCustomized = true;
        if (themeId) {
            const themeBox = document.getElementById(`practice-scenario-theme-${themeId}`);
            if (themeBox) setPracticeScenarioThemeSelection(themeId, themeBox.checked);
        }
        const boxes = [...document.querySelectorAll('[data-practice-scenario-theme-checkbox="1"]')];
        const master = document.getElementById('practice-scenario-theme-all');
        if (master && boxes.length) {
            const checkedCount = boxes.filter(cb => cb.checked).length;
            master.checked = checkedCount === boxes.length;
            master.indeterminate = checkedCount > 0 && checkedCount < boxes.length;
        }
        getOgeScenarioThemeIds().forEach(id => {
            (window.ogePracticeDatabase?.[id]?.scenarios || []).forEach((_, index) => updatePracticeScenarioSummary(id, index));
            updatePracticeThemeScenarioStatus(id);
        });
        syncPracticeScenarioCount();
        updateTaskTotal();
    }

    function ogeHandleScenarioCountInput() {
        const input = document.getElementById('count-practice-scenarios');
        if (input && Number(input.value) > 0 && !window.ogeScenarioFiltersCustomized) {
            const hasTheme = [...document.querySelectorAll('[data-practice-scenario-theme-checkbox="1"]')].some(cb => cb.checked);
            if (!hasTheme) ogeSelectEveryScenarioFilter();
        }
        updateTaskTotal();
    }

    function syncPracticeScenarioCount() {
        const input = document.getElementById('count-practice-scenarios');
        if (!input) return;
        // Не стираем введённое количество комплектов, пока учитель настраивает
        // фильтры: «1 комплект» → снять все темы → выбрать «Печки».
        // Раньше промежуточное состояние «ни одна тема не выбрана» обнуляло
        // счётчик, и генерация пропускала задания №1–5 без ошибки.
        // Явный сброс количества выполняется только в resetTaskCounts().
        if (!Number.isFinite(Number(input.value)) || Number(input.value) < 0)
            input.value = '0';
    }

    function togglePracticeScenarioThemeDetails(themeId) {
        const el = document.getElementById(`practice-scenario-theme-details-${themeId}`);
        if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }

    function togglePracticeScenarioDetails(themeId, scenarioIndex) {
        const el = document.getElementById(`practice-scenario-details-${themeId}-${scenarioIndex}`);
        if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }

    function getPracticeScenarioNumberBoxes(themeId, scenarioIndex, taskNumber) {
        return [...document.querySelectorAll(`[data-practice-scenario-theme="${themeId}"][data-practice-scenario-index="${scenarioIndex}"][data-practice-scenario-number="${taskNumber}"]`)];
    }

    function alertPracticeScenarioRequired(taskNumber) {
        alert(`Нельзя снять все варианты задания ${taskNumber}. Для сюжетного комплекта должен остаться хотя бы один вариант у каждого задания 1–5.`);
    }

    function handlePracticeScenarioTaskToggle(checkbox, themeId, scenarioIndex, taskNumber) {
        window.ogeScenarioFiltersCustomized = true;
        const boxes = getPracticeScenarioNumberBoxes(themeId, scenarioIndex, taskNumber);
        const checkedCount = boxes.filter(cb => cb.checked).length;
        if (checkedCount === 0) {
            checkbox.checked = true;
            alertPracticeScenarioRequired(taskNumber);
        }
        syncPracticeScenarioNumberMaster(themeId, scenarioIndex, taskNumber);
        updatePracticeScenarioSummary(themeId, scenarioIndex);
        updateTaskTotal();
    }

    function toggleAllPracticeScenarioNumber(themeId, scenarioIndex, taskNumber, checked) {
        window.ogeScenarioFiltersCustomized = true;
        const boxes = getPracticeScenarioNumberBoxes(themeId, scenarioIndex, taskNumber);
        const master = document.getElementById(`practice-scenario-all-${themeId}-${scenarioIndex}-${taskNumber}`);
        if (!checked) {
            if (master) { master.checked = true; master.indeterminate = false; }
            alertPracticeScenarioRequired(taskNumber);
            updatePracticeScenarioSummary(themeId, scenarioIndex);
            return;
        }
        boxes.forEach(cb => cb.checked = true);
        if (master) { master.checked = true; master.indeterminate = false; }
        updatePracticeScenarioSummary(themeId, scenarioIndex);
        updateTaskTotal();
    }

    function syncPracticeScenarioNumberMaster(themeId, scenarioIndex, taskNumber) {
        const boxes = getPracticeScenarioNumberBoxes(themeId, scenarioIndex, taskNumber);
        const master = document.getElementById(`practice-scenario-all-${themeId}-${scenarioIndex}-${taskNumber}`);
        if (!master || boxes.length === 0) return;
        const checkedCount = boxes.filter(cb => cb.checked).length;
        master.checked = checkedCount === boxes.length;
        master.indeterminate = checkedCount > 0 && checkedCount < boxes.length;
    }

    function showPracticeScenarioTooltip(themeId, scenarioIndex, taskNumber, taskIndex, event) {
        const theme = window.ogePracticeDatabase && window.ogePracticeDatabase[themeId];
        const scenario = theme && theme.scenarios ? theme.scenarios[scenarioIndex] : null;
        const task = scenario && scenario.tasks && scenario.tasks[taskNumber] ? scenario.tasks[taskNumber][taskIndex] : null;
        const tooltipEl = document.getElementById('proto-tooltip');
        if (!task || !tooltipEl) return;
        if (window.ogeClearRenderedContent) window.ogeClearRenderedContent(tooltipEl);
        tooltipEl.innerHTML = `<div style="font-weight:800; color:#003399; margin-bottom:8px;">${theme.title} · ${scenario.title || `Сюжет ${scenarioIndex + 1}`} · задание ${taskNumber}</div><div style="max-height:210px; overflow:auto; margin-bottom:8px;">${scenario.common || ''}</div><div>${task.text || ''}</div>`;
        if (window.autoFixSVGArrows) window.autoFixSVGArrows(tooltipEl);
        tooltipEl.style.display = 'block';
        if (window.MathJax) MathJax.typesetPromise([tooltipEl]).catch(() => {});
        moveTooltip(event);
    }

    function getSelectedCatalogPrototypes(themeId) {
        const theme = window.ogePracticeDatabase && window.ogePracticeDatabase[themeId];
        if (!theme || !theme.catalog || !Array.isArray(theme.catalog.prototypes)) return [];
        return [...theme.catalog.prototypes];
    }

    function getScenarioDefaultTaskIndexes(scenario, taskNumber) {
        const tasks = scenario && Array.isArray(scenario.tasks?.[taskNumber]) ? scenario.tasks[taskNumber] : [];
        // Старые темы без этой отметки сохраняют все свои варианты.
        return tasks.map((task, index) => task.workbookDefault !== false ? index : -1).filter(index => index >= 0);
    }

    function getDefaultScenarioTaskIndexes(themeId, scenarioIndex, taskNumber) {
        const scenario = window.ogePracticeDatabase?.[themeId]?.scenarios?.[scenarioIndex];
        return getScenarioDefaultTaskIndexes(scenario, taskNumber);
    }

    function applyPracticeScenarioDefaultSelection(themeId, scenarioIndex) {
        for (let taskNumber = 1; taskNumber <= 5; taskNumber++) {
            const defaults = getDefaultScenarioTaskIndexes(themeId, scenarioIndex, taskNumber);
            getPracticeScenarioNumberBoxes(themeId, scenarioIndex, taskNumber).forEach(box => {
                box.checked = defaults.includes(parseInt(box.dataset.practiceScenarioTaskIndex, 10));
                box.indeterminate = false;
            });
            syncPracticeScenarioNumberMaster(themeId, scenarioIndex, taskNumber);
        }
    }

    function getSelectedScenarioTaskIndexes(themeId, scenarioIndex, taskNumber) {
        const boxes = typeof document !== 'undefined' && document.querySelectorAll
            ? [...document.querySelectorAll(`[data-practice-scenario-theme="${themeId}"][data-practice-scenario-index="${scenarioIndex}"][data-practice-scenario-number="${taskNumber}"][data-practice-scenario-task-index]`)] : [];
        if (boxes.length === 0) return getDefaultScenarioTaskIndexes(themeId, scenarioIndex, taskNumber);
        return boxes.filter(cb => cb.checked)
            .map(cb => parseInt(cb.dataset.practiceScenarioTaskIndex, 10))
            .filter(Number.isInteger);
    }

    function ogePracticeOutputStyles() {
        return `<style>
            .oge-practice-common { background:#f0fdfa; border:1px solid #99d9d1; border-left:5px solid #14B8A6; border-radius:8px; padding:16px 18px; margin:18px 0 22px; color:#17211f; page-break-inside:avoid; break-inside:avoid; }
            .oge-practice-common h3 { margin:0 0 10px; color:#0F766E; }
            .oge-practice-sticky-scope { position:relative; display:block; }
            .oge-practice-sticky { position:sticky; top:8px; z-index:70; max-height:155px; overflow-y:auto; overflow-x:hidden; box-shadow:0 8px 24px rgba(15,118,110,.22); scrollbar-width:thin; scrollbar-color:#5fc9bc transparent; }
            .oge-practice-sticky::-webkit-scrollbar { width:7px; }
            .oge-practice-sticky::-webkit-scrollbar-thumb { background:#5fc9bc; border-radius:10px; }
            .oge-practice-sticky::-webkit-scrollbar-track { background:transparent; }
            .oge-practice-common p { line-height:1.45; }
            .oge-practice-common svg, .oge-practice-common img { display:block; max-width:100%; height:auto; margin:12px auto; }
            .oge-practice-common table, table.common-table { width:100%; border-collapse:collapse !important; border-spacing:0 !important; border:2px solid #111 !important; margin:10px 0; font-size:0.94em; background:#fff; color:#111; }
            .oge-practice-common th, .oge-practice-common td, table.common-table th, table.common-table td { border:1.5px solid #111 !important; padding:6px 7px; text-align:center; vertical-align:middle; }
            .oge-practice-common th, table.common-table th { background:#f0f0f0; font-weight:700; }
            .common-table-wrap { overflow-x:auto; margin:8px 0; }
            .practice-svg { max-width:100%; height:auto; }
        </style>`;
    }

    function makeOgePracticeIntro(themeTitle, scenario, setNumber) {
        const stickyText = stripDiagramsFromHTML(scenario.common || '');
        const introDiagram = scenario.imageHTML || extractFirstDiagramHTML(scenario.common || '');
        const introDiagramHTML = introDiagram
            ? `<div class="oge-practice-intro-diagram" style="float:left; width:42%; max-width:300px; min-width:220px; margin:2px 16px 9px 0;">${introDiagram}</div>`
            : '';
        return `${ogePracticeOutputStyles()}<div class="oge-practice-sticky-scope"><div class="oge-practice-common oge-practice-sticky" style="padding:13px 15px;">
            <h3 style="margin-bottom:8px;">Практический комплект ${setNumber}. ${themeTitle}</h3>
            <div class="oge-practice-common-body" style="font-size:0.82em; line-height:1.28;">${introDiagramHTML}${stickyText}<div style="clear:both;"></div></div>
            <div style="margin-top:7px; color:#526273; font-size:0.86em;">Задания 1–5 относятся к этому условию.</div>
        </div>`;
    }

    function makeOgeScenarioGameStatement(themeTitle, scenario, setNumber, taskNumber, task) {
        const common = stripDiagramsFromHTML(scenario.common || '');
        // The common diagram is supplied separately as svg and drawn on top of
        // the writable canvas by every game/presentation template.
        return `<div class="oge-scenario-complete-prompt" style="text-align:left;color:#15202b;font-size:clamp(14px,1.2vw,18px);line-height:1.4;max-width:100%;">
          <details open class="oge-scenario-context" style="background:#f6fbff;border:1px solid #c4d9e7;border-radius:8px;padding:8px 10px;margin:0 0 10px;max-width:100%;">
            <summary style="font-weight:700;color:#164667;cursor:pointer;">Общее условие 1–5 · ${themeTitle}</summary>
            <div style="max-height:34vh;overflow:auto;padding:7px 2px 2px;">${common}</div>
          </details>
          <div class="oge-scenario-specific" style="font-weight:400;text-align:left;"><b>Задание ${taskNumber}.</b> ${task.text || ''}</div>
        </div>`;
    }

    function makeOgePracticeStandalone(themeTitle, scenario, setNumber, taskNumber, task) {
        const commonTextOnly = stripDiagramsFromHTML(scenario.common || '');
        return `${ogePracticeOutputStyles()}<div class="oge-practice-common">
            <h3>Практический комплект ${setNumber}. ${themeTitle}</h3>
            <div>${commonTextOnly}</div>
        </div>
        <div><b>Задание ${taskNumber}.</b> ${task.text || ''}</div>`;
    }


    function extractFirstDiagramHTML(html) {
        if (!html) return '';
        const holder = document.createElement('div');
        holder.innerHTML = html;
        if (window.autoFixSVGArrows) window.autoFixSVGArrows(holder);
        const el = holder.querySelector('svg, img, picture, canvas');
        return el ? el.outerHTML : '';
    }

    function stripDiagramsFromHTML(html) {
        if (!html) return '';
        const holder = document.createElement('div');
        holder.innerHTML = html;
        holder.querySelectorAll('svg, img, picture, canvas').forEach(el => el.remove());
        return holder.innerHTML;
    }

    function adjustOgePracticeStickyHeights(root = document) {
        const boxes = [...root.querySelectorAll('.oge-practice-sticky')];
        boxes.forEach(box => {
            const applySize = () => {
                const baseHeight = 155;
                const diagramWrap = box.querySelector('.oge-practice-intro-diagram');
                let targetHeight = baseHeight;

                if (diagramWrap) {
                    const media = diagramWrap.querySelector('img, svg, canvas, picture');
                    const mediaHeight = Math.max(
                        diagramWrap.getBoundingClientRect().height || 0,
                        media ? (media.getBoundingClientRect().height || 0) : 0
                    );
                    const heading = box.querySelector('h3');
                    const headingHeight = heading ? heading.getBoundingClientRect().height : 0;
                    if (mediaHeight > 0) {
                        // Сначала целиком показываем рисунок. Прокрутка начинается уже ниже него.
                        targetHeight = Math.max(baseHeight, Math.ceil(mediaHeight + headingHeight + 42));
                    }
                }

                const viewportCap = Math.max(baseHeight, Math.floor(window.innerHeight * 0.72));
                box.style.maxHeight = Math.min(targetHeight, viewportCap) + 'px';
            };

            const images = [...box.querySelectorAll('img')];
            images.forEach(img => {
                if (!img.complete) img.addEventListener('load', applySize, { once: true });
            });
            applySize();
        });
    }

    window.adjustOgePracticeStickyHeights = adjustOgePracticeStickyHeights;

    function buildOgePracticeTasks(infoBoard, orderedTasks, usageCounts = new Map(), autoFull = false,
                                    fullPrototypeDecks = null) {
        const database = window.ogePracticeDatabase || {};
        const trainerTasks = [];
        const scenarioTasks = [];

        // Тренажёр не имеет отдельного поля количества: каждая отмеченная тема
        // добавляет все прототипы своего каталога ровно по одному разу.
        // Порядок каталога сохраняется всегда и не зависит от общей галочки «Упорядочить задания».
        const selectedTrainerThemes = autoFull ? [] : getOgeTrainerThemeIds().filter(themeId => {
            const cb = document.getElementById(`practice-trainer-theme-${themeId}`);
            return cb && cb.checked;
        });
        selectedTrainerThemes.forEach(themeId => {
            const theme = database[themeId];
            const selectedPrototypes = getSelectedCatalogPrototypes(themeId);
            const commonText = theme.catalog && theme.catalog.common ? theme.catalog.common : '';
            const commonImageHTML = theme.catalog && theme.catalog.imageHTML ? theme.catalog.imageHTML : extractFirstDiagramHTML(commonText);
            const commonTextOnly = stripDiagramsFromHTML(commonText);
            const commonIntroDiagram = commonImageHTML ? `<div class="oge-practice-intro-diagram" style="float:left; width:42%; max-width:300px; min-width:220px; margin:2px 16px 9px 0;">${commonImageHTML}</div>` : '';
            const lastStickyProtoIndex = selectedPrototypes.reduce((lastIndex, proto, index) => Number(proto.examNumber) !== 5 ? index : lastIndex, -1);
            const commonIntro = commonText ? `<div class="oge-practice-sticky-scope">${ogePracticeOutputStyles()}<div class="oge-practice-common oge-practice-sticky" style="padding:13px 15px;"><h3 style="margin-bottom:8px;">${theme.title}. Общее условие</h3><div class="oge-practice-common-body" style="font-size:0.82em; line-height:1.28;">${commonIntroDiagram}${commonTextOnly}<div style="clear:both;"></div></div></div>` : '';
            const commonPrintIntro = commonText ? `${ogePracticeOutputStyles()}<div class="oge-practice-common"><h3>${theme.title}. Общее условие</h3><div>${commonTextOnly}</div></div>` : '';

            selectedPrototypes.forEach((proto, protoIndex) => {
                const imageHTML = proto.imageHTML || proto.svg_code || '';
                const useDraftDiagram = Number(proto.examNumber) !== 5;
                const standaloneText = `${proto.common || commonText}<div><b>Прототип ${proto.id || ''}.</b> ${proto.text || ''}</div>`;
                const analogTasks = selectedPrototypes
                    .filter(other => other !== proto && Number(other.examNumber) === Number(proto.examNumber))
                    .map(other => ({
                        text: `<b>Прототип ${other.id || ''}.</b> ${other.text || ''}`,
                        answer: String(other.answer ?? ''),
                        svg_code: ''
                    }));
                trainerTasks.push({
                    examNumber:Number(proto.examNumber),
                    __ogeTrainerMeta:{themeId,proto,candidates:selectedPrototypes.filter(p=>Number(p.examNumber)===Number(proto.examNumber)), commonText,commonImageHTML},
                    text: proto.text || '',                     displayText: `<div style="margin-bottom:5px;"><span style="display:inline-block; background:#eaf2ff; color:#003399; border:1px solid #99b7df; border-radius:6px; padding:2px 8px; font-weight:800;">${proto.id || ''}</span></div>${proto.text || ''}`,
                    displaySvg: '',
                    printSvg: useDraftDiagram ? imageHTML : '',
                    draftSvg: useDraftDiagram ? imageHTML : '',
                    standaloneText,
                    standaloneSvg: imageHTML,
                    gameText: standaloneText,
                    gameSvg: useDraftDiagram ? imageHTML : '',
                    presentationText: Number(proto.examNumber) === 5 && /<table\b/i.test(String(proto.text || '')) ? (proto.text || '') : standaloneText,
                    presentationHasTable: Number(proto.examNumber) === 5 && /<table\b/i.test(String(proto.text || '')),
                    answer: String(proto.answer ?? ''),
                    accepts: Array.isArray(proto.accepts) && proto.accepts.length ? proto.accepts.map(String) : [String(proto.answer ?? '')],
                    forceDraftDiagram: useDraftDiagram && Boolean(imageHTML),
                    printLayout: proto.printLayout || 'image-grid',
                    printGridHeight: proto.printGridHeight || 105,
                    printCompact: Boolean(proto.printCompact),
                    printBreakBefore: Boolean(proto.printBreakBefore),
                    beforeHTML: protoIndex === 0 ? commonIntro : '',
                    afterHTML: protoIndex === lastStickyProtoIndex && commonIntro ? '</div>' : '',
                    beforePrintHTML: `${protoIndex === 0 ? commonPrintIntro : ''}${themeId === 'tropinki' && protoIndex === 1 ? '<div class="tropinki-print-pack-2-4" style="page-break-inside:avoid;break-inside:avoid;">' : ''}`,
                    afterPrintHTML: themeId === 'tropinki' && protoIndex === 3 ? '</div>' : '',
                    beforeAnswersHTML: protoIndex === 0 ? `<h4 style="margin:18px 0 8px; color:#0F766E;">${theme.title}. Каталог прототипов</h4>` : '',
                    theory: {
                        svg_code: proto.theoryImageHTML || imageHTML,
                        theory_task: standaloneText,
                        theory_sol: proto.solution || 'Разбор пока не добавлен.',
                        tasks: analogTasks
                    }
                });
            });
        });

        const scenarioInput = document.getElementById('count-practice-scenarios');
        const requestedSets = autoFull ? 1 : (scenarioInput ? Math.max(0, parseInt(scenarioInput.value, 10) || 0) : 0);
        if (requestedSets > 0) {
            const selectedScenarioThemes = autoFull ? getOgeScenarioThemeIds() : getOgeScenarioThemeIds().filter(themeId => {
                const cb = document.getElementById(`practice-scenario-theme-${themeId}`);
                return cb && cb.checked;
            });
            if (selectedScenarioThemes.length === 0) {
                throw new Error('Для комплекта заданий №1–5 не выбрана ни одна тема. Нажмите «Все темы» в настройках или восстановите выбор через «+».');
            } else {
                const selectedScenariosByTheme = new Map();
                selectedScenarioThemes.forEach(themeId => {
                    const theme = database[themeId];
                    const themeScenarios = [];
                    (theme.scenarios || []).forEach((scenario, scenarioIndex) => {
                        const cb = document.getElementById(`practice-scenario-${themeId}-${scenarioIndex}`);
                        if (!autoFull && (!cb || !cb.checked)) return;
                        const selectedByNumber = {};
                        let complete = true;
                        for (let taskNumber = 1; taskNumber <= 5; taskNumber++) {
                            const indexes = autoFull ? getScenarioDefaultTaskIndexes(scenario, taskNumber) : getSelectedScenarioTaskIndexes(themeId, scenarioIndex, taskNumber);
                            selectedByNumber[taskNumber] = indexes;
                            if (indexes.length === 0) complete = false;
                        }
                        if (complete) themeScenarios.push({ themeId, theme, scenario, scenarioIndex, selectedByNumber });
                        else {
                            infoBoard.innerHTML += `<div><b>${theme.title} · ${scenario.title || `Сюжет ${scenarioIndex + 1}`}:</b> для пятёрки нужен хотя бы один выбранный вариант каждого задания №1–5.</div>`;
                            infoBoard.style.display = 'block';
                        }
                    });
                    if (themeScenarios.length > 0) selectedScenariosByTheme.set(themeId, themeScenarios);
                });

                const availableThemeIds = selectedScenarioThemes.filter(themeId => selectedScenariosByTheme.has(themeId));
                if (availableThemeIds.length === 0) {
                    throw new Error('Для заданий №1–5 нет подходящего полного сюжета: проверьте галочки сюжетов и вариантов задач 1–5.');
                } else {
                    const usage = new Map();
                    let themePool = [];
                    let themeCursor = 0;
                    let lastThemeId = null;
                    const scenarioPools = new Map();
                    const scenarioCursors = new Map();
                    const lastScenarioIndexes = new Map();

                    function refillThemePool() {
                        let pool = orderedTasks ? [...availableThemeIds] : shuffleArray([...availableThemeIds]);
                        pool.sort((a,b)=>(usageCounts.get('theme:'+a)||0)-(usageCounts.get('theme:'+b)||0));
                        if (lastThemeId && pool.length > 1 && pool[0] === lastThemeId) {
                            const swapIndex = pool.findIndex(themeId => themeId !== lastThemeId);
                            if (swapIndex > 0) [pool[0], pool[swapIndex]] = [pool[swapIndex], pool[0]];
                        }
                        themePool = pool;
                        themeCursor = 0;
                    }

                    function nextThemeId() {
                        if (themeCursor >= themePool.length) refillThemePool();
                        const themeId = themePool[themeCursor++];
                        lastThemeId = themeId;
                        return themeId;
                    }

                    function refillScenarioPool(themeId) {
                        const available = selectedScenariosByTheme.get(themeId) || [];
                        let pool = orderedTasks ? [...available] : shuffleArray([...available]);
                        pool.sort((a,b)=>(usageCounts.get('scene:'+themeId+':'+a.scenarioIndex)||0)-(usageCounts.get('scene:'+themeId+':'+b.scenarioIndex)||0));
                        const lastScenarioIndex = lastScenarioIndexes.get(themeId);
                        if (lastScenarioIndex !== undefined && pool.length > 1 && pool[0].scenarioIndex === lastScenarioIndex) {
                            const swapIndex = pool.findIndex(state => state.scenarioIndex !== lastScenarioIndex);
                            if (swapIndex > 0) [pool[0], pool[swapIndex]] = [pool[swapIndex], pool[0]];
                        }
                        scenarioPools.set(themeId, pool);
                        scenarioCursors.set(themeId, 0);
                    }

                    function nextScenarioForTheme(themeId) {
                        let pool = scenarioPools.get(themeId) || [];
                        let cursor = scenarioCursors.get(themeId) || 0;
                        if (cursor >= pool.length) {
                            refillScenarioPool(themeId);
                            pool = scenarioPools.get(themeId) || [];
                            cursor = 0;
                        }
                        const state = pool[cursor];
                        scenarioCursors.set(themeId, cursor + 1);
                        lastScenarioIndexes.set(themeId, state.scenarioIndex);
                        return state;
                    }

                    // ПОЛНЫЕ ВАРИАНТЫ: два независимых уровня чередования.
                    // 1) Сначала каждый доступный ТЕМАТИЧЕСКИЙ сюжет 1–5 выбирается
                    //    ровно по разу (например, «Тарифы» не повторятся до обхода
                    //    «Печек», «Листов», «Шин» и остальных доступных тем).
                    // 2) Лишь когда тема выпадет снова, выбираем её следующий
                    //    внутренний сценарий, тоже без повторения внутри своего круга.
                    // В ручных подборках остаётся прежний механизм выбора.
                    for (let setIndex = 0; setIndex < requestedSets; setIndex++) {
                        let themeId, state;
                        if (autoFull && fullPrototypeDecks instanceof Map) {
                            themeId = ogeFullNextCycleChoice(fullPrototypeDecks,
                                'full-scenario-themes-1-5', availableThemeIds);
                            const availableScenarios = selectedScenariosByTheme.get(themeId) || [];
                            const sceneKey = ogeFullNextCycleChoice(fullPrototypeDecks,
                                'full-scenario-variants-1-5:' + themeId,
                                availableScenarios.map(s => String(s.scenarioIndex)));
                            state = availableScenarios.find(s => String(s.scenarioIndex) === sceneKey);
                            if (!state) throw new Error('Не удалось выбрать сюжет темы ' + themeId);
                        } else {
                            themeId = nextThemeId();
                            state = nextScenarioForTheme(themeId);
                        }
                        const setNumber = setIndex + 1;
                        const scenario = state.scenario;
                        const theme = state.theme;
                        const diagramHTML = scenario.imageHTML || extractFirstDiagramHTML(scenario.common || '');
                        const introHTML = makeOgePracticeIntro(theme.title, scenario, setNumber);
                        // Общий план входит в начало полного условия, а не повторяется
                        // возле поля решения каждой из пяти задач. Печь — исключение:
                        // её собственный рисунок нужен только в задании №5.
                        const commonPlanForPrint = state.themeId === 'stove' ? '' : diagramHTML;
                        const printIntro = `${ogePracticeOutputStyles()}<div class="oge-practice-common oge-print-scenario-intro${state.themeId === 'stove' ? ' oge-print-stove-intro' : ''}">
                            <h3>Практический комплект ${setNumber}. ${theme.title}</h3>
                            <div class="oge-print-scenario-body">${commonPlanForPrint ? `<div class="oge-print-scenario-plan">${commonPlanForPrint}</div>` : ''}${stripDiagramsFromHTML(scenario.common || '')}<div style="clear:both"></div></div>
                        </div>`;

                        for (let taskNumber = 1; taskNumber <= 5; taskNumber++) {
                            const allTasks = scenario.tasks && Array.isArray(scenario.tasks[taskNumber]) ? scenario.tasks[taskNumber] : [];
                            const indexes = state.selectedByNumber[taskNumber];
                            const candidatePairsAll = indexes
                                .map(i => ({task:allTasks[i], originalIndex:i}))
                                .filter(pair => Boolean(pair.task));
                            const scenarioTypePrefix = 'scenario-type:' + state.themeId + ':' + state.scenarioIndex + ':' + taskNumber + ':';
                            const typeKey = pair => scenarioTypePrefix + String(pair.task.typeId || ('type-' + pair.originalIndex));
                            const typeUse = pair => (usageCounts.get(typeKey(pair)) || 0) +
                                (usage.get(typeKey(pair)) || 0);
                            const taskUse = pair => (usage.get(`${state.themeId}:${state.scenarioIndex}:${taskNumber}:${pair.originalIndex}`) || 0) +
                                (usageCounts.get('scenario:'+`${state.themeId}:${state.scenarioIndex}:${setNumber}`+':'+taskNumber+':'+ogeTaskReplacementKey(pair.task))||0);
                            let chosenPair;
                            if (autoFull && fullPrototypeDecks instanceof Map) {
                                const deckPrefix = 'full-scenario-types:' + state.themeId + ':' + state.scenarioIndex + ':' + taskNumber;
                                const keys = [...new Set(candidatePairsAll.map(typeKey))];
                                const selectedType = ogeFullNextCycleChoice(fullPrototypeDecks, deckPrefix, keys);
                                const sameType = candidatePairsAll.filter(pair => typeKey(pair) === selectedType);
                                // Когда внутри одного прототипа несколько числовых аналогов,
                                // их также берём по кругу, не повторяя раньше времени.
                                const chosenIndex = ogeFullNextCycleChoice(fullPrototypeDecks, deckPrefix + ':' + selectedType,
                                    sameType.map(pair => String(pair.originalIndex)));
                                chosenPair = sameType.find(pair => String(pair.originalIndex) === chosenIndex);
                            } else {
                                const minTypeUse = Math.min(...candidatePairsAll.map(typeUse));
                                const freshTypes = candidatePairsAll.filter(pair => typeUse(pair) === minTypeUse);
                                const minTaskUse = Math.min(...freshTypes.map(taskUse));
                                const candidatePairs = shuffleArray(freshTypes.filter(pair => taskUse(pair) === minTaskUse));
                                chosenPair = candidatePairs[0];
                            }
                            usage.set(typeKey(chosenPair), (usage.get(typeKey(chosenPair)) || 0) + 1);
                            const chosen = chosenPair.task;
                            const analogTasks = allTasks
                                .map((other, otherIndex) => ({ other, otherIndex }))
                                .filter(pair => pair.other && pair.otherIndex !== chosenPair.originalIndex)
                                .map(pair => ({
                                    text: `<b>${pair.other.typeId || `Задание ${taskNumber}`}.</b> ${pair.other.text || ''}`,
                                    answer: String(pair.other.answer ?? ''),
                                    svg_code: ''
                                }));
                            const key = `${state.themeId}:${state.scenarioIndex}:${taskNumber}:${chosenPair.originalIndex}`;
                            usage.set(key, (usage.get(key) || 0) + 1);
                            const standaloneText = makeOgePracticeStandalone(theme.title, scenario, setNumber, taskNumber, chosen);
                            const scenarioGameText = makeOgeScenarioGameStatement(theme.title, scenario, setNumber, taskNumber, chosen);
                            const useDraftDiagram = taskNumber !== 5;
                            // Только в сюжете «Печь» у задания №5 есть свой,
                            // необходимый для решения чертёж кожуха. Во всех остальных
                            // комплектах 1–5 действуют прежние правила: общий план
                            // не повторяется возле пятого задания.
                            const stoveTask5Diagram = taskNumber === 5 && state.themeId === 'stove'
                                ? (chosen.imageHTML || '') : '';
                            scenarioTasks.push({
                                examNumber: taskNumber,
                                __ogeScenarioMeta: {
                                    chosen, candidates: indexes.map(i => allTasks[i]).filter(Boolean),
                                    selectedTypeId: String(chosen.typeId || ('type-' + chosenPair.originalIndex)),
                                    themeTitle: theme.title, scenario, setNumber, taskNumber, diagramHTML,
                                    groupId: `${state.themeId}:${state.scenarioIndex}:${setNumber}`
                                },
                                text: chosen.text || '',
                                displayText: chosen.text || '',
                                displaySvg: '',
                                // Большой план остаётся в общем условии; уменьшенный
                                // чертёж возвращаем КАЖДОЙ задаче №1–5, кроме печи,
                                // где собственный рисунок есть только у задания №5.
                                printSvg: state.themeId === 'stove'
                                    ? stoveTask5Diagram.replace(/<(img|svg)\b/i, '<$1 data-oge-own-diagram="1"')
                                    : (chosen.printSvg || chosen.imageHTML || chosen.svg_code || diagramHTML),
                                draftSvg: useDraftDiagram ? (chosen.draftSvg || chosen.imageHTML || chosen.svg_code || diagramHTML) : '',
                                standaloneText,
                                standaloneSvg: chosen.standaloneSvg || chosen.imageHTML || chosen.svg_code || diagramHTML,
                                gameText: scenarioGameText,
                                // The diagram is part of the common condition for EVERY question 1–5.
                                // Include it even for a table question: it must be writable in drafts.
                                gameSvg: chosen.gameSvg || chosen.draftSvg || chosen.imageHTML || chosen.svg_code || diagramHTML,
                                presentationText: scenarioGameText,
                                presentationHasTable: /<table\b/i.test(String(chosen.text || '')),
                                answer: String(chosen.answer ?? ''),
                                accepts: Array.isArray(chosen.accepts) && chosen.accepts.length ? chosen.accepts.map(String) : [String(chosen.answer ?? '')],
                                forceDraftDiagram: useDraftDiagram && Boolean(diagramHTML || chosen.svg_code || chosen.imageHTML),
                                printLayout: chosen.printLayout || (diagramHTML ? 'image-grid' : ''),
                                printGridHeight: chosen.printGridHeight || 125,
                                beforeHTML: taskNumber === 1 ? introHTML : '',
                                afterHTML: taskNumber === 4 ? '</div>' : '',
                                beforePrintHTML: taskNumber === 1 ? printIntro : '',
                                beforeAnswersHTML: taskNumber === 1 ? `<h4 style="margin:18px 0 8px; color:#003399;">Комплект ${setNumber}. ${theme.title} · ${scenario.title || `Сюжет ${state.scenarioIndex + 1}`}</h4>` : '',
                                theory: {
                                    svg_code: chosen.theoryImageHTML || diagramHTML,
                                    theory_task: standaloneText,
                                    theory_sol: chosen.solution || 'Разбор пока не добавлен.',
                                    tasks: analogTasks
                                }
                            });
                        }
                    }
                }
            }
        }

        return { trainerTasks, scenarioTasks };
    }



    // ===== Дополнительные прототипы: единый механизм как в ЕГЭ =====
    function getExtraTaskData(tid) {
        const extraDb = window.extraDatabase || window.additionalDatabase || {};
        const numericId = parseInt(String(tid).replace(/\D/g, ''), 10);
        return extraDb[tid] || extraDb[`task${numericId}`] || extraDb[numericId] || null;
    }

    function getPrototypeData(tid, kind = 'main') {
        return (kind === 'extra') ? getExtraTaskData(tid) : window.database[tid];
    }

    function getPrototypePanelId(tid, kind = 'main') {
        return (kind === 'extra') ? `protos-extra-${tid}` : `protos-${tid}`;
    }

    function getPrototypeCheckboxId(tid, idx, kind = 'main') {
        return (kind === 'extra') ? `proto-extra-${tid}-${idx}` : `proto-${tid}-${idx}`;
    }

    function getPrototypeMasterId(tid, kind = 'main') {
        return (kind === 'extra') ? `proto-all-extra-${tid}` : `proto-all-${tid}`;
    }

    function getPrototypeDisplayLabel(p, idx, kind = 'main') {
        const candidates = p ? [p.short_desc, p.label, p.desc, p.title, p.name] : [];
        let label = String(candidates.find(value => String(value || '').trim()) || '').trim();

        // В настройках оставляем смысловое описание, но убираем старую составную
        // нумерацию прототипа: 7.1., 8.12., 8.Д1., «Прототип 7.1» и т. п.
        label = label
            .replace(/^(?:Прототип|Тип)\s*№?\s*/i, '')
            .replace(/^\d+\s*\.\s*[ДD]?\s*\d+\s*[.:;\-–—)]*\s*/i, '')
            .replace(/^\d+\s*[.:;\-–—)]\s*/i, '')
            .trim();

        return label || `Прототип`;
    }

    // В настройках: простая нумерация 1, 2, 3... + описание прототипа.
    function buildPrototypeListHTML(tid, data, kind = 'main') {
        if (!data || !Array.isArray(data.prototypes)) return '';
        const kindArg = (kind === 'extra') ? `, 'extra'` : '';
        let listHTML = `
                <label class="proto-select-all" title="Выбрать или снять все прототипы этого блока">
                    <input type="checkbox" id="${getPrototypeMasterId(tid, kind)}" checked onchange="toggleAllProtos('${tid}', this.checked${kindArg})">
                    <span>Выбрать все / снять все</span>
                </label>`;
        let currentExtraTopic = '';
        data.prototypes.forEach((p, idx) => {
            // Тематические группы — в задании 20 и в расширенных блоках.
            const showTopicHeaders = kind === 'extra' || (kind === 'main' && String(tid).replace(/\D/g, '') === '20');
            if (showTopicHeaders && p.topic && p.topic !== currentExtraTopic) {
                currentExtraTopic = p.topic;
                listHTML += `<div class="proto-topic-header">${p.topic}</div>`;
            }
            listHTML += `
                <label class="proto-item" onmouseenter="showTooltip('${tid}', ${idx}, event${kindArg})" onmouseleave="hideTooltip()" onmousemove="moveTooltip(event)">
                    <input type="checkbox" id="${getPrototypeCheckboxId(tid, idx, kind)}" checked onchange="syncProtoMaster('${tid}'${kindArg})">
                    <span class="proto-label-text">${idx + 1}. ${getPrototypeDisplayLabel(p, idx, kind)} &nbsp;👁️</span>
                </label>`;
        });
        return listHTML;
    }

    // Задание 19: выбор ТОЛЬКО тем, без прототипов и значков предпросмотра.
    // Сохраняем id proto-19-N для совместимости с существующей генерацией.
    function build19MainTopicListHTML(tid, data) {
        if (!data || !Array.isArray(data.prototypes)) return '';
        const allId=getPrototypeMasterId(tid, 'main');
        const allRow=`<label class="proto-select-all" title="Выбрать или снять все темы задания 19">
            <input type="checkbox" id="${allId}" checked onchange="toggleAllProtos('${tid}', this.checked); updateTaskTotal()">
            <span>Выбрать все темы / снять выбор</span>
        </label>`;
        const rows=data.prototypes.map((p,i)=>{
            const topic=String(p.topic || p.desc || '').replace(/^19[.\s]*\d+[.\s]*/, '').trim();
            const n=(window.task19StatementBank || []).filter(st=>st.topic===p.topic).length;
            return `<label class="proto-item">
                <input type="checkbox" id="${getPrototypeCheckboxId(tid,i,'main')}" checked onchange="syncProtoMaster('${tid}'); updateTaskTotal()">
                <span class="proto-label-text">${topic} <span style="opacity:.65">(${n})</span></span>
            </label>`;
        }).join('');
        return `<div style="padding:8px 10px;font-size:13px;color:#0f766e">Выберите темы, из которых брать отдельные утверждения.</div>${allRow}${rows}`;
    }

    function build19TopicListHTML(tid, data) {
        const names=[...new Set(window.task19StatementBank.map(s=>s.topic))];
        return `<label class="proto-select-all"><input type="checkbox" id="proto-all-extra-${tid}" checked onchange="toggleAll19TripleTopics('${tid}', this.checked)"><span>Все темы / снять выбор</span></label>`+
            names.map((name,i)=>`<label class="proto-item"><input type="checkbox" id="topic19-extra-${i}" checked onchange="sync19TripleTopicMaster('${tid}')"><span class="proto-label-text">${i+1}. ${name}</span></label>`).join('');
    }
    function toggleAll19TripleTopics(tid, checked) {
        document.querySelectorAll('input[id^="topic19-extra-"]').forEach(cb=>cb.checked=checked);
        const master=document.getElementById(`proto-all-extra-${tid}`);
        if(master){master.checked=checked;master.indeterminate=false;}
        updateTaskTotal();
    }
    function sync19TripleTopicMaster(tid) {
        const boxes=[...document.querySelectorAll('input[id^="topic19-extra-"]')];
        const n=boxes.filter(cb=>cb.checked).length;
        const master=document.getElementById(`proto-all-extra-${tid}`);
        if(master){master.checked=n===boxes.length;master.indeterminate=n>0&&n<boxes.length;}
        updateTaskTotal();
    }
    function get19SelectedTripleTopics() {
        const names=[...new Set((window.task19StatementBank||[]).map(s=>s.topic))];
        return names.filter((t,i)=>document.getElementById(`topic19-extra-${i}`)?.checked);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('dynamic-tasks');
        const hasRegularDatabase = window.database && Object.keys(window.database).length > 0;
        const hasPracticeDatabase = window.ogePracticeDatabase && Object.keys(window.ogePracticeDatabase).length > 0;

        if (!hasRegularDatabase && !hasPracticeDatabase) {
            document.getElementById('info-board').innerHTML = '<b>Критическая ошибка:</b> базы заданий не загрузились. Проверьте файлы oge_practice.js, task6.js, task7.js, task8.js, task9.js, task10.js, task11.js, task12.js, task13.js, task14.js, task15.js, task16.js, task17.js и другие файлы заданий.';
            document.getElementById('info-board').style.display = 'block';
            return;
        }

        let rowsHTML = hasPracticeDatabase ? renderOgePracticeRows() : '';

        const sortedTaskIds = getUniqueTaskIds();
        for (const tid of sortedTaskIds) {
            const data = window.database[tid];
            if (String(tid).replace(/\D/g,'') === '20') {
                rowsHTML += `<div class="part2-heading" style="margin:26px 0 10px;padding:13px 16px;border-left:4px solid #f59e0b;background:#14343f;border-radius:8px;color:#ffd28e;font-weight:800;font-size:19px;">Часть 2 · Задания с развёрнутым ответом</div><div style="color:#a8cbd0;font-size:13px;margin-bottom:10px">Выберите количество и прототипы. Решения записываются самостоятельно; разборов и автоматической проверки здесь нет.</div>`;
            }
            const listHTML = (String(tid).replace(/\D/g, '') === '19') ? build19MainTopicListHTML(tid, data) : buildPrototypeListHTML(tid, data, 'main');
            const special19UI = '';

            const extraData = getExtraTaskData(tid);
            let extraHTML = '';

            if (extraData && Array.isArray(extraData.prototypes) && extraData.prototypes.length > 0) {
                const is19Triples = String(tid).replace(/\D/g, '') === '19';
                const extraListHTML = is19Triples ? '' : buildPrototypeListHTML(tid, extraData, 'extra');
                extraHTML = `
                <div class="extra-task-panel">
                    <div class="row-header">
                        <label ${is19Triples ? '' : `onclick="toggleSettings('${tid}', 'extra')"`}>
                            <span class="extra-task-title">${is19Triples ? '＋ Утверждения тройками (120)' : `＋ Дополнительно (${extraData.prototypes.length})`}</span>
                            ${is19Triples ? '' : `<button type="button" class="btn-settings" onclick="toggleSettings('${tid}', 'extra'); event.stopPropagation();">⚙️ Настроить</button>`}
                        </label>
                        <div class="count-stepper" onclick="event.stopPropagation();">
                            <button type="button" class="count-btn" onclick="adjustTaskCount('extra-${tid}', -1, event)" title="Уменьшить количество">−</button>
                            <input type="number" id="count-extra-${tid}" min="0" value="0" aria-label="${String(tid).replace(/\D/g,'') === '19' ? 'Количество готовых троек' : 'Количество дополнительных заданий'}" oninput="updateTaskTotal()" onchange="updateTaskTotal()">
                            <button type="button" class="count-btn" onclick="adjustTaskCount('extra-${tid}', 1, event)" title="Увеличить количество">+</button>
                        </div>
                    </div>
                    ${is19Triples ? '' : `<div id="protos-extra-${tid}" class="proto-list">${extraListHTML}</div>`}
                </div>`;
            }

            rowsHTML += `
            <div class="task-row">
                <div class="row-header">
                    <label onclick="toggleSettings('${tid}')">
                        <span>${String(tid).replace(/\D/g, '') === '19' ? 'Анализ геометрических утверждений (127)' : `${data.title} (${data.prototypes.length})`}</span>
                        <button type="button" class="btn-settings" onclick="toggleSettings('${tid}'); event.stopPropagation();">⚙️ Настроить</button>
                    </label>
                    <div class="count-stepper" onclick="event.stopPropagation();">
                        <button type="button" class="count-btn" onclick="adjustTaskCount('${tid}', -1, event)" title="Уменьшить количество">−</button>
                        <input type="number" id="count-${tid}" min="0" value="0" aria-label="${String(tid).replace(/\D/g,'') === '19' ? 'Количество отдельных утверждений' : 'Количество заданий'}" oninput="updateTaskTotal()" onchange="updateTaskTotal()">
                        <button type="button" class="count-btn" onclick="adjustTaskCount('${tid}', 1, event)" title="Увеличить количество">+</button>
                    </div>
                </div>
                <div id="protos-${tid}" class="proto-list">${special19UI}${listHTML}</div>
                ${extraHTML}
            </div>`;
        }

        container.innerHTML = rowsHTML;
        if (typeof syncPracticeThemeMaster === 'function') syncPracticeThemeMaster();
        else { handlePracticeTrainerThemeChange(); handlePracticeScenarioThemeChange(); }
        if (typeof syncPracticeCountWithThemes === 'function') syncPracticeCountWithThemes();
        else syncPracticeScenarioCount();
        if (typeof setPracticeMode === 'function') setPracticeMode('trainer');
        updateTaskTotal();
        if (window.MathJax) {
            MathJax.typesetPromise([container]).catch(err => console.log(err.message));
        }
    });

    setTimeout(() => {
        if (document.getElementById('theme-select')) handleThemeChange();
        updateCustomBgStatus();
    }, 0);

    function updateCustomBgStatus() {
        let status = document.getElementById('custom-bg-status');
        if (!status) return;
        let urlValue = document.getElementById('custom-bg-url') ? document.getElementById('custom-bg-url').value.trim() : '';
        if (window.customBgDataUrl) {
            status.textContent = '✅ Фон загружен с компьютера и будет работать без интернета.';
            status.style.display = 'block';
        } else if (urlValue) {
            status.textContent = '🌐 Используется ссылка на картинку. Для офлайн-работы лучше загрузить файл с компьютера.';
            status.style.display = 'block';
        } else {
            status.textContent = '';
            status.style.display = 'none';
        }
    }

    function getSelectedCustomBg() {
        if (window.customBgDataUrl) return window.customBgDataUrl;
        let input = document.getElementById('custom-bg-url');
        return input ? input.value.trim() : '';
    }

    function handleCustomBgFile(event) {
        let file = event.target && event.target.files ? event.target.files[0] : null;
        if (!file) return;
        let reader = new FileReader();
        reader.onload = function(e) {
            window.customBgDataUrl = e.target.result || '';
            let urlInput = document.getElementById('custom-bg-url');
            if (urlInput) urlInput.value = '';
            updateCustomBgStatus();
            if (currentInteractiveHTML) renderPreview();
        };
        reader.readAsDataURL(file);
    }

    function handleThemeChange() {
        let val = document.getElementById('theme-select').value;
        let controls = document.getElementById('custom-bg-controls');
        if (controls) controls.style.display = (val === 'custom') ? 'flex' : 'none';
        if (val !== 'custom') {
            updateCustomBgStatus();
        }
        if(currentInteractiveHTML) renderPreview();
    }

    function handleSignatureChange() {
        let isChecked = document.getElementById('toggle-signature').checked;
        document.getElementById('signature-controls').style.display = isChecked ? 'flex' : 'none';
        if(currentInteractiveHTML) renderPreview();
    }

    function toggleSettings(tid, kind = 'main') {
        let el = document.getElementById(getPrototypePanelId(tid, kind));
        if (el) el.style.display = (el.style.display === 'grid') ? 'none' : 'grid';
    }

    function toggleAllProtos(tid, checked, kind = 'main') {
        const data = getPrototypeData(tid, kind);
        if (!data || !data.prototypes) return;
        data.prototypes.forEach((p, idx) => {
            const cb = document.getElementById(getPrototypeCheckboxId(tid, idx, kind));
            if (cb) cb.checked = checked;
        });
        const master = document.getElementById(getPrototypeMasterId(tid, kind));
        if (master) { master.checked = checked; master.indeterminate = false; }
    }

    function syncProtoMaster(tid, kind = 'main') {
        const data = getPrototypeData(tid, kind);
        const master = document.getElementById(getPrototypeMasterId(tid, kind));
        if (!data || !data.prototypes || !master) return;
        const boxes = data.prototypes.map((p, idx) => document.getElementById(getPrototypeCheckboxId(tid, idx, kind))).filter(Boolean);
        const checkedCount = boxes.filter(cb => cb.checked).length;
        master.checked = checkedCount === boxes.length;
        master.indeterminate = checkedCount > 0 && checkedCount < boxes.length;
    }


    function updateTaskTotal() {
        // Тренажёр 1–5: выбранная тема добавляет весь каталог один раз.
        let total = getPracticeTrainerSelectedTaskCount();
        updatePracticeTrainerSelectedCount();

        document.querySelectorAll('input[id^="count-"]').forEach(input => {
            const value = parseInt(input.value, 10);
            if (isNaN(value) || value <= 0) return;

            if (input.id === 'count-practice-scenarios') {
                const hasSelectedTheme = getOgeScenarioThemeIds().some(themeId => {
                    const cb = document.getElementById(`practice-scenario-theme-${themeId}`);
                    return cb && cb.checked;
                });
                if (hasSelectedTheme) total += value * 5;
                return;
            }

            if (input.id === 'count-extra-task19' || input.id === 'count-extra-19') {
                total += value * 3;
            } else if (input.id === 'count-task19' || input.id === 'count-19') {
                if ((window.database.task19?.prototypes || window.database[19]?.prototypes || []).some((_,idx)=>document.getElementById(getPrototypeCheckboxId('task19', idx, 'main'))?.checked || document.getElementById(getPrototypeCheckboxId('19', idx, 'main'))?.checked)) total += value;
            } else {
                total += value;
            }
        });
        const totalEl = document.getElementById('task-total-count');
        if (totalEl) totalEl.textContent = total;
    }

    // Task 19: selecting an explicit true/false response still populates the normal answer field
    // so PDF/game/checking/export code can reuse its established logic.
    window.applyTask19BinaryStyles = function(taskNum, state, chosenValue, correctValue) {
        const input = document.getElementById('ans-interactive-' + taskNum);
        if (!input || !input.parentElement) return;
        const buttons = input.parentElement.querySelectorAll('.task19-binary-btn');
        buttons.forEach(btn => {
            const value = String(btn.getAttribute('data-binary-value') || '');
            const isChosen = String(chosenValue ?? '') === value;
            btn.disabled = state === 'correct' || state === 'wrong' || state === 'empty';
            btn.style.background = '#fff';
            btn.style.borderColor = '#b7cbd1';
            btn.style.color = '#111827';
            btn.setAttribute('aria-pressed', 'false');
            if (state === 'selected' && isChosen) {
                btn.style.background = '#f6efe1';
                btn.style.borderColor = '#c8a96a';
                btn.style.color = '#7c5b17';
                btn.setAttribute('aria-pressed', 'true');
            } else if (state === 'correct' && isChosen) {
                btn.style.background = '#e8f5e9';
                btn.style.borderColor = '#4CAF50';
                btn.style.color = '#1b5e20';
                btn.setAttribute('aria-pressed', 'true');
            } else if (state === 'wrong') {
                if (isChosen) {
                    btn.style.background = '#ffebee';
                    btn.style.borderColor = '#f44336';
                    btn.style.color = '#b71c1c';
                    btn.setAttribute('aria-pressed', 'true');
                } else if (String(correctValue ?? '') === value) {
                    btn.style.background = '#f2faf3';
                    btn.style.borderColor = '#9ccc65';
                    btn.style.color = '#33691e';
                }
            } else if (state === 'empty') {
                if (isChosen) {
                    btn.style.background = '#f6efe1';
                    btn.style.borderColor = '#c8a96a';
                    btn.style.color = '#7c5b17';
                    btn.setAttribute('aria-pressed', 'true');
                }
            }
        });
    };

    // Task 19: selecting an explicit true/false response still populates the normal answer field
    // so PDF/game/checking/export code can reuse its established logic.
    window.choose19Binary = function(btn, inputId, value) {
        const input=document.getElementById(inputId);
        if(!input || input.dataset.checked === '1') return;
        input.value=value;
        input.dispatchEvent(new Event('input', { bubbles:true }));
        input.dispatchEvent(new Event('change', { bubbles:true }));
        const taskNum = input.getAttribute('data-task-num') || ((String(input.id||'').match(/ans-interactive-(\d+)/)||[])[1] || '');
        window.applyTask19BinaryStyles(taskNum, 'selected', value, null);
    };

    function adjustTaskCount(tid, delta, event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const input = document.getElementById(`count-${tid}`);
        if (!input) return;

        let value = parseInt(input.value, 10);
        if (isNaN(value)) value = 0;

        const oldValue = value;
        value += delta;
        if (value < 0) value = 0;

        if (tid === 'practice-scenarios' && oldValue === 0 && value > 0 && !window.ogeScenarioFiltersCustomized) {
            ogeSelectEveryScenarioFilter();
        }
        input.value = value;
        updateTaskTotal();
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    }


    // Точечная замена как в ЕГЭ: сохраняем остальные уже выбранные задачи.
    window.ogeVariantSnapshot = null;
    function ogeTaskReplacementKey(t) {
        return String(t && (t.id ?? t.text ?? '') || '');
    }
    function ogeSelectedPrototypesForBlock(block) {
        const kind=block.kind || 'main', data=block.data;
        if (!data || !Array.isArray(data.prototypes)) return [];
        const tid=block.tid;
        if (block.autoFull || (kind==='extra' && String(tid).replace(/\D/g,'')==='19')) return data.prototypes;
        return data.prototypes.filter((p,index)=>{
            const cb=document.getElementById(getPrototypeCheckboxId(tid,index,kind));
            return cb && cb.checked;
        });
    }
    function ogeItemTypeCode(t) {
        if (t && t.__ogeScenarioMeta) return String(t.__ogeScenarioMeta.chosen?.typeId||'');
        if (t && t.__ogeTrainerMeta) return String(t.__ogeTrainerMeta.proto?.id||'');
        return String(t && t.theory && (t.theory.code||t.theory.desc||t.theory.topic)||'');
    }
    function ogeTaskReplacementKey(t) {
        return String(t && (t.id ?? t.text ?? '') || '');
    }
    function ogeReplacementButton(blockIndex, itemIndex, item, kind) {
        let inside=false,type=false;
        if (kind === 'practice') {
            const scenario=item&&item.__ogeScenarioMeta;
            const trainer=item&&item.__ogeTrainerMeta;
            if (scenario && Array.isArray(scenario.candidates)) {
                inside=scenario.candidates.filter(t=>String(t.typeId||'')===String(scenario.chosen?.typeId||'')).length>1;
                type=scenario.candidates.some(t=>String(t.typeId||'')!==String(scenario.chosen?.typeId||''));
            } else if (trainer) {
                inside=false; // Каталог содержит отдельные типы, а не аналоги внутри типа.
                type=trainer.candidates.some(p=>String(p.id||'')!==String(trainer.proto.id||''));
            }
        } else {
            const p=item&&item.theory;
            inside=!!(p&&Array.isArray(p.tasks)&&p.tasks.length>1);
            const snap=window.ogeVariantSnapshot;
            const block=snap&&snap[blockIndex];
            if (block) type=ogeSelectedPrototypesForBlock(block).some(q=>q!==p && String(q.code||q.desc||'')!==String(p?.code||p?.desc||''));
        }
        if (!inside && !type) return '';
        return `<div class="oge-replace-bar">${inside?`<button class="random-replace-btn" type="button" title="Другой пример того же типа; остальные задачи не изменятся" onclick="replaceOgeVariantTask(${blockIndex},${itemIndex},'inside')">🔄 Заменить внутри типа</button>`:''}${type?`<button class="random-replace-btn oge-replace-type-btn" type="button" title="Выбрать другой прототип; остальные задачи не изменятся" onclick="replaceOgeVariantTask(${blockIndex},${itemIndex},'type')">↔ Заменить тип</button>`:''}</div>`;
    }
    function replaceOgeVariantTask(blockIndex,itemIndex,mode='inside') {
        const snap=window.ogeVariantSnapshot;
        if (!Array.isArray(snap) || !snap[blockIndex] || !Array.isArray(snap[blockIndex].tasks)) return;
        const block=snap[blockIndex],old=block.tasks[itemIndex];
        if (!old) return;
        let replacement=null;
        if (block.kind==='practice' && old.__ogeScenarioMeta) {
            const meta=old.__ogeScenarioMeta;
            const oldType=String(meta.chosen?.typeId||'');
            const alternatives=meta.candidates.filter(t=>ogeTaskReplacementKey(t)!==ogeTaskReplacementKey(meta.chosen) &&
                (mode==='type' ? String(t.typeId||'')!==oldType : String(t.typeId||'')===oldType));
            if (!alternatives.length) {alert('Других задач для этой замены нет.');return;}
            const next=alternatives[Math.floor(Math.random()*alternatives.length)];
            const num=meta.taskNumber,useDiagram=num!==5,diag=meta.diagramHTML||'';
            const standalone=makeOgePracticeStandalone(meta.themeTitle,meta.scenario,meta.setNumber,num,next);
            const alt=meta.candidates.filter(t=>t!==next).map(t=>({text:`<b>${t.typeId||`Задание ${num}`}.</b> ${t.text||''}`,answer:String(t.answer??''),svg_code:''}));
            replacement={...old,text:next.text||'',displayText:next.text||'',standaloneText:standalone,
                printSvg:useDiagram?(next.printSvg||next.imageHTML||next.svg_code||diag):'',
                draftSvg:useDiagram?(next.draftSvg||next.imageHTML||next.svg_code||diag):'',
                standaloneSvg:next.standaloneSvg||next.imageHTML||next.svg_code||diag,
                gameText:standalone,gameSvg:useDiagram?(next.gameSvg||next.draftSvg||next.imageHTML||next.svg_code||diag):'',
                presentationText:num===5&&/<table\b/i.test(String(next.text||''))?next.text:standalone,
                presentationHasTable:num===5&&/<table\b/i.test(String(next.text||'')),
                answer:String(next.answer??''),accepts:Array.isArray(next.accepts)&&next.accepts.length?next.accepts.map(String):[String(next.answer??'')],
                forceDraftDiagram:useDiagram&&Boolean(diag||next.svg_code||next.imageHTML),
                printLayout:next.printLayout||(diag?'image-grid':''),printGridHeight:next.printGridHeight||125,
                theory:{...old.theory,theory_task:standalone,theory_sol:next.solution||'Разбор пока не добавлен.',tasks:alt},
                __ogeScenarioMeta:{...meta,chosen:next}};
        } else if (block.kind==='practice' && old.__ogeTrainerMeta) {
            const meta=old.__ogeTrainerMeta;
            if(mode==='inside') {
                const same=(old.theory&&old.theory.tasks||[]).filter(t=>ogeTaskReplacementKey(t)!==ogeTaskReplacementKey(old));
                if (!same.length) return;
                const next=same[Math.floor(Math.random()*same.length)];
                replacement={...old,text:next.text,displayText:next.text,answer:String(next.answer||''),accepts:[String(next.answer||'')]};
            } else {
                const other=meta.candidates.filter(p=>String(p.id||'')!==String(meta.proto.id||''));
                if (!other.length) return;
                const proto=other[Math.floor(Math.random()*other.length)],num=Number(proto.examNumber),image=proto.imageHTML||proto.svg_code||'';
                const standalone=`${meta.commonText||''}<div><b>Прототип ${proto.id||''}.</b> ${proto.text||''}</div>`;
                replacement={...old,text:proto.text||'',displayText:`<div style="margin-bottom:5px"><b>Прототип ${proto.id||''}</b></div>${proto.text||''}`,
                    standaloneText:standalone,gameText:standalone,presentationText:standalone,
                    printSvg:num!==5?image:'',draftSvg:num!==5?image:'',gameSvg:num!==5?image:'',standaloneSvg:image,
                    answer:String(proto.answer??''),accepts:Array.isArray(proto.accepts)&&proto.accepts.length?proto.accepts.map(String):[String(proto.answer??'')],
                    __ogeTrainerMeta:{...meta,proto},theory:{...old.theory,theory_task:standalone,theory_sol:proto.solution||'Разбор пока не добавлен.'}};
            }
        } else {
            const p=old.theory;
            if (mode==='type') {
                const pool=ogeSelectedPrototypesForBlock(block).filter(q=>q!==p&&String(q.code||q.desc||'')!==String(p?.code||p?.desc||'')&&Array.isArray(q.tasks)&&q.tasks.length);
                if(!pool.length) {alert('Для замены типа отметьте другие прототипы этого задания в настройках.');return;}
                const usedCodes=new Set(block.tasks.filter((t,i)=>i!==itemIndex).map(ogeItemTypeCode));
                const rare=pool.filter(q=>!usedCodes.has(String(q.code||q.desc||'')));
                const src=(rare.length?rare:pool)[Math.floor(Math.random()*(rare.length?rare:pool).length)];
                const usedTasks=new Set(block.tasks.filter((t,i)=>i!==itemIndex).map(ogeTaskReplacementKey));
                const candidates=src.tasks.filter(t=>!usedTasks.has(ogeTaskReplacementKey(t)));
                const next=(candidates.length?candidates:src.tasks)[Math.floor(Math.random()*(candidates.length?candidates:src.tasks).length)];
                replacement={...next,svg:next.svg_code||src.svg_code||'',theory:src,
                    __ogeSelectedPrototypeKey:'prototype-cycle:'+block.kind+':'+String(block.tid)+':'+block.data.prototypes.indexOf(src)};
            } else {
                if (!p||!Array.isArray(p.tasks)||p.tasks.length<2) return;
                const alternatives=p.tasks.filter(t=>ogeTaskReplacementKey(t)!==ogeTaskReplacementKey(old));
                const used=new Set(block.tasks.filter((t,i)=>i!==itemIndex).map(ogeTaskReplacementKey));
                const fresh=alternatives.filter(t=>!used.has(ogeTaskReplacementKey(t)));
                const pool=fresh.length?fresh:alternatives;
                if(!pool.length) return;
                const next=pool[Math.floor(Math.random()*pool.length)];
                replacement={...next,svg:next.svg_code||p.svg_code||'',theory:p};
            }
        }
        if (!replacement) return;
        const nextSnapshot=snap.map((b,bi)=>bi===blockIndex?{...b,tasks:b.tasks.map((t,ti)=>ti===itemIndex?replacement:t)}:b);
        try {
            generateVariant({snapshot:nextSnapshot});
            ogeSyncCurrentVariantInBatch();
            requestAnimationFrame(()=>{
                const target=document.querySelector(`[data-oge-block-index="${blockIndex}"][data-oge-item-index="${itemIndex}"]`);
                if(target) target.scrollIntoView({behavior:'smooth',block:'center'});
            });
        } catch(e) {console.error('Ошибка замены:',e);alert('Не удалось заменить задание: '+(e.message||e));}
    }

    window.ogeVariantBatch=[];
    window.ogeActiveVariantIndex=0;
    window.ogeGenerationMode='manual';
    function ogeTaskGlobalKey(task,block) {
        if (task?.__ogeScenarioMeta) {
            const m=task.__ogeScenarioMeta;
            return `scenario:${m.groupId}:${m.taskNumber}:${ogeTaskReplacementKey(m.chosen)}`;
        }
        return String(block?.tid||'')+':'+ogeTaskReplacementKey(task);
    }
    function ogeRecordUsage(snapshot, usage) {
        const lastTypesByBlock = new Map();
        (snapshot||[]).forEach(b=>(b.tasks||[]).forEach(t=>{
            const k=ogeTaskGlobalKey(t,b);usage.set(k,(usage.get(k)||0)+1);
            if (t.__ogeSelectedPrototypeKey && b.kind !== 'practice') {
                const typeKey = t.__ogeSelectedPrototypeKey;
                usage.set(typeKey, (usage.get(typeKey) || 0) + 1);
                const blockKey = 'previous-prototypes:' + b.kind + ':' + String(b.tid);
                if (!lastTypesByBlock.has(blockKey)) lastTypesByBlock.set(blockKey, new Set());
                lastTypesByBlock.get(blockKey).add(typeKey);
            }
            const m=t?.__ogeScenarioMeta;
            if (m && m.chosen) {
                const [theme, scenario] = String(m.groupId || '').split(':');
                const type = String(m.selectedTypeId || m.chosen.typeId || ('type-' + (m.candidates || []).indexOf(m.chosen)));
                const typeKey = 'scenario-type:' + theme + ':' + scenario + ':' + m.taskNumber + ':' + type;
                usage.set(typeKey, (usage.get(typeKey) || 0) + 1);
            }
            if(m && Number(m.taskNumber)===1){
                const theme=String(m.groupId||'').split(':')[0];
                const scenario=String(m.groupId||'').split(':')[1];
                const tk='theme:'+theme, sk='scene:'+theme+':'+scenario;
                usage.set(tk,(usage.get(tk)||0)+1);
                usage.set(sk,(usage.get(sk)||0)+1);
            }
        }));
        lastTypesByBlock.forEach((types, key) => usage.set(key, [...types]));
    }
    function ogeBuildBatchEntry() {
        return {mode:window.ogeGenerationMode,snapshot:window.ogeVariantSnapshot,printHTML:currentPrintHTML,
            printGroups:(window.ogePrintableGroups||{}),
            answersHTML:currentAnswersHTML};
    }
    function ogeSyncCurrentVariantInBatch() {
        const index=window.ogeActiveVariantIndex||0;
        if(!Array.isArray(window.ogeVariantBatch)||!window.ogeVariantBatch.length)return;
        window.ogeVariantBatch[index]=ogeBuildBatchEntry();
        ogeRenderVariantSwitcher();
    }
    function ogeRenderVariantSwitcher(){
        const el=document.getElementById('oge-variant-switch');
        if(!el)return;
        const batch=window.ogeVariantBatch||[];
        if(batch.length<=1){el.style.display='none';el.innerHTML='';return;}
        const index=window.ogeActiveVariantIndex||0;
        el.style.display='block';
        el.innerHTML=`<label for="oge-active-variant">Просмотр варианта</label><select id="oge-active-variant" onchange="ogeSelectVariant(Number(this.value))">${batch.map((b,i)=>`<option value="${i}" ${i===index?'selected':''}>Вариант №${i+1}</option>`).join('')}</select><div style="font-size:13px;margin-top:7px;opacity:.85">Печатный файл содержит все ${batch.length} ${batch.length%10===1&&batch.length%100!==11?'вариант':batch.length%10>=2&&batch.length%10<=4&&(batch.length%100<12||batch.length%100>14)?'варианта':'вариантов'}. Замены сохраняются отдельно для каждого варианта.</div>`;
    }
    function ogeSelectVariant(index){
        const batch=window.ogeVariantBatch||[];
        if(!batch[index])return;
        window.ogeActiveVariantIndex=index;
        generateVariant({snapshot:batch[index].snapshot});
        ogeRenderVariantSwitcher();
    }
    function ogeNormalizeVariantCount() {
        const input=document.getElementById('oge-variant-count');
        if(!input)return 1;
        const raw=Number(input.value);
        const count=Number.isFinite(raw)?Math.max(1,Math.min(40,Math.round(raw))):1;
        input.value=String(count);
        return count;
    }
    function ogeHasManualSelection() {
        // Проверяем те же поля количества, которые считывает generateVariant().
        // Ключи заданий в базе могут быть и числовыми (17), и строковыми (task17).
        // Проверка только count-task* пропускала, например, count-17 и count-extra-17.
        const scenarioCount = Number(document.getElementById('count-practice-scenarios')?.value || 0);
        if (scenarioCount > 0 && getOgeScenarioThemeIds().some(t =>
            document.getElementById('practice-scenario-theme-' + t)?.checked)) return true;
        if (getOgeTrainerThemeIds().some(t =>
            document.getElementById('practice-trainer-theme-' + t)?.checked)) return true;
        return getUniqueTaskIds().some(tid =>
            Number(document.getElementById(`count-${tid}`)?.value || 0) > 0 ||
            Number(document.getElementById(`count-extra-${tid}`)?.value || 0) > 0
        );
    }
    function safeGenerateVariant(event, requestedMode='manual') {
        if(event){event.preventDefault();event.stopPropagation();}
        const btn=event&&event.currentTarget?event.currentTarget:document.querySelector('.oge-fast-btn');
        const full=requestedMode==='full';
        // Число в верхней панели НИКОГДА не применяется к выборочной сборке.
        const count=full ? ogeNormalizeVariantCount() : 1;
        // Полная сборка 1–25 запускается ТОЛЬКО верхней кнопкой.
        // Нижняя кнопка не должна запускать генерацию при пустом ручном выборе.
        if(!full && !ogeHasManualSelection()){
            alert('Для выборочной генерации сначала отметьте нужные задания. Для полного варианта 1–25 воспользуйтесь верхней кнопкой.');
            return;
        }
        if(btn){btn.disabled=true;btn.dataset.oldText=btn.textContent;btn.textContent='Генерирую 1 из '+count+'…';}
        window.ogeVariantBatch=[];window.ogeActiveVariantIndex=0;
        window.ogeGenerationMode=full?'full':'manual';
        const usage=new Map();
        // Независимые перемешанные очереди для каждого номера задания в этой пачке.
        // При запуске новой пачки начинаются новые циклы.
        const fullPrototypeDecks = full ? new Map() : null;
        let current=0;
        const makeNext=()=>{
            try{
                generateVariant({silent:count!==1,usageCounts:usage,autoFull:full,fullPrototypeDecks});
                if(!window.ogeVariantSnapshot || !window.ogeVariantSnapshot.length) throw Error('Не выбраны задания для генерации.');
                if(full) {
                    const numbers=new Set();
                    window.ogeVariantSnapshot.forEach(b=>{
                        if(b.kind==='practice') (b.tasks||[]).forEach(t=>numbers.add(Number(t.examNumber||t.__ogeScenarioMeta?.taskNumber||t.__ogeTrainerMeta?.proto?.examNumber)));
                        else numbers.add(Number(String(b.tid).replace(/\D/g,'')));
                    });
                    const missing=Array.from({length:25},(_,i)=>i+1).filter(n=>!numbers.has(n));
                    if(missing.length) throw Error('Не удалось сформировать полный вариант: нет заданий № '+missing.join(', ')+'. Проверьте, что банки этих номеров подключены.');
                }
                window.ogeVariantBatch.push(ogeBuildBatchEntry());
                ogeRecordUsage(window.ogeVariantSnapshot,usage);
                current++;
                if(current<count){
                    if(btn)btn.textContent='Генерирую '+(current+1)+' из '+count+'…';
                    setTimeout(makeNext,0);
                } else {
                    window.ogeActiveVariantIndex=0;
                    if (count > 1) generateVariant({snapshot:window.ogeVariantBatch[0].snapshot});
                    ogeRenderVariantSwitcher();
                    if(btn){btn.disabled=false;btn.textContent=btn.dataset.oldText||'Сгенерировать варианты';}
                    const preview=document.getElementById('output-section');
                    if(preview)preview.scrollIntoView({behavior:'smooth',block:'start'});
                }
            }catch(e){
                console.error(e);
                const board=document.getElementById('info-board');
                if(board){board.style.display='block';board.innerHTML='<b>Ошибка генерации:</b> '+String(e.message||e);}
                if(btn){btn.disabled=false;btn.textContent=btn.dataset.oldText||'Сгенерировать варианты';}
            }
        };
        setTimeout(makeNext,0);
    }

    function resetTaskCounts() {
        window.ogeScenarioFiltersCustomized = false;
        // Сбрасываем сразу ОБА режима: счётчик полных вариантов и ручной набор.
        const fullCount = document.getElementById('oge-variant-count');
        if (fullCount) fullCount.value = '1';
        document.querySelectorAll('input[id^="count-"]').forEach(input => {input.value='0';});

        // Отмеченные ранее темы/сюжеты/тренажёры больше не входят в подборку.
        document.querySelectorAll('[data-practice-trainer-theme-checkbox="1"], [data-practice-scenario-theme-checkbox="1"], [data-practice-scenario-checkbox="1"]')
            .forEach(box => {box.checked=false;box.indeterminate=false;});
        ['practice-trainer-theme-all','practice-scenario-theme-all'].forEach(id => {
            const master=document.getElementById(id);
            if(master){master.checked=false;master.indeterminate=false;}
        });
        // В тренажёре по-прежнему доступны все прототипы.
        // Сюжетные комплекты возвращаем к вариантам из тетради.
        document.querySelectorAll('input[id^="proto-"], input[id^="topic19-extra-"]').forEach(box => {
            if(box.type==='checkbox'){box.checked=true;box.indeterminate=false;}
        });
        getOgeScenarioThemeIds().forEach(themeId => {
            const theme=window.ogePracticeDatabase && window.ogePracticeDatabase[themeId];
            (theme?.scenarios || []).forEach((_,index) => {
                applyPracticeScenarioDefaultSelection(themeId,index);
                updatePracticeScenarioSummary(themeId,index);
            });
            updatePracticeThemeScenarioStatus(themeId);
        });
        updatePracticeTrainerSelectedCount();
        updateTaskTotal();

        // Удаляем и результаты предыдущей генерации, иначе её 5 вариантов
        // продолжали попадать в ключи/PDF после сброса.
        window.ogeVariantBatch=[];
        window.ogeActiveVariantIndex=0;
        window.ogeGenerationMode='manual';
        window.ogeVariantSnapshot=null;
        window.ogePrintableGroups={'1-5':[],'6-14':[],'15-25':[]};
        window.currentGeneratedTasks=[];
        window.selectedBlockTitles=[];
        currentInteractiveHTML='';currentPrintHTML='';currentAnswersHTML='';
        const output=document.getElementById('output-section');
        if(output){if(window.ogeClearRenderedContent) window.ogeClearRenderedContent(output);output.innerHTML='';output.style.display='none';}
        const actions=document.getElementById('btn-group');
        if(actions) actions.style.display='none';
        const board=document.getElementById('info-board');
        if(board){board.innerHTML='';board.style.display='none';}
        ogeRenderVariantSwitcher();

        const note=document.getElementById('task-total-note');
        if(note){
            note.textContent='Сброшены количество полных вариантов, подборка и предыдущие результаты.';
            note.style.display='block';
            clearTimeout(window.taskTotalNoteTimer);
            window.taskTotalNoteTimer=setTimeout(()=>{note.style.display='none';},2600);
        }
    }

    const tooltip = document.getElementById('proto-tooltip');
    function showTooltip(tid, index, e, kind = 'main') {
        let data = getPrototypeData(tid, kind);
        if (!data || !data.prototypes || !data.prototypes[index]) return;
        let p = data.prototypes[index];
        const firstTaskText = p.tasks && p.tasks[0] ? (p.tasks[0].tooltipText ?? p.tasks[0].theoryText ?? p.tasks[0].text) : (p.theory_task || '');
        if (window.ogeClearRenderedContent) window.ogeClearRenderedContent(tooltip);
        tooltip.innerHTML = `${p.svg_code || ''}<div style="font-size: 0.9em;">${firstTaskText}</div>`;
        if (window.autoFixSVGArrows) window.autoFixSVGArrows(tooltip);
        tooltip.style.display = 'block';
        if (window.MathJax) MathJax.typesetPromise([tooltip]);
        moveTooltip(e);
    }

    function moveTooltip(e) {
        if (tooltip.style.display === 'block') {
            let x = e.clientX + 15, y = e.clientY + 15;
            if (x + tooltip.offsetWidth > window.innerWidth) x = window.innerWidth - tooltip.offsetWidth - 10;
            if (y + tooltip.offsetHeight > window.innerHeight) y = window.innerHeight - tooltip.offsetHeight - 10;
            tooltip.style.left = x + 'px'; tooltip.style.top = y + 'px';
        }
    }

    function hideTooltip() { tooltip.style.display = 'none'; }

    function openTheoryModalLocal(dataId) {
        let el = document.getElementById(dataId);
        if(el) {
            if (window.ogeClearRenderedContent) window.ogeClearRenderedContent(document.getElementById('modal-content-box'));
            document.getElementById('modal-content-box').innerHTML = decodeURIComponent(el.textContent);
            document.getElementById('modal-overlay').style.display = 'flex';
            if (window.MathJax) MathJax.typesetPromise([document.getElementById('modal-overlay')]);
        }
    }

    function buildOgePart2ScratchpadHTML(draftId, isSecondPart = false, diagramHTML = "") {
        // Один общий шаблон черновика для обычной задачи, задач для отработки и аналогов.
        // Во второй части рабочая область ровно в 3 раза выше видимого окна: 320 × 3 = 960 px.
        // Это сохраняет прокрутку для длинного решения, но не создаёт тяжёлый canvas 2880 px,
        // из-за которого письмо в аналогах могло заметно подвисать.
        const scratchViewportStyle = isSecondPart
            ? "height:320px;overflow-y:auto;overflow-x:hidden;border:2px solid #bbdefb;border-radius:8px;background:#fff;"
            : "height:320px;overflow:hidden;border:2px solid #bbdefb;border-radius:8px;background:#fff;";
        const scratchWorkspaceHeight = isSecondPart ? 960 : 320;
        const diagramCard = diagramHTML ? `<div id="draft-diagram-card-${draftId}" style="position:absolute;left:12px;top:12px;width:min(62%,500px);max-width:calc(100% - 24px);z-index:1;pointer-events:none;">${diagramHTML}</div>` : '';

        return `<div id="draw-wrapper-${draftId}" class="${isSecondPart ? 'second-part-scratchpad' : ''}" style="display:none; margin-top:20px; width:100%; transition:all 0.3s ease; clear:both;">
            <div style="display:flex; gap:10px; align-items:center; margin-bottom:5px; background:#e3f2fd; padding:8px 15px; border-radius:8px; border:1px solid #bbdefb; color:#333;">
                <button onclick="window.setTool('${draftId}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                <button onclick="window.setTool('${draftId}', 'zoom')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Лупа: нажмите на чертёж, чтобы открыть его крупно">🔍</button>
                <button onclick="window.setTool('${draftId}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
                <button onclick="window.setTool('${draftId}', 'highlighter')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Выделитель — полупрозрачный маркер">🖍️</button>
                <button onclick="window.undoCanvas('${draftId}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Отменить действие">↶</button>
                <button onclick="window.redoCanvas('${draftId}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Повторить действие">↷</button>
                <select id="tool-select-${draftId}" onchange="window.setTool('${draftId}', this.value)" style="background:#fff; border:1px solid #90caf9; border-radius:4px; padding:4px 8px; font-size:14px; cursor:pointer; outline:none; color:#003399; font-weight:500;">
                    <option value="" disabled selected hidden>🔺 Фигуры</option>
                    <option value="line">📏 Прямая</option>
                    <option value="vector">↗️ Вектор</option>
                    <option value="circle">⭕ Окружность</option>
                    <option value="triangle">🔺 Треугольник</option>
                    <option value="cylinder">🛢️ Цилиндр</option>
                    <option value="cone">🍦 Конус</option>
                    <option value="sphere">🔮 Сфера</option>
                </select>
                <input type="color" id="color-${draftId}" value="#003399" style="cursor:pointer; height:30px; width:35px; border:none; background:transparent; padding:0;" title="Цвет">
                <input type="range" id="size-${draftId}" min="1" max="15" step="0.1" value="2" style="cursor:pointer; width:80px;" title="Толщина линии">
                <button onclick="window.setTool('${draftId}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                <div style="flex-grow:1;"></div>
                <button onclick="window.clearCanvas('${draftId}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                <input type="hidden" id="tool-${draftId}" value="pen">
            </div>
            <div style="${scratchViewportStyle}">
                <div style="position:relative; width:100%; height:${scratchWorkspaceHeight}px; background-color:#fff; background-size:20px 20px; background-image:linear-gradient(to right,#d2e3f2 1px,transparent 1px),linear-gradient(to bottom,#d2e3f2 1px,transparent 1px);">
                    ${diagramCard}
                    <canvas id="canvas-${draftId}" style="position:absolute; left:0; top:0; z-index:2; display:block; width:100%; height:100%; touch-action:none; cursor:crosshair;"></canvas>
                </div>
            </div>
        </div>`;
    }


    function renderPreview() {
        let theme = document.getElementById("theme-select").value;
        let customBg = getSelectedCustomBg();
        let themeWrapperStyle = '';
        if (theme === 'custom' && customBg) {
            themeWrapperStyle = ` style="background: #f4f7f6 url('${customBg}') center top / cover no-repeat fixed;"`;
        }
        let timerValue = document.getElementById("timer-input").value;
        let timerDisplay = timerValue > 0 ? `<div class="timer-box-preview">⏱ ${timerValue}:00</div>` : `<div class="timer-box-preview">⏱ 00:00</div>`;

        let signatureHTML = "";
        let teacherName = document.getElementById('teacher-name').value.trim();
        if (document.getElementById('toggle-signature').checked && teacherName !== '') {
            let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
            signatureHTML = `<div style="text-align: center; font-family: 'Caveat', cursive; font-size: 26px; color: #003399; margin-top: -10px; margin-bottom: 25px;">Вариант ${verb}: ${teacherName}</div>`;
        }

        let previewCode = currentInteractiveHTML.replace(/class="btn-settings btn-help" style="display:none;/g, 'class="btn-settings btn-help" style="display:inline-flex;');
        let outputSection = document.getElementById('output-section');
        if (window.ogeClearRenderedContent) window.ogeClearRenderedContent(outputSection);
        outputSection.innerHTML = `<div class="theme-wrapper bg-${theme}"${themeWrapperStyle}><div class="preview-paper">${timerDisplay}<h1 style="color: #0F766E; text-align: center; border-bottom: 2px solid #FBBF24; padding-bottom: 15px; margin-top: 0;">Тренировочный вариант</h1>${signatureHTML}${previewCode}</div></div>`;
        requestAnimationFrame(() => adjustOgePracticeStickyHeights(outputSection));
        setTimeout(() => adjustOgePracticeStickyHeights(outputSection), 250);
        if (window.MathJax) {
            MathJax.typesetPromise([outputSection]).catch((err) => console.log(err.message));
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    // Перемешанная очередь для ПОЛНЫХ вариантов: каждый тип используется ровно
    // один раз за круг. После исчерпания банка создаём новый случайный круг.
    // Очереди независимы для номеров заданий и существуют только внутри одной пачки.
    function ogeFullNextCycleChoice(decks, key, candidates) {
        if (!(decks instanceof Map) || !candidates.length) return null;
        // Сохраняем порядок кандидатов стабильным; менять его может только shuffleArray.
        const signature = candidates.join('\u001f');
        let state = decks.get(key);
        if (!state || state.signature !== signature) {
            state = {signature, queue: [], last: null};
            decks.set(key, state);
        }
        if (!state.queue.length) {
            state.queue = shuffleArray(candidates.slice());
            if (state.queue.length > 1 && state.queue[0] === state.last) {
                // Не допускаем одинаковых прототипов на стыке двух кругов.
                const swapIndex = state.queue.findIndex(value => value !== state.last);
                if (swapIndex > 0) [state.queue[0], state.queue[swapIndex]] = [state.queue[swapIndex], state.queue[0]];
            }
        }
        const chosen = state.queue.shift();
        state.last = chosen;
        return chosen;
    }

    // A random, balanced prototype cycle is maintained separately for each task
    // number and each bank (main / extra). A prototype repeats only after its
    // peers have been drawn equally often, unless the user has selected fewer
    // types than requested tasks.
    function ogeChooseBalancedPrototypes({selectedProtos, sourceData, kind, tid,
                                          requiredCount, usageCounts, orderedTasks,
                                          createTask, fullPrototypeDecks = null}) {
        const activePools = selectedProtos.map((proto) => {
            const index = sourceData.prototypes.indexOf(proto);
            return {
                proto, index,
                typeKey: 'prototype-cycle:' + kind + ':' + String(tid) + ':' + index,
                tasks: (proto.tasks || []).filter(Boolean)
            };
        }).filter(pool => pool.tasks.length > 0);
        if (!activePools.length) return [];

        const lastKeys = usageCounts.get('previous-prototypes:' + kind + ':' + String(tid)) || [];
        const lastTypeSet = new Set(lastKeys);
        const localTypeUse = new Map();
        const localTaskUse = new Map();
        const chosen = [];
        for (let slot = 0; slot < requiredCount; slot++) {
            let pool;
            if (fullPrototypeDecks instanceof Map) {
                const key = ogeFullNextCycleChoice(fullPrototypeDecks,
                    'full-prototypes:' + String(tid), activePools.map(p => p.typeKey));
                pool = activePools.find(p => p.typeKey === key);
            } else {
                // Ручные подборки: оставляем прежнюю сбалансированную случайную выборку.
                const minUse = Math.min(...activePools.map(p =>
                    (usageCounts.get(p.typeKey) || 0) + (localTypeUse.get(p.typeKey) || 0)));
                let choices = activePools.filter(p =>
                    (usageCounts.get(p.typeKey) || 0) + (localTypeUse.get(p.typeKey) || 0) === minUse);
                const notPrevious = choices.filter(p => !lastTypeSet.has(p.typeKey));
                if (notPrevious.length) choices = notPrevious;
                pool = choices[Math.floor(Math.random() * choices.length)];
            }
            if (!pool) continue;

            let task;
            if (createTask) {
                // The statements bank creates items dynamically instead of
                // storing them in the placeholder prototype.tasks array.
                let bestUse = Infinity;
                for (let attempt = 0; attempt < 18; attempt++) {
                    const candidate = createTask(pool.proto);
                    if (!candidate) break;
                    const key = String(tid) + ':' + ogeTaskReplacementKey(candidate);
                    const n = (usageCounts.get(key) || 0) + (localTaskUse.get(key) || 0);
                    if (n < bestUse) { task = candidate; bestUse = n; }
                    if (n === 0) break;
                }
            } else {
                const minTaskUse = Math.min(...pool.tasks.map(t => {
                    const key = String(tid) + ':' + ogeTaskReplacementKey(t);
                    return (usageCounts.get(key) || 0) + (localTaskUse.get(key) || 0);
                }));
                const taskChoices = pool.tasks.filter(t => {
                    const key = String(tid) + ':' + ogeTaskReplacementKey(t);
                    return (usageCounts.get(key) || 0) + (localTaskUse.get(key) || 0) === minTaskUse;
                });
                task = taskChoices[Math.floor(Math.random() * taskChoices.length)];
            }
            if (!task) continue;
            const key = String(tid) + ':' + ogeTaskReplacementKey(task);
            localTaskUse.set(key, (localTaskUse.get(key) || 0) + 1);
            localTypeUse.set(pool.typeKey, (localTypeUse.get(pool.typeKey) || 0) + 1);
            chosen.push({
                ...task,
                svg: task.svg_code || pool.proto.svg_code || '',
                theory: createTask ? (task.theory || pool.proto) : pool.proto,
                __ogeSelectedPrototypeKey: pool.typeKey,
                __ogeSelectedPrototypeIndex: pool.index
            });
        }
        if (orderedTasks) chosen.sort((a,b) =>
            a.__ogeSelectedPrototypeIndex - b.__ogeSelectedPrototypeIndex);
        return chosen;
    }

    function generateVariant(options = {}) {
        const frozenSnapshot = options && Array.isArray(options.snapshot) ? options.snapshot : null;
        const usageCounts = options && options.usageCounts instanceof Map ? options.usageCounts : new Map();
        const fullPrototypeDecks = options.autoFull && options.fullPrototypeDecks instanceof Map
            ? options.fullPrototypeDecks : null;
        const printGroups={'1-5':[],'6-14':[],'15-25':[]};
        // A shared scenario diagram appears in the question, theory and scratchpad.
        // Sanitize identical markup once per build, keeping print-only attributes separate.
        const protectMathRelations = (value) => String(value ?? '')
            .replace(/\\\(([\s\S]*?)\\\)/g, (_, inner) => '\\(' + inner.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\\)')
            .replace(/\\\[([\s\S]*?)\\\]/g, (_, inner) => '\\[' + inner.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\\]');

        const preparedDiagrams = new Map();
        function prepareDiagram(source, forPrint = false) {
            if (!source) return '';
            const key = (forPrint ? 'print:' : 'screen:') + source;
            if (preparedDiagrams.has(key)) return preparedDiagrams.get(key);
            const holder = document.createElement('div');
            holder.innerHTML = source;
            window.autoFixSVGArrows(holder);
            if (forPrint) holder.querySelectorAll('img').forEach(img => {
                img.setAttribute('loading', 'eager');
                img.setAttribute('decoding', 'sync');
            });
            const result = holder.innerHTML;
            preparedDiagrams.set(key, result);
            return result;
        }
        // Geometry variants may share a letter-only diagram with their prototype.
        // A task's individual figure (or an inline figure) always takes priority.
        function taskDiagramParts(task, prototype, taskNumber, sourceText = task.text || '') {
            const ownDiagram = value => value && (value.svg_code || value.svg || value.theoryImageHTML ||
                value.imageHTML || value.draftSvg || value.standaloneSvg || value.gameSvg || value.displaySvg) || '';
            let diagramHTML = ownDiagram(task);
            let textHTML = String(sourceText || '');
            if ([15, 16, 17, 18, 23, 24, 25].includes(taskNumber)) {
                const holder = document.createElement('div');
                holder.innerHTML = protectMathRelations(textHTML);
                const figures = Array.from(holder.querySelectorAll('svg, picture, img')).filter(figure =>
                    !figure.parentElement.closest('svg, picture, mjx-container, script, style'));
                if (!diagramHTML) diagramHTML = figures.map(figure => figure.outerHTML).join('');
                figures.forEach(figure => figure.remove());
                textHTML = holder.innerHTML;
                if (!diagramHTML) diagramHTML = ownDiagram(prototype);
            }
            return {textHTML, diagramHTML: prepareDiagram(diagramHTML)};
        }
        const snapshotBuilt = [];
        const infoBoard = document.getElementById('info-board');
        infoBoard.style.display = 'none';
        infoBoard.innerHTML = '';
        currentInteractiveHTML = ""; currentPrintHTML = ""; currentAnswersHTML = "";

        const outputSection = document.getElementById('output-section');
        if (outputSection) {
            if (window.ogeClearRenderedContent) window.ogeClearRenderedContent(outputSection);
            outputSection.style.display = 'none';
            outputSection.innerHTML = '';
        }

        const btnGroup = document.getElementById('btn-group');
        if (btnGroup) btnGroup.style.display = 'none';

        window.currentGeneratedTasks = []; window.selectedBlockTitles = [];
        if (window.disposeOgeCanvases) window.disposeOgeCanvases();
        window.mainCanvases = {};

        let taskCounter = 0, hasContent = false;
        let stickerPack = window.ogeGenerationMode === 'full' ? 'none' : document.getElementById('sticker-select').value;
        let customStickers = getCustomStickerPack();
        let maxStickers = (stickerPack === 'custom') ? customStickers.length : ((stickerPack === 'ro') ? 10 : 5);
        if (stickerPack === 'custom' && maxStickers === 0) {
            infoBoard.innerHTML += `<div><b>Свой пакет стикеров:</b> пакет пустой, поэтому вариант будет создан без своих стикеров. Добавьте картинки через кнопку «Настроить стикеры».</div>`;
            infoBoard.style.display = 'block';
        }
        let lastStickerAddedAt = -1;

        if (stickerPack !== lastStickerPack) { globalStickerPool = []; lastStickerPack = stickerPack; lastStickerId = -1; }

        function getNextSticker(maxS) {
            if (globalStickerPool.length === 0) {
                let arr = []; for(let i=1; i<=maxS; i++) arr.push(i);
                shuffleArray(arr);
                if (arr[arr.length - 1] === lastStickerId && arr.length > 1) {[arr[arr.length - 1], arr[0]] = [arr[0], arr[arr.length - 1]];}
                globalStickerPool = arr;
            }
            lastStickerId = globalStickerPool.pop();
            return lastStickerId;
        }

        let nextStickerTarget = 2 + Math.floor(Math.random() * 2);

        // Считываем состояние обеих галочек
        let includeExplanations = document.getElementById('toggle-explanations').checked;
        let instantCheck = document.getElementById('toggle-instant-check').checked;
        let showCorrectOnError = document.getElementById('toggle-show-correct').checked;
        let orderedTasks = document.getElementById('toggle-ordered-tasks') ? document.getElementById('toggle-ordered-tasks').checked : false;

        window.generatorSettings = {
            instantCheck: instantCheck,
            showCorrectOnError: showCorrectOnError,
            includeExplanations: includeExplanations,
            orderedTasks: orderedTasks
        };

        const practiceGroups = frozenSnapshot ? {trainerTasks:[],scenarioTasks:[]} : buildOgePracticeTasks(
            infoBoard, orderedTasks, usageCounts, !!options.autoFull, fullPrototypeDecks);
        const trainerTasks = practiceGroups.trainerTasks || [];
        const scenarioTasks = practiceGroups.scenarioTasks || [];
        // Каждый выбранный сюжет — ровно пять связанных задач.
        // Не позволяем выпустить вариант без №1–5 при ненулевом счётчике.
        if (!frozenSnapshot) {
            const requiredScenarioSets = options.autoFull ? 1 : Math.max(0, Number(document.getElementById('count-practice-scenarios')?.value || 0));
            if (requiredScenarioSets > 0 && scenarioTasks.length !== requiredScenarioSets * 5) {
                throw new Error(`Выбрано ${requiredScenarioSets} комплект(ов) №1–5, но сформировано ${scenarioTasks.length} задач. Проверьте выбранные темы и варианты каждого номера 1–5.`);
            }
        }

        const selectedScenarioThemeTitles = getOgeScenarioThemeIds()
            .filter(themeId => {
                const checkbox = document.getElementById(`practice-scenario-theme-${themeId}`);
                return checkbox && checkbox.checked;
            })
            .map(themeId => window.ogePracticeDatabase?.[themeId]?.title)
            .filter(Boolean);
        const scenarioBlockTitle = selectedScenarioThemeTitles.length === 1
            ? `Задания 1–5. ${selectedScenarioThemeTitles[0]}`
            : 'Задания 1–5. Комплекты по сюжетам';

        // Сначала связанные задания ОГЭ 1–5, затем основные и дополнительные блоки 6+.
        const generationBlocks = frozenSnapshot
            ? frozenSnapshot.map(b => ({tid:b.tid,kind:b.kind,data:b.data,frozenTasks:b.tasks,autoFull:!!b.autoFull}))
            : [];
        if (!frozenSnapshot && trainerTasks.length > 0) {
            generationBlocks.push({ tid: '__oge_trainer__', kind: 'practice', data: { title: 'Задания 1–5. Тренажёры по прототипам' }, tasks: trainerTasks });
        }
        if (!frozenSnapshot && scenarioTasks.length > 0) {
            generationBlocks.push({ tid: '__oge_scenarios__', kind: 'practice', data: { title: scenarioBlockTitle }, tasks: scenarioTasks });
        }

        if (!frozenSnapshot) getUniqueTaskIds().forEach(tid => {
            const mainCountInput = document.getElementById(`count-${tid}`);
            const mainCount = options.autoFull ? 1 : (mainCountInput ? (parseInt(mainCountInput.value, 10) || 0) : 0);
            if (mainCount > 0 && window.database[tid]) {
                // Только полный вариант: №19 — одна готовая тройка утверждений
                // вместо отдельного вопроса «верно/неверно». В ручной сборке
                // основной банк №19 продолжает работать по-прежнему.
                const number = Number(String(tid).replace(/\D/g, ''));
                const tripleBank = options.autoFull && number === 19
                    ? (window.extraDatabase?.task19 || window.extraDatabase?.['19']) : null;
                const chosenBank = tripleBank?.prototypes?.length ? tripleBank : window.database[tid];
                generationBlocks.push({ tid, kind: 'main', data: chosenBank, requiredCount: mainCount, autoFull: !!options.autoFull });
            }

            const extraData = getExtraTaskData(tid);
            const extraCountInput = document.getElementById(`count-extra-${tid}`);
            const extraCount = options.autoFull ? 0 : (extraCountInput ? (parseInt(extraCountInput.value, 10) || 0) : 0);
            if (extraData && extraCount > 0) {
                generationBlocks.push({ tid, kind: 'extra', data: extraData, requiredCount: extraCount });
            }
        });

        for (const block of generationBlocks) {
            let tid = block.tid;
            const kind = block.kind || 'main';
            const isPracticeBlock = kind === 'practice';
            const sourceData = block.data;
            const blockData = (kind === 'extra')
                ? { ...sourceData, title: String(tid).replace(/\D/g, '') === '19' ? 'Утверждения тройками' : 'Дополнительно' }
                : sourceData;
            let finalTasks = [];

            if (Array.isArray(block.frozenTasks)) {
                finalTasks = block.frozenTasks.slice();
                window.selectedBlockTitles.push(blockData.title);
            } else if (isPracticeBlock) {
                finalTasks = block.tasks || [];
                window.selectedBlockTitles.push(blockData.title);
            } else {
                const requiredCount = block.requiredCount || 0;
                if (requiredCount <= 0 || !sourceData || !Array.isArray(sourceData.prototypes)) continue;

                const selectedProtos = (block.autoFull && kind==='main') ? sourceData.prototypes.filter(p=>Array.isArray(p.tasks) && p.tasks.length>0) : (kind === 'extra' && String(tid).replace(/\D/g, '') === '19')
                    ? sourceData.prototypes
                    : sourceData.prototypes.filter((p, idx) => {
                        const checkbox = document.getElementById(getPrototypeCheckboxId(tid, idx, kind));
                        return checkbox && checkbox.checked;
                    });
                if (selectedProtos.length === 0) continue;

                window.selectedBlockTitles.push(blockData.title);
                const isStatements = kind === 'main' && !block.autoFull &&
                    String(tid).replace(/\D/g, '') === '19' &&
                    typeof window.task19MakeStatementTasks === 'function';
                const availableCount = selectedProtos.reduce((sum,p) => sum +
                    (Array.isArray(p.tasks) ? p.tasks.length : 0), 0);
                if (!availableCount) {
                    infoBoard.innerHTML += `<div><b>${blockData.title}:</b> в выбранных прототипах нет доступных задач.</div>`;
                    infoBoard.style.display = 'block';
                    continue;
                }
                if (!isStatements && requiredCount > availableCount) {
                    infoBoard.innerHTML += `<div><b>${blockData.title}:</b> запрошено ${requiredCount}, уникальных задач в выбранных прототипах ${availableCount}. После первого круга задачи будут повторяться по новому кругу.</div>`;
                    infoBoard.style.display = 'block';
                }
                finalTasks = ogeChooseBalancedPrototypes({
                    selectedProtos, sourceData, kind, tid, requiredCount,
                    usageCounts, orderedTasks, fullPrototypeDecks: block.autoFull ? fullPrototypeDecks : null,
                    createTask: isStatements ? (proto =>
                        window.task19MakeStatementTasks(1, 1, [proto.topic])[0]) : null
                });
            }

            if (finalTasks.length === 0) continue;
            const blockSnapshotIndex = snapshotBuilt.length;
            snapshotBuilt.push({tid,kind,data:sourceData,tasks:finalTasks.slice(),autoFull:!!block.autoFull});
            hasContent = true;

            // ЧАСТЬ 2: как в генераторе ЕГЭ — без автоматической проверки и без разборов.
            // Условие сохраняет исходную типографику PDF, ученик записывает развёрнутое решение.
            if (kind === 'main' && /^2[0-5]$/.test(String(tid).replace(/\D/g, ''))) {
                const part2TaskNum = Number(String(tid).replace(/\D/g, ''));
                const isProofTask = part2TaskNum === 24;
                const h = `<h3 style="background:#fff7e9;border-left:4px solid #f59e0b;color:#9a560f;padding:12px 16px;margin:30px 0 14px">Часть 2. ${blockData.title}</h3>`;
                currentInteractiveHTML += h;
                currentPrintHTML += h;
                currentAnswersHTML += `<h3>Часть 2. Задание ${part2TaskNum}</h3><p>Ответы к заданиям с развёрнутым ответом. Оценивание решения выполняет учитель.</p>`;
                // Как в ЕГЭ: аналоги — только из того же прототипа, за исключением всех задач этого
                // прототипа, уже включённых в вариант (не показываем исходную задачу снова).
                const selectedIdsByProto = {};
                finalTasks.forEach(t => {
                    const key = String(t.theory && t.theory.code || t.theory && t.theory.desc || '');
                    if (!selectedIdsByProto[key]) selectedIdsByProto[key] = new Set();
                    selectedIdsByProto[key].add(String(t.id ?? t.text ?? ''));
                });
                let lastPart2TopicInVariant = '';
                finalTasks.forEach((item,itemIndex) => {
                    const printOffset = currentPrintHTML.length;
                    if (orderedTasks && part2TaskNum === 20) {
                        const topic = item.theory && item.theory.topic ? String(item.theory.topic) : '';
                        if (topic && topic !== lastPart2TopicInVariant) {
                            const heading = `<h4 class="task20-topic-variant-header" style="color:#9a560f;background:#fff7e9;padding:8px 12px;border-left:3px solid #f59e0b;margin:16px 0 12px;font-size:16px;break-after:avoid;page-break-after:avoid;">${topic}</h4>`;
                            currentInteractiveHTML += heading;
                            currentPrintHTML += heading;
                            currentAnswersHTML += `<h4>${topic}</h4>`;
                        }
                        lastPart2TopicInVariant = topic;
                    }
                    taskCounter++;
                    const replacementControl = ogeReplacementButton(blockSnapshotIndex,itemIndex,item,kind);
                    const part2Answer = String(item.answer || '').trim();
                    const proto = item.theory || {};
                    const protoKey = String(proto.code || proto.desc || '');
                    const usedIds = selectedIdsByProto[protoKey] || new Set();
                    const analogList = (Array.isArray(proto.tasks) ? proto.tasks : []).filter(a => !usedIds.has(String(a.id ?? a.text ?? '')));
                    let analogsHtml = `<h3 style="margin-top:0;color:#003399">Аналоги · ${proto.desc || 'Задание ' + part2TaskNum}</h3>`;
                    if (!analogList.length) {
                        analogsHtml += `<div style="padding:14px;background:#f5f5f5;border-radius:8px">Все похожие задания этого типа уже вошли в текущий вариант.</div>`;
                    } else {
                        analogsHtml += `<ol style="padding-left:24px">`;
                        analogList.forEach((a, ai) => {
                            const aid = `oge${part2TaskNum}-analog-${taskCounter}-${ai+1}`;
                            const answer = String(a.answer || 'Ответ отсутствует');
                            const analogDiagram = taskDiagramParts(a, proto, part2TaskNum);
                            const draft = buildOgePart2ScratchpadHTML(aid, true, analogDiagram.diagramHTML);
                            const figure = analogDiagram.diagramHTML ? `<div class="theory-analog-task-diagram" style="width:min(100%,420px);margin:12px auto;">${analogDiagram.diagramHTML}</div>` : '';
                            const analogyAnswerButton = String(a.answer || '').trim()
                                ? `<button type="button" onclick="const b=this.nextElementSibling;b.hidden=!b.hidden;this.textContent=b.hidden?'ПОКАЗАТЬ ОТВЕТ':'СКРЫТЬ ОТВЕТ';if(!b.hidden && window.MathJax && MathJax.typesetPromise)MathJax.typesetPromise([b]);" style="background:#e8f5e9;color:#1b5e20;border:1px solid #4caf50;border-radius:6px;padding:9px 13px;font-weight:bold;cursor:pointer">ПОКАЗАТЬ ОТВЕТ</button><div hidden style="flex-basis:100%;background:#eef6ff;color:#273448;border-left:4px solid #003399;padding:10px;border-radius:5px"><b>Ответ:</b> ${answer}</div>`
                                : '<span style="font-size:14px;color:#6b7280">Задача на доказательство — оценивание учителем</span>';
                            analogsHtml += `<li class="theory-analog-task" data-analog-id="${aid}" style="margin-bottom:22px;padding-bottom:16px;border-bottom:1px dashed #cbd5e1"><div style="line-height:1.55;font-size:17px">${analogDiagram.textHTML}</div>${figure}<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:12px"><button type="button" onclick="window.toggleCanvas('${aid}')" style="background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:6px;font-size:19px;padding:7px 11px;cursor:pointer" title="Открыть черновик">✏️</button>${analogyAnswerButton}</div>${draft}</li>`;
                        });
                        analogsHtml += `</ol>`;
                    }
                    const part2Diagram = taskDiagramParts(item, proto, part2TaskNum);
                    const part2Figure = part2Diagram.diagramHTML ? `<div style="width:min(100%,420px);margin:12px auto;">${part2Diagram.diagramHTML}</div>` : '';
                    const answerButton = part2Answer
                        ? `<button class="btn-settings second-answer-btn" id="second-answer-btn-${taskCounter}" style="background:#e8f5e9;color:#1b5e20;border:1px solid #4caf50;font-weight:bold;padding:9px 13px" onclick="window.showSecondPartAnswer('${taskCounter}')">ПОКАЗАТЬ ОТВЕТ</button>`
                        : '';
                    if (window.ogeCompactEmbeddedImages) analogsHtml = window.ogeCompactEmbeddedImages(analogsHtml);
                    const actionArea = `<div style="margin-top:13px;display:flex;gap:10px;align-items:center;flex-wrap:wrap"><button type="button" onclick="window.toggleCanvas('${taskCounter}')" title="Открыть черновик" style="background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:6px;font-size:20px;padding:7px 11px;cursor:pointer">✏️</button>${answerButton}<button class="btn-settings" type="button" style="background:#e3f2fd;color:#003399;border:1px solid #003399;font-weight:bold;padding:9px 13px" onclick="window.openTheoryModalLocal('oge${part2TaskNum}-analogs-${taskCounter}')">АНАЛОГИ</button><div id="oge${part2TaskNum}-analogs-${taskCounter}" style="display:none">${encodeURIComponent(analogsHtml)}</div><div id="second-answer-data-${taskCounter}" style="display:none">${encodeURIComponent(part2Answer)}</div><div id="second-final-answer-${taskCounter}" style="display:none;flex-basis:100%;background:#eef6ff;border-left:4px solid #003399;border-radius:6px;padding:12px 14px;color:#273448"></div></div>`;
                    currentInteractiveHTML += `<div class="generated-task-block second-part-task oge-part2-item" data-part="2" data-oge-block-index="${blockSnapshotIndex}" data-oge-item-index="${itemIndex}" style="padding:16px 0 22px;border-bottom:1px dashed #ccd6dc">${replacementControl}<div style="display:flex;align-items:flex-start;gap:13px"><b style="font-size:18px;min-width:24px">${taskCounter}.</b><div style="flex:1;min-width:0"><div style="font-size:17px;line-height:1.6">${part2Diagram.textHTML}</div>${part2Figure}${actionArea}</div></div>${buildOgePart2ScratchpadHTML(String(taskCounter),true,part2Diagram.diagramHTML)}</div>`;
                    currentPrintHTML += `<div class="task20-part2-item" style="padding:16px 0 22px;border-bottom:1px dashed #ccd6dc;break-inside:avoid;page-break-inside:avoid"><div style="display:flex;align-items:flex-start;gap:13px"><b style="font-size:18px;min-width:24px">${taskCounter}.</b><div style="flex:1;min-width:0"><div style="font-size:17px;line-height:1.6">${item.text}</div><div style="height:66px;border-bottom:1px dotted #cbd5e1;margin-top:12px"></div></div></div></div>`;
                    currentAnswersHTML += `<div style="margin:10px 0 14px;break-inside:avoid"><b>${taskCounter}.</b> ${part2Answer || (isProofTask ? 'Задача на доказательство. Проверка развёрнутого решения учителем.' : 'Ответ отсутствует')}</div>`;
                    printGroups['15-25'].push((itemIndex===0 ? `<h4>Задание ${part2TaskNum}</h4>` : '')+currentPrintHTML.slice(printOffset));
                    window.currentGeneratedTasks.push({text:window.ogeKeepMathHTML(item.text),draftText:window.ogeKeepMathHTML(item.text),presentationText:window.ogeKeepMathHTML(item.text),answer:part2Answer,part:2,isSecondPart:true,taskNumber:part2TaskNum,sourcePage:item.sourcePage,taskId:item.id,prototypeCode:proto.code || '',analogs:analogList.map(a=>({id:a.id,text:a.text,answer:a.answer})),analogsHtml});
                });
                continue;
            }

            let blockTitle = `<h3 style="background: #ecfdf5; padding: 10px 15px; border-left: 4px solid #14B8A6; margin-top: 30px; border-radius: 0 6px 6px 0; color: #0F766E;">${blockData.title}</h3>`;
            currentInteractiveHTML += blockTitle + `<div style="font-size: 16px;">`;
            currentPrintHTML += blockTitle + `<div style="font-size: 16px;">`;
            currentAnswersHTML += `<h3>${blockData.title}</h3><div>`;

            let lastExtraTopicInVariant = null;
            finalTasks.forEach((item,itemIndex) => {
                // Вычисляем номер экзаменационного задания до формирования данных
                // для интерактивных игр, печати и самого HTML-варианта.
                const interactiveTaskNumber = parseInt(String(tid).replace(/\D/g, ''), 10) || 0;
                const printOffset = currentPrintHTML.length;
                const replacementControl = ogeReplacementButton(blockSnapshotIndex,itemIndex,item,kind);
                // Тематические рубрики видны не только в настройке, но и в самом варианте.
                if (orderedTasks && kind === 'extra' && sourceData.preserveTopicOrder === true && String(tid).replace(/\D/g, '') !== '19') {
                    const currentTopic = item.theory && item.theory.topic ? String(item.theory.topic) : '';
                    if (currentTopic && currentTopic !== lastExtraTopicInVariant) {
                        const topicHeading = `<h4 class="extra-topic-variant-header" style="color:#0f766e;background:#edfdf8;padding:8px 12px;border-left:3px solid #14b8a6;margin:16px 0 12px;font-size:16px;break-after:avoid;page-break-after:avoid;">${currentTopic}</h4>`;
                        currentInteractiveHTML += topicHeading;
                        currentPrintHTML += topicHeading;
                        currentAnswersHTML += `<h4>${currentTopic}</h4>`;
                    }
                    lastExtraTopicInVariant = currentTopic;
                }
                if (item.beforeHTML) currentInteractiveHTML += item.beforeHTML;
                if (item.beforePrintHTML || item.beforeHTML) currentPrintHTML += item.beforePrintHTML || item.beforeHTML;
                if (item.beforeAnswersHTML) currentAnswersHTML += item.beforeAnswersHTML;

                taskCounter++;
                const renderText = item.displayText !== undefined ? item.displayText : item.text;
                const standaloneText = item.standaloneText !== undefined ? item.standaloneText : item.text;
                const acceptedAnswers = Array.isArray(item.accepts) && item.accepts.length
                    ? item.accepts.map(value => String(value))
                    : [String(item.answer ?? '')];
                const acceptedAnswerString = acceptedAnswers.join('|');
                const answerDisplay = acceptedAnswers.join(' или ');

                let mainSvg = item.displaySvg !== undefined ? item.displaySvg : (item.svg || item.svg_code || "");
                mainSvg = prepareDiagram(mainSvg);

                let standaloneSvg = item.standaloneSvg !== undefined ? item.standaloneSvg : (item.svg || item.svg_code || "");
                standaloneSvg = prepareDiagram(standaloneSvg);

                let printSvg = item.printSvg !== undefined ? item.printSvg : mainSvg;
                if (!printSvg && Number(String(tid).replace(/\D/g,'')) === 18) printSvg = item.svg_code || item.svg || item.theory?.svg_code || '';
                printSvg = prepareDiagram(printSvg, true);

                let theorySvgCode = "";
                if (item.theory) {
                    theorySvgCode = item.theory.svg_code || item.theory.theoryImageHTML || item.theory.imageHTML || item.theory.draftSvg || item.theory.standaloneSvg || "";
                    if (!theorySvgCode && /координатн|числовой\s+прям|отмечен[аоы]?\s+(?:число|числа|точк)/i.test(String(item.theory.theory_task || ''))) {
                        theorySvgCode = item.svg || item.svg_code || standaloneSvg || mainSvg || "";
                    }
                }
                theorySvgCode = prepareDiagram(theorySvgCode);

                // Для задания 7 всегда раскладываем содержимое так:
                // условие -> чертёж -> варианты ответов.
                const splitTask7TheoryHTML = (value) => {
                    const holder = document.createElement('div');
                    holder.innerHTML = protectMathRelations(value || '');
                    let choicesEl = holder.querySelector('.task7-choices');
                    // Резерв для старых дополнительных прототипов без класса.
                    if (!choicesEl) {
                        const grids = Array.from(holder.querySelectorAll('div')).filter(el => {
                            const st = String(el.getAttribute('style') || '').toLowerCase();
                            return st.includes('display:grid') && st.includes('grid-template-columns');
                        });
                        if (grids.length) choicesEl = grids[grids.length - 1];
                    }
                    let choicesHTML = '';
                    if (choicesEl) {
                        choicesHTML = choicesEl.outerHTML;
                        choicesEl.remove();
                    }
                    return { statementHTML: holder.innerHTML, choicesHTML };
                };

                // Дополнительные прототипы задания 11: условие -> крупный график -> варианты/формулы.
                const splitTask11ExtraHTML = (value) => {
                    const holder = document.createElement('div');
                    holder.innerHTML = protectMathRelations(value || '');
                    const afterEl = holder.querySelector('.task11-extra-after-diagram');
                    let choicesHTML = '';
                    if (afterEl) {
                        choicesHTML = afterEl.innerHTML;
                        afterEl.remove();
                    }
                    return { statementHTML: holder.innerHTML, choicesHTML };
                };

                const buildTheoryAnalogScratchpad = (analogId, diagramHTML) => {
                    const diagramCard = diagramHTML ? `
                        <div id="draft-diagram-card-${analogId}" style="position:absolute;left:12px;top:12px;width:min(46%,380px);max-width:calc(100% - 24px);z-index:1;pointer-events:none;background:transparent;">
                            ${diagramHTML}
                        </div>` : '';
                    return `<div id="draw-wrapper-${analogId}" style="display:none; margin-top:12px; width:100%; clear:both;">
                        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:5px; background:#e3f2fd; padding:8px 15px; border-radius:8px; border:1px solid #bbdefb; color:#333;">
                            <button onclick="window.setTool('${analogId}', 'pointer')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                            <button onclick="window.setTool('${analogId}', 'zoom')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Лупа: открыть чертёж в большом модальном окне">🔍</button>
                            <button onclick="window.setTool('${analogId}', 'pen')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Карандаш">🖊️</button>
<button onclick="window.setTool('${analogId}', 'highlighter')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Выделитель — полупрозрачный маркер">🖍️</button>
                            <button onclick="window.undoCanvas('${analogId}')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Отменить действие">↶</button>
                            <button onclick="window.redoCanvas('${analogId}')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Повторить действие">↷</button>
                            <select id="tool-select-${analogId}" onchange="window.setTool('${analogId}', this.value)" style="background:#fff;border:1px solid #90caf9;border-radius:4px;padding:4px 8px;font-size:14px;cursor:pointer;outline:none;color:#003399;font-weight:500;">
                                <option value="" disabled selected hidden>🔺 Фигуры</option>
                                <option value="line">📏 Прямая</option>
                                <option value="vector">↗️ Вектор</option>
                                <option value="circle">⭕ Окружность</option>
                                <option value="triangle">🔺 Треугольник</option>
                                <option value="cylinder">🛢️ Цилиндр</option>
                                <option value="cone">🍦 Конус</option>
                                <option value="sphere">🔮 Сфера</option>
                            </select>
                            <input type="color" id="color-${analogId}" value="#003399" style="cursor:pointer;height:30px;width:35px;border:none;background:transparent;padding:0;" title="Цвет">
                            <input type="range" id="size-${analogId}" min="1" max="15" step="0.1" value="2" style="cursor:pointer;width:80px;" title="Толщина линии">
                            <button onclick="window.setTool('${analogId}', 'eraser')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Ластик">🧽</button>
                            <div style="flex-grow:1;"></div>
                            <button onclick="window.clearCanvas('${analogId}')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Очистить всё">🗑️</button>
                            <input type="hidden" id="tool-${analogId}" value="pen">
                        </div>
                        <div style="position:relative;background-color:#fff;background-size:20px 20px;background-image:linear-gradient(to right,#d2e3f2 1px,transparent 1px),linear-gradient(to bottom,#d2e3f2 1px,transparent 1px);border:2px solid #bbdefb;border-radius:8px;overflow:hidden;height:390px;">
                            ${diagramCard}
                            <canvas id="canvas-${analogId}" style="position:absolute;left:0;top:0;z-index:2;display:block;width:100%;height:100%;touch-action:none;cursor:crosshair;"></canvas>
                        </div>
                    </div>`;
                };

                let theoryHtml = "";
                if (item.theory) {
                    const theoryTaskNumber = parseInt(String(tid).replace(/\D/g, ''), 10) || 0;
                    const isTask11Theory = theoryTaskNumber === 11 || theoryTaskNumber === 13;

                    // Сохраняем рисунок именно текущего задания, чтобы в разборе ученик видел свой чертёж.
                    let currentTaskSvgCode = item.gameSvg !== undefined ? item.gameSvg : (standaloneSvg || mainSvg || item.svg || item.svg_code || "");
                    currentTaskSvgCode = prepareDiagram(currentTaskSvgCode);
                    const currentTaskText = item.gameText !== undefined ? item.gameText : standaloneText;
                    const currentParts = isTask11Theory
                        ? splitTask11ExtraHTML(currentTaskText || '')
                        : splitTask7TheoryHTML(currentTaskText || '');

                    // Берём именно чертёж прототипа для верхней задачи разбора.
                    if (!theorySvgCode) {
                        theorySvgCode = item.theory.svg_code || item.theory.theoryImageHTML || item.theory.imageHTML || item.svg || item.svg_code || standaloneSvg || mainSvg || "";
                        theorySvgCode = prepareDiagram(theorySvgCode);
                    }

                    const topParts = isTask11Theory
                        ? splitTask11ExtraHTML(item.theory.theory_task || '')
                        : splitTask7TheoryHTML(item.theory.theory_task || '');
                    const theoryDiagramWidth = isTask11Theory ? 'min(100%,860px)' : 'min(52%,340px)';
                    const theoryDiagramMaxWidth = isTask11Theory ? '860px' : '340px';
                    const currentDiagram = currentTaskSvgCode ? `<div class="theory-current-task-diagram" style="width:${theoryDiagramWidth};max-width:${theoryDiagramMaxWidth};margin:14px auto 12px;background:transparent;">${currentTaskSvgCode}</div>` : '';
                    const currentChoices = currentParts.choicesHTML ? `<div class="theory-current-task-choices" style="width:100%;margin-top:10px;">${currentParts.choicesHTML}</div>` : '';
                    const topDiagram = theorySvgCode ? `<div class="theory-task-diagram" style="width:${theoryDiagramWidth};max-width:${theoryDiagramMaxWidth};margin:14px auto 12px;background:transparent;">${theorySvgCode}</div>` : '';
                    const topChoices = topParts.choicesHTML ? `<div class="theory-task-choices" style="width:100%;margin-top:10px;">${topParts.choicesHTML}</div>` : '';

                    const geometryScratchpad = (role, diagramHTML) => {
                        if (![15, 16, 17, 18].includes(theoryTaskNumber) || !diagramHTML) return '';
                        const id = `theory-${role}-${taskCounter}`;
                        return `<button type="button" onclick="window.toggleCanvas('${id}')" style="background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:6px;font-size:18px;padding:6px 10px;cursor:pointer;" title="Открыть черновик для этой задачи">✏️</button>${buildTheoryAnalogScratchpad(id, diagramHTML)}`;
                    };
                    const currentScratchpad = geometryScratchpad('current', currentTaskSvgCode);
                    const exampleScratchpad = geometryScratchpad('example', theorySvgCode);
                    const solutionBlockId = `theory-solution-${taskCounter}`;
                    const showSolutionId = `theory-show-solution-${taskCounter}`;
                    theoryHtml = `
                        <h3>Разбор задания</h3>
                        <div style='background:#f5f9ff;padding:15px;border:1px solid #bfdbfe;margin-bottom:14px;border-radius:8px;'>
                            <p style='margin-top:0;color:#1d4ed8;'><b>Ваше задание:</b></p>
                            <div style="width:100%;line-height:1.5;">${currentParts.statementHTML}</div>
                            ${currentDiagram}
                            ${currentChoices}
                            ${currentScratchpad}
                        </div>
                        <div style='margin:0 0 10px;color:#7c2d12;font-weight:700;'>Ниже показан разбор аналогичного задания.</div>
                        <div id="${solutionBlockId}" style='background:#f9f9f9;padding:15px;border-left:4px solid #ff8c00;margin-bottom:15px;border-radius:6px;'>
                            <p style='margin-top:0;'><b>Аналогичная задача:</b></p>
                            <div style="width:100%;line-height:1.5;">${topParts.statementHTML}</div>
                            ${topDiagram}
                            ${topChoices}
                            ${exampleScratchpad}
                            <p style='margin-top:20px;'><b>Решение:</b></p>
                            <div>${protectMathRelations(item.theory.theory_sol)}</div>
                            <div style="display:flex;justify-content:flex-end;margin-top:14px;padding-top:10px;border-top:1px solid #e5e5e5;">
                                <button type="button" onclick="document.getElementById('${solutionBlockId}').style.display='none';document.getElementById('${showSolutionId}').style.display='flex';" style="background:none;border:none;color:#666;font-size:15px;cursor:pointer;padding:5px 2px;text-decoration:underline;text-underline-offset:3px;">Скрыть решение</button>
                            </div>
                        </div>
                        <div id="${showSolutionId}" style="display:none;justify-content:flex-end;margin:0 0 12px;">
                            <button type="button" onclick="document.getElementById('${solutionBlockId}').style.display='block';this.parentElement.style.display='none';if(window.MathJax) MathJax.typesetPromise([document.getElementById('${solutionBlockId}')]);" style="background:#fff7ed;border:1px solid #fdba74;color:#c2410c;border-radius:7px;padding:7px 11px;font-weight:700;cursor:pointer;">Показать разбор решения</button>
                        </div>
                    `;
                    if (Array.isArray(item.theory.tasks) && item.theory.tasks.length > 0) {
                        theoryHtml += `<h4 style='color:#ff8c00;'>Аналогичные задачи этого номера:</h4><ul style='padding-left:20px;'>`;
                        item.theory.tasks.forEach((t, analogIndex) => {
                            const analogSourceText = isTask11Theory
                                ? (t.text || '')
                                : (t.theoryText !== undefined ? t.theoryText : (t.text || ''));
                            const analogDiagram = taskDiagramParts(t, item.theory, theoryTaskNumber, analogSourceText);
                            let tSvgCode = analogDiagram.diagramHTML;
                            if (!tSvgCode && theorySvgCode && /координатн|числовой\s+прям|отмечен[аоы]?\s+(?:число|числа|точк)/i.test(String(t.text || ''))) {
                                tSvgCode = theorySvgCode;
                            }
                            const analogParts = isTask11Theory
                                ? splitTask11ExtraHTML(analogDiagram.textHTML)
                                : splitTask7TheoryHTML(analogDiagram.textHTML);
                            const analogDiagramWidth = isTask11Theory ? 'min(100%,860px)' : 'min(52%,340px)';
                            const analogDiagramMaxWidth = isTask11Theory ? '860px' : '340px';
                            const tSvg = tSvgCode ? `<div class="theory-analog-task-diagram" style="width:${analogDiagramWidth};max-width:${analogDiagramMaxWidth};margin:12px auto;background:transparent;">${tSvgCode}</div>` : '';
                            const tChoices = analogParts.choicesHTML ? `<div class="theory-analog-task-choices" style="width:100%;margin-top:10px;">${analogParts.choicesHTML}</div>` : '';
                            const analogId = `analog-${taskCounter}-${analogIndex + 1}`;
                            const analogScratchpad = buildTheoryAnalogScratchpad(analogId, tSvgCode);
                            theoryHtml += `<li class="theory-analog-task" data-analog-id="${analogId}" style='margin-bottom:22px;'>
                                <div style="width:100%;line-height:1.5;">${analogParts.statementHTML}</div>
                                ${tSvg}
                                ${tChoices}
                                <div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
                                    <span style='color:#003399;cursor:pointer;border-bottom:1px dashed #003399;' onclick='this.innerText="Ответ: ${t.answer}";this.style.border="none";this.style.fontWeight="bold";'>Показать ответ</span>
                                    <button type="button" onclick="window.toggleCanvas('${analogId}')" style="background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:6px;font-size:18px;padding:6px 10px;cursor:pointer;" title="Открыть черновик для этого аналога">✏️</button>
                                </div>
                                ${analogScratchpad}
                            </li>`;
                        });
                        theoryHtml += `</ul>`;
                    }
                }

                // Task 19: разбираем ТОЛЬКО текущее утверждение или текущую готовую тройку.
                // Не используем стандартное окно с аналогами для других заданий.
                if (String(tid).replace(/\D/g, '') === '19' && item.theory) {
                    const selectedStatement = item.gameText !== undefined ? item.gameText : standaloneText;
                    const exactExplanation = item.theory.theory_sol || '';
                    const solutionBlockId19 = `theory-solution-${taskCounter}`;
                    const showSolutionId19 = `theory-show-solution-${taskCounter}`;
                    theoryHtml = `
                        <h3>Разбор задания</h3>
                        <div style="background:#f5f9ff;padding:15px;border:1px solid #bfdbfe;margin-bottom:14px;border-radius:8px;">
                            <p style="margin:0 0 10px;color:#1d4ed8;"><b>Ваше задание:</b></p>
                            <div style="line-height:1.55;">${protectMathRelations(selectedStatement)}</div>
                        </div>
                        <div id="${solutionBlockId19}" style="background:#f9f9f9;padding:15px;border-left:4px solid #ff8c00;border-radius:6px;">
                            <p style="margin:0 0 12px;"><b>Объяснение именно этого задания:</b></p>
                            <div style="line-height:1.6;">${protectMathRelations(exactExplanation)}</div>
                            <div style="display:flex;justify-content:flex-end;margin-top:14px;">
                                <button type="button" onclick="document.getElementById('${solutionBlockId19}').style.display='none';document.getElementById('${showSolutionId19}').style.display='flex';" style="background:none;border:none;color:#666;cursor:pointer;text-decoration:underline;">Скрыть объяснение</button>
                            </div>
                        </div>
                        <div id="${showSolutionId19}" style="display:none;justify-content:flex-end;margin:10px 0;">
                            <button type="button" onclick="document.getElementById('${solutionBlockId19}').style.display='block';this.parentElement.style.display='none';" style="background:#fff7ed;border:1px solid #fdba74;color:#c2410c;border-radius:7px;padding:8px 12px;cursor:pointer;">Показать объяснение</button>
                        </div>`;
                }

                window.currentGeneratedTasks.push({ text: window.ogeKeepMathHTML(item.gameText !== undefined ? item.gameText : standaloneText), draftText: window.ogeKeepMathHTML(item.gameText !== undefined ? item.gameText : renderText), presentationText: window.ogeKeepMathHTML(item.presentationText !== undefined ? item.presentationText : (item.gameText !== undefined ? item.gameText : standaloneText)), presentationHasTable: Boolean(item.presentationHasTable), svg: item.gameSvg !== undefined ? item.gameSvg : standaloneSvg, task19Single: interactiveTaskNumber === 19 && !!item.task19Single, answer: String(item.answer), accepts: acceptedAnswers, theory: theoryHtml, showCorrectOnError: showCorrectOnError, instantCheck: instantCheck, taskNumber: Number(item.examNumber || item.__ogeScenarioMeta?.taskNumber || String(tid || '').replace(/\D/g, '')) || 0, scenarioGroupId: item.__ogeScenarioMeta?.groupId || '' });

                let stickerHTMLInteractive = "";
                const paperAnswerLine = interactiveTaskNumber === 19 && item.task19Single
                    ? 'Ответ: &#9633; Верно &nbsp;&nbsp; &#9633; Неверно'
                    : 'Ответ: ______________________________';
                let stickerHTMLPrint = "";
                let pr = 0;

                if (window.ogeGenerationMode !== 'full' && stickerPack !== 'none' && maxStickers > 0 && taskCounter === nextStickerTarget) {
                    lastStickerAddedAt = taskCounter;
                    let sIdx = getNextSticker(maxStickers), rot = Math.floor(Math.random() * 31) - 15;
                    let mw = 112, mh = 96;
                    let stickerSrc = "";
                    let quote = "";

                    if (stickerPack === 'custom') {
                        stickerSrc = customStickers[sIdx - 1] || "";
                        mw = 120;
                        mh = 105;
                    } else {
                        if (stickerPack === 'sci') {
                            if ([1,4].includes(sIdx)) { mw *= 1.8; mh *= 1.8; }
                            else if (sIdx === 3) { mw *= 1.35; mh *= 1.35; }
                            else if (sIdx === 5) { mw *= 1.5; mh *= 1.5; }
                        } else if (stickerPack === 'ro') { mw *= 1.3; mh *= 1.3; }

                        stickerSrc = window.getEmbeddedAssetUrl(stickerPack + '_' + sIdx + '.png');
                        quote = (stickerPack === 'sci' && sciQuotes[sIdx]) ? `<div style="font-family:'Caveat', cursive; font-size:16px; color:#003399; margin-top:5px; transform:rotate(${rot/3}deg); text-align:center; line-height:1.1; width: 100%; word-wrap: break-word;">${sciQuotes[sIdx]}</div>` : "";
                    }

                    if (stickerSrc) {
                        stickerHTMLInteractive = `<div style="flex-shrink:0; margin-left: 20px; width: ${mw+20}px; display:flex; flex-direction:column; align-items:center; page-break-inside: avoid;"><img src="${stickerSrc}" style="max-width:${mw}px;max-height:${mh}px;transform:rotate(${rot}deg);filter:drop-shadow(2px 4px 6px rgba(0,0,0,0.15));pointer-events:none;object-fit:contain;">${quote}</div>`;

                        stickerHTMLPrint = `<div class="sticker-print" style="flex:0 0 ${mw+24}px; width:${mw+24}px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; page-break-inside:avoid; break-inside:avoid; align-self:center; margin-left:12px;"><img src="${stickerSrc}" style="max-width:${mw}px;max-height:${mh}px;transform:rotate(${rot}deg);filter:drop-shadow(2px 4px 6px rgba(0,0,0,0.15));pointer-events:none;object-fit:contain;">${quote}</div>`;

                        pr = mw + 30;
                    }

                    nextStickerTarget += 3 + Math.floor(Math.random() * 2);
                }

                // Добавляем новые кнопки: Мгновенная проверка и Разбор
                let instantBtn = instantCheck ? `<button class="btn-instant" onclick='checkSingle(this, ${taskCounter}, ${JSON.stringify(acceptedAnswerString)})' style="background: #e8f5e9; border: 1px solid #4CAF50; border-radius: 6px; font-size: 18px; cursor: pointer; padding: 8px 12px; outline: none; transition: 0.2s;" title="Проверить">✅</button>` : "";
                let drawBtn = `<button class="btn-settings" style="background: #fff3e0; color: #e65100; border: 1px solid #ffcc80; font-size: 18px; padding: 8px 12px;" onclick="window.toggleCanvas('${taskCounter}')" title="Открыть черновик">✏️</button>`;
                if (window.ogeCompactEmbeddedImages) theoryHtml = window.ogeCompactEmbeddedImages(theoryHtml);
                let helpBtn = includeExplanations && item.theory ? `<button id="btn-help-${taskCounter}" class="btn-settings btn-help" style="display:none; background: #e3f2fd; color: #003399; border: 1px solid #003399; font-weight: bold; padding: 10px 15px;" onclick="window.openTheoryModalLocal('theory-data-${taskCounter}')">РАЗБОР</button><div id="theory-data-${taskCounter}" style="display:none;">${encodeURIComponent(theoryHtml)}</div>` : "";

                const draftDiagramTaskNum = parseInt(String(tid).replace(/\D/g, '')) || 0;
                let draftDiagramSource = item.draftSvg || standaloneSvg || mainSvg || "";
                draftDiagramSource = prepareDiagram(draftDiagramSource);
                if (!draftDiagramSource && standaloneText) {
                    let tmpDiagram = document.createElement('div');
                    tmpDiagram.innerHTML = standaloneText;
                    window.autoFixSVGArrows(tmpDiagram);
                    let foundDiagram = tmpDiagram.querySelector('svg, img, picture, canvas');
                    if (foundDiagram) draftDiagramSource = foundDiagram.outerHTML;
                }
                const needsDraftDiagram = Boolean(item.forceDraftDiagram) || Boolean(draftDiagramSource) || [1, 2, 3, 8, 11].includes(draftDiagramTaskNum);
                const isTropinkiDraft = /(?:Тропинк|Tropinka|План сюжета[^<]{0,80}Тропинки)/i.test(String(draftDiagramSource || '') + ' ' + String(item.text || '') + ' ' + String(item.typeTitle || ''));
                const draftDiagramWidth = isTropinkiDraft ? 'min(42%, 350px)' : 'min(62%, 620px)';
                let draftDiagramHTML = (needsDraftDiagram && draftDiagramSource) ? `<style>
                    .draft-diagram-card-${taskCounter} {
                        position:absolute;
                        left:12px;
                        top:12px;
                        width:${draftDiagramWidth};
                        max-width:calc(100% - 24px);
                        height:auto;
                        background:transparent;
                        border:none;
                        border-radius:0;
                        box-shadow:none;
                        padding:0;
                        box-sizing:border-box;
                        display:block;
                        overflow:visible;
                        z-index:1;
                        pointer-events:none;
                    }
                    .draft-diagram-card-${taskCounter} svg,
                    .draft-diagram-card-${taskCounter} img,
                    .draft-diagram-card-${taskCounter} picture,
                    .draft-diagram-card-${taskCounter} canvas {
                        display:block !important;
                        width:100% !important;
                        max-width:100% !important;
                        max-height:none !important;
                        height:auto !important;
                        object-fit:contain !important;
                        margin:0 !important;
                    }
                    .draft-zoom-panel-${taskCounter} {
                        display:none;
                        position:absolute;
                        inset:0;
                        overflow:auto;
                        z-index:6;
                        background:rgba(255,255,255,.15);
                        padding:18px;
                        box-sizing:border-box;
                        cursor:zoom-out;
                    }
                    .draft-zoom-panel-${taskCounter} img,
                    .draft-zoom-panel-${taskCounter} svg,
                    .draft-zoom-panel-${taskCounter} picture,
                    .draft-zoom-panel-${taskCounter} canvas {
                        display:block !important;
                        width:1200px !important;
                        max-width:none !important;
                        max-height:none !important;
                        height:auto !important;
                        margin:0 auto !important;
                        object-fit:contain !important;
                    }
                </style><div id="draft-diagram-card-${taskCounter}" class="draft-diagram-card-${taskCounter}">${draftDiagramSource}</div><div id="draft-zoom-panel-${taskCounter}" class="draft-zoom-panel-${taskCounter}" onclick="window.toggleDraftZoom('${taskCounter}', true, event)">${draftDiagramSource}</div>` : "";

                let scratchpadHTML = `<div id="draw-wrapper-${taskCounter}" style="display:none; margin-top: 20px; width: 100%; transition: all 0.3s ease; clear: both;">
                    <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 5px; background: #e3f2fd; padding: 8px 15px; border-radius: 8px; border: 1px solid #bbdefb; color: #333;">
                        <button onclick="window.setTool('${taskCounter}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                        <button onclick="window.setTool('${taskCounter}', 'zoom')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Лупа: открыть чертёж в большом модальном окне">🔍</button>
                        <button onclick="window.setTool('${taskCounter}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
<button onclick="window.setTool('${taskCounter}', 'highlighter')" style="background:none;border:none;cursor:pointer;font-size:20px;" title="Выделитель — полупрозрачный маркер">🖍️</button>
                        <button onclick="window.undoCanvas('${taskCounter}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Отменить действие">↶</button>
                        <button onclick="window.redoCanvas('${taskCounter}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Повторить действие">↷</button>
                        <select id="tool-select-${taskCounter}" onchange="window.setTool('${taskCounter}', this.value)" style="background: #fff; border: 1px solid #90caf9; border-radius: 4px; padding: 4px 8px; font-size: 14px; cursor: pointer; outline: none; color: #003399; font-weight: 500;">
                            <option value="" disabled selected hidden>🔺 Фигуры</option>
                            <option value="line">📏 Прямая</option>
                            <option value="vector">↗️ Вектор</option>
                            <option value="circle">⭕ Окружность</option>
                            <option value="triangle">🔺 Треугольник</option>
                            <option value="cylinder">🛢️ Цилиндр</option>
                            <option value="cone">🍦 Конус</option>
                            <option value="sphere">🔮 Сфера</option>
                        </select>
                        <input type="color" id="color-${taskCounter}" value="#003399" style="cursor:pointer; height: 30px; width: 35px; border: none; background: transparent; padding: 0;" title="Цвет">
                        <input type="range" id="size-${taskCounter}" min="1" max="15" step="0.1" value="2" style="cursor:pointer; width: 80px;" title="Толщина линии">
                        <button onclick="window.setTool('${taskCounter}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                        <div style="flex-grow:1;"></div>
                        <button onclick="window.clearCanvas('${taskCounter}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                        <input type="hidden" id="tool-${taskCounter}" value="pen">
                    </div>
                    <div style="position:relative; background-color: #fff; background-size: 20px 20px; background-image: linear-gradient(to right, #d2e3f2 1px, transparent 1px), linear-gradient(to bottom, #d2e3f2 1px, transparent 1px); border: 2px solid #bbdefb; border-radius: 8px; overflow: hidden; height: 390px;">${draftDiagramHTML}<canvas id="canvas-${taskCounter}" style="position:absolute; left:0; top:0; z-index:2; display:block; width:100%; height:100%; touch-action: none; cursor: crosshair;"></canvas></div>
                </div>`;

                let interactiveTaskCore = '';
                const isTask7Interactive = interactiveTaskNumber === 7;
                if (isTask7Interactive) {
                    // Задание 7 всегда верстаем вертикально:
                    // условие на всю ширину -> координатная прямая -> варианты -> ответ/черновик.
                    const task7DiagramHTML = mainSvg || standaloneSvg || item.svg || item.svg_code || '';
                    const task7Tmp = document.createElement('div');
                    task7Tmp.innerHTML = renderText || '';
                    const task7ChoicesEl = task7Tmp.querySelector('.task7-choices');
                    let task7ChoicesHTML = '';
                    if (task7ChoicesEl) {
                        task7ChoicesHTML = task7ChoicesEl.outerHTML;
                        task7ChoicesEl.remove();
                    }
                    const task7StatementHTML = task7Tmp.innerHTML;
                    interactiveTaskCore = `<div class="task7-vertical-task" style="display:grid; grid-template-columns:auto minmax(0,1fr); column-gap:14px; width:100%; flex-grow:1; min-width:0; align-items:start;">
                        <div style="font-weight:bold; font-size:1.1em; padding-top:2px;">${taskCounter}.</div>
                        <div style="min-width:0; width:100%;">
                            <div class="task7-interactive-statement" style="width:100%; font-size:1em; line-height:1.5;">${task7StatementHTML}</div>
                            ${task7DiagramHTML ? `<div class="task7-interactive-diagram" style="width:min(46%,380px); max-width:380px; margin:12px auto 10px;">${task7DiagramHTML}</div>` : ''}
                            ${task7ChoicesHTML ? `<div class="task7-interactive-choices" style="width:100%; margin-top:8px;">${task7ChoicesHTML}</div>` : ''}
                            <div style="margin-top:15px; display:flex; align-items:center; flex-wrap:wrap; gap:10px; clear:both;"><input type="text" class="ans-box" id="ans-interactive-${taskCounter}" data-task-num="${taskCounter}" placeholder="Ответ..." data-ans="${acceptedAnswerString}" style="padding:10px 15px; border:2px solid #ccc; border-radius:6px; font-size:16px; font-weight:bold; width:150px; outline:none; transition:0.3s;">${instantBtn}${drawBtn}${helpBtn}<span class="answer-feedback" id="feedback-${taskCounter}" style="font-weight:bold; font-size:15px; display:none;"></span></div>
                        </div>
                    </div>`;
                }
                const isStacked11 = item.layout === 'stacked11';
                let stacked11Parts = null;
                if (isStacked11) {
                    stacked11Parts = splitTask11ExtraHTML(renderText || '');
                    interactiveTaskCore = `<div class="task11-extra-vertical-task" style="display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:14px;width:100%;flex-grow:1;min-width:0;align-items:start;">
                        <div style="font-weight:bold;font-size:1.1em;padding-top:2px;">${taskCounter}.</div>
                        <div style="min-width:0;width:100%;">
                            <div style="width:100%;font-size:17px;line-height:1.48;">${stacked11Parts.statementHTML}</div>
                            ${mainSvg ? `<div class="task11-extra-interactive-diagram" style="width:100%;max-width:900px;margin:14px auto 12px;">${mainSvg}</div>` : ''}
                            ${stacked11Parts.choicesHTML ? `<div class="task11-extra-interactive-options" style="width:100%;margin-top:6px;">${stacked11Parts.choicesHTML}</div>` : ''}
                            <div style="margin-top:15px;display:flex;align-items:center;flex-wrap:wrap;gap:10px;clear:both;"><input type="text" class="ans-box" id="ans-interactive-${taskCounter}" data-task-num="${taskCounter}" placeholder="Ответ..." data-ans="${acceptedAnswerString}" style="padding:10px 15px;border:2px solid #ccc;border-radius:6px;font-size:16px;font-weight:bold;width:150px;outline:none;transition:0.3s;">${instantBtn}${drawBtn}${helpBtn}<span class="answer-feedback" id="feedback-${taskCounter}" style="font-weight:bold;font-size:15px;display:none;"></span></div>
                        </div>
                    </div>`;
                }
                // Task 19 main: one statement, two explicit binary response buttons.
                if (interactiveTaskNumber === 19 && kind === 'main' && item.task19Single) {
                    const choiceInputId = `ans-interactive-${taskCounter}`;
                    const singleText = renderText;
                    interactiveTaskCore = `<div style="display:flex;gap:15px;flex-grow:1;min-width:0;align-items:flex-start;">
                        <div style="font-weight:700;font-size:1.1em;padding-top:2px;">${taskCounter}.</div>
                        <div style="flex:1;min-width:0;">
                            <div style="line-height:1.5">${singleText}</div>
                            <div style="display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:14px;">
                                <input type="text" class="ans-box" id="${choiceInputId}" data-task-num="${taskCounter}" data-ans="${acceptedAnswerString}" style="position:absolute;opacity:0;width:1px;height:1px;pointer-events:none;" readonly aria-label="Выбранный ответ: верно или неверно">
                                <button type="button" class="task19-binary-btn" data-binary-value="1" data-task-num="${taskCounter}" onclick="window.choose19Binary(this,'${choiceInputId}','1')" style="padding:9px 19px;border:2px solid #b7cbd1;background:#fff;border-radius:7px;cursor:pointer;font-weight:700;">Верно</button>
                                <button type="button" class="task19-binary-btn" data-binary-value="0" data-task-num="${taskCounter}" onclick="window.choose19Binary(this,'${choiceInputId}','0')" style="padding:9px 19px;border:2px solid #b7cbd1;background:#fff;border-radius:7px;cursor:pointer;font-weight:700;">Неверно</button>
                                ${instantBtn}${drawBtn}${helpBtn}
                                <span class="answer-feedback" id="feedback-${taskCounter}" style="font-weight:bold;font-size:15px;display:none;"></span>
                            </div>
                        </div></div>`;
                }
                if (!interactiveTaskCore) {
                    interactiveTaskCore = `<div style="display:flex; align-items:flex-start; gap:15px; flex-grow:1; min-width:0;"><div style="flex-shrink:0; font-weight:bold; font-size:1.1em; padding-top:2px;">${taskCounter}.</div>${mainSvg ? `<div style="flex-shrink:0; min-width:150px; max-width:350px;">${mainSvg}</div>` : ""}<div style="flex-grow:1; min-width:0;"><div>${renderText}</div><div style="margin-top:15px; display:flex; align-items:center; flex-wrap:wrap; gap:10px; clear:both;"><input type="text" class="ans-box" id="ans-interactive-${taskCounter}" data-task-num="${taskCounter}" placeholder="Ответ..." data-ans="${acceptedAnswerString}" style="padding:10px 15px; border:2px solid #ccc; border-radius:6px; font-size:16px; font-weight:bold; width:150px; outline:none; transition:0.3s;">${instantBtn}${drawBtn}${helpBtn}<span class="answer-feedback" id="feedback-${taskCounter}" style="font-weight:bold; font-size:15px; display:none;"></span></div></div></div>`;
                }
                if (interactiveTaskNumber === 11 && kind === 'main') {
                    // Поверх обычного ответа: ученик заполняет три ячейки, проверка читает скрытое поле.
                    const hidden = /<input\b[^>]*class="ans-box"[^>]*>/;
                    if (hidden.test(interactiveTaskCore)) {
                        interactiveTaskCore = interactiveTaskCore.replace(hidden, function(tag) {
                            return tag.replace(/placeholder="[^"]*"/, 'aria-label="Ответ задания 11"')
                                .replace(/style="[^"]*"/, 'style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;"')
                                .replace(/type="text"/, 'type="text" readonly');
                        });
                        const matchTable = `<div class="oge-match11-interactive" data-task="${taskCounter}" style="margin:15px 0 6px;max-width:340px"><div style="margin-bottom:8px;font-size:15px">В таблице под каждой буквой укажите соответствующий номер.</div><table style="border-collapse:collapse;width:100%;table-layout:fixed;background:white"><thead><tr><th>А</th><th>Б</th><th>В</th></tr></thead><tbody><tr>${['А','Б','В'].map((label,j)=>`<td><select aria-label="Ответ ${label}" onchange="window.ogeUpdate11Match(this,${taskCounter})"><option value="">—</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></td>`).join('')}</tr></tbody></table><span class="oge-match11-preview" style="display:block;margin-top:7px;color:#41526b;font-size:13px">Ответ: —</span></div>`;
                        interactiveTaskCore = interactiveTaskCore.replace(/(<input\b[^>]*class="ans-box"[^>]*>)/, matchTable+'$1');
                    }
                }
                currentInteractiveHTML += `<div class="generated-task-block" data-oge-block-index="${blockSnapshotIndex}" data-oge-item-index="${itemIndex}" style="margin-bottom:30px; clear:both; overflow:hidden; border-bottom:1px dashed #ddd; padding-bottom:20px;">${replacementControl}<div style="display:flex; align-items:flex-start; justify-content:space-between;">${interactiveTaskCore}${stickerHTMLInteractive}</div>${scratchpadHTML}</div>`;

                if (isStacked11) {
                    const p11 = stacked11Parts || splitTask11ExtraHTML(renderText || '');
                    currentPrintHTML += `<div class="task-print-block" style="page-break-inside:avoid;break-inside:avoid;margin-bottom:18px;padding-bottom:14px;">
                        <div style="display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;align-items:start;">
                            <div style="font-weight:700;font-size:15px;">${taskCounter}.</div>
                            <div style="min-width:0;">
                                <div style="font-size:14px;line-height:1.35;">${p11.statementHTML}</div>
                                ${printSvg ? `<div style="width:100%;max-width:780px;margin:8px auto 7px;">${printSvg}</div>` : ''}
                                ${p11.choicesHTML ? `<div style="font-size:13.5px;line-height:1.35;margin-top:4px;">${p11.choicesHTML}</div>` : ''}
                                <div class="task-print-answer" style="margin-top:8px;">${paperAnswerLine}</div>
                            </div>${stickerHTMLPrint}
                        </div>
                    </div>`;
                } else if (item.printLayout === 'image-grid') {
                    const gridHeight = item.printGridHeight || 105;
                    const compactPrint = Boolean(item.printCompact);
                    const isPracticePicture = kind === 'practice' && Boolean(item.__ogeScenarioMeta);
                    const practiceName = String(item.__ogeScenarioMeta?.themeTitle || '');
                    const isTropinkiPicture = isPracticePicture && /тропинк/i.test(practiceName);
                    const isStovePicture = isPracticePicture && /печ(ь|к)/i.test(practiceName);
                    // Схемы сюжетов теперь крупно расположены внутри общего условия.
                    // Клетчатое поле задания остаётся свободным для записи решения.
                    const enlargePracticePicture = isPracticePicture && isStovePicture && Number(item.examNumber) === 5;
                    const moveConditionBesidePicture = false;
                    const printPictureClasses = (enlargePracticePicture ? ' oge-print-enlarged' : '')
                        + (moveConditionBesidePicture ? ' oge-print-cond-side' : '');
                    if (item.printBreakBefore) {
                        currentPrintHTML += `<div style="page-break-before:always; break-before:page; height:0;"></div>`;
                    }
                    const compactStyle = compactPrint ? `<style>
                        .print-compact-task-${taskCounter} { margin-bottom:10px !important; padding-bottom:8px !important; page-break-inside:avoid; break-inside:avoid; }
                        .print-compact-task-${taskCounter} .common-table { font-size:11.5px !important; margin:5px 0 !important; }
                        .print-compact-task-${taskCounter} .common-table th,
                        .print-compact-task-${taskCounter} .common-table td { padding:3px 4px !important; line-height:1.12 !important; }
                        .print-compact-task-${taskCounter} p { margin:5px 0 !important; line-height:1.2 !important; }
                    </style>` : '';
                    // В «Тропинках» оригинальный размер плана; у «Печек»
                    // оригинальное расположение условия. Остальные комплекты:
                    // рисунок слева, условие и клетчатое поле справа.
                    const questionHTML = `<div class="oge-print-question" style="margin-bottom:${compactPrint ? 5 : 8}px; font-size:${compactPrint ? 14 : 16}px; line-height:1.25;"><b>${taskCounter}.</b> ${renderText}</div>`;
                    const questionInsideSolution = moveConditionBesidePicture ? questionHTML : '';
                    const questionAbove = moveConditionBesidePicture ? '' : questionHTML;
                    currentPrintHTML += `${compactStyle}<div class="task-print-block oge-image-grid-print${printPictureClasses} ${compactPrint ? `print-compact-task-${taskCounter}` : ''}" style="page-break-inside:avoid; break-inside:avoid;">${questionAbove}<div class="oge-image-grid-layout" style="display:flex; gap:${compactPrint ? 8 : 10}px; align-items:flex-start;">${printSvg ? `<div class="task-print-img oge-image-grid-figure" style="flex:0 0 63%; max-width:63%; align-self:flex-start;">${printSvg}</div>` : ''}<div class="oge-image-grid-solution" style="flex:1; min-width:0; display:block;">${questionInsideSolution}<div class="oge-print-solution-label" style="font-weight:700; color:#003399; margin-bottom:5px;">Решение:</div><div class="oge-image-grid-paper" style="min-height:${gridHeight}px; border:2px solid #7aa7d2; border-radius:6px; background-size:16px 16px; background-image:linear-gradient(to right,#c7dceb 1px,transparent 1px),linear-gradient(to bottom,#c7dceb 1px,transparent 1px);"></div><div class="task-print-answer" style="margin-top:${compactPrint ? 5 : 8}px;">${paperAnswerLine}</div></div>${stickerHTMLPrint}</div></div>`;
                } else {
                    currentPrintHTML += `<div class="task-print-block"><div class="task-print-flex"><div class="task-print-num">${taskCounter}</div>${printSvg ? `<div class="task-print-img">${printSvg}</div>` : ""}<div class="task-print-text"><div>${renderText}</div><div class="task-print-answer">${paperAnswerLine}</div></div>${stickerHTMLPrint}</div></div>`;
                }

                currentAnswersHTML += `<div style="margin-bottom: 10px; font-size: 18px;"><b>${taskCounter}.</b> Ответ: <strong style="color: #d32f2f;">${interactiveTaskNumber===19 && item.task19Single ? (String(item.answer)==='1' ? 'Верно' : 'Неверно') : answerDisplay}</strong></div>`;
                if (item.afterHTML) currentInteractiveHTML += item.afterHTML;
                if (item.afterPrintHTML) currentPrintHTML += item.afterPrintHTML;
                if (item.afterAnswersHTML) currentAnswersHTML += item.afterAnswersHTML;
                const examNum = kind==='practice' ? Number(item.examNumber||item.__ogeScenarioMeta?.taskNumber||item.__ogeTrainerMeta?.proto?.examNumber||0)
                    : Number(String(tid).replace(/\D/g,''));
                const group = examNum<=5?'1-5':examNum<=14?'6-14':'15-25';
                if(examNum>=1 && examNum<=25) printGroups[group].push(
                    (itemIndex===0 ? `<h4 class="oge-print-block-caption">${blockData.title}</h4>` : '')+
                    currentPrintHTML.slice(printOffset).replace(/<div style="page-break-before:always; break-before:page; height:0;"><\/div>/g,''));
            });
            currentInteractiveHTML += `</div>`; currentPrintHTML += `</div>`; currentAnswersHTML += `</div>`;
        }

        if (window.ogeCompactEmbeddedImages) currentInteractiveHTML = window.ogeCompactEmbeddedImages(currentInteractiveHTML);
        window.ogeVariantSnapshot = hasContent ? snapshotBuilt : null;
        window.ogePrintableGroups = printGroups;
        if (hasContent && !options.silent) { document.getElementById('output-section').style.display = 'block'; document.getElementById('btn-group').style.display = 'flex'; renderPreview(); }
    }

    window.CANVAS_LOGIC_SCRIPT = `
        window.mainCanvases = {};

        window.disposeOgeCanvases = function(root) {
            Object.keys(window.mainCanvases).forEach(function(id) {
                const entry = window.mainCanvases[id];
                if (!root || root === entry.canvas || root.contains(entry.canvas)) {
                    if (entry.destroy) entry.destroy();
                    delete window.mainCanvases[id];
                }
            });
        };
        window.ogeClearRenderedContent = function(root) {
            if (!root) return;
            if (window.MathJax && typeof MathJax.typesetClear === 'function') MathJax.typesetClear([root]);
            window.disposeOgeCanvases(root);
        };

        window.openTheoryModalLocal = function(dataId) {
            let el = document.getElementById(dataId);
            if(el) {
                if (window.ogeClearRenderedContent) window.ogeClearRenderedContent(document.getElementById('modal-content-box'));
                document.getElementById('modal-content-box').innerHTML = decodeURIComponent(el.textContent);
                document.getElementById('modal-overlay').style.display = 'flex';
                if (window.MathJax && typeof MathJax.typesetPromise === 'function') MathJax.typesetPromise([document.getElementById('modal-overlay')]).catch(console.error);
            }
        };
        window.showSecondPartAnswer = function(id) {
            const data = document.getElementById('second-answer-data-' + id);
            const target = document.getElementById('second-final-answer-' + id);
            const btn = document.getElementById('second-answer-btn-' + id);
            if (!data || !target) return;
            target.innerHTML = '<b>Ответ:</b> ' + decodeURIComponent(data.textContent || '');
            target.style.display = 'block';
            if (btn) btn.style.display = 'none';
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([target]).catch(()=>{});
        };
        window.toggleCanvas = function(id) {
            let w = document.getElementById('draw-wrapper-' + id);
            if (!w) return;
            const opening = (w.style.display === 'none' || w.style.display === '');
            w.style.display = opening ? 'block' : 'none';
            if (String(id).indexOf('pres-') === 0) {
                const slide = w.closest('.slide');
                if (slide) slide.classList.toggle('pres-draft-open', opening);
            }
            if (opening) setTimeout(() => window.initMainCanvas(id), 50);
        };
        window.toggleDraftZoom = function(id, forceClose, event) {
            if (event) { event.preventDefault(); event.stopPropagation(); }

            const existing = document.getElementById('draft-zoom-modal-global');
            if (existing) {
                existing.remove();
                document.body.style.overflow = existing.dataset.previousBodyOverflow || '';
                return;
            }
            if (forceClose === true) return;

            const card = document.getElementById('draft-diagram-card-' + id);
            if (!card || !card.innerHTML.trim()) return;

            const previousBodyOverflow = document.body.style.overflow || '';
            const overlay = document.createElement('div');
            overlay.id = 'draft-zoom-modal-global';
            overlay.dataset.previousBodyOverflow = previousBodyOverflow;
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-label', 'Увеличенный чертёж');
            overlay.style.cssText = 'position:fixed;inset:0;z-index:2147483000;background:rgba(7,18,31,.88);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:18px;box-sizing:border-box;';

            const isPresentationZoom = String(id).indexOf('pres-') === 0;
            const modal = document.createElement('div');
            modal.style.cssText = isPresentationZoom
                ? 'position:relative;width:min(78vw,1240px);height:76vh;background:#fff;border:3px solid #19b8b0;border-radius:16px;box-shadow:0 24px 80px rgba(0,0,0,.55);overflow:hidden;display:flex;flex-direction:column;'
                : 'position:relative;width:min(86vw,1420px);height:82vh;background:#fff;border:3px solid #19b8b0;border-radius:16px;box-shadow:0 24px 80px rgba(0,0,0,.55);overflow:hidden;display:flex;flex-direction:column;';

            const head = document.createElement('div');
            head.style.cssText = 'flex:0 0 auto;display:flex;align-items:center;gap:12px;padding:10px 14px;background:#e9fbf9;border-bottom:1px solid #9adfd9;color:#073b4c;font:700 17px Arial,sans-serif;';
            head.innerHTML = '<span style="font-size:23px;">🔍</span><span>Увеличенный чертёж</span><span style="margin-left:auto;font-size:13px;font-weight:500;color:#526273;">Нажмите на чертёж ещё раз, чтобы закрыть</span>';

            const closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.innerHTML = '&times;';
            closeButton.title = 'Закрыть';
            closeButton.style.cssText = 'margin-left:6px;width:38px;height:38px;border:1px solid #ef7f1a;border-radius:10px;background:#fff;color:#d95f02;font:700 28px/30px Arial;cursor:pointer;';
            head.appendChild(closeButton);

            const viewport = document.createElement('div');
            viewport.style.cssText = isPresentationZoom
                ? 'flex:1 1 auto;min-height:0;overflow:hidden;background:#f4f8fb;padding:34px 52px;box-sizing:border-box;cursor:zoom-out;'
                : 'flex:1 1 auto;min-height:0;overflow:hidden;background:#f4f8fb;padding:28px;box-sizing:border-box;cursor:zoom-out;';

            const diagram = document.createElement('div');
            const sourceMedia = card.querySelector('img,svg,picture,canvas');
            if (sourceMedia) {
                diagram.appendChild(sourceMedia.cloneNode(true));
            } else {
                diagram.innerHTML = card.innerHTML;
            }
            diagram.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;';

            diagram.querySelectorAll('img,svg,picture,canvas').forEach(function(media) {
                media.style.setProperty('display', 'block', 'important');
                media.style.setProperty('width', 'auto', 'important');
                media.style.setProperty('height', 'auto', 'important');
                media.style.setProperty('min-width', '0', 'important');
                media.style.setProperty('min-height', '0', 'important');
                media.style.setProperty('max-width', '100%', 'important');
                media.style.setProperty('max-height', '100%', 'important');
                media.style.setProperty('margin', 'auto', 'important');
                media.style.setProperty('object-fit', 'contain', 'important');
                media.style.setProperty('cursor', 'zoom-out', 'important');
                media.style.setProperty('box-sizing', 'border-box', 'important');
            });

            viewport.appendChild(diagram);
            modal.appendChild(head);
            modal.appendChild(viewport);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            const closeZoom = function() {
                const current = document.getElementById('draft-zoom-modal-global');
                if (current) {
                    const oldOverflow = current.dataset.previousBodyOverflow || '';
                    current.remove();
                    document.body.style.overflow = oldOverflow;
                }
                document.removeEventListener('keydown', onKeyDown);
            };
            const onKeyDown = function(keyEvent) {
                if (keyEvent.key === 'Escape') closeZoom();
            };

            closeButton.addEventListener('click', function(clickEvent) {
                clickEvent.preventDefault();
                clickEvent.stopPropagation();
                closeZoom();
            });
            overlay.addEventListener('click', function(clickEvent) {
                if (clickEvent.target === overlay) closeZoom();
            });
            diagram.addEventListener('click', function(clickEvent) {
                clickEvent.preventDefault();
                clickEvent.stopPropagation();
                closeZoom();
            });
            document.addEventListener('keydown', onKeyDown);

        };
        window.initMainCanvas = function(id) {
            let canvas = document.getElementById('canvas-' + id);
            if(!canvas) return;
            if (window.mainCanvases[id] && window.mainCanvases[id].canvas === canvas) return;
            if (window.mainCanvases[id] && window.mainCanvases[id].canvas !== canvas) {
                if (window.mainCanvases[id].destroy) window.mainCanvases[id].destroy();
                delete window.mainCanvases[id];
            }
            let ctx = canvas.getContext('2d');
            canvas.width = Math.max(1, Math.round(canvas.getBoundingClientRect().width || canvas.parentElement.clientWidth || 750));
            canvas.height = Math.max(1, Math.round(canvas.getBoundingClientRect().height || canvas.parentElement.clientHeight || 250));
            ctx.lineCap = 'round'; ctx.lineJoin = 'round';

            let objects = []; let currentObj = null; let draggingObj = null; let action = null;
            let history = []; let historyIndex = -1;
            let dragStartX = 0, dragStartY = 0; let dragStartDist = 1, initialScale = 1; let dragStartAngle = 0, initialAngle = 0; let isDrawing = false;

            function cloneObjects() { return JSON.parse(JSON.stringify(objects)); }
            function restoreObjects(snapshot) { objects.length = 0; snapshot.forEach(obj => objects.push(JSON.parse(JSON.stringify(obj)))); draggingObj = null; currentObj = null; action = null; renderAll(); }
            function saveHistory() { history = history.slice(0, historyIndex + 1); history.push(cloneObjects()); if (history.length > 80) history.shift(); historyIndex = history.length - 1; }
            function undo() { if (historyIndex <= 0) return; historyIndex--; restoreObjects(history[historyIndex]); }
            function redo() { if (historyIndex >= history.length - 1) return; historyIndex++; restoreObjects(history[historyIndex]); }

            function getRawBounds(obj) {
                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                if (obj.tool === 'pen' || obj.tool === 'highlighter' || obj.tool === 'eraser') {
                    if(!obj.points || obj.points.length === 0) return {minX:0, minY:0, maxX:0, maxY:0};
                    obj.points.forEach(p => { minX = Math.min(minX, p.x); minY = Math.min(minY, p.y); maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y); });
                } else {
                    let sx = obj.sx, sy = obj.sy, ex = obj.ex, ey = obj.ey; let dx = ex - sx, dy = ey - sy; let rx = Math.abs(dx), ry = Math.abs(dy); let r = Math.sqrt(dx*dx + dy*dy);
                    if (obj.tool === 'line' || obj.tool === 'vector') { minX = Math.min(sx, ex); maxX = Math.max(sx, ex); minY = Math.min(sy, ey); maxY = Math.max(sy, ey); }
                    else if (obj.tool === 'circle' || obj.tool === 'sphere') { minX = sx - r; maxX = sx + r; minY = sy - r; maxY = sy + r; }
                    else if (obj.tool === 'triangle') { minX = Math.min(sx, ex, sx + dx/2); maxX = Math.max(sx, ex, sx + dx/2); minY = Math.min(sy, ey); maxY = Math.max(sy, ey); }
                    else if (obj.tool === 'cylinder' || obj.tool === 'cone') { minX = sx - rx; maxX = sx + rx; let h = ry * 0.2; minY = Math.min(sy - h, ey - h); maxY = Math.max(sy + h, ey + h); }
                }
                let pad = parseFloat(obj.size) || 3; return { minX: minX - pad, minY: minY - pad, maxX: maxX + pad, maxY: maxY + pad };
            }

            function drawObj(ctx, obj, isSelected) {
                ctx.save(); let cx = obj.cx || 0; let cy = obj.cy || 0; let s = obj.scale || 1;
                ctx.translate((obj.x || 0) + cx, (obj.y || 0) + cy); ctx.rotate(obj.angle || 0); ctx.scale(s, s); ctx.translate(-cx, -cy);
                ctx.strokeStyle = obj.color; ctx.lineWidth = obj.size;
                if (obj.tool === 'pen' || obj.tool === 'highlighter' || obj.tool === 'eraser') {
                    ctx.globalCompositeOperation = obj.tool === 'eraser' ? 'destination-out' : 'source-over'; if (obj.tool === 'highlighter') {ctx.globalAlpha=.25;ctx.lineWidth = Math.max(12, (Number(obj.size)||3)*4);}
                    if(obj.tool === 'eraser') ctx.lineWidth = obj.size * 3;
                    ctx.beginPath();
                    if(obj.points && obj.points.length > 0) { ctx.moveTo(obj.points[0].x, obj.points[0].y); for(let i=1; i<obj.points.length; i++) ctx.lineTo(obj.points[i].x, obj.points[i].y); }
                    ctx.stroke();
                } else {
                    ctx.globalCompositeOperation = 'source-over'; ctx.beginPath();
                    let sx = obj.sx, sy = obj.sy, ex = obj.ex, ey = obj.ey; let dx = ex - sx, dy = ey - sy; let rx = Math.abs(dx), ry = Math.abs(dy); let r = Math.sqrt(dx*dx + dy*dy);
                    if (obj.tool === 'line' || obj.tool === 'vector') {
                        ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
                        if(obj.tool === 'vector') {
                            let angle = Math.atan2(ey - sy, ex - sx);
                            let headlen = 10 + (parseFloat(obj.size)||3);
                            ctx.beginPath();
                            ctx.moveTo(ex, ey);
                            ctx.lineTo(ex - headlen * Math.cos(angle - Math.PI / 6), ey - headlen * Math.sin(angle - Math.PI / 6));
                            ctx.moveTo(ex, ey);
                            ctx.lineTo(ex - headlen * Math.cos(angle + Math.PI / 6), ey - headlen * Math.sin(angle + Math.PI / 6));
                            ctx.stroke();
                        }
                    }
                    else if (obj.tool === 'circle') { ctx.arc(sx, sy, r, 0, 2 * Math.PI); ctx.stroke(); }
                    else if (obj.tool === 'triangle') { ctx.moveTo(sx + dx/2, sy); ctx.lineTo(sx, ey); ctx.lineTo(ex, ey); ctx.closePath(); ctx.stroke(); }
                    else if (obj.tool === 'cylinder') { let w = rx, h = ry * 0.2; if(w>0 && h>0){ctx.ellipse(sx, sy, w, h, 0, 0, 2*Math.PI); ctx.moveTo(sx - w, sy); ctx.lineTo(sx - w, ey); ctx.moveTo(sx + w, sy); ctx.lineTo(sx + w, ey); ctx.stroke(); ctx.beginPath(); ctx.ellipse(sx, ey, w, h, 0, 0, Math.PI); ctx.stroke(); ctx.beginPath(); ctx.setLineDash([5, 5]); ctx.ellipse(sx, ey, w, h, 0, Math.PI, 2*Math.PI); ctx.stroke(); ctx.setLineDash([]);} }
                    else if (obj.tool === 'cone') { let w = rx, h = ry * 0.2; if(w>0 && h>0){ctx.moveTo(sx, sy); ctx.lineTo(sx - w, ey); ctx.moveTo(sx, sy); ctx.lineTo(sx + w, ey); ctx.stroke(); ctx.beginPath(); ctx.ellipse(sx, ey, w, h, 0, 0, Math.PI); ctx.stroke(); ctx.beginPath(); ctx.setLineDash([5, 5]); ctx.ellipse(sx, ey, w, h, 0, Math.PI, 2*Math.PI); ctx.stroke(); ctx.setLineDash([]);} }
                    else if (obj.tool === 'sphere') { ctx.arc(sx, sy, r, 0, 2 * Math.PI); ctx.stroke(); if(r>0){ctx.beginPath(); ctx.ellipse(sx, sy, r, r*0.3, 0, 0, Math.PI); ctx.stroke(); ctx.beginPath(); ctx.setLineDash([5, 5]); ctx.ellipse(sx, sy, r, r*0.3, 0, Math.PI, 2*Math.PI); ctx.stroke(); ctx.setLineDash([]);} }
                }
                if (isSelected) {
                    let b = getRawBounds(obj); ctx.strokeStyle = 'rgba(255, 140, 0, 0.7)'; ctx.lineWidth = 1.5 / s; ctx.setLineDash([5 / s, 5 / s]); ctx.strokeRect(b.minX - 5, b.minY - 5, b.maxX - b.minX + 10, b.maxY - b.minY + 10); ctx.setLineDash([]);
                    let rotHX = (b.minX + b.maxX)/2; let rotHY = b.minY - 25; ctx.beginPath(); ctx.moveTo(rotHX, b.minY - 5); ctx.lineTo(rotHX, rotHY); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(rotHX, rotHY, 5 / s, 0, Math.PI*2); ctx.fill(); ctx.stroke();
                    let scaleHX = b.maxX + 5; let scaleHY = b.maxY + 5; let hSize = 10 / s; ctx.fillStyle = '#ff8c00'; ctx.fillRect(scaleHX - hSize/2, scaleHY - hSize/2, hSize, hSize);
                }
                ctx.restore();
            }

            function getLocalPos(p, obj) { let cx = obj.cx || 0, cy = obj.cy || 0; let tx = (obj.x || 0) + cx, ty = (obj.y || 0) + cy; let nx = p.x - tx, ny = p.y - ty; let angle = -(obj.angle || 0); let rx = nx * Math.cos(angle) - ny * Math.sin(angle); let ry = nx * Math.sin(angle) + ny * Math.cos(angle); let scale = obj.scale || 1; return {x: (rx / scale) + cx, y: (ry / scale) + cy}; }
            function renderAll() { ctx.clearRect(0, 0, canvas.width, canvas.height); objects.forEach(obj => drawObj(ctx, obj, draggingObj === obj)); if (currentObj) drawObj(ctx, currentObj, false); }
            function getPos(e) { const rect = canvas.getBoundingClientRect(); let x = e.clientX, y = e.clientY; if (e.touches && e.touches.length > 0) { x = e.touches[0].clientX; y = e.touches[0].clientY; } return { x: x - rect.left, y: y - rect.top }; }

            function startDraw(e) {
                isDrawing = true; let p = getPos(e);
                let tool = document.getElementById('tool-' + id).value; let color = document.getElementById('color-' + id).value; let size = document.getElementById('size-' + id).value;
                if (tool === 'zoom') {
                    const card = document.getElementById('draft-diagram-card-' + id);
                    let clientX = e.clientX, clientY = e.clientY;
                    if (e.touches && e.touches.length) { clientX = e.touches[0].clientX; clientY = e.touches[0].clientY; }
                    if (card) {
                        const r = card.getBoundingClientRect();
                        if (clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) window.toggleDraftZoom(id, false, e);
                    }
                    isDrawing = false;
                    if (e.cancelable) e.preventDefault();
                    return;
                }
                if (tool === 'pointer') {
                    let hitHandle = false;
                    if (draggingObj) {
                        let b = getRawBounds(draggingObj); let lp = getLocalPos(p, draggingObj); let hr = 10 / (draggingObj.scale || 1);
                        if (Math.abs(lp.x - (b.maxX + 5)) < hr && Math.abs(lp.y - (b.maxY + 5)) < hr) { action = 'scale'; let tx = (draggingObj.x||0) + (draggingObj.cx||0); let ty = (draggingObj.y||0) + (draggingObj.cy||0); dragStartDist = Math.hypot(p.x - tx, p.y - ty); initialScale = draggingObj.scale || 1; hitHandle = true; }
                        if (!hitHandle && Math.abs(lp.x - ((b.minX + b.maxX)/2)) < hr && Math.abs(lp.y - (b.minY - 25)) < hr) { action = 'rotate'; initialAngle = draggingObj.angle || 0; let tx = (draggingObj.x||0) + (draggingObj.cx||0); let ty = (draggingObj.y||0) + (draggingObj.cy||0); dragStartAngle = Math.atan2(p.y - ty, p.x - tx); hitHandle = true; }
                        if (!hitHandle && lp.x >= b.minX - 5 && lp.x <= b.maxX + 5 && lp.y >= b.minY - 5 && lp.y <= b.maxY + 5) { action = 'move'; dragStartX = p.x; dragStartY = p.y; hitHandle = true; }
                    }
                    if (!hitHandle) { draggingObj = null; action = null; for (let i = objects.length - 1; i >= 0; i--) { if (objects[i].tool === 'eraser') continue; let lp = getLocalPos(p, objects[i]); let b = getRawBounds(objects[i]); if (lp.x >= b.minX && lp.x <= b.maxX && lp.y >= b.minY && lp.y <= b.maxY) { draggingObj = objects[i]; action = 'move'; dragStartX = p.x; dragStartY = p.y; break; } } }
                    renderAll();
                } else { currentObj = { tool: tool, color: color, size: size, x: 0, y: 0, scale: 1, angle: 0 }; if (tool === 'pen' || tool === 'highlighter' || tool === 'eraser') { currentObj.points = [p]; } else { currentObj.sx = p.x; currentObj.sy = p.y; currentObj.ex = p.x; currentObj.ey = p.y; } }
                if (e.cancelable) e.preventDefault();
            }

            function draw(e) {
                if (!isDrawing) return; if (e.cancelable) e.preventDefault(); let p = getPos(e);
                if (document.getElementById('tool-' + id).value === 'pointer' && draggingObj && action) {
                    if (action === 'move') { draggingObj.x = (draggingObj.x || 0) + (p.x - dragStartX); draggingObj.y = (draggingObj.y || 0) + (p.y - dragStartY); dragStartX = p.x; dragStartY = p.y; }
                    else if (action === 'scale') { let tx = (draggingObj.x||0) + (draggingObj.cx||0); let ty = (draggingObj.y||0) + (draggingObj.cy||0); let currentDist = Math.hypot(p.x - tx, p.y - ty); draggingObj.scale = Math.max(0.1, initialScale * (currentDist / dragStartDist)); }
                    else if (action === 'rotate') { let tx = (draggingObj.x||0) + (draggingObj.cx||0); let ty = (draggingObj.y||0) + (draggingObj.cy||0); let currentAngle = Math.atan2(p.y - ty, p.x - tx); draggingObj.angle = initialAngle + (currentAngle - dragStartAngle); }
                    renderAll();
                } else if (currentObj) { if (currentObj.tool === 'pen' || currentObj.tool === 'highlighter' || currentObj.tool === 'eraser') { currentObj.points.push(p); } else { currentObj.ex = p.x; currentObj.ey = p.y; } renderAll(); }
            }

            function stopDraw() { if(!isDrawing) return; isDrawing = false; let changed = false; if (currentObj) { let b = getRawBounds(currentObj); currentObj.cx = (b.minX + b.maxX) / 2; currentObj.cy = (b.minY + b.maxY) / 2; objects.push(currentObj); currentObj = null; changed = true; } else if (draggingObj && action) { changed = true; } action = null; if (changed) saveHistory(); renderAll(); }

            canvas.addEventListener('mousedown', startDraw); canvas.addEventListener('mousemove', draw); window.addEventListener('mouseup', stopDraw);
            canvas.addEventListener('touchstart', startDraw, {passive: false}); canvas.addEventListener('touchmove', draw, {passive: false}); window.addEventListener('touchend', stopDraw);

            function destroy() {
                canvas.removeEventListener('mousedown', startDraw);
                canvas.removeEventListener('mousemove', draw);
                canvas.removeEventListener('touchstart', startDraw);
                canvas.removeEventListener('touchmove', draw);
                window.removeEventListener('mouseup', stopDraw);
                window.removeEventListener('touchend', stopDraw);
                isDrawing = false;
                objects.length = 0;
                history.length = 0;
                currentObj = null;
                draggingObj = null;
            }
            window.mainCanvases[id] = { canvas, ctx, objects, renderAll, undo, redo, saveHistory, destroy };
            saveHistory();
        };
        window.clearCanvas = function(id) { if (window.mainCanvases[id]) { window.mainCanvases[id].objects.length = 0; window.mainCanvases[id].saveHistory(); window.mainCanvases[id].renderAll(); } };
        window.undoCanvas = function(id) { if (window.mainCanvases[id] && window.mainCanvases[id].undo) window.mainCanvases[id].undo(); };
        window.redoCanvas = function(id) { if (window.mainCanvases[id] && window.mainCanvases[id].redo) window.mainCanvases[id].redo(); };
        window.setTool = function(id, tool) {
            let t = document.getElementById('tool-' + id); if(t) t.value = tool;
            let sel = document.getElementById('tool-select-' + id); if(sel && (tool === 'pen' || tool === 'highlighter' || tool === 'eraser' || tool === 'pointer' || tool === 'zoom')) sel.value = "";
            let canvas = document.getElementById('canvas-' + id);
            if(canvas) {
                if (tool === 'eraser') { canvas.style.cursor = "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22><text y=%2220%22 font-size=%2220%22>🧽</text></svg>') 0 20, auto"; }
                else if (tool === 'pointer') { canvas.style.cursor = 'move'; }
                else if (tool === 'zoom') { canvas.style.cursor = 'zoom-in'; }
                else { canvas.style.cursor = 'crosshair'; }
            }
        };
    `;

    // Активируем код для превью внутри редактора
    eval(window.CANVAS_LOGIC_SCRIPT);

    const OGE_MATH_NO_SPLIT_SCRIPT = "(function(){\n  'use strict';\n  if (window.__ogeNoSplitMath) return;\n  window.__ogeNoSplitMath = true;\n  var matcher = /(^|[^\\wА-Яа-я])([A-Za-zА-Яа-яα-ωΑ-Ω]{1,4}|[A-Za-zА-Яа-я]{1,3}\\d{1,2})[ \\t]*([=<>≤≥])[ \\t]*([+−-]?(?:\\d+(?:[.,]\\d+)?|[A-Za-zА-Яа-яα-ωΑ-Ω]{1,4}))(?:[ \\t]+(мм|см|км|м|м²|см²|°))?/g;\n  var skip = 'script,style,textarea,pre,code,svg,math,mjx-container,option,[contenteditable=\"true\"],.MathJax,.mjx-container';\n  function fix(root){\n    if(!root || root.nodeType !== 1) return;\n    if(root.matches && root.matches(skip)) return;\n    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {\n      acceptNode: function(n){\n        var parent=n.parentElement;\n        if (!parent || !n.nodeValue || !/[=<>≤≥]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;\n        if (parent.closest(skip)) return NodeFilter.FILTER_REJECT;\n        // Never modify MathJax source notation or inline TeX strings.\n        if (/\\\\\\(|\\\\\\[|\\\\\\)|\\\\\\]|\\$/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;\n        return NodeFilter.FILTER_ACCEPT;\n      }\n    });\n    var nodes=[], n;\n    while ((n=tw.nextNode())) nodes.push(n);\n    nodes.forEach(function(t){\n      matcher.lastIndex=0;\n      t.nodeValue=t.nodeValue.replace(matcher,function(full,prefix,left,operator,right,unit){\n        return prefix+left+'\\u00a0'+operator+'\\u00a0'+right+(unit?'\\u00a0'+unit:'');\n      });\n    });\n  }\n  function init(){\n    fix(document.body);\n    var observer=new MutationObserver(function(records){\n      records.forEach(function(record){\n        record.addedNodes.forEach(function(node){\n          if(node.nodeType===1) fix(node);\n        });\n      });\n    });\n    observer.observe(document.body,{childList:true,subtree:true});\n  }\n  window.ogeKeepMathHTML = function(raw) {\n    if (typeof raw !== 'string' || !/[=<>≤≥]/.test(raw)) return raw;\n    var holder=document.createElement('div');\n    holder.innerHTML=raw;\n    fix(holder);\n    return holder.innerHTML;\n  };\n  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});\n  else init();\n})();";
    async function downloadBlobSafely(blob, filename) {
        // One shared typographic rule for print, interactive tasks, all games and presentations.
        if (blob && /^text\/html/i.test(blob.type || '')) {
            try {
                const htmlSource = await blob.text();
                if (/<\/head>/i.test(htmlSource) && !htmlSource.includes('__ogeNoSplitMath')) {
                    const helper = '<script>' + OGE_MATH_NO_SPLIT_SCRIPT + '<\/script>';
                    blob = new Blob([htmlSource.replace(/<\/head>/i, helper + '</head>')], {type: blob.type});
                }
            } catch(e) { console.warn('No-split math export:',e); }
        }

        if (blob && /^text\/html/i.test(blob.type || '') && window.ogeEmbedBankImages) {
            blob = new Blob([await window.ogeEmbedBankImages(await blob.text())], {type: blob.type});
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);

        // Даём браузеру закончить создание и запись большого HTML-файла.
        // Раньше Blob URL удалялся сразу после клика, из-за чего Edge иногда
        // сохранял пустой/недоступный файл и показывал ERR_FAILED.
        requestAnimationFrame(() => {
            a.click();
            setTimeout(() => {
                if (a.parentNode) a.parentNode.removeChild(a);
                URL.revokeObjectURL(url);
            }, 60000);
        });
    }


    // === СПРАВОЧНЫЕ МАТЕРИАЛЫ ОГЭ ===



    window.injectReferenceHelpIntoHtml = function(html, mode) {
        try {
            if (!html || /exam-ref-help-btn/.test(String(html))) return html;
            const accent = (mode === 'game') ? '#ff8c00' : '#003399';
            const buttonShadow = (mode === 'game') ? '0 10px 28px rgba(255,140,0,.34)' : '0 10px 28px rgba(0,51,153,.24)';
            const algebra = window.OGE_REFERENCE_ALGEBRA_DATA;
            const geometry = window.OGE_REFERENCE_GEOMETRY_DATA;
            const scriptClose = '<' + '/scr' + 'ipt>';
            const injection = `
<style id="exam-ref-help-style">
#exam-ref-help-btn{position:fixed;right:18px;bottom:18px;z-index:99999;min-height:47px;padding:6px 14px 6px 7px;border:1px solid ${accent};border-radius:999px;background:#123247;color:#f7fbff;font:600 14px/1 Arial,sans-serif;letter-spacing:.15px;cursor:pointer;box-shadow:${buttonShadow};display:flex;align-items:center;justify-content:center;gap:8px;transition:transform .18s ease,box-shadow .18s ease,background .18s ease;}
#exam-ref-help-btn .exam-ref-question{display:inline-flex;align-items:center;justify-content:center;width:33px;height:33px;min-width:33px;border-radius:50%;background:${accent};color:${mode === 'game' ? '#1c2330' : '#ffffff'};font:800 22px/1 Arial,sans-serif;}
#exam-ref-help-btn .exam-ref-caption{white-space:nowrap;}
#exam-ref-help-btn:hover{transform:translateY(-2px);background:#1b4259;}
#exam-ref-help-modal{display:none;position:fixed;inset:0;z-index:100000;background:rgba(10,16,28,.78);backdrop-filter:blur(4px);padding:18px;box-sizing:border-box;align-items:center;justify-content:center;}
#exam-ref-help-modal .exam-ref-box{width:min(1100px,96vw);max-height:92vh;overflow:auto;background:#f6f8fc;border-radius:18px;padding:22px 22px 26px;box-shadow:0 16px 50px rgba(0,0,0,.28);border:1px solid rgba(0,0,0,.10);position:relative;}
#exam-ref-help-modal .exam-ref-close{position:absolute;top:12px;right:12px;width:42px;height:42px;border:none;border-radius:50%;background:#e8eef9;color:#24415f;font-size:28px;line-height:1;cursor:pointer;}
#exam-ref-help-modal .exam-ref-title{font:700 28px/1.2 Arial,sans-serif;color:#17324f;text-align:center;margin:0 48px 8px;}
#exam-ref-help-modal .exam-ref-subtitle{font:500 15px/1.45 Arial,sans-serif;color:#4a6078;text-align:center;margin:0 auto 18px;max-width:780px;}
#exam-ref-help-modal .exam-ref-sheet{background:#fff;border:1px solid #d8e2ef;border-radius:14px;padding:14px;margin:16px auto;box-shadow:0 8px 24px rgba(17,41,79,.08);}
#exam-ref-help-modal .exam-ref-sheet h3{margin:2px 0 14px;text-align:center;font:700 23px/1.2 Arial,sans-serif;color:#0e2845;}
#exam-ref-help-modal .exam-ref-sheet img{display:block;width:100%;height:auto;border-radius:10px;border:1px solid #e0e6ef;background:#fff;}
#exam-ref-help-modal .exam-ref-tip{margin:8px auto 0;text-align:center;color:#6b7d91;font-size:13px;font-family:Arial,sans-serif;}
@media (max-width: 640px){
  #exam-ref-help-btn{right:12px;bottom:12px;min-height:43px;padding:5px 11px 5px 6px;font-size:13px;gap:6px;}
  #exam-ref-help-btn .exam-ref-question{width:31px;height:31px;min-width:31px;font-size:20px;}
  #exam-ref-help-modal{padding:10px;}
  #exam-ref-help-modal .exam-ref-box{padding:16px 14px 18px;border-radius:14px;}
  #exam-ref-help-modal .exam-ref-title{font-size:22px;margin:0 42px 8px;}
  #exam-ref-help-modal .exam-ref-sheet h3{font-size:20px;}
}
@media print{#exam-ref-help-btn,#exam-ref-help-modal{display:none !important;}}
</style>
<button id="exam-ref-help-btn" type="button" title="Справочные материалы" aria-label="Открыть справочные материалы"><span class="exam-ref-question" aria-hidden="true">?</span><span class="exam-ref-caption">Справка</span></button>
<div id="exam-ref-help-modal" onclick="if(event.target===this) this.style.display='none'">
  <div class="exam-ref-box" onclick="event.stopPropagation()">
    <button id="exam-ref-help-close" class="exam-ref-close" type="button" aria-label="Закрыть">&times;</button>
    <h2 class="exam-ref-title">Справочные материалы по математике</h2>
    <p class="exam-ref-subtitle">Разрешённые справочные материалы для ученика. Сначала — алгебра, затем — геометрия.</p>
    <section class="exam-ref-sheet">
      <h3>Алгебра</h3>
      <img src="${algebra}" alt="Справочные материалы по математике: алгебра">
    </section>
    <section class="exam-ref-sheet">
      <h3>Геометрия</h3>
      <img src="${geometry}" alt="Справочные материалы по математике: геометрия">
    </section>
    <div class="exam-ref-tip">Если изображение кажется мелким, увеличьте масштаб страницы в браузере.</div>
  </div>
</div>
<script>(function(){
  var btn = document.getElementById('exam-ref-help-btn');
  var modal = document.getElementById('exam-ref-help-modal');
  var closeBtn = document.getElementById('exam-ref-help-close');
  if (!btn || !modal || !closeBtn) return;
  function openRef(){ modal.style.display='flex'; if(window.MathJax && MathJax.typesetPromise){ MathJax.typesetPromise([modal]).catch(function(){}); } }
  function closeRef(){ modal.style.display='none'; }
  btn.addEventListener('click', function(e){ e.stopPropagation(); openRef(); });
  closeBtn.addEventListener('click', function(){ closeRef(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && modal.style.display === 'flex') closeRef(); });
})();` + scriptClose;
            const scenarioWorkspace = (mode === 'game' || mode === 'presentation') ? "\u003cscript>/* \u0420\u0430\u0431\u043e\u0447\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043b\u044f \u043e\u0431\u0449\u0438\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u041e\u0413\u042d \u21161\u20135. \u0412\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 HTML \u0438\u0433\u0440 \u0438 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0439. */\n(function(){\n  'use strict';\n  if (window.__ogeScenarioWorkspaceInstalled) return;\n  window.__ogeScenarioWorkspaceInstalled = true;\n  const style = document.createElement('style');\n  style.textContent = `\n    #oge-ws-overlay{position:fixed;inset:0;z-index:2147483000;background:rgba(10,21,38,.85);display:none;align-items:center;justify-content:center;padding:14px;box-sizing:border-box;}\n    #oge-ws-overlay.oge-ws-open{display:flex}\n    #oge-ws-dialog{width:min(1420px,98vw);height:min(900px,96vh);min-height:440px;background:#f7faff;color:#172a41;border:2px solid #f5a623;border-radius:19px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 22px 70px #0006;font:16px/1.45 Arial, sans-serif;}\n    #oge-ws-header{background:#eaf3fc;display:flex;align-items:center;gap:12px;padding:8px 14px;flex:0 0 auto;border-bottom:1px solid #cbddec;}\n    #oge-ws-header strong{color:#174368;font-size:17px;flex:1;}\n    #oge-ws-close{font:700 24px/1 Arial;border:1px solid #e4a638;background:#fff5df;border-radius:9px;width:38px;height:36px;cursor:pointer;color:#865000}\n    #oge-ws-content{flex:1;min-height:0;display:grid;grid-template-columns:minmax(290px,45%) minmax(0,55%);gap:0;}\n    #oge-ws-reading{overflow-y:auto;overflow-x:hidden;padding:17px 22px 25px;background:#fff;border-right:2px solid #ccdfed;text-align:left;line-height:1.5;font-size:clamp(15px,1.1vw,19px);overscroll-behavior:contain;}\n    #oge-ws-reading .oge-scenario-complete-prompt{font:inherit!important;color:#172a41!important;text-align:left!important;}\n    #oge-ws-reading .oge-scenario-context{display:block!important;overflow:visible!important;}\n    #oge-ws-reading .oge-scenario-context>div{max-height:none!important;overflow:visible!important;}\n    #oge-ws-reading details>summary{position:sticky;top:-17px;background:#ecf5fd;padding:6px;border-radius:6px;z-index:2;}\n    #oge-ws-reading table{border-collapse:collapse;width:100%;max-width:100%;font-size:.82em;table-layout:fixed;}\n    #oge-ws-reading th,#oge-ws-reading td{border:1px solid #8797a5;padding:3px 5px;overflow-wrap:anywhere;}\n    #oge-ws-reading img,#oge-ws-reading svg{max-width:100%;height:auto;}\n    #oge-ws-drawing{display:flex;flex-direction:column;min-height:0;min-width:0;background:#fff;padding:10px;gap:9px;}\n    #oge-ws-tools{flex:0 0 auto;display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:flex-start;background:#e8f2ff;border:1px solid #cbddec;border-radius:10px;padding:7px;}\n    #oge-ws-tools button,#oge-ws-tools input{font:500 14px Arial;}\n    #oge-ws-tools button{border:1px solid #aec5d9;background:#fff;border-radius:7px;cursor:pointer;padding:7px 10px;min-height:34px;color:#17354c;}\n    #oge-ws-tools button.active{border-color:#d88909;background:#ffe8ae;font-weight:bold;}\n    #oge-ws-tools label{display:inline-flex;gap:4px;align-items:center;font-size:13px;}\n    #oge-ws-tools input[type=color]{width:36px;height:31px;border:0;background:transparent;padding:0;cursor:pointer;}\n    #oge-ws-tools input[type=range]{width:80px;}\n    #oge-ws-board{position:relative;flex:1;min-height:0;overflow:hidden;border:2px solid #c3d7e9;border-radius:10px;background:#fff;}\n    #oge-ws-figure{position:absolute;inset:8px;display:flex;justify-content:center;align-items:center;pointer-events:none;}\n    #oge-ws-figure>svg,#oge-ws-figure>img,#oge-ws-figure>picture{display:block;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;}\n    #oge-ws-ink{position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:crosshair;z-index:2;}\n    #oge-ws-hint{flex:0 0 auto;font-size:12px;color:#5b7188;text-align:center;}\n    @media(max-width:820px){#oge-ws-overlay{padding:4px}#oge-ws-dialog{width:100%;height:99vh;min-height:0;border-radius:9px}#oge-ws-content{grid-template-columns:1fr;grid-template-rows:minmax(120px,40%) minmax(0,60%)}#oge-ws-reading{border-right:0;border-bottom:2px solid #ccdfed;padding:10px 13px}#oge-ws-reading details>summary{top:-10px}}\n  `;\n  document.head.appendChild(style);\n\n  const root = document.createElement('div');\n  root.id='oge-ws-overlay';\n  root.innerHTML=`\u003cdiv id=\"oge-ws-dialog\" role=\"dialog\" aria-modal=\"true\" aria-label=\"\u0423\u0441\u043b\u043e\u0432\u0438\u0435 \u0438 \u0447\u0435\u0440\u0442\u0451\u0436 \u0437\u0430\u0434\u0430\u043d\u0438\u044f\">\n      \u003cdiv id=\"oge-ws-header\">\u003cstrong>\u0423\u0441\u043b\u043e\u0432\u0438\u0435 1\u20135 \u0438 \u0447\u0435\u0440\u0442\u0451\u0436 \u00b7 \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0438 \u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u003c/strong>\u003cbutton id=\"oge-ws-close\" type=\"button\" aria-label=\"\u0417\u0430\u043a\u0440\u044b\u0442\u044c\">\u00d7\u003c/button>\u003c/div>\n      \u003cdiv id=\"oge-ws-content\">\n        \u003cdiv id=\"oge-ws-reading\">\u003c/div>\n        \u003cdiv id=\"oge-ws-drawing\">\u003cdiv id=\"oge-ws-tools\">\n          \u003cbutton type=\"button\" data-ws-tool=\"pen\" class=\"active\">\u270f\ufe0f \u041a\u0430\u0440\u0430\u043d\u0434\u0430\u0448\u003c/button>\u003cbutton type=\"button\" data-ws-tool=\"highlighter\">🖍️ Выделитель\u003c/button>\u003cbutton type=\"button\" data-ws-tool=\"text\">\u0410\u0430 \u041f\u043e\u0434\u043f\u0438\u0441\u044c\u003c/button>\u003cbutton type=\"button\" data-ws-tool=\"eraser\">\u041b\u0430\u0441\u0442\u0438\u043a\u003c/button>\n          \u003clabel>\u0426\u0432\u0435\u0442 \u003cinput id=\"oge-ws-color\" type=\"color\" value=\"#143d9c\">\u003c/label>\n          \u003clabel>\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u003cinput id=\"oge-ws-size\" type=\"range\" min=\"1\" max=\"12\" step=\"0.1\" value=\"2\">\u003c/label>\n          \u003cbutton type=\"button\" id=\"oge-ws-undo\">\u21b6 \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c\u003c/button>\u003cbutton type=\"button\" id=\"oge-ws-clear\">\ud83d\uddd1\ufe0f \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c\u003c/button>\n        \u003c/div>\u003cdiv id=\"oge-ws-board\">\u003cdiv id=\"oge-ws-figure\">\u003c/div>\u003ccanvas id=\"oge-ws-ink\">\u003c/canvas>\u003c/div>\n        \u003cdiv id=\"oge-ws-hint\">\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435 \u0442\u043e\u0447\u043a\u0438 \u0438 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043f\u0440\u044f\u043c\u043e \u043d\u0430 \u0447\u0435\u0440\u0442\u0435\u0436\u0435; \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043b\u0435\u0432\u0430 \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e.\u003c/div>\n        \u003c/div>\n      \u003c/div>\u003c/div>`;\n  document.body.appendChild(root);\n  const read=root.querySelector('#oge-ws-reading');\n  const fig=root.querySelector('#oge-ws-figure');\n  const canvas=root.querySelector('#oge-ws-ink');\n  const board=root.querySelector('#oge-ws-board');\n  const ctx=canvas.getContext('2d');\n  let tool='pen', strokes=[], active=null, currentKey='', saved=new Map();\n  let boardW=1,boardH=1;\n  const color=root.querySelector('#oge-ws-color');\n  const size=root.querySelector('#oge-ws-size');\n  function setTool(value){tool=value;root.querySelectorAll('[data-ws-tool]').forEach(b=>b.classList.toggle('active',b.dataset.wsTool===value));canvas.style.cursor=value==='text'?'text':value==='eraser'?'cell':'crosshair';}\n  root.querySelectorAll('[data-ws-tool]').forEach(b=>b.addEventListener('click',()=>setTool(b.dataset.wsTool)));\n  function renderStroke(s){\n    ctx.save();ctx.globalCompositeOperation=s.tool==='eraser'?'destination-out':'source-over';ctx.strokeStyle=s.color;ctx.fillStyle=s.color;ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=s.size;\n    if(s.tool==='highlighter'){ctx.globalAlpha=.25;ctx.lineWidth=Math.max(13,s.size*4);}\n    if(s.tool==='text') {ctx.font='bold '+Math.max(14,s.size*6)+'px Arial';ctx.textBaseline='top';ctx.fillText(s.text,s.x*boardW,s.y*boardH);}\n    else if(s.points&&s.points.length){ctx.beginPath();s.points.forEach((p,i)=>i?ctx.lineTo(p[0]*boardW,p[1]*boardH):ctx.moveTo(p[0]*boardW,p[1]*boardH));if(s.points.length===1){const p=s.points[0];ctx.lineTo(p[0]*boardW+.1,p[1]*boardH+.1);}ctx.stroke();}\n    ctx.restore();\n  }\n  function redraw(){ctx.clearRect(0,0,boardW,boardH);strokes.forEach(renderStroke);if(active)renderStroke(active);}\n  function resize(){const rect=board.getBoundingClientRect();if(rect.width\u003c2||rect.height\u003c2)return;boardW=rect.width;boardH=rect.height;const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(boardW*dpr);canvas.height=Math.round(boardH*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);redraw();}\n  if(window.ResizeObserver)new ResizeObserver(resize).observe(board);\n  window.addEventListener('resize',resize);\n  function pos(e){const r=canvas.getBoundingClientRect();return [Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))];}\n  canvas.addEventListener('pointerdown',e=>{\n    if(e.button!==0&&e.pointerType==='mouse')return;\n    const p=pos(e);canvas.setPointerCapture(e.pointerId);\n    if(tool==='text'){const label=window.prompt('\u0427\u0442\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u0447\u0435\u0440\u0442\u0435\u0436\u0435?');if(label&&label.trim()){strokes.push({tool:'text',text:label.trim().slice(0,50),x:p[0],y:p[1],size:Number(size.value),color:color.value});redraw();}return;}\n    active={tool,color:color.value,size:tool==='eraser'?Math.max(14,Number(size.value)*4):Number(size.value),points:[p]};redraw();e.preventDefault();\n  });\n  canvas.addEventListener('pointermove',e=>{if(!active)return;active.points.push(pos(e));redraw();e.preventDefault();});\n  function finish(){if(active){strokes.push(active);active=null;redraw();}}\n  canvas.addEventListener('pointerup',finish);canvas.addEventListener('pointercancel',finish);\n  root.querySelector('#oge-ws-undo').addEventListener('click',()=>{strokes.pop();redraw();});\n  root.querySelector('#oge-ws-clear').addEventListener('click',()=>{if(window.confirm('\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043c\u0435\u0442\u043a\u0438 \u043d\u0430 \u0447\u0435\u0440\u0442\u0435\u0436\u0435?')){strokes=[];redraw();}});\n  function close(){if(!root.classList.contains('oge-ws-open'))return;finish();if(currentKey)saved.set(currentKey,strokes);root.classList.remove('oge-ws-open');}\n  root.querySelector('#oge-ws-close').addEventListener('click',close);\n  root.addEventListener('pointerdown',e=>{if(e.target===root)close();});\n  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&root.classList.contains('oge-ws-open')){e.stopImmediatePropagation();close();}},true);\n\n  function open(source,visual){\n    const context=source.querySelector('.oge-scenario-complete-prompt');if(!context)return;\n    const clone=context.cloneNode(true);\n    clone.querySelectorAll('svg,img,picture,canvas').forEach(el=>{if(!el.closest('mjx-container'))el.remove();});\n    clone.querySelectorAll('details').forEach(d=>d.open=true);\n    read.replaceChildren(clone);read.scrollTop=0;\n    fig.replaceChildren();\n    if(visual){const picture=visual.cloneNode(true);picture.removeAttribute('style');picture.style.cssText='';fig.appendChild(picture);}\n    const key=(context.textContent||'').replace(/\\s+/g,' ').slice(0,160);\n    currentKey=key;strokes=(saved.get(key)||[]).slice();active=null;\n    root.classList.add('oge-ws-open');setTool('pen');\n    requestAnimationFrame(()=>{resize();if(window.MathJax&&typeof MathJax.typesetPromise==='function')MathJax.typesetPromise([read]).catch(()=>{});});\n  }\n\n  // \u041d\u0435 \u043c\u0435\u043d\u044f\u0435\u043c \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u0434\u043b\u044f \u21166\u201325: \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u043e\u0431\u0449\u0438\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c 1\u20135.\n  document.addEventListener('click',e=>{\n    const b=e.target.closest('button');if(!b)return;\n    const isDraft = b.matches('#draftBtnBattle,#draftBtn,#draftToggle') || /toggleCanvas\\(['\"]pres-/.test(b.getAttribute('onclick')||'');\n    if(!isDraft)return;\n    let source=null,visual=null;\n    const slide=b.closest('.task-slide');\n    if(slide){source=slide.querySelector('.task-text');visual=slide.querySelector('.svg-wrapper svg,.svg-wrapper img,.svg-wrapper picture');}\n    else {source=document.getElementById('q')||document.getElementById('taskText');}\n    if(!source||!source.querySelector('.oge-scenario-complete-prompt'))return;\n    if(!visual){visual=Array.from(source.querySelectorAll('svg,img,picture')).find(el=>!el.closest('mjx-container'))||null;}\n    if(!visual){const other=document.querySelector('#towerDraftDiagram svg,#towerDraftDiagram img,#draftDiagram svg,#draftDiagram img');if(other)visual=other;}\n    e.preventDefault();e.stopImmediatePropagation();\n    open(source,visual);\n  },true);\n})();\n\u003c/script>" : '';
            return html.includes('</body>') ? html.replace('</body>', injection + scenarioWorkspace + '</body>') : (html + injection + scenarioWorkspace);
        } catch (e) {
            console.warn('Не удалось встроить справку ОГЭ:', e);
            return html;
        }
    };


    function getOgeSeasonalBackgroundCSS() {
        const style = document.getElementById('oge-generator-styles');
        const css = window.ogeSeasonalBackgroundCSS || (style ? style.textContent : '');
        const rules = css.match(/\.bg-(?:winter|spring|summer|autumn)\s*\{[^}]*\}/g) || [];
        return (rules || []).map(rule => rule.replace(/\}$/, 'background-repeat:no-repeat;}')).join('\n');
    }

    function downloadStudentHTML() {
        if (!currentInteractiveHTML) { alert("Сначала сгенерируйте вариант!"); return; }
        let theme = document.getElementById("theme-select").value;
        let customBg = getSelectedCustomBg();
        let timerValue = document.getElementById("timer-input").value;
        let customBgRule = '';
        if (theme === 'custom' && customBg) { customBgRule = `.bg-custom { background: #f4f7f6 url('${customBg}') center top / cover no-repeat fixed !important; }`; theme = 'custom'; }

        let teacherName = document.getElementById('teacher-name').value.trim();
        let sig = "";
        if (document.getElementById('toggle-signature').checked && teacherName !== '') {
            let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
            sig = `<div style="text-align:center;font-family:'Caveat';font-size:26px;color:#003399;margin-top:-10px;margin-bottom:25px;">Вариант ${verb}: ${teacherName}</div>`;
        }
        let showCorrectOnError = document.getElementById('toggle-show-correct').checked;

        const interactiveMathJaxConfig = {
            tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
            chtml: {adaptiveCSS: false}
        };
        const pupilInteractiveHTML = String(currentInteractiveHTML).replace(/<div class="oge-replace-bar">[\s\S]*?<\/div>/g, '');
        let html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Интерактив</title>
    <base href="https://svetlana18011991.github.io/generator11prof/">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet">
    <script>window.MathJax=${JSON.stringify(interactiveMathJaxConfig)};${window.SCRIPT_END}
    ${ogeOfflineMathJaxHTML()}
    <style>
        .oge-match11-interactive th,.oge-match11-interactive td{border:1px solid #899bb6;padding:8px 5px;text-align:center;}
        .oge-match11-interactive th{background:#edf5ff;color:#003399;font-weight:700;}
        .oge-match11-interactive select{width:100%;max-width:95px;display:block;margin:auto;padding:8px;font-size:18px;font-weight:bold;text-align:center;border:1px solid #8eacca;border-radius:5px;background:#fff;color:#17334c;}

        body{font-family:sans-serif;margin:0;padding:0;background:#f4f7f6;color:#333;}
        .theme-wrapper{min-height:100vh;padding:40px 20px;}
        ${getOgeSeasonalBackgroundCSS()}
        ${customBgRule}
        .paper{max-width:800px;margin:0 auto;background:rgba(255,255,255,0.95);padding:40px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.1);}
        .timer-box { position: sticky; top: 20px; float: right; background: #fff; border: 2px solid #ff8c00; color: #ff8c00; padding: 10px 20px; border-radius: 8px; font-size: 1.2em; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); z-index: 100; }
        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
        .modal-box { background: #fff; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto; border-radius: 12px; border: 2px solid #ff8c00; box-shadow: 0 10px 30px rgba(0,0,0,0.3); padding: 30px; position: relative; text-align: left; font-size: 18px;}
        #modal-content-box img, #modal-content-box svg { display:block; max-width:100%; height:auto; }
        #modal-content-box .diagram-wrap, #modal-content-box .task7-diagram, #modal-content-box .numberline-diagram { background: transparent !important; }
        .close-btn { position: absolute; top: 15px; right: 20px; font-size: 32px; line-height: 1; cursor: pointer; color: #888; transition: 0.2s; }
        .close-btn:hover { color: #ff8c00; }
        .btn-settings { background: #333; color: #aaa; border: 1px solid #555; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.85em; transition: 0.2s; }
        .btn-settings:hover { background: #444; color: #fff; }
        .answer-feedback { border-radius: 6px; padding: 6px 10px; }
        .answer-feedback.correct { display: inline-block !important; color: #1b5e20; background: #e8f5e9; border: 1px solid #4CAF50; }
        .answer-feedback.wrong { display: inline-block !important; color: #b71c1c; background: #ffebee; border: 1px solid #f44336; }
        .answer-feedback.empty { display: inline-block !important; color: #555; background: #f5f5f5; border: 1px solid #9e9e9e; }
        svg { overflow: visible; }
    </style>
</head>
<body>
    <div class="theme-wrapper bg-${theme}">
        <div class="paper">
            <div class="timer-box" id="timer-display">⏱ 00:00</div>
            <h1 style="text-align: center; color: #003399; border-bottom: 2px solid #ff8c00; padding-bottom: 15px; margin-top:0;">Тренировочный вариант</h1>
            ${sig}
            ${pupilInteractiveHTML}
            <button id="btn-check" onclick="checkAll()" style="display:block; width:100%; padding:15px; font-size:18px; font-weight:bold; background:#ff8c00; color:#fff; border:none; border-radius:8px; cursor:pointer; margin-top:30px; transition:0.3s;">ПОДВЕСТИ ИТОГИ</button>
            <div id="res-box" style="display:none; text-align:center; margin-top:30px; padding:20px; background:rgba(255,255,255,0.9); border:2px dashed #003399; border-radius:8px; font-size:1.2em; font-weight:bold;"></div>
        </div>
    </div>

    <div id="modal-overlay" class="modal-overlay" onclick="if(event.target===this) document.getElementById('modal-overlay').style.display='none'">
        <div class="modal-box">
            <div class="close-btn" onclick="document.getElementById('modal-overlay').style.display='none'">&times;</div>
            <div id="modal-content-box"></div>
        </div>
    </div>

    <script>
        ${window.CANVAS_LOGIC_SCRIPT}
        window.applyTask19BinaryStyles = function(taskNum, state, chosenValue, correctValue) {
        const input = document.getElementById('ans-interactive-' + taskNum);
        if (!input || !input.parentElement) return;
        const buttons = input.parentElement.querySelectorAll('.task19-binary-btn');
        buttons.forEach(btn => {
            const value = String(btn.getAttribute('data-binary-value') || '');
            const isChosen = String(chosenValue ?? '') === value;
            btn.disabled = state === 'correct' || state === 'wrong' || state === 'empty';
            btn.style.background = '#fff';
            btn.style.borderColor = '#b7cbd1';
            btn.style.color = '#111827';
            btn.setAttribute('aria-pressed', 'false');
            if (state === 'selected' && isChosen) {
                btn.style.background = '#f6efe1';
                btn.style.borderColor = '#c8a96a';
                btn.style.color = '#7c5b17';
                btn.setAttribute('aria-pressed', 'true');
            } else if (state === 'correct' && isChosen) {
                btn.style.background = '#e8f5e9';
                btn.style.borderColor = '#4CAF50';
                btn.style.color = '#1b5e20';
                btn.setAttribute('aria-pressed', 'true');
            } else if (state === 'wrong') {
                if (isChosen) {
                    btn.style.background = '#ffebee';
                    btn.style.borderColor = '#f44336';
                    btn.style.color = '#b71c1c';
                    btn.setAttribute('aria-pressed', 'true');
                } else if (String(correctValue ?? '') === value) {
                    btn.style.background = '#f2faf3';
                    btn.style.borderColor = '#9ccc65';
                    btn.style.color = '#33691e';
                }
            } else if (state === 'empty') {
                if (isChosen) {
                    btn.style.background = '#f6efe1';
                    btn.style.borderColor = '#c8a96a';
                    btn.style.color = '#7c5b17';
                    btn.setAttribute('aria-pressed', 'true');
                }
            }
        });
    };

    // Task 19: selecting an explicit true/false response still populates the normal answer field
    // so PDF/game/checking/export code can reuse its established logic.
    window.choose19Binary = function(btn, inputId, value) {
        const input=document.getElementById(inputId);
        if(!input || input.dataset.checked === '1') return;
        input.value=value;
        input.dispatchEvent(new Event('input', { bubbles:true }));
        input.dispatchEvent(new Event('change', { bubbles:true }));
        const taskNum = input.getAttribute('data-task-num') || ((String(input.id||'').match(/ans-interactive-(\\d+)/)||[])[1] || '');
        window.applyTask19BinaryStyles(taskNum, 'selected', value, null);
    };


        const SHOW_CORRECT_ON_ERROR = ${showCorrectOnError};
        let timerInterval; let timeLimit = ${timerValue} * 60; let timeSpent = 0; let isCountdown = timeLimit > 0;
        const workStartedAt = Date.now();
        let workFinishedAt = null;

        function setFeedback(taskNum, status, correctAns) {
            let feedback = document.getElementById('feedback-' + taskNum);
            if (!feedback) return;
            feedback.className = 'answer-feedback';
            feedback.style.display = 'none';
            feedback.innerHTML = '';
            if (status === 'correct') {
                feedback.classList.add('correct');
                feedback.innerHTML = '✅ Верно';
            } else if (status === 'wrong') {
                feedback.classList.add('wrong');
                feedback.innerHTML = SHOW_CORRECT_ON_ERROR ? '❌ Неверно. Верный ответ: <b>' + correctAns + '</b>' : '❌ Неверно';
            } else if (status === 'empty') {
                feedback.classList.add('empty');
                feedback.innerHTML = SHOW_CORRECT_ON_ERROR ? 'Не решено. Верный ответ: <b>' + correctAns + '</b>' : 'Не решено';
            }
        }

        function getTaskNumFromInput(input) {
            const explicitNum = input.getAttribute('data-task-num');
            if (explicitNum) return explicitNum;
            const match = String(input.id || '').match(/ans-interactive-(\d+)/);
            return match ? match[1] : '';
        }
        function formatDuration(sec) {
            sec = Math.max(0, Math.floor(Number(sec) || 0));
            const h = Math.floor(sec / 3600);
            const m = Math.floor((sec % 3600) / 60);
            const s = sec % 60;
            return h > 0
                ? String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0')
                : String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        }
        function updateTimerUI(sec) {
            document.getElementById('timer-display').innerText = (isCountdown ? '⏳ Осталось: ' : '⏱ Прошло: ') + formatDuration(sec);
        }
        function adjustStickyConditions() {
            document.querySelectorAll('.oge-practice-sticky').forEach(box => {
                const baseHeight = 155;
                const diagramWrap = box.querySelector('.oge-practice-intro-diagram');
                let targetHeight = baseHeight;
                if (diagramWrap) {
                    const media = diagramWrap.querySelector('img, svg, canvas, picture');
                    const mediaHeight = Math.max(diagramWrap.getBoundingClientRect().height || 0, media ? (media.getBoundingClientRect().height || 0) : 0);
                    const heading = box.querySelector('h3');
                    const headingHeight = heading ? heading.getBoundingClientRect().height : 0;
                    if (mediaHeight > 0) targetHeight = Math.max(baseHeight, Math.ceil(mediaHeight + headingHeight + 42));
                }
                const viewportCap = Math.max(baseHeight, Math.floor(window.innerHeight * 0.72));
                box.style.maxHeight = Math.min(targetHeight, viewportCap) + 'px';
            });
        }
        window.addEventListener('resize', adjustStickyConditions);
        window.onload = function() {
            adjustStickyConditions();
            document.querySelectorAll('.oge-practice-sticky img').forEach(img => {
                if (!img.complete) img.addEventListener('load', adjustStickyConditions, { once: true });
            });
            setTimeout(adjustStickyConditions, 250);
            updateTimerUI(isCountdown ? timeLimit : timeSpent);
            timerInterval = setInterval(() => {
                if (isCountdown) {
                    timeLimit--; updateTimerUI(timeLimit);
                    if (timeLimit <= 0) { clearInterval(timerInterval); alert('Время вышло! Итоги подводятся автоматически.'); checkAll(); }
                } else { timeSpent++; updateTimerUI(timeSpent); }
            }, 1000);
        };

        window.ogeUpdate11Match = function(select, taskNum) {
            const box=select.closest('.oge-match11-interactive');
            const input=document.getElementById('ans-interactive-'+taskNum);
            if (!box || !input || input.readOnly && input.dataset.checked==='1') return;
            const values=[...box.querySelectorAll('select')].map(s=>s.value);
            input.value=values.every(Boolean)?values.join(''):'';
            const preview=box.querySelector('.oge-match11-preview');
            if(preview)preview.textContent='Ответ: '+(input.value||'—');
            input.dispatchEvent(new Event('input',{bubbles:true}));
        };
        // --- ФУНКЦИЯ ОДИНОЧНОЙ (МГНОВЕННОЙ) ПРОВЕРКИ ---
        function normalizeAnswer(value) {
            // В ОГЭ десятичную дробь записывают через запятую. Точка считается ошибкой.
            return String(value ?? '').trim().replace(/\u2212/g, '-').replace(/\s+/g, '');
        }

        function checkSingle(btn, taskNum, correctAns) {
            let input = document.getElementById('ans-interactive-' + taskNum);
            if (!input) return;
            let u = normalizeAnswer(input.value);
            if (u === '') return; // не проверяем, если пусто

            const accepted = String(correctAns).split('|').map(normalizeAnswer).filter(Boolean);
            const answerLabel = String(correctAns).split('|').join(' или ');
            if (accepted.includes(u)) {
                input.style.background = '#e8f5e9'; input.style.borderColor = '#4CAF50'; input.style.color = '#1b5e20';
                setFeedback(taskNum, 'correct', answerLabel);
                if (input.parentElement && input.parentElement.querySelector('.task19-binary-btn')) window.applyTask19BinaryStyles(taskNum, 'correct', u, accepted[0] || '');
            } else {
                input.style.background = '#ffebee'; input.style.borderColor = '#f44336'; input.style.color = '#b71c1c';
                setFeedback(taskNum, 'wrong', answerLabel);
                if (input.parentElement && input.parentElement.querySelector('.task19-binary-btn')) window.applyTask19BinaryStyles(taskNum, 'wrong', u, accepted[0] || '');
            }
            input.readOnly = true;
            if (input.parentElement && input.parentElement.querySelector('.task19-binary-btn')) input.dataset.checked = '1';
            btn.style.display = 'none'; // Прячем галочку после проверки

            // Если разбор предусмотрен - сразу показываем его
            let helpBtn = document.getElementById('btn-help-' + taskNum);
            if (helpBtn) helpBtn.style.display = 'inline-flex';
        }

        // --- ПОДВЕДЕНИЕ ОБЩИХ ИТОГОВ ---
        function checkAll() {
            if (timerInterval) clearInterval(timerInterval);
            if (workFinishedAt === null) workFinishedAt = Date.now();
            const totalElapsedSeconds = Math.max(0, Math.floor((workFinishedAt - workStartedAt) / 1000));
            const totalElapsedLabel = formatDuration(totalElapsedSeconds);

            let correctCount = 0;
            let wrongCount = 0;
            let emptyCount = 0;
            const rows = [];

            const escapeHtml = (value) => String(value ?? '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');

            document.querySelectorAll('.ans-box').forEach(input => {
                const rawUserAnswer = String(input.value ?? '').trim();
                const normalizedUserAnswer = normalizeAnswer(rawUserAnswer);
                const rawAnswers = String(input.getAttribute('data-ans') || '');
                const accepted = rawAnswers.split('|').map(normalizeAnswer).filter(Boolean);
                const answerLabel = rawAnswers.split('|').join(' или ');
                const taskNum = getTaskNumFromInput(input);

                let status = '';
                let statusText = '';
                let statusColor = '';
                let statusBg = '';

                if (normalizedUserAnswer === '') {
                    emptyCount++;
                    status = 'empty';
                    statusText = 'Не решено';
                    statusColor = '#555';
                    statusBg = '#f5f5f5';
                    input.style.background = '#f5f5f5';
                    input.style.borderColor = '#9e9e9e';
                    setFeedback(taskNum, 'empty', answerLabel);
                    if (input.parentElement && input.parentElement.querySelector('.task19-binary-btn')) window.applyTask19BinaryStyles(taskNum, 'empty', '', accepted[0] || '');
                } else if (accepted.includes(normalizedUserAnswer)) {
                    correctCount++;
                    status = 'correct';
                    statusText = 'Верно';
                    statusColor = '#1b5e20';
                    statusBg = '#e8f5e9';
                    input.style.background = '#e8f5e9';
                    input.style.borderColor = '#4CAF50';
                    input.style.color = '#1b5e20';
                    setFeedback(taskNum, 'correct', answerLabel);
                    if (input.parentElement && input.parentElement.querySelector('.task19-binary-btn')) window.applyTask19BinaryStyles(taskNum, 'correct', normalizedUserAnswer, accepted[0] || '');
                } else {
                    wrongCount++;
                    status = 'wrong';
                    statusText = 'Неверно';
                    statusColor = '#b71c1c';
                    statusBg = '#ffebee';
                    input.style.background = '#ffebee';
                    input.style.borderColor = '#f44336';
                    input.style.color = '#b71c1c';
                    setFeedback(taskNum, 'wrong', answerLabel);
                    if (input.parentElement && input.parentElement.querySelector('.task19-binary-btn')) window.applyTask19BinaryStyles(taskNum, 'wrong', normalizedUserAnswer, accepted[0] || '');
                }

                input.readOnly = true;
                if (input.parentElement && input.parentElement.querySelector('.task19-binary-btn')) input.dataset.checked = '1';

                const userAnswerForTable = rawUserAnswer === '' ? '—' : escapeHtml(rawUserAnswer);
                const correctAnswerForTable = escapeHtml(answerLabel || '—');
                const correctAnswerCell = SHOW_CORRECT_ON_ERROR
                    ? '<td style="padding:10px 8px; border:1px solid #d6dbe3; text-align:center; font-weight:700; word-break:break-word;">' + correctAnswerForTable + '</td>'
                    : '';
                const statusIcon = status === 'correct' ? '✅' : (status === 'wrong' ? '❌' : '—');

                rows.push(
                    '<tr>' +
                        '<td style="padding:10px 8px; border:1px solid #d6dbe3; text-align:center; font-weight:800; color:#003399;">' + escapeHtml(taskNum) + '</td>' +
                        '<td style="padding:10px 8px; border:1px solid #d6dbe3; text-align:center; word-break:break-word;">' + userAnswerForTable + '</td>' +
                        correctAnswerCell +
                        '<td style="padding:10px 8px; border:1px solid #d6dbe3; text-align:center; font-weight:800; color:' + statusColor + '; background:' + statusBg + '; white-space:nowrap;">' + statusIcon + ' ' + statusText + '</td>' +
                    '</tr>'
                );
            });

            document.querySelectorAll('.btn-instant').forEach(btn => btn.style.display = 'none');

            const total = correctCount + wrongCount + emptyCount;
            const percent = total > 0 ? Math.round(correctCount / total * 100) : 0;

            document.getElementById('res-box').innerHTML =
                '<div style="text-align:left;">' +
                    '<h2 style="margin:0 0 16px; color:#003399; text-align:center;">Сводная таблица результатов</h2>' +
                    '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(110px, 1fr)); gap:10px; margin-bottom:18px;">' +
                        '<div style="padding:12px; border-radius:8px; background:#eef4ff; border:1px solid #9ab5df; text-align:center;"><div style="font-size:0.8em; color:#4d6480;">Всего</div><div style="font-size:1.45em; color:#003399;">' + total + '</div></div>' +
                        '<div style="padding:12px; border-radius:8px; background:#e8f5e9; border:1px solid #81c784; text-align:center;"><div style="font-size:0.8em; color:#397442;">Верно</div><div style="font-size:1.45em; color:#1b5e20;">' + correctCount + '</div></div>' +
                        '<div style="padding:12px; border-radius:8px; background:#ffebee; border:1px solid #ef9a9a; text-align:center;"><div style="font-size:0.8em; color:#93434b;">Неверно</div><div style="font-size:1.45em; color:#b71c1c;">' + wrongCount + '</div></div>' +
                        '<div style="padding:12px; border-radius:8px; background:#f5f5f5; border:1px solid #bdbdbd; text-align:center;"><div style="font-size:0.8em; color:#666;">Не решено</div><div style="font-size:1.45em; color:#555;">' + emptyCount + '</div></div>' +
                        '<div style="padding:12px; border-radius:8px; background:#fff8e1; border:1px solid #f0c36d; text-align:center;"><div style="font-size:0.8em; color:#7a5a12;">Общее время</div><div style="font-size:1.35em; color:#9a6500; white-space:nowrap;">⏱ ' + totalElapsedLabel + '</div></div>' +
                    '</div>' +
                    '<div style="text-align:center; margin:-4px 0 18px; font-size:1.08em; color:#333;"><b>Результат:</b> ' + correctCount + ' из ' + total + ' (' + percent + '%)</div>' +
                    '<div style="overflow-x:auto; border-radius:8px;">' +
                        '<table style="width:100%; min-width:560px; border-collapse:collapse; background:#fff; font-size:0.92em;">' +
                            '<thead><tr style="background:#ff8c00; color:#111;">' +
                                '<th style="padding:11px 8px; border:1px solid #d97706; width:62px;">№</th>' +
                                '<th style="padding:11px 8px; border:1px solid #d97706;">Ответ ученика</th>' +
                                (SHOW_CORRECT_ON_ERROR ? '<th style="padding:11px 8px; border:1px solid #d97706;">Правильный ответ</th>' : '') +
                                '<th style="padding:11px 8px; border:1px solid #d97706; width:125px;">Результат</th>' +
                            '</tr></thead>' +
                            '<tbody>' + rows.join('') + '</tbody>' +
                        '</table>' +
                    '</div>' +
                '</div>';

            document.getElementById('res-box').style.display = 'block';
            document.getElementById('res-box').style.textAlign = 'left';
            document.getElementById('res-box').style.fontWeight = 'normal';
            document.getElementById('btn-check').style.display = 'none';

            document.querySelectorAll('.btn-help').forEach(btn => btn.style.display = 'inline-flex');
            document.getElementById('res-box').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    ${window.SCRIPT_END}
</body>
</html>`;

        html = window.injectReferenceHelpIntoHtml(html, 'interactive');
        if (window.ogePackSharedImages) html = window.ogePackSharedImages(html);
        let blob = new Blob([html], {type:"text/html;charset=utf-8"});
        return downloadBlobSafely(blob, "Интерактивный_вариант.html");
    }

    function ogeBatchPrintData() {
        const batch=window.ogeVariantBatch||[];
        if(batch.length) return batch;
        return [{snapshot:window.ogeVariantSnapshot,printGroups:window.ogePrintableGroups||{}}];
    }
    // Альбомный A4: полный вариант всегда на трёх листах, подборки — по объёму.
    function ogePrintStripUserInterface(node) {
        if (!node) return node;
        node.querySelectorAll('script,style,button,input,select,textarea,canvas, .task-print-answer, .random-replace-btn, .oge-replace-bar, .btn-help, .btn-instant, .print-author, .oge-practice-toolbar, .oge-practice-controls, .oge-practice-counter, [data-ui-only]').forEach(el=>el.remove());
        node.querySelectorAll('img').forEach(img=>{img.loading='eager';});
        node.querySelectorAll('[id]').forEach(el=>{if(!el.closest('svg'))el.removeAttribute('id');});
        node.querySelectorAll('*').forEach(el=>{
            el.removeAttribute('onclick');el.removeAttribute('onmousedown');el.removeAttribute('onmouseup');
            el.removeAttribute('onmouseenter');el.removeAttribute('onmouseleave');
            // Не трогаем inline-разметку чертежей: некоторые планы и таблицы
            // строятся из DIV с grid, position:absolute и размерами.
            if(el.matches('.oge-practice-common,.oge-practice-sticky,.oge-practice-sticky-scope,.task-print-flex,.task-print-block,.task20-part2-item,.task-print-text,.task-print-img'))
                el.removeAttribute('style');
            if (el.hasAttribute('contenteditable')) el.removeAttribute('contenteditable');
        });
        return node;
    }
    function ogePrintCommonFromFragment(fragment) {
        const host=document.createElement('div'); host.innerHTML=String(fragment||'');
        const common=host.querySelector('.oge-practice-common');
        if(!common) return '';
        const clean=ogePrintStripUserInterface(common.cloneNode(true));
        clean.querySelectorAll('h3,h4').forEach(h=>{
            if(/Практический комплект|Задания 1.{0,3}5/i.test(h.textContent||'')) h.remove();
        });
        return clean.innerHTML.trim();
    }
    function ogePrintRenderTask(fragment, num, suppressDiagram) {
        const host=document.createElement('div'); host.innerHTML=String(fragment||'');
        const task=host.querySelector('.task-print-block, .task20-part2-item');
        if (!task) return '';
        const cloned=ogePrintStripUserInterface(task.cloneNode(true));
        // Стикер хранится в печатном фрагменте. Переносим его в компактную
        // боковую область условия, а не удаляем при очистке HTML.
        const sourceSticker=cloned.querySelector('.sticker-print');
        const stickerHtml=''; // В печатном полном варианте стикеры запрещены.
        if(sourceSticker) sourceSticker.remove();
        cloned.querySelectorAll('.task-print-answer').forEach(el=>el.remove());
        let content='', artwork='';
        const formal=cloned.querySelector('.task-print-text');
        if (formal) {
            const statement=formal.cloneNode(true);
            statement.querySelectorAll('.task-print-answer').forEach(el=>el.remove());
            content=statement.innerHTML;
            const diagram=cloned.querySelector('.task-print-img');
            if(diagram) artwork=diagram.innerHTML;
        } else if (cloned.classList.contains('task20-part2-item')) {
            // Внутри второй части: обёртка -> flex -> <b>20.</b> + <div>условие</div>.
            // Убираем номер-дубль и пустую область для рукописного решения.
            const flex=cloned.firstElementChild;
            const statement=(flex && flex.lastElementChild && flex.lastElementChild.tagName==='DIV')
                ?flex.lastElementChild.cloneNode(true):cloned.cloneNode(true);
            statement.querySelectorAll('div').forEach(el=>{
                const st=(el.getAttribute('style')||'').toLowerCase();
                if(st.includes('height:66px')||st.includes('border-bottom:1px dotted'))el.remove();
            });
            content=statement.innerHTML;
        } else {
            // Задачи с картинкой и отдельным полем для решения.
            const first=cloned.firstElementChild;
            if(first) {
                let textHolder=first.cloneNode(true);
                const leading=textHolder.firstElementChild;
                // У stacked11 отдельная ячейка с порядковым номером уже заменена заголовком.
                if((textHolder.getAttribute('style')||'').includes('grid-template-columns:auto minmax(0,1fr)')
                    && leading && leading.tagName==='DIV' && /^\s*\d{1,2}\.\s*$/.test(leading.textContent)
                    && leading.nextElementSibling?.tagName==='DIV') leading.remove();
                content=textHolder.innerHTML;
            } else content=cloned.innerHTML;
            const visuals=[...cloned.querySelectorAll('img,svg')];
            if(visuals.length) artwork=visuals.map(x=>x.outerHTML).join('');
            content=content.replace(/^\s*<b>\s*\d+\.?\s*<\/b>\s*/i,'');
            content=content.replace(/^\s*\d+\.\s*/, '');
        }
        // Готовая задача второй части иногда имеет собственную обёртку с номером.
        content=content.replace(/^\s*<b[^>]*>\s*\d+\.?\s*<\/b>\s*/i,'');
        const containsVisual=/<(?:svg|img|picture)\b/i.test(content);
        // Подавляем только повтор общего плана сюжета, но не отдельный
        // чертёж конкретной задачи (в частности, печи в задании №5).
        // Миниатюры задач №1–5 сохраняем, даже когда общий план уже напечатан.
        if(containsVisual) artwork='';
        let body=content.trim();
        // В сюжетах 1–5 сохраняем полноценные пустые клетки таблицы ответа.
        // Компактная таблица «A2 A3 A4 A6» — не таблица исходных чисел:
        // при печати её пустая строка раньше схлопывалась до тонкой полоски.
        if(num>=1 && num<=5 && /<table\b/i.test(body)) {
            const tableHost=document.createElement('div');
            tableHost.innerHTML=body;
            tableHost.querySelectorAll('table').forEach(table=>{
                const rows=Array.from(table.rows||[]);
                if(rows.length!==2 || rows[0].cells.length!==4 || rows[1].cells.length!==4)return;
                const headers=Array.from(rows[0].cells).map(cell=>(cell.textContent||'').trim());
                const blanks=Array.from(rows[1].cells).every(cell=>!(cell.textContent||'').trim());
                if(blanks && headers.every(value=>/^[AА]\s*\d{1,2}$/i.test(value)))
                    table.classList.add('oge-exam-answer-grid');
            });
            body=tableHost.innerHTML;
        }
        // Задание 11: таблица соответствия обязательна даже при ином типе прототипа.
        if(num===11 && !/oge-match11-print/.test(body)) {
            body += '<table class="oge-match11-print" aria-label="Таблица ответа для задания 11"><thead><tr><th>А</th><th>Б</th><th>В</th></tr></thead><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table>';
        }
        if(!body && !artwork)return '';
        const isLocalDiagram = /data-oge-own-diagram=["']1["']/.test(artwork);
        const isStoveFigure = num === 5 && artwork &&
            (isLocalDiagram || /alt=["'][^"']*(?:печь|печи|кожух|топк)/i.test(artwork));
        const graph=artwork?'<div class="oge-exam-diagram'+(isLocalDiagram?' oge-exam-local-diagram':'')+'">'+artwork+'</div>':'';
        const special=[15,16,17,18].includes(num)?' oge-exam-geometry':'';
        const writingArea='<div class="oge-exam-write-grid" aria-label="Поле для решения"></div>';
        const answerLine='<div class="oge-exam-answer-line">Ответ: ________________________</div>';
        if (isStoveFigure) {
            // Чертёж печки принадлежит только заданию 5. Выводим его прямо
            // ВНУТРИ условия, СЛЕВА, с настоящим текстовым обтеканием.
            // Inline-важные размеры не позволяют стилям других диаграмм
            // уменьшить рисунок до миниатюры или отправить вправо.
            const stoveFigure='<div class="oge-exam-stove5-figure" style="float:left!important;display:block!important;width:64mm!important;max-width:64mm!important;margin:1mm 3.3mm 1.5mm 0!important;clear:none!important;">'
                +artwork+'</div>';
            return '<section class="oge-exam-task oge-exam-stove5'+special+'" data-exam-task="'+num+'">'
               +'<div class="oge-exam-statement"><strong class="oge-exam-task-name">Задание '+num+'.</strong>'
               +'<div class="oge-exam-stove5-flow">'+stoveFigure+body+'</div></div>'
               +writingArea+answerLine+'</section>';
        }
        if (isLocalDiagram) {
            return '<section class="oge-exam-task'+special+'" data-exam-task="'+num+'">'
               +'<div class="oge-exam-statement"><strong class="oge-exam-task-name">Задание '+num+'.</strong> '
               +stickerHtml+graph+body+'</div>'+writingArea+answerLine+'</section>';
        }
        return '<section class="oge-exam-task'+special+'" data-exam-task="'+num+'">'
           +'<div class="oge-exam-statement"><strong class="oge-exam-task-name">Задание '+num+'.</strong> '
           +stickerHtml+body+'</div>'+graph+writingArea+answerLine+'</section>';
    }
    function ogePrintArrayToEntries(group, startNum, trueNumbers) {
        const raw=Array.isArray(group)?group:[];
        const items=[];
        let common='';
        raw.forEach((fragment,i)=>{
            const num=Array.isArray(trueNumbers) && trueNumbers[i] >= 1 ? Number(trueNumbers[i]) : startNum+i;
            if(i===0){common=ogePrintCommonFromFragment(fragment);}
            const rendered=ogePrintRenderTask(fragment,num,false);
            if(rendered){items.push({num,html:rendered});}
        });
        return {items,common};
    }
    function ogePrintIntroBlocks(common) {
        const host=document.createElement('div');host.innerHTML=common;
        const blocks=[];
        function collect(node) {
            if(node.nodeType===Node.TEXT_NODE) {
                if(node.textContent.trim()) {
                    const paragraph=document.createElement('p');paragraph.textContent=node.textContent;
                    blocks.push(paragraph.outerHTML);
                }
                return;
            }
            if(node.nodeType!==Node.ELEMENT_NODE)return;
            // Разделяем только текстовые обёртки, сохраняя планы, рисунки и таблицы целиком.
            const layout=(node.getAttribute('style')||'');
            const children=Array.from(node.childNodes).filter(child=>child.nodeType!==Node.TEXT_NODE||child.textContent.trim());
            const blockWrapper=children.length && children.every(child=>child.nodeType===Node.ELEMENT_NODE
                && /^(P|DIV|TABLE|UL|OL|SECTION|ARTICLE|BLOCKQUOTE)$/.test(child.tagName));
            if(node.tagName==='DIV' && blockWrapper
                && !/display\s*:\s*(grid|flex)|position\s*:\s*(absolute|relative)/i.test(layout)) {
                Array.from(node.childNodes).forEach(collect);
            } else if(node.textContent.trim() || node.querySelector('img,svg') || node.matches('img,svg')) {
                blocks.push(node.outerHTML);
            }
        }
        Array.from(host.childNodes).forEach(collect);
        return blocks;
    }
    function buildOgeBatchPrintHTML(withSolutions) {
        const batch=Array.isArray(window.ogeVariantBatch)&&window.ogeVariantBatch.length
            ?window.ogeVariantBatch:[{printGroups:window.ogePrintableGroups||{}}];
        const printBrand='<span class="brand">Шкатулка математических интерактивов · <a href="https://shkatulka.sistema-math.ru/">shkatulka.sistema-math.ru</a></span>';
        const pages=[];
        const completeVariants=[];
        batch.forEach((entry,i)=>{
            const groups=entry.printGroups||{};
            // Сохраняем точные номера задач из сохранённой подборки — при выборочной
            // генерации нельзя подменять номер условной позицией внутри диапазона.
            const numbers={'1-5':[],'6-14':[],'15-25':[]};
            (entry.snapshot||window.ogeVariantSnapshot||[]).forEach(block=>{
                (block.tasks||[]).forEach(task=>{
                    const code=Number(block.kind==='practice'?
                        (task.examNumber||task.__ogeScenarioMeta?.taskNumber||task.__ogeTrainerMeta?.proto?.examNumber):
                        String(block.tid||'').replace(/\D/g,''));
                    if(code>=1&&code<=25){
                        const key=code<=5?'1-5':code<=14?'6-14':'15-25';
                        numbers[key].push(code);
                    }
                });
            });
            const p1=ogePrintArrayToEntries(groups['1-5'],1,numbers['1-5']);
            const p2=ogePrintArrayToEntries(groups['6-14'],6,numbers['6-14']);
            const p3=ogePrintArrayToEntries(groups['15-25'],15,numbers['15-25']);
            const p1IsFull=[1,2,3,4,5].every(n=>p1.items.some(t=>t.num===n));
            const tasks=[...p1.items,...p2.items,...p3.items].sort((a,b)=>a.num-b.num);
            const taskNumbers=tasks.map(t=>t.num);
            const complete=batch[i]?.mode!=='manual' && taskNumbers.length===25&&new Set(taskNumbers).size===25
                  &&Array.from({length:25},(_,k)=>k+1).every(n=>taskNumbers.includes(n));
            let sharedDiagram='';
            if(p1.common && p1.items.length && !/<(?:img|svg|picture)\b/i.test(p1.common)) {
                const contextText=String(p1.common).replace(/<[^>]+>/g,' ').toLowerCase();
                // В «Печках» схема принадлежит только пятому вопросу.
                const isStove=complete && /печ(ь|к|и|е|н|ей)|топк|дымоход/.test(contextText);
                if(!isStove){
                    const temp=document.createElement('div');temp.innerHTML=p1.items[0].html;
                    const diagram=temp.querySelector('.oge-exam-diagram');
                    if(diagram)sharedDiagram=diagram.outerHTML;
                }
            }
            // Общий план уже есть слева в условии 1–5. Убираем его клоны
            // из ВСЕХ пяти карточек только полноценного варианта (оба режима).
            // Уникальный чертёж задания 5 «Печки» оставляем нетронутым.
            if(complete && p1.items.length){
                const original=document.createElement('div');
                original.innerHTML=p1.common + sharedDiagram;
                const planImages=new Set(Array.from(original.querySelectorAll('img')).map(el=>el.getAttribute('src')).filter(Boolean));
                const planSvgs=new Set(Array.from(original.querySelectorAll('svg')).map(el=>el.outerHTML));
                const hasSharedArtwork=planImages.size>0 || planSvgs.size>0;
                if(hasSharedArtwork){
                    p1.items.forEach(item=>{
                        const holder=document.createElement('div');
                        holder.innerHTML=item.html;
                        holder.querySelectorAll('img,svg').forEach(figure=>{
                            const duplicate=figure.tagName.toLowerCase()==='img'
                                ?planImages.has(figure.getAttribute('src'))
                                :planSvgs.has(figure.outerHTML);
                            if(!duplicate)return;
                            const block=figure.closest('.oge-exam-diagram,.oge-print-scenario-plan,.practice-figure-card');
                            if(block && block.querySelectorAll('img,svg').length===1)block.remove();
                            else figure.remove();
                        });
                        item.html=holder.innerHTML;
                    });
                }
            }
            completeVariants.push(complete && entry.mode !== 'manual');
            const headingLabel=(complete?'Вариант ':'Подборка ')+(i+1);
            const heading='<header class="oge-exam-header"><span>Математика ОГЭ</span><strong>'+headingLabel+'</strong></header>';
            if(!tasks.length)return;
            const units=[];
            const unit=html=>'<div class="oge-exam-flow-unit">'+html+'</div>';
            let part1Done=false,part2Done=false,introDone=false;
            tasks.forEach(task=>{
                let prefix='';
                if(task.num<=19&&!part1Done){
                    prefix=(complete ? '<div class="oge-exam-first-variant">Вариант №'+(i+1)+'</div>' : '')
                        +'<div class="oge-exam-part1">Часть 1</div>';
                    part1Done=true;
                }
                if(task.num>=20&&!part2Done){
                    prefix='<div class="oge-exam-part2">Часть 2</div>';
                    part2Done=true;
                }
                if(task.num<=5 && p1.common && !introDone){
                    const label='<div class="oge-exam-intro-label">'
                        +(p1IsFull?'Прочитайте внимательно текст и выполните задания 1–5.':'Прочитайте текст и выполните выбранные задания.')+'</div>';
                    const blocks=ogePrintIntroBlocks(p1.common);
                    if(sharedDiagram)blocks.unshift(sharedDiagram);
                    if(!blocks.length)blocks.push('');
                    if(complete) {
                        // В ПОЛНОМ варианте общее условие и крупный план — один
                        // неделимый блок; отдельные подборки не меняем.
                        // У самостоятельных планов листов/квартиры нет готового обтекания.
                    // В ПОЛНОМ варианте с полями используем ширину обеих сторон
                    // колонки: изображение слева, текст общего условия справа.
                    // Данные, размеры и сам рисунок не меняются.
                    const laidOutBlocks=blocks.map(function(block){
                        if(!complete || !withSolutions)return block;
                        if(/oge-print-scenario-plan/.test(block))return block; // уже обтекается
                        if(!/<(?:svg|img|picture)\b/i.test(block) || /<table\b/i.test(block))return block;
                        const withoutTags=block.replace(/<[^>]+>/g,'').trim();
                        if(withoutTags.length>180)return block;
                        return '<div class="oge-exam-intro-leading-figure">'+block+'</div>';
                    });
                    const intro='<div class="oge-exam-intro oge-exam-intro-locked">'+label+laidOutBlocks.join('')+'</div>';
                        units.push(unit(prefix+intro));
                        prefix='';
                    } else {
                        blocks.forEach((block,index)=>{
                            const intro='<div class="oge-exam-intro">'+(index===0?label:'')+block+'</div>';
                            units.push(unit(prefix+intro));
                            prefix='';
                        });
                    }
                    introDone=true;
                }
                units.push(unit(prefix+task.html));
            });
            const firstColumn='<div class="oge-exam-column"><div class="oge-exam-column-content">'+units.join('')+'</div></div>';
            const secondColumn='<div class="oge-exam-column"><div class="oge-exam-column-content"></div></div>';
            pages.push('<article class="oge-exam-page oge-exam-flow-page'+(complete?' oge-exam-full-variant':'')+'" data-batch-variant="'+(i+1)+'" data-print-pages="'+(complete && !withSolutions?3:0)+'" data-exam-page="'+(i+1)+'-1">'
               +heading+'<div class="oge-exam-columns">'+firstColumn+secondColumn+'</div>'
               +'<footer class="oge-exam-footer">'+printBrand+'<span class="oge-exam-page-counter">'+headingLabel+'</span></footer></article>');
        });
        // Ключи печатаются последними листами после всех полных вариантов.
        // В обычных подборках и вручную отмеченных 25 заданиях ключи по-прежнему
        // доступны отдельной кнопкой и НЕ добавляются в печатный документ.
        if(completeVariants.length === batch.length && completeVariants.every(Boolean)) {
            const grouped=[];
            const blockSize=4; // на одном альбомном листе до четырёх вариантов
            for(let offset=0;offset<batch.length;offset+=blockSize) {
                grouped.push(batch.slice(offset,offset+blockSize).map((entry,j)=>({
                    index:offset+j+1,
                    answers:new Map(ogeKeyTaskEntries(entry.snapshot).map(t=>[t.num,t.answer]))
                })));
            }
            grouped.forEach(group=>{
                const from=group[0].index;
                const to=group[group.length-1].index;
                const variantCaption=from===to?'Вариант №'+from:'Варианты №'+from+'–'+to;
                const colHeads=group.map(v=>'<th scope="col">Вариант №'+v.index+'</th>').join('');
                const rows=Array.from({length:25},(_,j)=>{
                    const num=j+1;
                    const cells=group.map(v=>'<td>'+ogeKeyEscape(v.answers.get(num)??'—')+'</td>').join('');
                    return '<tr><th scope="row">'+num+'</th>'+cells+'</tr>';
                }).join('');
                pages.push('<article class="oge-exam-page oge-exam-keys-page" aria-label="Ключи ответов">'
                    +'<header class="oge-exam-header"><span>Математика ОГЭ</span><strong>Ключи ответов</strong></header>'
                    +'<section class="oge-keys-content"><h1>Ключи к полным вариантам ОГЭ</h1>'
                    +'<p class="oge-keys-subtitle">'+variantCaption+' · задания 1–25</p>'
                    +'<table class="oge-keys-table"><thead><tr><th scope="col">№ задания</th>'+colHeads+'</tr></thead>'
                    +'<tbody>'+rows+'</tbody></table>'
                    +'<p class="oge-keys-note">Задания 20–25: указаны итоговые ответы, если они есть в базе. Развёрнутые решения проверяет учитель.</p></section>'
                    +'<footer class="oge-exam-footer">'+printBrand+'<span>Ключи ответов</span></footer></article>');
            });
        }
        return pages.join('');
    }
    // Ручная подборка — обычный текстовый документ A4 (одна колонка).
    // Используем исходные печатные блоки: там стикеры уже привязаны к
    // выбранным заданиям, и они не должны переноситься в экзаменационные колонки.
    function ogeBuildManualPrintHTML() {
        const entry=Array.isArray(window.ogeVariantBatch) && window.ogeVariantBatch.length
            ? window.ogeVariantBatch[0] : null;
        const source=currentPrintHTML || entry?.printHTML || '';
        return '<main class="oge-manual-document">'
            +'<header class="oge-manual-head"><strong>Математика ОГЭ</strong><span>Подборка заданий</span></header>'
            +'<div class="oge-manual-collection">'+source+'</div>'
            +'</main>';
    }
    function ogeManualPrintCSS() {
        // Separate, natural-flow print layout for individually selected tasks.
        // Do not override the original formatting of the task statement / mathematics.
        return `
@page{size:A4 portrait;margin:14mm 15mm 16mm;}
html,body{margin:0!important;padding:0!important;background:#fff!important;color:#171717!important;}
.oge-manual-document{width:100%;max-width:180mm;margin:0 auto;font:normal 11pt/1.38 "Times New Roman",Times,serif;color:#171717;}
.oge-manual-head{display:flex;justify-content:space-between;align-items:center;border-bottom:.5pt solid #777;padding-bottom:2.5mm;margin:0 0 4mm;font-size:11pt;}
.oge-manual-head strong{font-weight:700;}.oge-manual-head span{font-weight:400;}
.oge-manual-collection{width:100%;}
.oge-manual-collection h3,.oge-manual-collection h4{font-family:inherit;background:none!important;color:#171717!important;border:none!important;border-bottom:.4pt solid #ccc!important;padding:1mm 0 1.6mm!important;margin:4mm 0 2mm!important;font-size:11pt!important;line-height:1.3!important;font-weight:700!important;break-after:avoid-page;page-break-after:avoid;}
.oge-manual-collection h4{font-size:10.5pt!important;margin-top:3mm!important;}
.oge-manual-collection .task-print-block,.oge-manual-collection .task20-part2-item{display:block!important;position:relative;max-width:100%!important;background:#fff!important;color:#171717!important;border:0!important;border-bottom:.35pt solid #ddd!important;border-radius:0!important;box-shadow:none!important;padding:2mm 0 2.5mm!important;margin:0 0 2mm!important;break-inside:avoid-page;page-break-inside:avoid;}
.oge-manual-collection .task-print-flex{display:flex!important;align-items:flex-start!important;gap:2.5mm!important;min-width:0;max-width:100%;}
.oge-manual-collection .task-print-num{flex:0 0 7mm!important;width:7mm!important;height:auto!important;min-width:7mm!important;display:block!important;padding:0!important;margin:0!important;border:0!important;background:none!important;color:inherit!important;font:bold 11pt/1.35 "Times New Roman",Times,serif!important;}
.oge-manual-collection .task-print-num::after{content:".";}
.oge-manual-collection .task-print-text{flex:1 1 auto!important;min-width:0!important;max-width:100%!important;overflow-wrap:break-word;font:normal 11pt/1.38 "Times New Roman",Times,serif!important;}
.oge-manual-collection .task-print-text p{margin:0 0 1.4mm;}
.oge-manual-collection .task-print-answer{margin:2mm 0 0!important;font:normal 10.5pt/1.25 "Times New Roman",Times,serif!important;}
.oge-manual-collection .task-print-img{flex:0 1 48mm!important;width:auto!important;min-width:0!important;max-width:48mm!important;overflow:visible!important;}
.oge-manual-collection .task-print-img svg,.oge-manual-collection .task-print-img img{display:block;max-width:100%!important;max-height:56mm!important;width:auto!important;height:auto!important;object-fit:contain!important;}
/* Own grid/geometry drawings remain visible with stickers beside the condition. */
.oge-manual-collection .task-print-flex:has(.sticker-print):has(.task-print-img){gap:1.5mm!important;}
.oge-manual-collection .task-print-flex:has(.sticker-print) .task-print-img{flex:0 0 41mm!important;max-width:41mm!important;min-width:35mm!important;display:block!important;}
.oge-manual-collection .task-print-img .t18-source-figure{display:block!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;line-height:0!important;}
.oge-manual-collection .task-print-img .t18-source-figure img{display:block!important;width:100%!important;max-height:52mm!important;opacity:1!important;visibility:visible!important;object-fit:contain!important;}

.oge-manual-collection img,.oge-manual-collection svg{max-width:100%;height:auto;}
.oge-manual-collection .sticker-print{flex:0 0 22mm!important;width:22mm!important;max-width:22mm!important;margin:0 0 0 1mm!important;position:static!important;transform:none!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;break-inside:avoid!important;}
.oge-manual-collection .sticker-print img{width:auto!important;height:auto!important;max-width:20mm!important;max-height:20mm!important;object-fit:contain!important;}
.oge-manual-collection .sticker-print div{width:100%!important;max-width:22mm!important;font:normal 7.5pt/1.16 "Times New Roman",Times,serif!important;color:#444!important;text-align:center!important;overflow-wrap:break-word!important;}
.oge-manual-collection .oge-practice-common,.oge-manual-collection .oge-practice-sticky{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;max-width:100%!important;min-width:0!important;}
.oge-manual-collection table{max-width:100%!important;width:100%!important;table-layout:fixed;border-collapse:collapse;margin:2mm 0;line-height:1.2;}
.oge-manual-collection th,.oge-manual-collection td{border:.4pt solid #777;padding:.7mm;overflow-wrap:anywhere;vertical-align:top;}
.oge-manual-collection mjx-container{max-width:100%;}
.oge-manual-collection svg{shape-rendering:geometricPrecision;text-rendering:geometricPrecision;}
.oge-manual-collection .tropinki-print-pack-2-4{break-inside:auto!important;page-break-inside:auto!important;}
@media print{.oge-manual-document{max-width:none!important;}.oge-manual-collection .task-print-block:has(table),.oge-manual-collection .task-print-block:has(.oge-practice-common){break-inside:auto;page-break-inside:auto;}.oge-manual-collection tr{break-inside:avoid;page-break-inside:avoid;}}
@media screen{body{background:#e9e9e9!important;padding:15px 0!important;}.oge-manual-document{background:#fff;padding:14mm 15mm;box-shadow:0 3px 12px #0002;}}
`;
    }
    async function openOgePrintDocument(html, filename) {
        if (window.ogeEmbedBankImages) html = await window.ogeEmbedBankImages(html);
        // Файл для печати скачивается напрямую. Раньше window.open() открывал
        // тяжёлую blob-страницу в том же процессе и после печати некоторые
        // браузеры переставали обрабатывать клики в исходном генераторе.
        // Отдельная вкладка и интервал проверки её закрытия больше не нужны.
        if (!html.includes('__ogeNoSplitMath')) {
            const helper = '<script>' + OGE_MATH_NO_SPLIT_SCRIPT + '<\/script>';
            html = html.replace(/<\/head>/i, helper + '</head>');
        }
        const blob = new Blob([html], {type:'text/html;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        try { anchor.click(); }
        finally {
            anchor.remove();
            // Не освобождать URL мгновенно: Edge/Chrome нужен запас
            // времени для завершения загрузки большого файла.
            setTimeout(function(){ URL.revokeObjectURL(url); }, 60000);
        }
    }
    function ogePrintToolsHTML() {
        return `<style>
@media screen {
 #oge-print-tools{position:sticky;top:0;z-index:10000;box-sizing:border-box;width:100%;padding:14px 20px;margin:0 auto 20px;background:#fff;border:1px solid #ccd8e7;border-radius:8px;color:#18304e;font:16px/1.4 Arial,sans-serif;box-shadow:0 2px 12px #0002;}
 #oge-print-tools button{font:inherit;padding:9px 16px;margin:0 10px 8px 0;border:0;border-radius:6px;background:#003399;color:white;cursor:pointer;}
 #oge-print-tools button:disabled{opacity:.5;cursor:wait;}
 #oge-print-status{margin:0;}
 #oge-print-status[data-error]{color:#a32518;}
}
@media print{#oge-print-tools{display:none!important;}}
</style><aside id="oge-print-tools" aria-label="Печать документа">
<button id="oge-print-button" type="button" disabled>Печать / сохранить PDF</button>
<button id="oge-print-retry" type="button" hidden>Повторить подготовку</button>
<p id="oge-print-status" role="status">Подготавливаем формулы и рисунки для печати…</p>
</aside>`;
    }
    // Shared by downloaded documents: the renderer and all fonts travel with the HTML.

    function ogePreparePrint(paginate) {
        // Дополнительные клетки создаются только в скачанном файле,
        // исходную вкладку и её DOM не меняем.
        if(document.body.classList.contains('oge-print-with-solutions') || document.body.classList.contains('oge-print-without-solutions')) {
            const withGrid=document.body.classList.contains('oge-print-with-solutions');
            document.querySelectorAll('.oge-print-manual .task-print-block, .oge-print-manual .task20-part2-item, .print-page .task-print-block, .print-page .task20-part2-item').forEach(block=>{
                const second=block.classList.contains('task20-part2-item');
                if(withGrid && !block.querySelector('.oge-image-grid-paper,.oge-print-write-grid')) {
                    const area=document.createElement('div'); area.className='oge-print-write-grid';
                    const answer=block.querySelector('.task-print-answer');
                    if(answer)answer.before(area);else block.appendChild(area);
                }
                if(second && !block.querySelector('.task-print-answer,.oge-part2-answer-line')) {
                    const answer=document.createElement('div');answer.className='oge-part2-answer-line';
                    answer.textContent='Ответ: ________________________';
                    answer.style.cssText='margin:2mm 0;font:11pt Times New Roman,serif;';
                    block.appendChild(answer);
                }
            });
        }
        // Сетка является настоящей SVG-графикой, а не CSS-фоном: Chrome/Edge
        // выводят её на бумагу и в PDF даже при выключенной «Фоновой графике».
        function addPrintableGridLines(){
            const targets=document.querySelectorAll('.oge-print-with-solutions .oge-print-write-grid, .oge-print-with-solutions .oge-image-grid-paper, .oge-print-with-solutions .oge-exam-write-grid');
            targets.forEach((field,index)=>{
                if(field.querySelector('svg.oge-grid-vector'))return;
                field.style.position='relative';
                field.style.overflow='hidden';
                field.classList.add('oge-grid-active');
                const NS='http://www.w3.org/2000/svg';
                const svg=document.createElementNS(NS,'svg');
                svg.setAttribute('class','oge-grid-vector');
                svg.setAttribute('aria-hidden','true');
                svg.setAttribute('width','100%');svg.setAttribute('height','100%');
                svg.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;z-index:0;';
                const defs=document.createElementNS(NS,'defs');
                const pattern=document.createElementNS(NS,'pattern');
                const patternId='oge-grid-pdf-'+index;
                pattern.setAttribute('id',patternId);
                pattern.setAttribute('patternUnits','userSpaceOnUse');
                const step=5*96/25.4;  // шаг сетки 5 мм при 96 CSS px / inch
                pattern.setAttribute('width',String(step));pattern.setAttribute('height',String(step));
                const path=document.createElementNS(NS,'path');
                path.setAttribute('d',`M ${step} 0 H 0 V ${step}`);
                path.setAttribute('fill','none');
                path.setAttribute('stroke','#b4cbdc');
                path.setAttribute('stroke-width','0.8');
                pattern.appendChild(path);defs.appendChild(pattern);svg.appendChild(defs);
                const rect=document.createElementNS(NS,'rect');
                rect.setAttribute('width','100%');rect.setAttribute('height','100%');
                rect.setAttribute('fill','url(#'+patternId+')');svg.appendChild(rect);
                field.prepend(svg);
            });
        }
        // Ставим сетку после размещения и измерения заданий: иначе SVG
        // наследует стандартную область 300×150 px и получается узкая полоска.
        function fitPrintableGridLines(){
            document.querySelectorAll('svg.oge-grid-vector').forEach(svg=>{
                const field=svg.parentElement;
                if(!field || !field.isConnected) return;
                const box=field.getBoundingClientRect();
                const w=Math.max(1, Math.round(field.clientWidth || box.width || 1));
                const h=Math.max(1, Math.round(field.clientHeight || box.height || 1));
                svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
                svg.setAttribute('preserveAspectRatio', 'none');
            });
        }
        if(!document.getElementById('oge-print-grid-style')){
            const style=document.createElement('style');
            style.id='oge-print-grid-style';
            style.textContent=`
              .oge-grid-active {background-image:none!important;background-color:white!important;}
              .oge-grid-active > svg.oge-grid-vector {
                position:absolute!important;left:0!important;top:0!important;
                display:block!important;width:100%!important;height:100%!important;
                max-width:none!important;min-width:0!important;max-height:none!important;
                margin:0!important;transform:none!important;object-fit:fill!important;
                pointer-events:none!important;overflow:hidden!important;
              }
            `;
            document.head.appendChild(style);
        }
        window.addEventListener('beforeprint', fitPrintableGridLines);
        const button = document.getElementById('oge-print-button');
        const retry = document.getElementById('oge-print-retry');
        const status = document.getElementById('oge-print-status');
        function limit(promise, message) {
            return new Promise(function(resolve, reject) {
                const timer = setTimeout(function(){ reject(new Error(message)); }, 30000);
                Promise.resolve(promise).then(function(value){
                    clearTimeout(timer); resolve(value);
                }, function(error){ clearTimeout(timer); reject(error); });
            });
        }
        function fail(message, error) {
            console.error('Подготовка печати', error);
            status.textContent = message;
            status.setAttribute('data-error', '');
            retry.hidden = false;
        }
        function print() {
            try { fitPrintableGridLines(); window.focus(); window.print(); }
            catch (error) {
                status.textContent = 'Окно печати не открылось. Нажмите Ctrl + P и выберите сохранение в PDF.';
            }
        }
        button.addEventListener('click', print);
        retry.addEventListener('click', function(){ window.location.reload(); });
        async function prepare() {
            try {
                if (!window.MathJax || !window.MathJax.startup) {
                    const script = document.getElementById('oge-print-mathjax');
                    await limit(new Promise(function(resolve, reject) {
                        if (!script) { reject(new Error('MathJax не загрузился')); return; }
                        script.addEventListener('load', resolve, {once:true});
                        script.addEventListener('error', function(){ reject(new Error('MathJax не загрузился')); }, {once:true});
                    }), 'Формулы загружаются слишком долго');
                }
                if (!window.MathJax || !window.MathJax.startup) throw new Error('MathJax не загрузился');
                await limit(window.MathJax.startup.promise, 'Формулы загружаются слишком долго');
                await limit(window.MathJax.typesetPromise(), 'Не удалось отобразить формулы');
                if (document.querySelector('mjx-merror, [data-mjx-error]')) throw new Error('Ошибка в формуле');
                await limit(Promise.all(Array.from(document.images).map(function(image) {
                    image.loading = 'eager';
                    if (image.complete) return image.naturalWidth > 0 ? Promise.resolve() : Promise.reject(new Error('Не загрузился рисунок'));
                    return new Promise(function(resolve, reject) {
                        image.addEventListener('load', resolve, {once:true});
                        image.addEventListener('error', function(){ reject(new Error('Не загрузился рисунок')); }, {once:true});
                    });
                })), 'Рисунки загружаются слишком долго');
                if (document.fonts) await limit(document.fonts.ready, 'Шрифты загружаются слишком долго');
            } catch (error) {
                fail('Не удалось загрузить формулы или рисунки. Проверьте подключение к интернету и нажмите «Повторить подготовку».', error);
                return;
            }
            try { if (paginate) paginate(); addPrintableGridLines(); fitPrintableGridLines(); }
            catch (error) {
                fail('Не удалось разместить задания на листах. Вернитесь в генератор и попробуйте заменить задание или уменьшить подборку.', error);
                return;
            }
            button.disabled = false;
            status.textContent = 'Документ готов. Для печати или сохранения в PDF нажмите кнопку «Печать / сохранить PDF» в этой вкладке. Генератор останется доступным.';
            // Не вызываем window.print() автоматически: модальный диалог
            // печати в новой вкладке мог блокировать исходную вкладку генератора.
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', prepare, {once:true});
        else prepare();
    }
    // The selective print layout intentionally follows generator11prof's
    // actual HTML print template. Full OGE variants keep their own three-page layout.
    function ogeDownloadManualPrintLikeEGE(withSolutions) {
        const entry=Array.isArray(window.ogeVariantBatch) && window.ogeVariantBatch.length
            ? window.ogeVariantBatch[0] : null;
        let original=currentPrintHTML || entry?.printHTML || '';
        if(!original){ alert('Сначала сгенерируйте подборку!'); return; }
        // Исправление viewBox без повторного разбора всей подборки в DOM.
        // В комплектах 1–5 много встроенных планов (data:image), и создание
        // их копии через innerHTML заставляло браузер расходовать лишнюю память.
        original = original.replace(/<svg\b[^>]*>/gi, function(tag) {
            if (/\bviewBox\s*=/i.test(tag)) return tag;
            const width = tag.match(/\bwidth\s*=\s*["'](\d+(?:\.\d+)?)(?:px)?["']/i);
            const height = tag.match(/\bheight\s*=\s*["'](\d+(?:\.\d+)?)(?:px)?["']/i);
            if (!width || !height) return tag;
            return tag.replace(/<svg\b/i, '<svg viewBox="0 0 ' + width[1] + ' ' + height[1] + '"');
        });
        // Только выборочная печать «Тарифов»: сокращаем громоздкие рамки
        // и не меняем настройки полноценных вариантов 1–25.
        const isTariffSelection=/<h3\b[^>]*>\s*Практический комплект\s*\d+[^<]{0,120}тариф/i.test(original);
        if(isTariffSelection){
            // В старых прототипах перед первой задачей мог быть принудительный
            // разрыв страницы. Для выборочной пятёрки он не нужен.
            original=original.replace(/<div\s+style=["']page-break-before:always;\s*break-before:page;\s*height:0;["']>\s*<\/div>/gi,'');
        }
        const teacherName=String(document.getElementById('teacher-name')?.value || '').trim();
        const signatureEnabled=Boolean(document.getElementById('toggle-signature')?.checked);
        const gender=document.getElementById('teacher-gender')?.value;
        const signature=(signatureEnabled && teacherName)
            ? '<div class="print-author">Подборку '+(gender==='male'?'подготовил':'подготовила')+': '
              +teacherName.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</div>'
            : '';
        // Same MathJax CHTML output as EGE: font metrics and weight remain natural.
        const config={tex:{inlineMath:[['$','$'],['\\(','\\)']],processEscapes:true,
            macros:{tg:'\\operatorname{tg}',ctg:'\\operatorname{ctg}',arctg:'\\operatorname{arctg}',arcctg:'\\operatorname{arcctg}'}}};
        const html=`<!DOCTYPE html>
<html lang="ru"><head><meta charset="UTF-8"><title>ОГЭ · подборка для печати</title>
<base href="https://svetlana18011991.github.io/generator9oge/">
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet">
<script>window.MathJax=${JSON.stringify(config)};${window.SCRIPT_END}
<script id="oge-print-mathjax" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">${window.SCRIPT_END}
<style>
        :root { --blue:#003399; --orange:#ff8c00; --line:#d8e5f3; --soft:#f4f8ff; }
        * { box-sizing: border-box; }
        @media print {
            /* Подпись в нижнем поле страницы, за пределами блока заданий. */
            @page {
                size: A4;
                margin: 12mm 12mm 20mm 12mm;
                @bottom-center {
                    content: "Шкатулка математических интерактивов";
                    font-family: 'Caveat', cursive;
                    font-size: 15px;
                    color: rgba(0,0,0,0.55);
                }
            }
            body {
                background:#fff !important;
                margin:0 !important;
                padding:0 !important;
                color:#111 !important;
                font-family: "Times New Roman", serif;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .print-page {
                width:100%;
                padding:0;
                margin:0;
            }
            .print-header {
                page-break-after: avoid;
                break-after: avoid;
                margin:0 0 5mm 0;
                padding:0 0 3.5mm 0;
                border-bottom:2px solid var(--orange);
                position:relative;
            }
            .print-header::before {
                content:"";
                display:block;
                height:3mm;
                border-radius:999px;
                background:linear-gradient(90deg, var(--blue), var(--orange));
                margin-bottom:4mm;
            }
            .print-title {
                text-align:center;
                text-transform:uppercase;
                font-size:18px;
                letter-spacing:.08em;
                color:#111;
                margin:0;
                font-weight:800;
            }
            .print-subtitle {
                text-align:center;
                margin:1mm 0 0;
                color:#555;
                font-size:12px;
            }
            .print-author {
                text-align:center;
                font-family:'Caveat', cursive;
                font-size:23px;
                color:var(--blue);
                margin:2mm 0 0;
            }

            h3 {
                page-break-after: avoid;
                break-after: avoid;
                font-size:15px !important;
                line-height:1.2 !important;
                margin:6mm 0 3mm !important;
                padding:2.5mm 4mm !important;
                border-left:4px solid var(--orange) !important;
                border-radius:0 6px 6px 0 !important;
                background:#eef6ff !important;
                color:var(--blue) !important;
            }

            /* Пятёрки №1–5: крупный план внутри общего условия, с обтеканием текстом.
               Печь не содержит общий чертёж: её рисунок остаётся в задаче №5. */
            .print-page .oge-practice-common.oge-print-scenario-intro {
                display:block !important;
                overflow:visible !important;
                padding:2mm 2.5mm 2mm !important;
                margin:2mm 0 4mm !important;
                page-break-inside:avoid !important;
                break-inside:avoid !important;
            }
            .print-page .oge-print-scenario-body { font-size:12.5px !important; line-height:1.31 !important; }
            .print-page .oge-print-scenario-body::after { content:"";display:block;clear:both; }
            .print-page .oge-print-scenario-plan {
                float:left !important;
                display:block !important;
                box-sizing:border-box !important;
                width:81mm !important;
                max-width:48% !important;
                margin:1mm 4mm 2mm 0 !important;
                padding:0 !important;
                break-inside:avoid !important;
                page-break-inside:avoid !important;
            }
            .print-page .oge-print-scenario-plan img,
            .print-page .oge-print-scenario-plan svg,
            .print-page .oge-print-scenario-plan picture {
                width:100% !important;
                max-width:100% !important;
                height:auto !important;
                max-height:82mm !important;
                display:block !important;
                object-fit:contain !important;
                margin:0 !important;
            }
            .print-page .oge-print-scenario-body p { margin:0 0 2mm !important; }
            .print-page .oge-print-scenario-body table { clear:both; width:100%; }
            .print-page .oge-print-scenario-body > div:last-child { clear:both; }
            .task-print-block {
                display:block;
                page-break-inside:avoid !important;
                break-inside:avoid !important;
                margin:0 0 4.5mm 0 !important;
                padding:3.2mm 3.6mm 3mm 3.4mm !important;
                position:relative;
                clear:both;
                border:1px solid var(--line) !important;
                border-left:3px solid var(--orange) !important;
                border-radius:7px !important;
                background:linear-gradient(90deg,#fff,#fbfdff) !important;
                box-shadow:0 1px 0 rgba(0,0,0,.05) !important;
            }
            .task-print-flex {
                display:flex !important;
                align-items:flex-start !important;
                gap:4mm !important;
                page-break-inside:avoid !important;
                break-inside:avoid !important;
            }
            .task-print-num {
                flex:0 0 8mm !important;
                width:8mm !important;
                height:8mm !important;
                display:inline-flex !important;
                align-items:center !important;
                justify-content:center !important;
                border-radius:50% !important;
                background:var(--blue) !important;
                color:#fff !important;
                font-size:12px !important;
                font-weight:800 !important;
                line-height:1 !important;
                margin-top:.5mm !important;
            }
            .task-print-text {
                flex:1 1 auto !important;
                min-width:0 !important;
                font-size:14px !important;
                line-height:1.26 !important;
            }
            .task-print-text p { margin:0 0 2.2mm !important; }
            .task-print-text mjx-container { margin:0 .5mm !important; }
            .task-print-answer {
                margin-top:4mm !important;
                font-size:14px !important;
                letter-spacing:.2px !important;
                color:#333 !important;
            }

            .task-print-img {
                flex:0 0 46mm !important;
                width:46mm !important;
                max-width:46mm !important;
                min-width:34mm !important;
                page-break-inside:avoid !important;
                break-inside:avoid !important;
                display:flex !important;
                align-items:flex-start !important;
                justify-content:center !important;
                overflow:visible !important;
            }
            .task-print-img img,
            .task-print-img svg {
                display:block !important;
                width:100% !important;
                max-width:46mm !important;
                height:auto !important;
                max-height:42mm !important;
                object-fit:contain !important;
                page-break-inside:avoid !important;
                break-inside:avoid !important;
            }
            .task-print-text img,
            .task-print-text svg {
                display:block !important;
                max-width:min(100%, 68mm) !important;
                max-height:42mm !important;
                width:auto !important;
                height:auto !important;
                object-fit:contain !important;
                margin:2mm auto !important;
                page-break-inside:avoid !important;
                break-inside:avoid !important;
            }

            /* Подборка для печати: план/чертёж рядом с клетчатым полем.
               Слегка увеличиваем рисунок, сокращая поле по ширине;
               высота клетки и другие задания остаются без изменений. */
            .print-page .oge-image-grid-print .oge-image-grid-layout {
                display:flex !important;
                align-items:flex-start !important;
                gap:2.5mm !important;
                min-width:0 !important;
            }
            .print-page .oge-image-grid-print .oge-image-grid-figure {
                flex:0 0 59mm !important;
                width:59mm !important;
                max-width:59mm !important;
                min-width:0 !important;
                display:block !important;
                overflow:visible !important;
                align-self:flex-start !important;
            }
            /* У ряда схем собственная обёртка со старым max-width. */
            .print-page .oge-image-grid-print .oge-image-grid-figure > div,
            .print-page .oge-image-grid-print .oge-image-grid-figure > figure,
            .print-page .oge-image-grid-print .oge-image-grid-figure > picture {
                width:100% !important;
                max-width:100% !important;
                min-width:0 !important;
                height:auto !important;
                margin:0 !important;
            }
            .print-page .oge-image-grid-print .oge-image-grid-figure img,
            .print-page .oge-image-grid-print .oge-image-grid-figure svg {
                display:block !important;
                width:100% !important;
                max-width:100% !important;
                height:auto !important;
                max-height:52mm !important;
                object-fit:contain !important;
                margin:0 !important;
            }
            .print-page .oge-image-grid-print .oge-image-grid-solution {
                flex:1 1 0 !important;
                min-width:0 !important;
                max-width:none !important;
            }
            /* При наличии стикера уменьшаем лишь рисунок: оставляем место
               для решения и сохраняем картинку стикера справа. */
            .print-page .oge-image-grid-print:has(.sticker-print) .oge-image-grid-figure {
                flex-basis:51mm !important;
                width:51mm !important;
                max-width:51mm !important;
            }

            /* №1–5: рисунки +20% (кроме «Тропинок»), без искажения.
               Не затрагивает задания 6–25 и общий план над пятёркой. */
            .print-page .oge-image-grid-print.oge-print-enlarged .oge-image-grid-figure {
                flex:0 0 75mm !important;
                width:75mm !important;
                max-width:75mm !important;
            }
            .print-page .oge-image-grid-print.oge-print-enlarged .oge-image-grid-figure img,
            .print-page .oge-image-grid-print.oge-print-enlarged .oge-image-grid-figure svg {
                max-height:66mm !important;
            }
            .print-page .oge-image-grid-print.oge-print-enlarged:has(.sticker-print) .oge-image-grid-figure {
                flex-basis:64mm !important;
                width:64mm !important;
                max-width:64mm !important;
            }
            .print-page .oge-image-grid-print.oge-print-cond-side .oge-image-grid-layout {
                align-items:flex-start !important;
                gap:3mm !important;
            }
            .print-page .oge-image-grid-print.oge-print-cond-side .oge-image-grid-solution {
                min-width:0 !important;
            }
            .print-page .oge-image-grid-print.oge-print-cond-side .oge-print-question {
                margin:0 0 3mm !important;
                line-height:1.25 !important;
                overflow-wrap:break-word !important;
            }

            .sticker-print {
                flex:0 0 27mm !important;
                width:27mm !important;
                max-width:27mm !important;
                position:static !important;
                transform:none !important;
                page-break-inside:avoid !important;
                break-inside:avoid !important;
                overflow:visible !important;
                margin-left:2mm !important;
            }
            .sticker-print img {
                max-width:23mm !important;
                max-height:23mm !important;
                height:auto !important;
                object-fit:contain !important;
            }
            .sticker-print div {
                page-break-inside:avoid !important;
                break-inside:avoid !important;
                max-width:27mm !important;
                font-size:10px !important;
                line-height:1.05 !important;
            }

            img { max-width:100% !important; page-break-inside:avoid; }
            svg { overflow:visible; }
        }

        @media screen {
            .print-page .oge-print-scenario-plan {float:left;width:48%;max-width:81mm;margin:4px 14px 9px 0;}
            .print-page .oge-print-scenario-plan img,.print-page .oge-print-scenario-plan svg {display:block;width:100%!important;max-width:100%!important;height:auto!important;max-height:82mm!important;margin:0!important;}
            .print-page .oge-print-scenario-body::after {content:"";display:block;clear:both;}
            .print-page .oge-print-scenario-body p {margin:0 0 7px;}
        }
        @media screen {
            body {
                background:#eef3f8;
                font-family:"Times New Roman", serif;
                padding:30px;
                color:#111;
            }
            .print-page {
                max-width:820px;
                margin:0 auto;
                background:#fff;
                padding:34px 46px 56px;
                box-shadow:0 8px 28px rgba(0,0,0,.12);
            }
        }

        /* OGE-only HTML elements, without changing the reference EGE typography. */
        @media print {
            .print-page .oge-practice-common,
            .print-page .oge-practice-sticky {
                background:transparent !important; border:0 !important;
                box-shadow:none !important; padding:0 !important;
                min-width:0 !important; max-width:100% !important;
            }
            .print-page table { border-collapse:collapse; max-width:100%; }
            .print-page table.common-table,
            .print-page .oge-practice-common table { width:100%; table-layout:fixed; }
            .print-page th,.print-page td {
                overflow-wrap:anywhere; vertical-align:top;
            }
            .print-page .oge-practice-common table th,
            .print-page .oge-practice-common table td {
                border:.5pt solid #777; padding:1mm 1.1mm;
            }
            .print-page .task20-part2-item {
                page-break-inside:avoid;break-inside:avoid;
                margin:0 0 4.5mm;
            }
            .print-page mjx-container { max-width:100%; }
            .print-page .task-print-flex > .task-print-text { overflow-wrap:break-word; }
        }


/* Печатные режимы: задания №1–19 — небольшое клетчатое поле, №20–25 — большое. */
.oge-print-write-grid,.oge-image-grid-paper{box-sizing:border-box;border:1px solid #9fc2df!important;border-radius:3px;background-color:#fff!important;background-size:5mm 5mm!important;background-image:linear-gradient(to right,#d4e4f0 .3pt,transparent .3pt),linear-gradient(to bottom,#d4e4f0 .3pt,transparent .3pt)!important;}
.oge-print-with-solutions .oge-image-grid-paper{height:24mm!important;min-height:24mm!important;}
.oge-print-with-solutions .oge-print-write-grid{height:24mm;margin:2mm 0;}
.oge-print-with-solutions .task20-part2-item .oge-print-write-grid{height:120mm;break-inside:avoid;page-break-inside:avoid;}
.oge-print-with-solutions .task20-part2-item{break-inside:avoid;page-break-inside:avoid;}
.oge-print-without-solutions .oge-image-grid-paper,.oge-print-without-solutions .oge-print-write-grid,.oge-print-without-solutions .oge-print-solution-label{display:none!important;}
.oge-print-without-solutions .task20-part2-item [style*="height:66px"],.oge-print-without-solutions .task20-part2-item [style*="border-bottom:1px dotted"]{display:none!important;}
.oge-print-without-solutions .oge-image-grid-layout{align-items:center!important;}
.oge-print-without-solutions .oge-image-grid-solution{min-width:0!important;}

/* Компактная выборочная печать тарифных комплектов 1–5.
   Полные варианты и другие подборки не меняем. */
@media print {
    body.oge-tariff-selection .print-header {
        margin-bottom:2.5mm!important;
        padding-bottom:2mm!important;
    }
    body.oge-tariff-selection .print-header::before {
        height:2mm!important;
        margin-bottom:2.2mm!important;
    }
    body.oge-tariff-selection h3 {
        margin:2.5mm 0 1.5mm!important;
        padding:1.4mm 2.5mm!important;
    }
    body.oge-tariff-selection .print-page .oge-practice-common.oge-print-scenario-intro {
        padding:0!important;
        margin:1mm 0 2mm!important;
    }
    body.oge-tariff-selection .print-page .oge-print-scenario-body {
        font-size:12.5px!important;
        line-height:1.24!important;
    }
    body.oge-tariff-selection .print-page .oge-print-scenario-body p {
        margin-bottom:1.2mm!important;
    }
    body.oge-tariff-selection .print-page .oge-print-scenario-body table {
        margin:1.2mm 0!important;
    }
    body.oge-tariff-selection .print-page .task-print-block {
        margin:0 0 2.3mm!important;
        padding:1.6mm 2.6mm 1.7mm 2.8mm!important;
        border-left-width:2.2px!important;
        border-radius:5px!important;
        box-shadow:none!important;
    }
    body.oge-tariff-selection .print-page .oge-image-grid-print .oge-print-question {
        margin-bottom:1.6mm!important;
        font-size:14px!important;
        line-height:1.18!important;
    }
    body.oge-tariff-selection .print-page .oge-image-grid-print .oge-image-grid-layout {
        gap:2mm!important;
    }
    body.oge-tariff-selection .print-page .oge-image-grid-print .oge-image-grid-figure {
        flex-basis:55mm!important;
        width:55mm!important;
        max-width:55mm!important;
    }
    body.oge-tariff-selection .print-page .oge-image-grid-print .oge-image-grid-figure img,
    body.oge-tariff-selection .print-page .oge-image-grid-print .oge-image-grid-figure svg {
        max-height:47mm!important;
    }
    body.oge-tariff-selection .print-page .oge-image-grid-solution .task-print-answer {
        margin-top:1mm!important;
    }
    body.oge-tariff-selection .print-page .oge-image-grid-print .common-table {
        margin:1mm 0!important;
        line-height:1.15!important;
    }
    body.oge-tariff-selection .print-page .oge-image-grid-print .common-table td,
    body.oge-tariff-selection .print-page .oge-image-grid-print .common-table th {
        padding:.65mm .8mm!important;
    }
    /* При выборе режима с полями оставляем реальную клетку, но делаем её
       немного ниже именно у «Тарифов», чтобы больше задач поместилось на лист. */
    body.oge-tariff-selection.oge-print-with-solutions .oge-image-grid-paper {
        height:19mm!important;
        min-height:19mm!important;
    }
}
</style></head>
<body class="${withSolutions ? 'oge-print-with-solutions' : 'oge-print-without-solutions'}${isTariffSelection ? ' oge-tariff-selection' : ''}">${ogePrintToolsHTML()}
<main class="print-page"><header class="print-header">
<h1 class="print-title">Подборка заданий</h1>
<div class="print-subtitle">ОГЭ · математика · тренировочный набор</div>
${signature}</header>${original}</main>
<script>
(${ogePreparePrint.toString()})();
${window.SCRIPT_END}
</body></html>`;
        return openOgePrintDocument(html,
            withSolutions ? 'ОГЭ_Подборка_С_полями_для_решения.html' : 'ОГЭ_Подборка_Без_полей_для_решения.html');
    }
    // Режим печати выбирается перед подготовкой файла, не при настройке генератора.
    function ogeChoosePrintLayout() {
        document.getElementById('oge-print-choose-overlay')?.remove();
        const overlay=document.createElement('div');
        overlay.id='oge-print-choose-overlay';
        overlay.style.cssText='position:fixed;inset:0;z-index:2147482000;background:rgba(3,17,30,.67);display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';
        overlay.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="oge-print-choose-title" style="background:#fff;color:#142538;width:min(500px,96vw);padding:26px;border:2px solid #f0a729;border-radius:14px;box-shadow:0 15px 55px #0005;font:16px/1.48 Arial,sans-serif;">
            <h2 id="oge-print-choose-title" style="font:700 23px Arial,sans-serif;margin:0 0 10px;color:#093d5d">Как подготовить задания к печати?</h2>
            <p style="margin:0 0 20px;color:#526474">Выберите формат рабочей тетради. Условия, чертежи и строки для ответов сохраняются в обоих вариантах.</p>
            <button type="button" data-oge-print-choice="with" style="display:block;width:100%;text-align:left;border:1px solid #80bbdb;border-radius:9px;background:#eaf6fd;padding:13px 15px;cursor:pointer;font:inherit;margin-bottom:10px"><b>С полями для решения</b><small style="display:block;color:#415970;margin-top:4px">Клетчатое поле для заданий первой части и большое поле для второй части.</small></button>
            <button type="button" data-oge-print-choice="without" style="display:block;width:100%;text-align:left;border:1px solid #cdd9e2;border-radius:9px;background:#f8fafc;padding:13px 15px;cursor:pointer;font:inherit"><b>Без полей для решения</b><small style="display:block;color:#415970;margin-top:4px">Компактная распечатка: только условия, рисунки и строки для ответов.</small></button>
            <div style="text-align:right;margin-top:18px"><button type="button" data-oge-print-cancel style="border:0;background:transparent;color:#516374;font:inherit;cursor:pointer;padding:6px">Отмена</button></div>
        </div>`;
        let onKey=null;
        const close=()=>{if(onKey)document.removeEventListener('keydown',onKey);overlay.remove();};
        onKey=(event)=>{if(event.key==='Escape')close();};
        document.addEventListener('keydown',onKey);
        overlay.addEventListener('click',event=>{if(event.target===overlay || event.target.closest('[data-oge-print-cancel]'))close();});
        overlay.querySelectorAll('[data-oge-print-choice]').forEach(btn=>btn.addEventListener('click',()=>{
            const mode=btn.dataset.ogePrintChoice;
            close();
            // Дать диалогу удалиться до тяжёлой сериализации печатного HTML.
            requestAnimationFrame(()=>downloadPrintPDF(mode));
        }));
        document.body.appendChild(overlay);
        overlay.querySelector('[data-oge-print-choice="with"]').focus();
    }
    function downloadPrintPDF(solutionMode) {
        const hasBatch=Array.isArray(window.ogeVariantBatch)&&window.ogeVariantBatch.length;
        if(!hasBatch && !window.ogePrintableGroups){alert('Сначала сгенерируйте вариант!');return;}
        if(solutionMode!=='with' && solutionMode!=='without') { ogeChoosePrintLayout();return; }
        const withSolutions=solutionMode==='with';
        const batchEntry=Array.isArray(window.ogeVariantBatch) && window.ogeVariantBatch.length ? window.ogeVariantBatch[0] : null;
        const isManual=(batchEntry ? batchEntry.mode : window.ogeGenerationMode)==='manual';
        if(isManual){ return ogeDownloadManualPrintLikeEGE(withSolutions); }
        const pages=isManual ? ogeBuildManualPrintHTML() : buildOgeBatchPrintHTML(withSolutions);
        const manualCSS=isManual ? ogeManualPrintCSS() : '';
        // Сериализация сохраняет обратные слеши разделителей в скачанном HTML.
        const printMathJaxConfig = {
            tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
            // Печатные варианты: нормальное начертание математических формул (CHTML), как в ЕГЭ.
            chtml: { adaptiveCSS: false }
        };
        const printHtml = `<!DOCTYPE html>
<html lang="ru"><head><meta charset="UTF-8"><title>${isManual ? 'ОГЭ · подборка заданий для печати' : 'ОГЭ · варианты для печати'}</title>
<base href="https://svetlana18011991.github.io/generator9oge/">
<script>window.MathJax=${JSON.stringify(printMathJaxConfig)};${window.SCRIPT_END}
${ogeOfflineMathJaxHTML()}
<style>
@page{size:A4 landscape;margin:9mm 10mm 9mm 10mm;}
*{box-sizing:border-box;}
html,body{margin:0;padding:0;color:#111;background:#fff;font-family:"Times New Roman",Times,serif;font-weight:400;}
.oge-exam-page{width:277mm;height:190mm;max-height:190mm;margin:0;display:flex;flex-direction:column;overflow:hidden;break-after:page;page-break-after:always;}
.oge-exam-page:last-child{page-break-after:auto;break-after:auto;}
.oge-exam-page:last-of-type{page-break-after:auto;break-after:auto;}
/* Финальные ключи только для полноценных вариантов 1–25. */
.oge-exam-keys-page{background:white;color:#111;}
.oge-keys-content{flex:1 1 auto;min-height:0;padding:4mm 9mm 0;overflow:hidden;}
.oge-keys-content h1{text-align:center;font:bold 14pt/1.15 "Times New Roman",Times,serif;margin:0 0 1mm;}
.oge-keys-subtitle{font:10pt/1.15 "Times New Roman",Times,serif;text-align:center;margin:0 0 2mm;}
.oge-keys-table{width:100%;border-collapse:collapse;table-layout:fixed;font:9.5pt/1.12 "Times New Roman",Times,serif;color:#111;}
.oge-keys-table th,.oge-keys-table td{border:.45pt solid #888;padding:.65mm 2mm;vertical-align:middle;overflow-wrap:anywhere;}
.oge-keys-table thead th{font-weight:700;text-align:center;background:#f4f6f8;}
.oge-keys-table tbody th{width:22mm;text-align:center;font-weight:700;background:#fafafa;}
.oge-keys-table tbody td{text-align:center;}
.oge-keys-table tr{break-inside:avoid;page-break-inside:avoid;}
.oge-keys-note{font:8pt/1.2 "Times New Roman",Times,serif;color:#444;margin:2mm 0 0;}
@media print{.oge-keys-table thead th,.oge-keys-table tbody th{background:#fff;}}
.oge-exam-flow-unit{display:flow-root;break-inside:avoid;page-break-inside:avoid;}
.oge-exam-flow-unit .oge-exam-task{margin-bottom:2mm;}

.oge-exam-header{height:8mm;flex:0 0 8mm;display:flex;justify-content:space-between;align-items:center;font-size:10.5pt;font-weight:700;border-bottom:.35pt solid #666;margin:0 0 2mm 0;}
.oge-exam-header strong{font-size:10.5pt;}
.oge-exam-columns{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:9mm;align-items:start;height:173mm;flex:0 0 173mm;overflow:hidden;}
.oge-exam-column{width:100%;height:173mm;overflow:hidden;position:relative;min-width:0;}
.oge-exam-column-content{display:flow-root;width:100%;overflow:visible;}
/* Равномерное, при необходимости небольшое уменьшение только трехстраничного полного варианта. */
.oge-print-without-solutions .oge-exam-full-variant .oge-exam-column-content{zoom:var(--oge-print-zoom,1);}
.oge-exam-column-content *{max-width:100%;}
.oge-exam-wide-page .oge-exam-columns{grid-template-columns:minmax(0,1fr);}
.oge-exam-wide-page .oge-exam-column+ .oge-exam-column{display:none;}
.oge-exam-footer{flex:0 0 5mm;height:5mm;font:8pt Georgia,"Times New Roman",serif;color:#777;display:flex;align-items:end;justify-content:space-between;gap:5mm;border-top:.25pt solid #ddd;padding-top:.8mm;} .oge-exam-footer .brand{font-style:italic;font-size:8.1pt;color:#757575}.oge-exam-footer a{color:#626d80;text-decoration:none;border-bottom:.25pt solid #a3a3a3;}
.oge-exam-first-variant{font:700 12pt "Times New Roman",serif;text-align:center;margin:0 0 .6mm;color:#111;}
.oge-exam-part1{font:bold 11.5pt Georgia,"Times New Roman",serif;text-align:center;padding:0 0 2mm;}
.oge-exam-part2{font:bold 11.5pt Georgia,"Times New Roman",serif;text-align:center;padding:2mm 0 3mm;}
.oge-exam-intro{margin:0 0 1.5mm 0;font:400 var(--oge-print-font,11pt)/1.30 "Times New Roman",Times,serif;color:#111;}
.oge-exam-intro-label{text-align:left;font-weight:600;margin:0 0 2mm;}
.oge-exam-intro .oge-practice-common{margin:0;padding:0;border:none;box-shadow:none;background:transparent;}
.oge-exam-intro h3,.oge-exam-intro h4{font-size:9pt;margin:0 0 1mm;}
.oge-exam-intro div,.oge-exam-intro p{line-height:1.30;margin:0 0 1.2mm;}
.oge-exam-task{font:400 var(--oge-print-font,11pt)/1.30 "Times New Roman",Times,serif;color:#111;margin:0 0 2mm 0;break-inside:avoid;page-break-inside:avoid;overflow-wrap:break-word;}
.oge-exam-task-name{display:block;font-weight:700;white-space:nowrap;margin-bottom:.8mm;}
.oge-exam-statement,.oge-exam-statement>div{color:#111;min-width:0;font-size:inherit!important;line-height:inherit!important;font-weight:400;}
.oge-exam-statement>div>div{font-size:inherit!important;line-height:inherit!important;}
/* Текст условия — обычный. Жирность сохраняем только у b/strong и названия задания. */
.oge-print-exam .oge-exam-statement :is(div,p,span,section,article,li):not(mjx-container *),
.oge-print-exam .oge-exam-intro :is(div,p,span,section,article,li):not(mjx-container *){font-weight:400!important;}
.oge-print-exam mjx-container[jax="CHTML"]{font-weight:400!important;}
.oge-print-exam .oge-exam-statement :is(b,strong,th),
.oge-print-exam .oge-exam-intro :is(b,strong,th){font-weight:700!important;}
.oge-exam-statement p{margin:0 0 1.1mm;}
.oge-exam-statement table,.oge-exam-intro table{border-collapse:collapse;table-layout:fixed;max-width:100%;width:100%;margin:1.3mm auto;font-size:max(7.4pt,.78em);line-height:1.16;}
.oge-exam-statement th,.oge-exam-statement td,.oge-exam-intro th,.oge-exam-intro td{border:.4pt solid #777;padding:.45mm .8mm;vertical-align:top;overflow-wrap:anywhere;word-break:break-word;hyphens:auto;}
/* Таблица для вписывания последовательности цифр: реальные клетки, а не тонкая полоска. */
.oge-exam-statement table.oge-exam-answer-grid{width:82mm!important;max-width:100%!important;min-width:0!important;table-layout:fixed!important;margin:1.3mm 0 2mm!important;font-size:8.4pt!important;}
.oge-exam-statement table.oge-exam-answer-grid th{padding:.6mm .8mm!important;text-align:center;}
.oge-exam-statement table.oge-exam-answer-grid tr:last-child td{height:6.2mm!important;min-height:6.2mm!important;}
.oge-exam-statement .common-table-wrap:has(table.oge-exam-answer-grid){max-width:100%!important;width:fit-content!important;overflow:visible!important;margin:1mm 0!important;}
.oge-exam-task table{font-size:max(7.4pt,.78em);}
.oge-match11-print{margin:2.2mm 0!important;max-width:54mm!important;table-layout:fixed!important;text-align:center;border:1px solid #888;}
.oge-match11-print th,.oge-match11-print td{width:33.33%;padding:1.1mm 4mm!important;text-align:center;border:1px solid #777;}
.oge-match11-print td{height:8mm;}
.oge-exam-statement svg{max-height:38mm;}
.oge-exam-statement mjx-container svg{max-width:100%;height:auto;}
.oge-exam-diagram{display:block;max-width:100%;margin:1.5mm 0;overflow:hidden;}
.oge-exam-diagram svg,.oge-exam-diagram img{max-width:100%;height:auto;max-height:42mm;object-fit:contain;}
/* Миниатюры у каждой задачи №1–5: рядом с условием, без дублирования крупного формата. */
.oge-exam-task[data-exam-task="1"] .oge-exam-diagram,
.oge-exam-task[data-exam-task="2"] .oge-exam-diagram,
.oge-exam-task[data-exam-task="3"] .oge-exam-diagram,
.oge-exam-task[data-exam-task="4"] .oge-exam-diagram,
.oge-exam-task[data-exam-task="5"] .oge-exam-diagram{float:right;width:30%;max-width:37mm;margin:0 0 1mm 2.5mm;}
.oge-exam-task[data-exam-task="1"] .oge-exam-diagram :is(img,svg),
.oge-exam-task[data-exam-task="2"] .oge-exam-diagram :is(img,svg),
.oge-exam-task[data-exam-task="3"] .oge-exam-diagram :is(img,svg),
.oge-exam-task[data-exam-task="4"] .oge-exam-diagram :is(img,svg),
.oge-exam-task[data-exam-task="5"] .oge-exam-diagram :is(img,svg){width:100%;max-height:28mm;object-fit:contain;}
.oge-exam-task:has(.oge-exam-diagram)::after{content:"";display:block;clear:both;}
/* ТОЛЬКО полный вариант 1–25: собственный рисунок печи у №5
   стоит слева в начале условия; текст обтекает его справа и ниже.
   Не влияет на подборки, другие рисунки или интерактивный режим. */
.oge-exam-full-variant .oge-exam-task[data-exam-task="5"] .oge-exam-statement:has(.oge-exam-local-diagram)::after{content:"";display:block;clear:both;}
.oge-exam-full-variant .oge-exam-task[data-exam-task="5"] .oge-exam-statement > .oge-exam-local-diagram{
    float:left!important;
    display:block!important;
    width:64mm!important;
    max-width:64mm!important;
    margin:1mm 3.5mm 1.5mm 0!important;
    overflow:visible!important;
    break-inside:avoid!important;
    page-break-inside:avoid!important;
}
.oge-exam-full-variant .oge-exam-task[data-exam-task="5"] .oge-exam-local-diagram :is(img,svg){
    display:block!important;
    width:100%!important;
    max-width:100%!important;
    height:auto!important;
    max-height:50mm!important;
    object-fit:contain!important;
    margin:0!important;
}
/* Исправление печи №5 в ПОЛНОМ варианте: рисунок сам является первым
   элементом условия, выравнивается слева и обтекается текстом. */
.oge-exam-full-variant .oge-exam-stove5 .oge-exam-stove5-flow{display:block!important;min-width:0!important;}
.oge-exam-full-variant .oge-exam-stove5 .oge-exam-stove5-flow::after{content:"";display:block;clear:both;}
.oge-exam-full-variant .oge-exam-stove5 .oge-exam-stove5-figure{
    display:block!important;float:left!important;position:static!important;
    width:64mm!important;max-width:64mm!important;margin:1mm 3.3mm 1.5mm 0!important;
    clear:none!important;overflow:visible!important;
}
.oge-exam-full-variant .oge-exam-stove5 .oge-exam-stove5-figure img{
    display:block!important;width:100%!important;max-width:100%!important;height:auto!important;
    max-height:49mm!important;object-fit:contain!important;margin:0!important;
}
.oge-exam-geometry{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,45%);column-gap:2mm;border-bottom:.35pt solid #ccc;padding:0 0 1.8mm;margin:0 0 1.8mm;align-items:center;}
.oge-exam-geometry:not(:has(.oge-exam-diagram)){display:block;}
.oge-exam-geometry .oge-exam-diagram{margin:0;}
.oge-exam-geometry .oge-exam-diagram img,.oge-exam-geometry .oge-exam-diagram svg{max-height:30mm;}
.oge-exam-task svg,.oge-exam-intro svg,.oge-exam-task img,.oge-exam-intro img{max-width:100%;height:auto;object-fit:contain;}
.oge-exam-intro img,.oge-exam-intro svg{display:block;max-width:100%!important;max-height:var(--oge-intro-image-max,42mm)!important;width:auto!important;height:auto!important;margin:1mm auto!important;object-fit:contain;}
.oge-exam-intro .practice-figure-card{margin:1mm 0!important;padding:0!important;}
.oge-exam-full-variant .oge-exam-intro-locked{break-inside:avoid;page-break-inside:avoid;}
/* Только полная работа с полями: единый план и текст занимают общую ширину
   колонки без повторов рисунка, что уменьшает пустоту под общим условием. */
.oge-print-with-solutions .oge-exam-full-variant .oge-exam-intro-leading-figure{float:left;display:block!important;width:45%;max-width:61mm;margin:1mm 3mm 2mm 0!important;break-inside:avoid;page-break-inside:avoid;}
.oge-print-with-solutions .oge-exam-full-variant .oge-exam-intro-leading-figure :is(img,svg){display:block;max-height:68mm!important;max-width:100%!important;width:100%;height:auto!important;object-fit:contain;}
.oge-print-with-solutions .oge-exam-full-variant .oge-exam-intro-locked::after{content:"";display:block;clear:both;}
/* Общий план №1–5 в начале условия, с обтеканием текстом и без дублей. */
.oge-exam-intro .oge-print-scenario-body::after{content:"";display:block;clear:both;}
.oge-exam-intro .oge-print-scenario-plan{float:left!important;display:block!important;width:48%!important;max-width:65mm!important;margin:1mm 3mm 2mm 0!important;break-inside:avoid!important;}
.oge-exam-intro .oge-print-scenario-plan img,.oge-exam-intro .oge-print-scenario-plan svg{display:block!important;width:100%!important;max-width:100%!important;height:auto!important;max-height:var(--oge-intro-image-max,50mm)!important;margin:0!important;object-fit:contain!important;}
.oge-exam-intro .oge-print-scenario-body table{clear:both;}

.oge-exam-intro .oge-exam-diagram img,.oge-exam-intro .oge-exam-diagram svg{max-height:var(--oge-intro-image-max,42mm)!important;}
.oge-exam-intro *{max-width:100%;}
.oge-exam-statement .common-table{font-size:max(7.4pt,.78em);margin:1.6mm 0;}
.oge-exam-statement .common-table th,.oge-exam-statement .common-table td{padding:.4mm .7mm;}
.oge-exam-statement mjx-container,.oge-exam-intro mjx-container{max-width:100%;}
/* Larger formulas exclusively in exam task 8, without resizing its prose. */
.oge-exam-task[data-exam-task="8"] .oge-exam-statement mjx-container{font-size:1.22em!important;line-height:1.2!important;}
.oge-exam-task[data-exam-task="8"] .oge-exam-statement mjx-container[display="true"]{font-size:1.16em!important;}

.oge-exam-statement mjx-container[display="true"]{margin:1mm 0!important;}
.oge-exam-statement .task7-choices,.oge-exam-statement .choices-row{display:flex;gap:2mm;flex-wrap:wrap;}
/* Только печатные полные варианты: компактная координатная прямая №7.
   Исходное изображение и его пропорции не меняем — запрещаем растягивать PNG
   на всю ширину колонки. Никаких изменений №6, №8 и другим заданиям. */
.oge-print-exam .oge-exam-task[data-exam-task="7"] .oge-exam-diagram{
    width:min(100%,88mm)!important;
    max-width:88mm!important;
    margin:1mm auto 1.5mm!important;
    padding:0!important;
    overflow:visible!important;
    text-align:center;
}
.oge-print-exam .oge-exam-task[data-exam-task="7"] .oge-exam-diagram :is(img,svg){
    display:block!important;
    width:100%!important;
    max-width:100%!important;
    height:auto!important;
    max-height:19mm!important;
    object-fit:contain!important;
    margin:0 auto!important;
    image-rendering:auto;
}
/* Стикеры печатаются компактно внутри задания, не перекрывая условие. */
.oge-exam-sticker{float:right;display:block;width:17mm;max-width:17mm;margin:0 0 1.5mm 2mm;text-align:center;break-inside:avoid;page-break-inside:avoid;}
.oge-exam-sticker img{display:block!important;max-width:16mm!important;max-height:15mm!important;width:auto!important;height:auto!important;margin:0 auto!important;object-fit:contain;filter:none!important;}
.oge-exam-sticker div{font-size:6pt!important;line-height:1.1!important;max-width:17mm!important;transform:none!important;color:#444!important;overflow-wrap:anywhere;}
.oge-exam-column-content .task-print-answer,.oge-exam-column-content .btn-settings{display:none!important;}
@media screen {body{background:#e8eaed;padding:16px 0;}.oge-exam-page{background:#fff;margin:0 auto 22px;box-shadow:0 4px 18px #0002;padding:0;width:277mm;}}
@media print {html,body{width:auto!important;background:#fff!important;}.oge-exam-page{box-shadow:none!important;margin:0!important;}.oge-exam-task,.oge-exam-intro{-webkit-print-color-adjust:exact;print-color-adjust:exact;}}

/* Два режима печати ОГЭ. В полной работе с полями число листов определяется содержимым. */
.oge-exam-write-grid{display:none;box-sizing:border-box;border:.5pt solid #a2c4df;border-radius:2px;background-color:white;background-image:linear-gradient(to right,#d6e6f1 .3pt,transparent .3pt),linear-gradient(to bottom,#d6e6f1 .3pt,transparent .3pt);background-size:5mm 5mm;margin:1.2mm 0 1.4mm;break-inside:avoid;page-break-inside:avoid;}
.oge-print-with-solutions .oge-exam-write-grid{display:block;height:16mm;}
.oge-print-with-solutions .oge-exam-task[data-exam-task="20"] .oge-exam-write-grid,
.oge-print-with-solutions .oge-exam-task[data-exam-task="21"] .oge-exam-write-grid,
.oge-print-with-solutions .oge-exam-task[data-exam-task="22"] .oge-exam-write-grid,
.oge-print-with-solutions .oge-exam-task[data-exam-task="23"] .oge-exam-write-grid,
.oge-print-with-solutions .oge-exam-task[data-exam-task="24"] .oge-exam-write-grid,
.oge-print-with-solutions .oge-exam-task[data-exam-task="25"] .oge-exam-write-grid{height:88mm;}
.oge-exam-answer-line{margin:1mm 0 1.5mm;font-size:.92em;white-space:nowrap;}
${manualCSS}
</style></head><body class="${isManual ? 'oge-print-manual' : 'oge-print-exam'} ${withSolutions ? 'oge-print-with-solutions' : 'oge-print-without-solutions'}">${ogePrintToolsHTML()}${pages}
<script>
(function(){
function solvePrintColumns(heights,count,available){
 if(count>heights.length)return null;
 var prefix=[0];
 heights.forEach(function(height){prefix.push(prefix[prefix.length-1]+height)});
 var target=prefix[heights.length]/count;
 var costs=Array.from({length:count+1},function(){return Array(heights.length+1).fill(Infinity)});
 var cuts=Array.from({length:count+1},function(){return []});
 costs[0][0]=0;
 for(var k=1;k<=count;k++){
   for(var end=k;end<=heights.length;end++){
     for(var from=end-1;from>=k-1;from--){
       var height=prefix[end]-prefix[from];
       if(height>available)break;
       var cost=costs[k-1][from]+Math.pow(height-target,2);
       if(cost<costs[k][end]){costs[k][end]=cost;cuts[k][end]=from}
     }
   }
 }
 if(!Number.isFinite(costs[count][heights.length]))return null;
 var ranges=[],cursor=heights.length;
 for(var group=count;group>0;group--){
   var boundary=cuts[group][cursor];ranges.unshift([boundary,cursor]);cursor=boundary;
 }
 return ranges;
}
function paginateCollections(){
 // Измеряем уже отрисованные формулы и картинки; номер страницы не зависит от номера задачи.
 Array.from(document.querySelectorAll('.oge-exam-flow-page')).forEach(function(start){
   var firstColumn=start.querySelector('.oge-exam-column');
   var units=Array.from(firstColumn.querySelector('.oge-exam-column-content').children);
   var fixedPages=Number(start.getAttribute('data-print-pages')||0),ranges=null;
   var fullWithFields=!fixedPages && start.classList.contains('oge-exam-full-variant')
     && document.body.classList.contains('oge-print-with-solutions');
   var available=firstColumn.clientHeight-3;
   if(fixedPages){
     // Для всего варианта выбираем один максимальный размер шрифта, который помещается в 6 колонок.
     // Ни одна колонка и ни одно отдельное задание не уменьшаются независимо от остальных.
     var maxImageHeights=[50,46,42,38,34,30,26,23,20];
     for(var im=0;im<maxImageHeights.length&&!ranges;im++){
       start.style.setProperty('--oge-intro-image-max',maxImageHeights[im]+'mm');
       for(var quarterPoints=46;quarterPoints>=30;quarterPoints--){
         start.style.setProperty('--oge-print-font',(quarterPoints/4)+'pt');
         // Высоту измеряем после сжатия изображений и текста: все шесть колонок одного формата.
         ranges=solvePrintColumns(units.map(function(unit){return unit.getBoundingClientRect().height}),fixedPages*2,available);
         if(ranges)break;
       }
     }
     if(!ranges){
       // Более сложные сюжеты могут содержать длинные таблицы/формулы.
       // В крайнем случае равномерно уменьшаем всю печатную колонку,
       // а не обрезаем текст и не создаём лишние страницы.
       for(var percent=98;percent>=74&&!ranges;percent-=2){
         start.style.setProperty('--oge-print-zoom',String(percent/100));
         for(var p=36;p>=30&&!ranges;p--){
           start.style.setProperty('--oge-print-font',(p/4)+'pt');
           ranges=solvePrintColumns(units.map(function(unit){return unit.getBoundingClientRect().height}),fixedPages*2,available);
         }
       }
     }
     if(!ranges)throw new Error('Содержание варианта не помещается на три листа даже после сокращения масштаба');
   }
   units.forEach(function(el){el.remove()});
   var template=start.cloneNode(true);
   var sheets=[start],sheet=start,columnIndex=0;
   function columns(){return Array.from(sheet.querySelectorAll('.oge-exam-column'))}
   function content(){return columns()[columnIndex].querySelector('.oge-exam-column-content')}
   function fits(){return content().scrollHeight<=columns()[columnIndex].clientHeight-2}
   // Только полноценный вариант С ПОЛЯМИ. Когда следующему заданию
   // не хватает нескольких миллиметров, компактно уменьшаем пустые
   // клетчатые участки первой части, но не текст, формулы или чертежи.
   // Возврат отмены нужен: неудачное пробное уменьшение не должно
   // менять предыдущую колонку.
   function tryFitByTighteningWritingGrids(){
     if(!fullWithFields)return false;
     var box=content(),col=columns()[columnIndex];
     var deficit=box.scrollHeight-col.clientHeight+3;
     if(deficit<=0)return true;
     var grids=Array.from(box.querySelectorAll('.oge-exam-task .oge-exam-write-grid'))
       .filter(function(grid){
         var task=grid.closest('.oge-exam-task[data-exam-task]');
         var number=task?Number(task.getAttribute('data-exam-task')):0;
         return number>=1&&number<=19;
       }).reverse();
     var changes=[];
     grids.forEach(function(grid){
       if(deficit<=0)return;
       var before=grid.getBoundingClientRect().height;
       var minimum=37; // не меньше примерно двух рядов клетки (10 мм)
       var reducible=Math.max(0,before-minimum);
       if(reducible<2)return;
       var amount=Math.min(reducible,deficit+3);
       changes.push([grid,grid.style.height]);
       grid.style.height=(before-amount)+'px';
       deficit-=amount;
     });
     if(fits())return true;
     changes.forEach(function(change){change[0].style.height=change[1];});
     return false;
   }
   function nextPage(){
     var next=template.cloneNode(true);sheet.after(next);sheets.push(next);sheet=next;columnIndex=0;
   }
   function advance(){
     if(!sheet.classList.contains('oge-exam-wide-page')&&columnIndex===0)columnIndex=1;
     else nextPage();
   }
   if(fixedPages){
     for(var page=1;page<fixedPages;page++)nextPage();
     sheets.flatMap(function(pg){return Array.from(pg.querySelectorAll('.oge-exam-column-content'))})
       .forEach(function(box,index){box.replaceChildren.apply(box,units.slice(ranges[index][0],ranges[index][1]))});
   }else{
     units.forEach(function(unit){
       // Полный вариант С полями: вторая часть начинается в свободной колонке,
       // каждый номер 20–25 получает максимум пространства для решения.
       // Для обычных подборок раскладка остаётся неизменной.
       var secondPartTask=fullWithFields && unit.querySelector('.oge-exam-task[data-exam-task="20"],.oge-exam-task[data-exam-task="21"],.oge-exam-task[data-exam-task="22"],.oge-exam-task[data-exam-task="23"],.oge-exam-task[data-exam-task="24"],.oge-exam-task[data-exam-task="25"]');
       if(secondPartTask && content().children.length)advance();
       // Заполняем каждую колонку сверху вниз, без искусственных пустот.
       content().appendChild(unit);
       if(fits() || tryFitByTighteningWritingGrids())return;
       if(content().children.length>1){
         unit.remove();advance();content().appendChild(unit);
         if(fits() || tryFitByTighteningWritingGrids())return;
       }
       // Слишком высокий блок в выборочной подборке получает целый лист по ширине.
       unit.remove();
       if(columnIndex!==0)nextPage();
       sheet.classList.add('oge-exam-wide-page');
       content().appendChild(unit);
       if(!fits())throw new Error('Условие задания слишком велико для одного листа');
     });
     // Только отдельные подборки уравновешиваем по колонкам.
     // В полном варианте уравновешивание создаёт гигантские пустоты
     // внизу первой страницы, хотя следующее задание поместилось бы.
     if(!fullWithFields && !sheets.some(function(pg){return pg.classList.contains('oge-exam-wide-page')})){
       var cols=sheets.flatMap(function(pg){return Array.from(pg.querySelectorAll('.oge-exam-column'))});
       ranges=solvePrintColumns(units.map(function(unit){return unit.getBoundingClientRect().height}),
         Math.min(cols.length,units.length),Math.min.apply(null,cols.map(function(col){return col.clientHeight}))-3);
       if(ranges)cols.forEach(function(col,index){
         var range=ranges[index],box=col.querySelector('.oge-exam-column-content');
         box.replaceChildren.apply(box,range?units.slice(range[0],range[1]):[]);
       });
     }
   }
   // После переноса блоков реальные межстрочные расстояния иногда слегка меняются.
   // Проверяем фактическую высоту колонок и, при необходимости, пропорционально
   // уменьшаем содержимое всей работы, оставляя ровно три листа.
   function overflowing(){
     return sheets.some(function(pg){
       return Array.from(pg.querySelectorAll('.oge-exam-column')).some(function(col){
         const box=col.querySelector('.oge-exam-column-content');
         // scrollHeight НЕ учитывает CSS zoom: проверять его здесь нельзя,
         // иначе даже уменьшенный, реально помещающийся блок даёт ложную ошибку.
         return col.clientHeight && box.getBoundingClientRect().height>col.getBoundingClientRect().height-3;
       });
     });
   }
   if(fixedPages && overflowing()){
     var originalZoom=Number(start.style.getPropertyValue('--oge-print-zoom')||1);
     for(var z=originalZoom-0.02;z>=0.73 && overflowing();z-=0.02){
       sheets.forEach(function(pg){pg.style.setProperty('--oge-print-zoom',String(z));});
     }
   }
   // Полный вариант с полями: пустая нижняя часть колонки используется как
   // дополнительная клетка для решения ПОСЛЕДНЕГО задания этой колонки.
   // Сохраняем последовательность номеров и целостность условий/чертежей.
   // Это НЕ изменяет количество листов искусственно и не влияет на подборки.
   if(fullWithFields){
     sheets.forEach(function(pg){
       pg.querySelectorAll('.oge-exam-column').forEach(function(col){
         if(!col.clientHeight)return;
         var box=col.querySelector('.oge-exam-column-content');
         var unitsHere=Array.from(box.children);
         if(!unitsHere.length)return;
         var lastUnit=unitsHere[unitsHere.length-1];
         var tasks=Array.from(lastUnit.querySelectorAll('.oge-exam-task[data-exam-task]'));
         if(!tasks.length)return;
         var exercise=tasks[tasks.length-1];
         var number=Number(exercise.getAttribute('data-exam-task'));
         if(number<1||number>25)return;
         // Во второй части обычно одна задача на всю колонку: старое правило
         // сохраняется. В первой части не заполняем микропустоты клеткой.
         if(number>=20&&number<=25&&unitsHere.length!==1)return;
         var grid=exercise.querySelector('.oge-exam-write-grid');
         if(!grid||getComputedStyle(grid).display==='none')return;
         var remaining=col.getBoundingClientRect().bottom-box.getBoundingClientRect().bottom-10;
         var threshold=(number<=19?25:2);
         if(remaining<threshold)return;
         var before=grid.getBoundingClientRect().height;
         // Не выводим строку «Ответ» за нижний колонтитул.
         grid.style.height=(before+remaining)+'px';
         if(box.getBoundingClientRect().bottom>col.getBoundingClientRect().bottom-2){
           // Разница размеров округления/плавающих рисунков: не рискуем обрезкой.
           grid.style.height=before+'px';
         }
       });
     });
   }
   var label=start.querySelector('.oge-exam-header strong').textContent;
   sheets.forEach(function(pg,i){
     pg.setAttribute('data-exam-page',start.getAttribute('data-batch-variant')+'-'+(i+1));
     pg.querySelector('.oge-exam-page-counter').textContent=
       start.classList.contains('oge-exam-full-variant')
         ? 'Страница '+(i+1)
         : label+' · страница '+(i+1)+' из '+sheets.length;
     pg.querySelectorAll('.oge-exam-column').forEach(function(col){
       const box=col.querySelector('.oge-exam-column-content');
       if(col.clientHeight && box.getBoundingClientRect().height>col.getBoundingClientRect().height-1)
         throw new Error('Задания выходят за границы листа');
     });
   });
 });
}

(${ogePreparePrint.toString()})(paginateCollections);
})();
${window.SCRIPT_END}
</body></html>`;
        return openOgePrintDocument(printHtml, withSolutions ? 'ОГЭ_Вариант_С_полями_для_решения.html' : 'ОГЭ_Вариант_Без_полей_для_решения.html');
    }

    function ogeKeyTaskEntries(snapshot) {
        // Используем задания из сохранённого варианта, а не старый длинный HTML.
        // Так не теряются ответы при переключении вариантов и замене задач.
        const occurrences = new Map();
        const result = [];
        (Array.isArray(snapshot) ? snapshot : []).forEach(block => {
            (block.tasks || []).forEach(task => {
                const rawNumber = block.kind === 'practice'
                    ? (task.examNumber || task.__ogeScenarioMeta?.taskNumber || task.__ogeTrainerMeta?.proto?.examNumber)
                    : String(block.tid || '').replace(/\D/g, '');
                const num = Number(rawNumber);
                if (!Number.isInteger(num) || num < 1 || num > 25) return;
                const position = (occurrences.get(num) || 0) + 1;
                occurrences.set(num, position);
                const secondPart = num >= 20;
                const alternatives = (!secondPart && Array.isArray(task.accepts) && task.accepts.length)
                    ? task.accepts.map(value => String(value ?? '').trim()).filter(Boolean)
                    : [];
                const answer = alternatives.length
                    ? [...new Set(alternatives)].join(' или ')
                    : String(task.answer ?? '').trim();
                result.push({num, key:num + '#' + position,
                    answer:answer || (secondPart ? 'Проверка учителем' : '—')});
            });
        });
        return result;
    }

    function ogeKeyEscape(value) {
        return String(value ?? '').replace(/[&<>"']/g, symbol => ({
            '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
        })[symbol]);
    }

    function downloadAnswers() {
        const stored = Array.isArray(window.ogeVariantBatch) && window.ogeVariantBatch.length
            ? window.ogeVariantBatch
            : [{snapshot:window.ogeVariantSnapshot}];
        const variants = stored.map((entry, index) => ({
            index:index + 1,
            tasks:ogeKeyTaskEntries(entry.snapshot || (stored.length === 1 ? window.ogeVariantSnapshot : []))
        }));
        if (!variants.some(v => v.tasks.length)) {
            alert('Сначала сгенерируйте варианты, чтобы получить ключи.');
            return;
        }
        const isFullVariant = tasks => tasks.length === 25 &&
            new Set(tasks.map(t => t.num)).size === 25 &&
            Array.from({length:25}, (_,i) => i + 1).every(n => tasks.some(t => t.num === n));
        const full = stored.every(entry => entry.mode !== 'manual') && variants.every(v => isFullVariant(v.tasks));
        const keys = [];
        const used = new Set();
        variants.forEach(v => v.tasks.forEach(task => {
            if (!used.has(task.key)) {used.add(task.key); keys.push(task);}
        }));
        keys.sort((a,b) => a.num - b.num || Number(a.key.split('#')[1]) - Number(b.key.split('#')[1]));
        const taskKeys = keys.map(t => t.key);
        const answerMaps = variants.map(v => new Map(v.tasks.map(t => [t.key, t.answer])));
        // При большом количестве вариантов не сжимаем все ответы до нечитаемой ширины.
        const groupCount = Math.ceil(variants.length / 4);
        const perTable = Math.ceil(variants.length / groupCount);
        const chunks = [];
        for (let i = 0; i < variants.length; i += perTable) chunks.push(variants.slice(i, i + perTable));
        const title = full ? 'Ключи к полным вариантам ОГЭ' : 'Ключи к подборкам заданий ОГЭ';
        const tableSections = chunks.map((chunk, groupIndex) => {
            const from = chunk[0].index, to = chunk[chunk.length - 1].index;
            const chunkName = full ? 'Вариант' : 'Подборка';
            const caption = variants.length > perTable
                ? `<h2>${chunkName === 'Вариант' ? 'Варианты' : 'Подборки'} №${from}–${to}</h2>`
                : '';
            const header = full
                ? '<th class="key-task-col" scope="col">№ задания</th>'
                : '<th class="key-order-col" scope="col">№</th><th class="key-task-col" scope="col">Задание ОГЭ</th>';
            const columns = chunk.map(v => `<th scope="col">${chunkName} №${v.index}</th>`).join('');
            const bodyRows = taskKeys.map((key, rowIndex) => {
                const ref = keys[rowIndex];
                const label = full
                    ? `<th scope="row">${ref.num}</th>`
                    : `<th scope="row">${rowIndex + 1}</th><td class="key-exam-num">${ref.num}</td>`;
                const cells = chunk.map(v => {
                    const value = answerMaps[v.index - 1].get(key);
                    return `<td class="key-answer">${value === undefined ? '<span class="key-empty">—</span>' : ogeKeyEscape(value)}</td>`;
                }).join('');
                return `<tr>${label}${cells}</tr>`;
            }).join('');
            return `<section class="key-section" data-group="${groupIndex + 1}">${caption}
                <table class="key-table"><thead><tr>${header}${columns}</tr></thead>
                    <tbody>${bodyRows}</tbody></table></section>`;
        }).join('\n');
        const note = keys.some(t => t.num >= 20)
            ? '<p class="key-note">Для заданий 20–25 указан итоговый ответ (если он есть в базе). Развёрнутое решение проверяет учитель.</p>'
            : '';
        // ВАЖНО: сериализуем объект, а не вписываем \\( и \\) непосредственно в
        // HTML-шаблон. Иначе второй проход разбора JavaScript удаляет слеши,
        // и MathJax начинает считать любые скобки границами формул.
        const mathjaxConfig = {
            tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
            options: {skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']}
        };
        const html = `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${title}</title>
            <script>window.MathJax=${JSON.stringify(mathjaxConfig)};${window.SCRIPT_END}
            <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">${window.SCRIPT_END}
            <style>
                *{box-sizing:border-box}
                body{font-family:Arial,Helvetica,sans-serif;max-width:1180px;margin:0 auto;padding:22px 25px;color:#1b2938;background:#fff}
                h1{font-size:22px;text-align:center;margin:0 0 8px}h2{font-size:17px;margin:16px 0 9px;color:#136b6a}
                .key-subtitle{text-align:center;color:#586878;margin:0 0 17px;font-size:13px}
                .key-section{margin:0 0 23px;overflow-x:auto}
                .key-table{width:100%;table-layout:fixed;border-collapse:collapse;border:1px solid #adbfc4;font-size:12.5px;line-height:1.32;background:white}
                .key-table th,.key-table td{border:1px solid #bfcbd0;padding:5px 7px;vertical-align:middle;overflow-wrap:anywhere;word-break:normal}
                .key-table thead th{background:#e9f3f3;color:#173c46;font-size:12px;line-height:1.3}
                .key-table tbody tr:nth-child(even){background:#f8fbfc}
                .key-table tbody th{font-weight:700;text-align:center;width:44px;background:#f2f5f7}
                .key-table .key-exam-num{text-align:center;font-weight:600}
                .key-order-col{width:44px}.key-task-col{width:90px}
                .key-answer{text-align:left;min-width:0}
                .key-empty{color:#a0a8ad}.key-note{font-size:12px;color:#596576;margin:10px 0 0}
                mjx-container{max-width:100%;}mjx-container[display="true"]{margin:4px 0!important}
                @media print{
                    @page{size:A4 landscape;margin:11mm}
                    body{max-width:none;margin:0;padding:0;color:#111}
                    h1{font-size:17px}.key-subtitle{margin-bottom:12px}
                    h2{font-size:14px}.key-section{overflow:visible;break-before:auto}
                    .key-section:not(:first-of-type){break-before:page;page-break-before:always}
                    .key-table{font-size:10.5px}.key-table thead th{font-size:10.5px}
                    .key-table th,.key-table td{padding:3px 5px}
                    .key-table thead{display:table-header-group}
                    .key-table tr{break-inside:avoid;page-break-inside:avoid}
                    .key-note{font-size:10px}
                    body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
                }
            </style></head><body>
                <h1>${title}</h1>
                <p class="key-subtitle">${variants.length} ${full ? 'полных вариантов (задания 1–25)' : 'подборок'} · ${taskKeys.length} заданий в таблице</p>
                ${tableSections}${note}
            </body></html>`;
        return downloadBlobSafely(new Blob([html], {type:'text/html;charset=utf-8'}),
            `${full ? 'Ключи_варианты' : 'Ключи_подборки'}_${variants.length}.html`);
    }

    // Дополнительные шаблоны игр грузятся только при запуске самой игры.
    // Банки заданий, настройки и глазики продолжают загружаться прежним способом.
    const ogeOptionalGameLoads = new Map();
    function ogeLoadGameTemplate(url, isReady) {
        if (isReady()) return Promise.resolve();
        if (ogeOptionalGameLoads.has(url)) return ogeOptionalGameLoads.get(url);
        const job = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            script.onload = () => isReady() ? resolve() : reject(new Error('Шаблон игры не обнаружен в загруженном файле'));
            script.onerror = () => reject(new Error('Не удалось загрузить ' + url.split('?')[0]));
            document.head.appendChild(script);
        });
        ogeOptionalGameLoads.set(url, job);
        job.catch(() => ogeOptionalGameLoads.delete(url));
        return job;
    }
    function ogeReportGameLoadingError(error) {
        alert('Не удалось загрузить шаблон игры. Проверьте соединение и попробуйте снова.\n' + (error?.message || ''));
    }

    function getOgeGameEligibleTasks() {
        return (window.currentGeneratedTasks || []).filter(t => !t.isSecondPart && Number(t.part || 1) !== 2 && Number(t.taskNumber || 0) < 20);
    }
    function warnOgeGamePartTwo() {
        const excluded = (window.currentGeneratedTasks || []).length - getOgeGameEligibleTasks().length;
        if (excluded > 0) alert('Игра создаётся только по заданиям первой части (№1–19). Задания второй части (№20 и далее) в игру не войдут.');
    }
    function openGameMenu() {
        if (!(window.currentGeneratedTasks || []).length) { alert('Сгенерируйте вариант!'); return; }
        if (!getOgeGameEligibleTasks().length) { alert('Игры создаются только по заданиям первой части (№1–19). В выбранном варианте нет заданий первой части.'); return; }
        warnOgeGamePartTwo();
        document.getElementById('game-modal').style.display='flex';
    }
    function openPresentationMenu() {
        if (window.currentGeneratedTasks.length === 0) { alert("Сгенерируйте вариант!"); return; }
        window.generatorSettings = window.generatorSettings || {};
        window.generatorSettings.instantCheck = document.getElementById('toggle-instant-check').checked;
        window.generatorSettings.showCorrectOnError = document.getElementById('toggle-show-correct').checked;
        window.presentationSettings = { showCorrectOnError: window.generatorSettings.showCorrectOnError, instantCheck: window.generatorSettings.instantCheck };
        window.currentGeneratedTasks.forEach(t => { t.showCorrectOnError = window.generatorSettings.showCorrectOnError; t.instantCheck = window.generatorSettings.instantCheck; });
        document.getElementById('pres-modal').style.display='flex';
    }

    function ogeImproveGameStatementLayout(html) {
        // Only exported games are affected; original template source files are unchanged.
        const css = `<style>
            .oge-scenario-complete-prompt{max-width:100%!important;overflow-wrap:break-word!important}
            .oge-scenario-complete-prompt table{max-width:100%!important;width:100%!important;table-layout:fixed!important;border-collapse:collapse!important;font-size:clamp(11px,1vw,15px)!important}
            .oge-scenario-complete-prompt th,.oge-scenario-complete-prompt td{border:1px solid #999!important;padding:3px!important;overflow-wrap:anywhere!important}
            .oge-scenario-complete-prompt summary{user-select:none}
            .oge-scenario-complete-prompt .oge-scenario-context>div{overflow-y:auto!important}
            #towerDraftDiagram{max-width:68%!important;max-height:68%!important}
            #towerDraftDiagram svg,#towerDraftDiagram img{max-width:100%!important;max-height:100%!important;object-fit:contain!important}
            .canvasWrap{height:clamp(320px,48vh,530px)!important}
            .draftDiagram svg,.draftDiagram img,#draftDiagram svg,#draftDiagram img{max-height:min(43vh,360px)!important;max-width:100%!important;object-fit:contain!important}
            #draftTaskStatement .draft-figure-wrap{width:min(90%,510px)!important;max-width:100%!important}
            #draftTaskStatement .draft-figure-wrap svg,#draftTaskStatement .draft-figure-wrap img{max-height:min(40vh,330px)!important;max-width:100%!important;object-fit:contain!important}
            </style>`;
        return String(html || '').replace('</head>', css + '</head>');
    }

    function generateTowerGame() {
        try {
            const eligibleTowerTasks=getOgeGameEligibleTasks();
            // В игре ровно девять заданий — ТОЛЬКО те, что выбрал учитель.
            // Никакого случайного выбора девяти задач из полного варианта.
            if (eligibleTowerTasks.length !== 9) {
                alert('Для игры «Башня знаний» нужно ровно 9 заданий первой части (№1–19). Сейчас: ' + eligibleTowerTasks.length + '. Выберите ровно девять заданий и сгенерируйте их нижней кнопкой.');
                return;
            }
            const selectedTowerTasks=eligibleTowerTasks;
            if (typeof window.TOWER_TEMPLATE !== 'string') {
                ogeLoadGameTemplate('tower_template.js?v=20261031-three-fixes',
                    () => typeof window.TOWER_TEMPLATE === 'string')
                    .then(() => generateTowerGame()).catch(ogeReportGameLoadingError);
                return;
            }
            if (!window.TOWER_TEMPLATE.includes('/*__CONFIG_DATA__*/')) {
                alert('В файле tower_template.js отсутствует блок конфигурации.');
                return;
            }

            const towerShowCorrectOnError = document.getElementById('toggle-show-correct')
                ? document.getElementById('toggle-show-correct').checked
                : false;

            const gameQuestions = selectedTowerTasks.map(t => {
                let cleanText = String(t.text || '');
                try {
                    const tmp = document.createElement('div');
                    tmp.innerHTML = cleanText;
                    tmp.querySelectorAll('svg,img,picture,canvas').forEach(el => el.remove());
                    cleanText = tmp.innerHTML;
                } catch (e) {}

                let fullPrompt = cleanText;
                if (t.svg) {
                    fullPrompt = `<div style="background:#fff;padding:14px;border-radius:10px;margin-bottom:12px;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,.18);color:#000;">${t.svg}</div>` + cleanText;
                }

                const correctAnswer = String(t.answer ?? '');
                return {
                    type: t.task19Single ? 'boolean' : 'input',
                    task19Single: !!t.task19Single,
                    prompt: fullPrompt,
                    text: cleanText,
                    svg: t.svg || '',
                    answer: correctAnswer,
                    correctAnswer,
                    accepts: Array.isArray(t.accepts) && t.accepts.length ? t.accepts.map(String) : [correctAnswer],
                    showCorrectOnError: towerShowCorrectOnError,
                    seconds: parseInt(document.getElementById('timer-input').value) || null
                };
            });

            let teacherName = document.getElementById('teacher-name').value.trim();
            let instructionText = "Решай задачи верно, чтобы построить самую высокую башню!";
            if (document.getElementById('toggle-signature').checked && teacherName !== '') {
                const gender = document.getElementById('teacher-gender').value;
                const verb = (gender === 'male') ? 'Подготовил' : 'Подготовила';
                instructionText += "\n" + verb + ": " + teacherName;
            }

            const cfg = {
                title: 'Башня знаний',
                questions: gameQuestions,
                useLatex: true,
                showCorrectOnError: towerShowCorrectOnError,
                instruction: { text: instructionText, color: '#ff8c00', glow: true }
            };

            const configScript = 'window.__EMBEDDED_CFG__ = ' + JSON.stringify(cfg) + ';';
            let finalHtml = window.TOWER_TEMPLATE
                .replace('/*__CONFIG_DATA__*/', configScript)
                .replace('<head>', '<head><base href="https://svetlana18011991.github.io/generator11prof/">');

            finalHtml = ogeImproveGameStatementLayout(finalHtml);
        finalHtml = window.injectReferenceHelpIntoHtml(finalHtml, 'game');
            const blob = new Blob([finalHtml], { type: 'text/html;charset=utf-8' });
            return downloadBlobSafely(blob, 'Игра_Башня.html');
        } catch (error) {
            console.error('Ошибка генерации Башни знаний:', error);
            alert('Не удалось создать игру «Башня знаний»: ' + (error && error.message ? error.message : error));
        }
    }


    const MOTIVATION_DEFAULT_IMAGES = Array.from({ length: 10 }, (_, i) => {
        const n = i + 1;
        return {
            name: `p${n}.png`,
            data: `p${n}.png`
        };
    });

    window.selectedMotivationImage = MOTIVATION_DEFAULT_IMAGES[0].data;
    window.selectedMotivationImageName = MOTIVATION_DEFAULT_IMAGES[0].name;

    function renderMotivationEditorImages() {
        const grid = document.getElementById('motivation-image-grid');
        if (!grid) return;
        grid.innerHTML = '';
        MOTIVATION_DEFAULT_IMAGES.forEach((img) => {
            const card = document.createElement('div');
            card.className = 'motivation-img-choice' + (img.data === window.selectedMotivationImage ? ' selected' : '');
            card.innerHTML = `<img src="${img.data}" alt="Картинка для послания" onerror="this.style.opacity='.25'; this.alt='Картинка не найдена'">`;
            card.onclick = () => {
                window.selectedMotivationImage = img.data;
                window.selectedMotivationImageName = img.name;
                updateMotivationPreview();
                renderMotivationEditorImages();
            };
            grid.appendChild(card);
        });
        updateMotivationPreview();
    }

    function motivationSeededRandom(seed){
        let t = seed >>> 0;
        return function(){
            t += 0x6D2B79F5;
            let r = Math.imul(t ^ (t >>> 15), 1 | t);
            r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
            return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
        };
    }

    function buildMotivationPieceLayout(count){
        count = Math.max(1, Number(count) || 1);
        const rand = motivationSeededRandom(1000 + count * 97);
        let rects = [{ x: 0, y: 0, w: 100, h: 100 }];

        while (rects.length < count) {
            rects.sort((a,b) => (b.w * b.h) - (a.w * a.h));
            const rect = rects.shift();
            if (!rect) break;

            let vertical = rect.w >= rect.h;
            if (rect.w > 55 && rect.h > 35) vertical = rand() > 0.45 ? vertical : !vertical;

            if (vertical) {
                const cut = 38 + rand() * 24;
                const w1 = rect.w * cut / 100;
                rects.push({ x: rect.x, y: rect.y, w: w1, h: rect.h });
                rects.push({ x: rect.x + w1, y: rect.y, w: rect.w - w1, h: rect.h });
            } else {
                const cut = 38 + rand() * 24;
                const h1 = rect.h * cut / 100;
                rects.push({ x: rect.x, y: rect.y, w: rect.w, h: h1 });
                rects.push({ x: rect.x, y: rect.y + h1, w: rect.w, h: rect.h - h1 });
            }
        }
        return rects.slice(0, count);
    }

    function updateMotivationPuzzlePreview() {
        const holder = document.getElementById('motivation-puzzle-preview');
        if (!holder) return;

        const n = getOgeGameEligibleTasks().length || 12;
        const layout = buildMotivationPieceLayout(n);

        holder.innerHTML = '';
        layout.forEach((rect, index) => {
            const piece = document.createElement('div');
            piece.className = 'preview-piece';
            piece.style.left = rect.x + '%';
            piece.style.top = rect.y + '%';
            piece.style.width = rect.w + '%';
            piece.style.height = rect.h + '%';
            piece.style.borderRadius = (8 + (index % 4) * 2) + 'px';
            holder.appendChild(piece);
        });
    }

    function updateMotivationPreview() {
        const preview = document.getElementById('motivation-preview-img');
        if (preview) {
            preview.onload = updateMotivationPuzzlePreview;
            preview.src = window.selectedMotivationImage || 'p1.png';
        }
        updateMotivationPuzzlePreview();
    }

    function openMotivationEditor() {
        if (getOgeGameEligibleTasks().length === 0) {
            alert("Сначала сгенерируйте вариант.");
            return;
        }
        renderMotivationEditorImages();
        document.getElementById('game-modal').style.display = 'none';
        document.getElementById('motivation-modal').style.display = 'flex';
        setTimeout(updateMotivationPreview, 80);
    }

    function handleMotivationUpload(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        const note = document.getElementById('motivation-editor-note');
        if (note) note.style.display = 'none';
        const reader = new FileReader();
        reader.onload = function(e) {
            window.selectedMotivationImage = e.target.result;
            window.selectedMotivationImageName = 'Своя картинка';
            updateMotivationPreview();
            renderMotivationEditorImages();
        };
        reader.onerror = function() {
            if (note) {
                note.textContent = 'Не удалось загрузить картинку. Попробуйте другой файл.';
                note.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }


    function ensureMotivationTemplateLoaded(callback) {
        if (typeof window.MOTIVATION_TEMPLATE !== 'undefined') {
            callback();
            return;
        }

        const note = document.getElementById('motivation-editor-note');
        if (note) {
            note.style.display = 'block';
            note.style.color = '#ffcc80';
            note.style.borderLeftColor = '#ffcc80';
            note.style.background = 'rgba(255,204,128,0.10)';
            note.textContent = 'Загружаю шаблон мотивационного послания...';
        }

        const old = document.getElementById('motivation-template-loader');
        if (old) old.remove();

        const script = document.createElement('script');
        script.id = 'motivation-template-loader';
        script.src = 'motivation_template.js?v=20261031-three-fixes' + Date.now();

        script.onload = function() {
            if (typeof window.MOTIVATION_TEMPLATE !== 'undefined') {
                if (note) note.style.display = 'none';
                callback();
            } else {
                if (note) {
                    note.style.display = 'block';
                    note.style.color = '#ef5350';
                    note.style.borderLeftColor = '#ef5350';
                    note.style.background = 'rgba(244,67,54,0.10)';
                    note.innerHTML = 'Файл <b>motivation_template.js</b> загрузился, но шаблон внутри не найден. Проверьте, что загружен именно новый файл.';
                }
            }
        };

        script.onerror = function() {
            if (note) {
                note.style.display = 'block';
                note.style.color = '#ef5350';
                note.style.borderLeftColor = '#ef5350';
                note.style.background = 'rgba(244,67,54,0.10)';
                note.innerHTML = 'Не удалось загрузить <b>motivation_template.js</b>. Подождите 1–2 минуты после загрузки файла на GitHub Pages и обновите страницу через Ctrl+F5.';
            } else {
                alert('Не удалось загрузить motivation_template.js. Подождите 1–2 минуты и обновите страницу через Ctrl+F5.');
            }
        };

        document.head.appendChild(script);
    }

    function generateMotivationGame() {
        if (getOgeGameEligibleTasks().length === 0) {
            alert("Сначала сгенерируйте вариант.");
            return;
        }

        if (typeof window.MOTIVATION_TEMPLATE === 'undefined') {
            ensureMotivationTemplateLoaded(generateMotivationGame);
            return;
        }

        const note = document.getElementById('motivation-editor-note');
        if (note) note.style.display = 'none';

        const questions = getOgeGameEligibleTasks().map(t => {
            let fullPrompt = t.text || '';
            if (t.svg) {
                fullPrompt = `<div style="background:#fff; padding:14px; border-radius:10px; margin-bottom:12px; text-align:center; color:#000;">${t.svg}</div>` + fullPrompt;
            }
            const answer = String(t.answer ?? '');
            return {
                type: t.task19Single ? "boolean" : "input",
                task19Single: !!t.task19Single,
                prompt: fullPrompt,
                text: t.text || '',
                svg: t.svg || '',
                answer: answer,
                correctAnswer: answer,
                accepts: Array.isArray(t.accepts) && t.accepts.length ? t.accepts.map(String) : [answer]
            };
        });

        const title = (document.getElementById('motivation-title')?.value || 'Мотивационное послание').trim() || 'Мотивационное послание';
        const message = (document.getElementById('motivation-message')?.value || '').trim() || 'У тебя получится. Шаг за шагом картинка соберётся!';
        const finishMessage = (document.getElementById('motivation-finish')?.value || '').trim() || message;

        const cfg = {
            title,
            message,
            finishMessage,
            image: window.selectedMotivationImage || MOTIVATION_DEFAULT_IMAGES[0].data,
            questions
        };

        const configScript = "window.__MOTIVATION_CFG__ = " + JSON.stringify(cfg) + ";";
        const baseTag = '<base href="https://svetlana18011991.github.io/generator11prof/">';
        let finalHtml = window.MOTIVATION_TEMPLATE
            .replace("/*__CONFIG_DATA__*/", configScript)
            .replace("<head>", "<head>" + baseTag);

        finalHtml = ogeImproveGameStatementLayout(finalHtml);
        finalHtml = window.injectReferenceHelpIntoHtml(finalHtml, 'game');
        const blob = new Blob([finalHtml], { type: "text/html;charset=utf-8" });
        document.getElementById('motivation-modal').style.display = 'none';
        return downloadBlobSafely(blob, "Мотивационное_послание.html");
    }

    window.generateBattleGame = function generateBattleGame() {
        if (getOgeGameEligibleTasks().length === 0) { alert("Баттл создаётся только по заданиям первой части (№1–19)."); return; }
        if (typeof BATTLE_TEMPLATE === 'undefined') {
            ogeLoadGameTemplate('battle_template.js?v=20261031-three-fixes',
                () => typeof BATTLE_TEMPLATE === 'string')
                .then(() => window.generateBattleGame()).catch(ogeReportGameLoadingError);
            return;
        }

        let gameQuestions = getOgeGameEligibleTasks().map(t => {
            let cleanText = String(t.text || '');
            try {
                const tmp = document.createElement('div');
                tmp.innerHTML = cleanText;
                tmp.querySelectorAll('svg,img,picture,canvas').forEach(el => el.remove());
                cleanText = tmp.innerHTML;
            } catch(e) {}
            let fullPrompt = cleanText;
            if (t.svg) {
                fullPrompt = `<div style="background:#fff; padding:14px; border-radius:10px; margin-bottom:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,.14); color:#000;">${t.svg}</div>` + fullPrompt;
            }
            return {
                type: t.task19Single ? "boolean" : "input",
                task19Single: !!t.task19Single,
                prompt: fullPrompt,
                draftText: t.draftText || t.text || '',
                draftSvg: t.svg || '',
                accepts: Array.isArray(t.accepts) && t.accepts.length ? t.accepts.map(String) : [String(t.answer ?? '')],
                seconds: parseInt(document.getElementById('timer-input').value) || null
            };
        });

        let teacherName = document.getElementById('teacher-name').value.trim();
        let instructionText = "Выбери персонажа и выйди на арену. Слева будет твой герой, справа — Страж КИМов. У тебя 5 жизней. Правильный ответ отправляет заряд в босса, неправильный — даёт боссу ударить по тебе. Побеждает тот, у кого к концу баттла линия жизни длиннее.";
        if (document.getElementById('toggle-signature').checked && teacherName !== '') {
            let gender = document.getElementById('teacher-gender').value;
            let verb = (gender === 'male') ? 'Подготовил' : 'Подготовила';
            instructionText += "\n" + verb + ": " + teacherName;
        }

        let cfg = {
            title: "Баттл ОГЭ",
            lives: 5,
            questions: gameQuestions,
            useLatex: true,
            showCorrectOnError: document.getElementById('toggle-show-correct') ? document.getElementById('toggle-show-correct').checked : false,
            instruction: instructionText
        };

        let configScript = "window.__BATTLE_CFG__ = " + JSON.stringify(cfg) + ";";
        let baseTag = '<base href="https://svetlana18011991.github.io/generator11prof/">';
        let finalHtml = BATTLE_TEMPLATE.replace("/*__CONFIG_DATA__*/", configScript).replace("<head>", "<head>" + baseTag);

        finalHtml = ogeImproveGameStatementLayout(finalHtml);
        finalHtml = window.injectReferenceHelpIntoHtml(finalHtml, 'game');
        let blob = new Blob([finalHtml], { type: "text/html;charset=utf-8" });
        document.getElementById('game-modal').style.display='none';
        return downloadBlobSafely(blob, "Игра_Баттл_ОГЭ.html");
    };
