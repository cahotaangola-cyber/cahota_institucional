<?php
/**
 * Main template file for Cahota Theme.
 *
 * This file serves as the main entry point for the React/Vite-powered single-page
 * corporate application.
 *
 * @package Cahota_Theme
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="h-full scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class('h-full bg-slate-50 text-slate-800 antialiased'); ?>>
    <?php wp_body_open(); ?>
    
    <!-- React App Root -->
    <div id="root"></div>

    <?php wp_footer(); ?>
</body>
</html>
