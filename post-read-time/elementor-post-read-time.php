<?php
// Add Post Read Time Dynamic Tag to Elementor
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

if ( is_plugin_active( 'elementor-pro/elementor-pro.php' ) ) {
    add_action('elementor/dynamic_tags/register_tags', function( $dynamic_tags ) {
        $dynamic_tags->register_tag( 'Reading_Time_Tag' );
    });

    class Reading_Time_Tag extends \Elementor\Core\DynamicTags\Tag {
        public function get_name() { return 'reading-time'; }
        public function get_title() { return __('Reading Time', 'text-domain'); }
        public function get_group() { return 'post'; }
        public function get_categories() {
            return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
        }
        protected function register_controls() {}
        public function render() {
            $content = get_post_field('post_content', get_the_ID());
            echo estimate_reading_time($content);
        }
    }
}

function estimate_reading_time($content) {
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200);
    return $reading_time . ' min' . ($reading_time === 1 ? '' : 's') . ' read';
}
