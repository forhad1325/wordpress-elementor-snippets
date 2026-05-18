jQuery(document).ready(function($) {
	setTimeout(function() {
        var firstAccordionItemTitle = $('.elementor-accordion .elementor-accordion-item:first-child .elementor-tab-title');
        var firstAccordionItemContent = $('.elementor-accordion .elementor-accordion-item:first-child .elementor-tab-content');
        if (firstAccordionItemTitle.length && firstAccordionItemContent.length) {
            firstAccordionItemTitle.removeClass('elementor-active');
            firstAccordionItemContent.removeClass('elementor-active').hide();
            firstAccordionItemTitle.attr('aria-expanded', 'false');
            firstAccordionItemContent.attr('aria-hidden', 'true').css('display', 'none');
        }
    }, 1000);
});
