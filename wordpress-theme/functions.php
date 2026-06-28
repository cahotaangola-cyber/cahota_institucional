<?php
/**
 * Cahota Lda - WordPress Theme Functions
 *
 * This file handles dynamically scanning and enqueuing the compiled
 * React (Vite + Tailwind CSS) production files without breaking when
 * filenames change with new builds.
 */

function cahota_enqueue_react_assets() {
    // Relative and absolute directory paths to assets
    $assets_dir = get_template_directory() . '/assets';
    $assets_url = get_template_directory_uri() . '/assets';

    // Verify if directory exists before scanning
    if (is_dir($assets_dir)) {
        // Find main JS bundle via glob search to handle hashes (e.g. index-*.js)
        $js_files = glob($assets_dir . '/index-*.js');
        if (!empty($js_files)) {
            $js_file = basename($js_files[0]);
            wp_enqueue_script(
                'cahota-react-app',
                $assets_url . '/' . $js_file,
                array(),
                null,
                true // Loaded at the bottom for DOM readiness
            );
        }

        // Find main CSS bundle via glob search (e.g. index-*.css)
        $css_files = glob($assets_dir . '/index-*.css');
        if (!empty($css_files)) {
            $css_file = basename($css_files[0]);
            wp_enqueue_style(
                'cahota-react-styles',
                $assets_url . '/' . $css_file,
                array(),
                null
            );
        }
    }
}
add_action('wp_enqueue_scripts', 'cahota_enqueue_react_assets');

// Basic theme settings
function cahota_setup_theme() {
    // Add title tag support
    add_theme_support('title-tag');
    // Enable post thumbnails if needed in the future
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'cahota_setup_theme');
