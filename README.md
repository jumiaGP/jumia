# jumia
# website : http://www.jumia.lovestoblog.com .
# Presentation :https://docs.google.com/presentation/d/1ydPFCGo4iJ-5DjA8tE_-m533j6ON_W2a/edit?usp=sharing&ouid=113487892293976536907&rtpof=true&sd=true .
# Documentation:https://drive.google.com/file/d/1yGOf_71IMaaaJPdhq-6Dj9C3DvkpdKO2/view?usp=sharing .
# seo :https://docs.google.com/spreadsheets/d/1nFAosPxyOQ9DfqBl1wZ0yQnooC4um_I1/edit?usp=sharing&ouid=113487892293976536907&rtpof=true&sd=true .
# demo1 :https://docs.google.com/spreadsheets/d/1nFAosPxyOQ9DfqBl1wZ0yQnooC4um_I1/edit?usp=sharing&ouid=113487892293976536907&rtpof=true&sd=true .
# demo2 :https://drive.google.com/file/d/1j9vnRHfKj3dxXMYQZFBoCZpXwfxdbysg/view?usp=sharing .
# demo as vendor:https://drive.google.com/file/d/1y4eR7AKMIPrCUrtEIyOXG8qY6EtaataS/view?usp=sharing .
# demo footer page:https://drive.google.com/file/d/1QNMDppVbQhEJM4VSqoStEgh-IFMhI7Pc/view?usp=sharing .
Hi. I'm a starter theme called jaxon,if you like. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

A modern workflow with a pre-made command-line interface to turn your project into a more pleasant experience.
A just right amount of lean, well-commented, modern, HTML5 templates.
A custom header implementation in inc/custom-header.php. Just add the code snippet found in the comments of inc/custom-header.php to your header.php template.
Custom template tags in inc/template-tags.php that keep your templates clean and neat and prevent code duplication.
Some small tweaks in inc/template-functions.php that can improve your theming experience.
A script at js/navigation.js that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in functions.php.
2 sample layouts in sass/layouts/ made using CSS Grid for a sidebar on either side of your content. Just uncomment the layout of your choice in sass/style.scss. Note: .no-sidebar styles are automatically loaded.
Smartly organized starter CSS in style.css that will help you to quickly get your design off the ground.
Full support for WooCommerce plugin integration with hooks in inc/woocommerce.php, styling override woocommerce.css with product gallery features (zoom, swipe, lightbox) enabled.
Licensed under GPLv2 or later. :) Use it to make something cool.
Installation
Requirements
jaxon requires the following dependencies:

Node.js
Composer
Quick Start
Clone or download this repository, change its name to something else (like, say, megatherium-is-awesome), and then you'll need to do a six-step find and replace on the name in all the templates.

Search for 'jaxon' (inside single quotations) to capture the text domain and replace with: 'megatherium-is-awesome'.
Search for jaxon to capture all the functions names and replace with: megatherium_is_awesome_.
Search for Text Domain: jaxon in style.css and replace with: Text Domain: megatherium-is-awesome.
Search for  jaxon (with a space before it) to capture DocBlocks and replace with:  Megatherium_is_Awesome.
Search for jaxon- to capture prefixed handles and replace with: megatherium-is-awesome-.
Search for jaxon (in uppercase) to capture constants and replace with: MEGATHERIUM_IS_AWESOME_.
Then, update the stylesheet header in style.css, the links in footer.php with your own information and rename jaxon.pot from languages folder to use the theme's slug. Next, update or delete this readme.

Setup
To start using all the tools that come with _s you need to install the necessary Node.js and Composer dependencies :

$ composer install
$ npm install
Available CLI commands
jaxon comes packed with CLI commands tailored for WordPress theme development :

composer lint:wpcs : checks all PHP files against PHP Coding Standards.
composer lint:php : checks all PHP files for syntax errors.
composer make-pot : generates a .pot file in the languages/ directory.
npm run compile:css : compiles SASS files to css.
npm run compile:rtl : generates an RTL stylesheet.
npm run watch : watches all SASS files and recompiles them to css when they change.
npm run lint:scss : checks all SASS files against CSS Coding Standards.
npm run lint:js : checks all JavaScript files against JavaScript Coding Standards.
npm run bundle : generates a .zip archive for distribution, excluding development and system files.
Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
