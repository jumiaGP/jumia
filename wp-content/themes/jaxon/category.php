<?php
	global $wpdb;
	$image_path = "./wp-content/uploads/";
?>
<!-- <script>

	// Immediately-invoked function expression
 	(function() {
		// Load the script
		const script = document.createElement("script");
		script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
		script.type = 'text/javascript';
		script.addEventListener('load', () => {

		});
		document.head.appendChild(script);
	})();
</script> -->

<div class="wp-block-create-block-example-dynamic">
	<?php
	// Taxonomy for product categories
	$taxonomy = 'product_cat';

	// Get parent product categories
	$parent_product_cats = get_terms( $taxonomy, array( 'parent' => 0, 'orderby' => 'slug', 'hide_empty' => false ) );

	// Iterating through each parent categories (WP_Term Objects)
	$term_ids = array();
	?>
	<div class="item1">
	<?php
	foreach ( $parent_product_cats as $product_cat_obj ) {
		$term_id = $product_cat_obj->term_id; // term ID
		$term_name = $product_cat_obj->name; // term Name
		$term_slug = $product_cat_obj->slug; // term slug
		if ($term_slug != "uncategorized"){
			array_push($term_ids,$term_id);
	?>		<a class="cat_link" href="<?php echo esc_url( get_term_link( $product_cat_obj ) ); ?>">
				<div class="parent_cat" data-term="<?php echo $term_id; ?>" onmouseover="data_term = <?php echo $term_id; ?>,window.clearTimeout(item2timer), item2timer = window.setTimeout(showitem2, adsTimer)" onmouseleave="window.clearTimeout(item2timer),item2timer = window.setTimeout(hideitem2, adsTimer)">
					
						<img style="width:15px" src="<?php echo $image_path . $term_name . ".svg"; ?>" /> <?php echo esc_html( $term_name ); ?>
					
				</div>
			</a>
			<?php
		}
	}
	?>
	</div>
	<div class="item2" onmouseover="window.clearTimeout(item2timer)" onmouseleave="window.clearTimeout(item2timer),item2timer = window.setTimeout(hideitem2, adsTimer)">
	<?php
	foreach ( $term_ids as $term_id ) {
		$child_terms_ids = get_term_children( $term_id, 'product_cat' );
		if ( term_exists( $term_id, 'product_cat' ) ) {
			$child_terms_ids = get_term_children( $term_id, 'product_cat' );
			?>
			<div id="<?php echo $term_id?>" class="sub_cat" hidden>
				<?php
				// Loop through child terms Ids
				foreach ( $child_terms_ids as $child_term_id ) {
					$child_term = get_term_by( 'term_id', $child_term_id, 'product_cat' );
					if( $child_term -> parent == $term_id ){
						// The term name
						$child_name = $child_term->name;
						// The term link
						$child_link = get_term_link( $child_term, 'product_cat' );
						?> 
						<div class="first_child">
							<a class="cat_link" href=' <?php echo $child_link ?>'> <?php echo $child_term->name  ?> </a>
						</div>
						<?php
						foreach($child_terms_ids as $child_term_id2){
							$child_term2 = get_term_by( 'term_id', $child_term_id2, 'product_cat' );
							if($child_term2 -> parent == $child_term->term_taxonomy_id){
								?> 
								<div>
									<a class="cat_link cat_grand_child" href=' <?php echo $child_link ?>'> <?php echo $child_term2->name  ?> </a>
								</div>
								<?php

							}
						}
					}
				} ?>
			</div>
			<?php
		}
	}
	?>
			<div class="slider_class" id="slider_class">
				<div class="slideshow-container">

					<div class="mySlides fade">
						<a href="<?php echo get_category_link('128'); ?>">
							<img src="<?php echo $image_path ?>slider0.jpg" style="width:100%">
						</a>
						
					</div>

					<div class="mySlides fade">
						<a href="<?php echo get_category_link('31'); ?>">
							<img src="<?php echo $image_path ?>slider2.jpg" style="width:100%">
						</a>
					</div>

					<div class="mySlides fade">
						<a href="<?php echo get_category_link('239'); ?>">
							<img src="<?php echo $image_path ?>slider3.jpg" style="width:100%">
						</a>
					</div>

					<div class="mySlides fade">
						<a href="<?php echo get_category_link('137'); ?>">
							<img src="<?php echo $image_path ?>slider4.jpg" style="width:100%">
						</a>
					</div>

					<div class="mySlides fade">
						<a href="<?php echo get_category_link('34'); ?>">
							<img src="<?php echo $image_path ?>slider5.jpg" style="width:100%">
						</a>
					</div>

					<div class="mySlides fade">
						<a href="<?php echo get_category_link('161'); ?>">
							<img src="<?php echo $image_path ?>slider6.jpg" style="width:100%">
						</a>
					</div>

					<div class="mySlides fade">
						<a href="<?php echo get_category_link('121'); ?>">
							<img src="<?php echo $image_path ?>slider9.jpg" style="width:100%">
						</a>
					</div>

					<div class="mySlides fade">
						<a href="<?php echo get_permalink( get_page_by_path( 'mlp-free-shipping' ) ); ?>">
							<img src="<?php echo $image_path ?>slider8.gif" style="width:100%">
						</a>
					</div>

					<a class="prev" onclick="plusSlides(-1)"></a>
					<a class="next" onclick="plusSlides(1)"></a>

				</div>
				<br>

				<div class="dot_container">
					<span class="dot" onclick="currentSlide(1)"></span>
					<span class="dot" onclick="currentSlide(2)"></span>
					<span class="dot" onclick="currentSlide(3)"></span>
					<span class="dot" onclick="currentSlide(4)"></span>
					<span class="dot" onclick="currentSlide(5)"></span>
					<span class="dot" onclick="currentSlide(6)"></span>
					<span class="dot" onclick="currentSlide(7)"></span>
					<span class="dot" onclick="currentSlide(8)"></span>
				</div>
			</div>
	</div>
	<div class="item3">
		<a href="<?php echo get_permalink( get_page_by_path( 'flash-sales' ) ); ?>"><img src= "<?php echo $image_path ?>FS-EN.gif" alt="ad1"></a>
	</div>
	<div class="item4">
		<a href="<?php echo get_permalink( get_page_by_path( 'free-shipping' ) ); ?>"><img src="<?php echo $image_path ?>free-shipping-EN.gif" alt="ad2"></a>
	</div>
</div>

<script>
	const adsTimer = 500;
	var item2timer = window.setTimeout(()=>{}, 0);
	var data_term = 0;
	function showitem2() {
		//window.clearTimeout(item2timer);
		for (let el of document.querySelectorAll('.sub_cat')) el.style.display = 'none';
		document.getElementById("slider_class").style.display = 'none';
		document.getElementById(data_term).style.display = 'block';
	}
	
	function hideitem2() {
		//window.clearTimeout(item2timer);
		for (let el of document.querySelectorAll('.sub_cat')) el.style.display = 'none';
		document.getElementById("slider_class").style.display = 'block';
	}

	let slideIndex = 0;
	var timeoutHandle = window.setTimeout(showSlides, 0);
	function currentSlide(k){
		slideIndex = k-1;
		window.clearTimeout(timeoutHandle);
		showSlides();
	}
	function showSlides() {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1}    
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
		//setTimeout(showSlides, 7000); // Change image every 2 seconds
		timeoutHandle = window.setTimeout(showSlides, 7000);
	}
</script>