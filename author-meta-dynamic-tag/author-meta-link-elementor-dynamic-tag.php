<?php
/* Add Author Meta Link Dynamic Tag to Elementor */
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

if ( is_plugin_active( 'elementor-pro/elementor-pro.php' ) ) {
    add_action('elementor/dynamic_tags/register_tags', function( $dynamic_tags ) {
        $dynamic_tags->register_tag( 'Author_Meta_Link_Tag' );
    });

    class Author_Meta_Link_Tag extends \Elementor\Core\DynamicTags\Tag {
        public function get_name() { return 'author-meta-link'; }
        public function get_title() { return __( 'Author Meta Link', 'text-domain' ); }
        public function get_group() { return 'site'; }
        public function get_categories() {
            return [ \Elementor\Modules\DynamicTags\Module::URL_CATEGORY ];
        }
        protected function register_controls() {
            $this->add_control( 'meta_key', [
                'label' => __( 'Meta Key', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'placeholder' => 'linkedin_url, work_mail, custom_email, etc.',
            ]);
        }
        public function render() {
            $meta_key  = $this->get_settings( 'meta_key' );
            $author_id = get_post_field( 'post_author', get_the_ID() );
            $value     = get_user_meta( $author_id, $meta_key, true );
            if ( ! $value ) return;
            echo is_email( $value ) ? esc_attr( 'mailto:' . sanitize_email( $value ) ) : esc_url( $value );
        }
    }
}
