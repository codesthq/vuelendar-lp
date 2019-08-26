/*
  Dummy config only for IDE to register aliases
 */

const webpackAliases = require('./aliases.config').webpack;

module.exports = {
  resolve: {
    alias: webpackAliases,
  },
};
