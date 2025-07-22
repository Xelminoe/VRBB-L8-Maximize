// 原 wrapper 函数中的 plugin 对象内容
(function(){
  const plugin = {};
  window.plugin = plugin;

  plugin.createUIPanel = function () {
    // ... 原来的 createUIPanel 实现
  };

  $(document).ready(() => {
    plugin.createUIPanel();
  });
})();
