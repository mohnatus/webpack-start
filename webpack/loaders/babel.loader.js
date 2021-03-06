/**
 * babel-loader
 * https://webpack.js.org/loaders/babel-loader/
 *
 * Allows transpiling JavaScript files
 *
 * Options:
 * https://babeljs.io/docs/en/options
 */

module.exports = (options = {}) => {
  return {
    loader: 'babel-loader',
    options
  };
};
