<?php
/**
 * Cahota Theme functions and definitions.
 *
 * This file enqueues the compiled React/Vite assets dynamically and sets up
 * theme support features for WordPress.
 *
 * @package Cahota_Theme
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Register theme support.
 */
function cahota_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'cahota_theme_setup' );

/**
 * Enqueue built React/Vite assets.
 */
function cahota_theme_enqueue_assets() {
    $assets_dir = get_template_directory() . '/assets';
    $assets_uri = get_template_directory_uri() . '/assets';

    if ( ! is_dir( $assets_dir ) ) {
        return;
    }

    // Dynamic styles enqueue
    $css_files = glob( $assets_dir . '/*.css' );
    if ( $css_files ) {
        foreach ( $css_files as $file ) {
            $filename = basename( $file );
            $handle   = 'cahota-css-' . sanitize_title( $filename );
            wp_enqueue_style(
                $handle,
                $assets_uri . '/' . $filename,
                array(),
                null
            );
        }
    }

    // Dynamic scripts enqueue (bundled ES6 modules)
    $js_files = glob( $assets_dir . '/*.js' );
    if ( $js_files ) {
        foreach ( $js_files as $file ) {
            $filename = basename( $file );
            $handle   = 'cahota-js-' . sanitize_title( $filename );
            wp_enqueue_script(
                $handle,
                $assets_uri . '/' . $filename,
                array(),
                null,
                true // Load in footer
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', 'cahota_theme_enqueue_assets' );

/**
 * Modify script tag to include type="module" for Vite-generated ES modules.
 */
function cahota_theme_script_loader_tag( $tag, $handle, $src ) {
    if ( strpos( $handle, 'cahota-js-' ) === 0 ) {
        $tag = '<script type="module" src="' . esc_url( $src ) . '" crossorigin></script>';
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'cahota_theme_script_loader_tag', 10, 3 );
