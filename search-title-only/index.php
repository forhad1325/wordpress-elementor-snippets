<?php
function only_title_search_product( $query ) {
    if ( isset( $query->query_vars['s'] ) && ! empty( $query->query_vars['s'] ) ) {
        $search_term = $query->query_vars['s'];
        $query->set( 'post_type', 'product' );
        $query->set( 'meta_key', '_price' );
        $query->set( 'orderby', 'meta_value_num' );
        $query->set( 'order', 'DESC' );
        add_filter( 'posts_where', function( $where ) use ( $search_term ) {
            global $wpdb;
            return $where . $wpdb->prepare( " AND {$wpdb->posts}.post_title LIKE %s", '%' . $wpdb->esc_like( $search_term ) . '%' );
        });
    }
}
add_action( 'elementor/query/only_title_search_product', 'only_title_search_product' );
