/**
 * PostCSS configuration
 * https://github.com/michael-ciniawsky/postcss-load-config
 *
 * Plugins:
 *
 * autoprefixer
 * https://github.com/postcss/autoprefixer
 * Parse CSS and add vendor prefixes to rules by Can I Use
 *
 * cssnano
 * https://github.com/ben-eb/cssnano
 *
 * stylelint
 * https://github.com/stylelint/stylelint
 *
 * postcss-preset-env
 * https://github.com/csstools/postcss-preset-env
 *
 * css-mqpacker
 * https://github.com/hail2u/node-css-mqpacker
 * Packs same CSS media query rules into one
 */

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    require('css-mqpacker'),
    require('postcss-preset-env'),
    require('stylelint'),
  ],
};
