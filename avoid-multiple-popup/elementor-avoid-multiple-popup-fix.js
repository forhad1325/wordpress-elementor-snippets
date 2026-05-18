(function ($) {
  function closeAllPopups() {
    if (window.elementorProFrontend?.modules?.popup) {
      Object.values(elementorProFrontend.modules.popup.popupInstances || {}).forEach(instance => {
        try { instance.close(); } catch (e) {}
      });
    }
    $('.dialog-widget:visible .dialog-close-button').trigger('click');
  }
  $(window).on('elementor/frontend/init', function () {
    $(document).on('elementor/popup/show', function () { closeAllPopups(); });
    $(document).on('click', 'a[href*="elementor-action"][href*="popup:open"]', function () { closeAllPopups(); });
  });
})(jQuery);
