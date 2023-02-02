<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'epiz_33430412_w391' );

/** Database username */
define( 'DB_USER', '33430412_1' );

/** Database password */
define( 'DB_PASSWORD', 'l]W@05p5Sr' );

/** Database hostname */
define( 'DB_HOST', 'sql106.byetcluster.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ii2opat79osjlmbbuecojsozorbumkhq4chrmn6y03b2awo7ssr0smvp3tkk18v2' );
define( 'SECURE_AUTH_KEY',  'mn2dhqpoljkumwzd6x6dh7k9v06f4ywrsyrbtzkwdmuurfem7y7qem9qizaicbqm' );
define( 'LOGGED_IN_KEY',    'liuxuwv2pprjhy3iutr79qmmeordkou2fbb6jgdlmmlbxmcywf2dipqlaii4sgma' );
define( 'NONCE_KEY',        'ic6btaryanjbtzgnbu4rabp3rflkvra2uak1tudpm61johpracpqmvhkktqsmqbr' );
define( 'AUTH_SALT',        'afizhca5698onliuoew9faeq6nbsmcnesew8bds4q9rvva8xatdlzwd2eyhhdfbi' );
define( 'SECURE_AUTH_SALT', 'detph4qeu6rx4bxtuazjbc9txkfpfqxq9zbmyrnxt1wdjndiq2x1ltk4kumowwot' );
define( 'LOGGED_IN_SALT',   'dgd4zoybnt4c6vbazfzgkro4ycmf5hzwezg8mmfgzfnmdxoiddlttr9mntvvjr2w' );
define( 'NONCE_SALT',       'uojhoiwlpmifzoftwqooei5pb9f5g2zrbwno66feixprmoyxiy08th057ypurw5k' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wphw_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
