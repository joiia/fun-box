<?php
/**
 * Template Name: Landing
 *
 * This is the template that displays Landing page
 *
 * 
 */

?>

	<div id="primary" class="landing-page content-area">

		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>

			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->

	</div><!-- #primary -->


