jQuery(document).ready(function($) {
    setTimeout(function() {
        var firstTitle = $('.elementor-accordion .elementor-accordion-item:first-child .elementor-tab-title');
        var firstContent = $('.elementor-accordion .elementor-accordion-item:first-child .elementor-tab-content');
        if (firstTitle.length && firstContent.length) {
            firstTitle.removeClass('elementor-active');
            firstContent.removeClass('elementor-active').hide();
            firstTitle.attr('aria-expanded', 'false');
            firstContent.attr('aria-hidden', 'true').css('display', 'none');
        }
    }, 1000);
});
