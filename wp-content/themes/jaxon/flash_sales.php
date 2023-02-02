<!-- p <?php //echo get_block_wrapper_attributes(); ?> -->
<?//php esc_html_e( 'Image Carousel – hello from a dynamic block!', 'image-carousel' ); ?>	
<!-- /p -->
<?php
	date_default_timezone_set('Africa/Cairo');
?>
<div>
    <?php
        $date = isset($_GET['date']) ? $_GET['date'] : date('d.m.Y');
        $next_date = date('d.m.Y', strtotime($date .' +1 day'));
    echo $next_date;
     ?>
</div>
<div class="flash_sales">
	<div class="grid-container">
		<?php
		$args = array(
			'post_type' => 'product',
			'posts_per_page' => 200
			);
         
         
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post();
			//wc_get_template_part( 'content', 'product' );
			global $product;
           
            
			if(!is_null($product->date_on_sale_from) && !is_null($product->date_on_sale_to)){
				if(
					date_diff($product->date_on_sale_from,$product->date_on_sale_to) == 1 &&
					$product->date_on_sale_to->date( "j.m.Y") == $next_date
				){ ?>
					
					<div class="image_div grid-item">
						
						<a class="image_a" href="<?php the_permalink(); ?>" id="id-<?php the_id(); ?>" title="<?php the_title(); ?>">
							<?php if (has_post_thumbnail( $loop->post->ID )) 
									echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog'); 
									else echo '<img src="'.woocommerce_placeholder_img_src().'" alt="product placeholder Image" width="65px" height="115px" />'; ?>
							<p>
								<?php the_title(); ?> </br>
								<?php echo $product->get_price_html(); ?>
							</p>
						</a>
						<?php
						
					echo apply_filters( 'woocommerce_loop_add_to_cart_link',
					sprintf( '<a href="%s" rel="nofollow" data-product_id="%s" data-product_sku="%s" class="button %s product_type_%s">%s</a>',
						esc_url( $product->add_to_cart_url() ),
						esc_attr( $product->get_id() ),
						esc_attr( $product->get_sku() ),
						$product->is_purchasable() ? 'add_to_cart_button' : '',
						esc_attr( $product->get_type() ),
						esc_html( $product->add_to_cart_text() )
					), $product );
						?>
					</div> <?php
				}
			}
			
		endwhile; ?>
		<?php wp_reset_query(); ?>
	</div>

</div>

<script>
</script>