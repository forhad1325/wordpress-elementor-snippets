<?php
add_action('elementor/query/blog_search_result', function($query) {
    if (is_search() && !is_admin()) {
        $query->set('post_type', 'post');
    }
});
