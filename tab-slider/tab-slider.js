jQuery(document).ready(function($) {
    if (!$('body').hasClass('elementor-editor-active')) {
        var interval = 5000;
        function switchTab($tabContainer) {
            var currentTab = $tabContainer.find('.e-n-tab-title[aria-selected="true"]');
            var nextTab = currentTab.next('.e-n-tab-title').length ? currentTab.next('.e-n-tab-title') : $tabContainer.find('.e-n-tab-title:first');
            currentTab.attr('aria-selected', 'false');
            $tabContainer.find('.e-n-tabs-content > .elementor-element.e-active').removeClass('e-active');
            nextTab.attr('aria-selected', 'true');
            $tabContainer.find('.e-n-tabs-content > .elementor-element').eq(nextTab.index()).addClass('e-active');
        }
        if (window.innerWidth > 767) {
            $('.autoplay-tab').each(function() {
                var $tabContainer = $(this);
                var autoplayInterval = setInterval(function() { switchTab($tabContainer); }, interval);
                $tabContainer.find('.e-n-tab-title').on('click', function() {
                    clearInterval(autoplayInterval);
                    $tabContainer.find(".e-n-tab-title").removeClass("clicked-tab");
                    $(this).addClass("clicked-tab");
                });
                $tabContainer.find('.e-n-tab-title a').on('click', function(event) { event.stopPropagation(); });
                addProgressBar($tabContainer);
            });
        } else {
            $('.autoplay-tab.mobile-autoplay').each(function() {
                var $tabContainer = $(this);
                var autoplayInterval = setInterval(function() { switchTab($tabContainer); }, interval);
                $tabContainer.find('.e-n-tab-title').on('click', function() {
                    clearInterval(autoplayInterval);
                    $tabContainer.find(".e-n-tab-title").removeClass("clicked-tab");
                    $(this).addClass("clicked-tab");
                });
                $tabContainer.find('.e-n-tab-title a').on('click', function(event) { event.stopPropagation(); });
                addProgressBar($tabContainer);
            });
        }
        function addProgressBar($tabContainer) {
            var progressBarHTML = '<div class="progress-bar-container"><div class="progress-bar"></div></div>';
            $tabContainer.find('.e-n-tab-title').prepend(progressBarHTML);
        }
    }
});
