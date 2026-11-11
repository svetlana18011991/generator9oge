(function () {
  'use strict';
  if (window.__ogeMathPunctuationGuard) return;
  window.__ogeMathPunctuationGuard = true;
  var style = document.createElement('style');
  style.textContent = '.oge-math-atomic{display:inline-block!important;white-space:nowrap!important;vertical-align:baseline;break-inside:avoid!important;overflow-wrap:normal!important;word-break:normal!important}.oge-math-atomic mjx-container,.oge-math-atomic .katex{white-space:nowrap!important}';
  (document.head || document.documentElement).appendChild(style);
  var skip = 'script,style,textarea,pre,code,svg,math,input,button,select,option,[contenteditable="true"],.oge-math-atomic';
  var math = 'mjx-container[jax]:not([display="true"]),.katex:not(.katex-display)';
  function attach(el) {
    if (!el || !el.isConnected || !el.matches(math) || el.closest(skip) || el.parentElement.closest('mjx-container,.katex')) return;
    var before = el.previousSibling, after = el.nextSibling;
    var prefix = before && before.nodeType === 3 && /(?:^|[\s(])((?:равен|равна|равно|равны|равняется|=|≤|≥|≈|≠|<|>)\s*)$/iu.exec(before.nodeValue);
    var suffix = after && after.nodeType === 3 && /^(?:[.,;:!?…]+|[ \t]*[=<>≤≥≠≈][ \t]*[+−-]?(?:\d+(?:[.,]\d+)?|[A-Za-zА-Яа-яα-ωΑ-Ω]{1,5})[.,;:!?…]*)/.exec(after.nodeValue);
    if (!prefix && !suffix) return;
    var parent = el.parentNode;
    var holder = document.createElement('span');
    holder.className = 'oge-math-atomic';
    parent.insertBefore(holder, el);
    if (prefix) {
      var p = before.splitText(before.nodeValue.length - prefix[1].length);
      holder.appendChild(p);
    }
    holder.appendChild(el);
    if (suffix) {
      var part = after.splitText(suffix[0].length);
      holder.appendChild(after);
      parent.insertBefore(part, holder.nextSibling);
    }
  }
  function process(root) {
    if (!root || root.nodeType !== 1 || root.closest(skip)) return;
    if (root.matches(math)) attach(root);
    Array.from(root.querySelectorAll(math)).forEach(attach);
  }
  function start() {
    if (!document.body) return;
    process(document.body);
    var queued = new Set(), scheduled = false;
    var observer = new MutationObserver(function (records) {
      records.forEach(function (record) {
        record.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1 || node.closest('.oge-math-atomic')) return;
          if (node.matches(math)) queued.add(node.parentElement);
          else if (node.querySelector(math)) queued.add(node);
        });
      });
      if (!queued.size || scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        var nodes = Array.from(queued);
        queued.clear();
        nodes.forEach(function (node) { if (node && node.isConnected) process(node); });
      });
    });
    observer.observe(document.body, { childList:true, subtree:true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
