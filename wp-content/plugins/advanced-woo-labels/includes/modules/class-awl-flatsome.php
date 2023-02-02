<?php

/**
 * AWL Flatsome theme plugin support
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

if (!class_exists('AWL_Flatsome')) :

    /**
     * Class for main plugin functions
     */
    class AWL_Flatsome {

        /**
         * @var AWL_Flatsome The single instance of the class
         */
        protected static $_instance = null;

        protected $data = array();

        /**
         * Main AWL_Flatsome Instance
         *
         * Ensures only one instance of AWL_Flatsome is loaded or can be loaded.
         *
         * @static
         * @return AWL_Flatsome - Main instance
         */
        public static function instance()
        {
            if (is_null(self::$_instance)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        /**
         * Constructor
         */
        public function __construct() {

            add_filter( 'awl_labels_hooks', array( $this, 'awl_labels_hooks' ), 2 );

            add_filter( 'awl_label_container_styles', array( $this, 'awl_label_container_styles' ), 1, 3 );

            add_filter( 'awl_enable_labels', array( $this, 'awl_enable_labels' ), 1 );

        }

        /*
         * Change display hooks
         */
        public function awl_labels_hooks( $hooks ) {

            $hooks['on_image']['single']['woocommerce_before_single_product_summary'] = array( 'priority' => 10, 'js' => array( '.product-gallery .product-images', 'append' ) );

            $hooks['on_image']['single']['flatsome_sale_flash'] = array( 'priority' => 10 );

            $hooks['on_image']['archive']['flatsome_woocommerce_shop_loop_images'] = array( 'priority' => 10 );

            if ( isset( $_REQUEST['action'] ) && 'flatsome_quickview' === $_REQUEST['action'] ) {
                $hooks['before_title']['single'] = array( 'the_title' => array( 'priority' => 10, 'type' => 'filter', 'before' => true ) );
                $hooks['on_image']['single'] = array( 'woocommerce_before_single_product_lightbox_summary' => array( 'priority' => 10 ) );
            }

            return $hooks;

        }

        /*
         * Change labels container styles
         */
        public function awl_label_container_styles( $styles, $position_type, $labels ) {

            global $wp_filter, $wp_current_filter;

            if ( $position_type === 'on_image' && in_array( 'flatsome_woocommerce_shop_loop_images', $wp_current_filter ) ) {
                $styles['z-index'] = '0';
            }

            return $styles;

        }

        /*
         * Enable labels for Flatsome preview
         */
        public function awl_enable_labels( $enable ) {

            if ( isset( $_REQUEST['action'] ) && 'flatsome_quickview' === $_REQUEST['action'] ) {
                $enable = true;
            }

            return $enable;

        }

    }

endif;

AWL_Flatsome::instance();