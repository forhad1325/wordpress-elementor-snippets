jQuery(window).on('elementor/frontend/init', function () {
	jQuery(function ($) {
		const $widget = $('.hoverTabs');
		function resetTabs() {
			$widget.find('.e-n-tab-title').removeClass('e-active').attr('aria-selected', 'false').attr('tabindex', '-1');
			$widget.find('[role="tabpanel"]').removeClass('e-active').hide();
		}
		setTimeout(resetTabs, 50);
		$widget.find('.e-n-tab-title').on('mouseenter', function (e) {
			if ($(e.target).closest('a').length) return;
			resetTabs();
			$(this).trigger('click');
		});
		$widget.find('.e-n-tab-title a').on('click', function (e) { e.stopPropagation(); });
		$widget.on('mouseleave', function () { resetTabs(); });
	});
});
