<?php
function category(){
    ob_start();
    include('./wp-content/themes/jaxon/category.php');
    $fileValue = ob_get_contents();
    ob_end_clean();
    return $fileValue;
}
add_shortcode('category', 'category');

function today_offers($atts){
	$a = shortcode_atts( array(
		'day' => 1,
	), $atts );
    $day = $a['day'];
    ob_start();
    include('./wp-content/themes/jaxon/today_offers.php');
    $fileValue = ob_get_contents();
    ob_end_clean();
    return $fileValue;
}
add_shortcode('today_offers', 'today_offers');

function flash_sales(){
    ob_start();
    include('./wp-content/themes/jaxon/flash_sales.php');
    $fileValue = ob_get_contents();
    ob_end_clean();
    return $fileValue;
}
add_shortcode('flash_sales', 'flash_sales');


function carosal( $atts ){
	$a = shortcode_atts( array(
		'id' => '0',
	), $atts );
    $id = $a['id'];
    ob_start();
    include('./wp-content/themes/jaxon/carosal.php');
    $fileValue = ob_get_contents();
    ob_end_clean();
    return $fileValue;
}
add_shortcode('carosal', 'carosal');

// [bartag foo="foo-value"]
?>