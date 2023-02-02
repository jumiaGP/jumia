<!-- p <?php //echo get_block_wrapper_attributes(); ?> -->
<?//php esc_html_e( 'Image Carousel – hello from a dynamic block!', 'image-carousel' ); ?>	
<!-- /p -->
<?php
$image_path = "./wp-content/uploads/";
?>

<div class="carosal">
	<div class="flex-container">
		<?php
	/* 	$args = array(
			'post_type' => 'product',
			'meta_key' => 'total_sales',
			'orderby' => 'meta_value_num',
			'posts_per_page' => 15
		); */
		$args = array(
			'posts_per_page'      => 15,
            'post_type'           => 'product',
            'post_status'         => 'publish',
            'ignore_sticky_posts' => 1,
            'order'               => 'DESC',
            'tax_query'           => array(
               
                // Product tag 1 filter
                array(
                    'taxonomy' => 'product_tag',
                    'terms'    => array($id),
                )
		));
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); 
			global $product; ?>
			<div class="image_div image_div<?php echo $id ?>">
				<a class="image_a" href="<?php the_permalink(); ?>" id="id-<?php the_id(); ?>" title="<?php the_title(); ?>">
					<?php if (has_post_thumbnail( $loop->post->ID )) 
							echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog'); 
							else echo '<img src="'.woocommerce_placeholder_img_src().'" alt="product placeholder Image" width="65px" height="115px" />'; ?>
					<p class="top_selling_name">
						<?php the_title(); ?> </br>
					</p>
                    <p class="top_selling_price"><?php echo $product->get_price_html(); ?></p>
				</a>
			</div>
		<?php endwhile; ?>
		<?php wp_reset_query(); ?>
	</div>
	<span id="left-arrow" class="arrow arrow<?php echo $id ?>" onclick="shift<?php echo $id; ?>(this,1)">
		<img style="width:45px" src="<?php echo $image_path . "left-arrow.svg"; ?>" />
	</span>
	<span id="right-arrow" class="arrow arrow<?php echo $id ?>" onclick="shift<?php echo $id; ?>(this,-1)">
		<img style="width:45px" src="<?php echo $image_path . "right-arrow.svg"; ?>" />
	</span>

</div>

<script>
	var current = 0;
	//document.getElementById("left-arrow").style.display = "none";
	document.getElementById("left-arrow").style.zIndex = "-1";
	
	function shift<?php echo $id; ?>(x,i) {
		current += i * 1140;
		for (let el of document.querySelectorAll('.arrow<?php echo $id ?>')){
			//el.style.display = "block";
			el.style.zIndex = "1";
		}
		if (current >= 0){
			current = 0;
			//x.style.display = "none";
			x.style.zIndex = "-1";
		}
		else if(current <= -2 * 1140){
			current = -1.8*860;
			//x.style.display = "none";
			x.style.zIndex = "-1";
		}
		for (let el of document.querySelectorAll('.image_div<?php echo $id ?>')){
			el.style.left = current+'px';
		}
	}
</script>

<style>
    /**
 * The following styles get applied both on the front of your site
 * and in the editor.
 *
 * Replace them with your own styles or remove the file completely.
 */

 .carosal {
    height: 320px;

}
.flex-container {
	display: flex;
	width: 1140px;
	background-color: white;
	overflow:hidden;
    height:320px;
	/*justify-content: space-between;
	//flex-wrap: wrap;
	//max-height:220px;
	//overflow-y:hidden;*/
}
  
.flex-container > div {
	background-color: white;
	margin-top: 10px;
	padding-top: 10px;
	font-size: 30px;
}
.image_div{
	position: relative;
	left: 0.0001px;
	transition-property: left;
	transition-duration: 1s;
}
.image_div:hover {
	border-style: ridge;
}
.image_a img{
	width: 190px !important;
	height: 200px !important;
}
.top_selling_name{
	font-size: small;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px; 
  height: 1.5em; 
  white-space: nowrap;
}
.top_selling_price{
	font-size: small;
    color:black;
    font-weight: bold;
}

.arrow svg{
	width: 50px;
	height: 50px;
}
.arrow:hover{
	cursor: pointer;
}
#left-arrow{
	z-index: 1;
	position: relative;
	top: -180px;
}
#right-arrow{
	z-index: 1;
	position: relative;
	top: -180px;
	left: 1030px;
}
</style>