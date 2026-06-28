<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-slate-50 text-slate-900'); ?>>
    <?php wp_body_open(); ?>

    <!-- Contetor principal onde a aplicação React é montada de forma dinâmica -->
    <div id="root"></div>

    <?php wp_footer(); ?>
</body>
</html>
