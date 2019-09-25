const webpackAliases = require('./aliases.config').webpack;
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuelendar-lp/' : '/',

  configureWebpack: {
    resolve: {
      alias: webpackAliases,
    },
    performance: {
      // Only enable performance hints for production builds,
      // outside of tests.
      hints:
        process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&
        'warning',
    },
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/demo', '/docs', '/team'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
