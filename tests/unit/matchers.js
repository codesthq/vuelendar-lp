// See these docs for details on Jest's matcher utils:
// https://facebook.github.io/jest/docs/en/expect.html#thisutils

const _ = require('lodash');
const customMatchers = {};

/**
 * Response of matcher
 * @typedef {Object} matcherResponse
 * @property {boolean} pass - Did match passed
 * @property {function():string} message - Message function from matcher
 */

/**
 * Create matcher response
 *
 * @param {boolean} didPass
 * @param {string} message
 * @returns {matcherResponse}
 */
function matcherResponseFactory(didPass, message) {
  return {
    pass: didPass,
    message: () => message,
  };
}

/**
 * Check if given object is a component
 * @param {*} options
 * @returns {matcherResponse}
 */
customMatchers.toBeComponent = function(options) {
  const successMessage = `expected ${this.utils.printReceived(
    options
  )} not to be a Vue component`;
  const errorMessage = `expected ${this.utils.printReceived(
    options
  )} to be a valid Vue component, exported from a .vue file`;
  const isAComponent =
    _.isPlainObject(options) && typeof options.render === 'function';

  return isAComponent
    ? matcherResponseFactory(true, successMessage)
    : matcherResponseFactory(false, errorMessage);
};

/**
 * Check if given object is a view
 * @param {?*} options
 * @returns {?matcherResponse}
 */
customMatchers.toBeViewComponent = function(options, mockInstance) {
  const successMessage = `expected ${this.utils.printReceived(
    options
  )} not to register a local Layout component nor define a page title and meta description`;
  const errorMessage = `expected ${this.utils.printReceived(
    options
  )} to register a local Layout component and define a page title and meta description`;
  const usesLayout = options.components && options.components.Layout;
  const pageObject =
    typeof options.page === 'function'
      ? options.page.apply(mockInstance || {})
      : options.page;

  const definesTitle = Object.prototype.hasOwnProperty.call(
    pageObject,
    'title'
  );
  const definesDescription =
    pageObject.meta &&
    pageObject.meta.some(
      (metaProperty) =>
        metaProperty.name === 'description' &&
        Object.prototype.hasOwnProperty.call(metaProperty, 'content')
    );

  return usesLayout && definesTitle && definesDescription
    ? matcherResponseFactory(true, successMessage)
    : matcherResponseFactory(false, errorMessage);
};

/**
 * Check if given object is a Vuex Module
 * @param {*} options
 * @returns {matcherResponse}
 */
customMatchers.toBeVuexModule = function(options) {
  const successMessage = `expected ${this.utils.printReceived(
    options
  )} not to be a Vuex module`;
  const failMessage = `expected ${this.utils.printReceived(
    options
  )} to be a valid Vuex module, include state, getters, mutations, and actions`;
  const isAVuexModule =
    _.isPlainObject(options) &&
    _.isPlainObject(options.state) &&
    _.isPlainObject(options.getters) &&
    _.isPlainObject(options.mutations) &&
    _.isPlainObject(options.actions);

  return isAVuexModule
    ? matcherResponseFactory(true, successMessage)
    : matcherResponseFactory(false, failMessage);
};

// https://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers
global.expect.extend(customMatchers);
