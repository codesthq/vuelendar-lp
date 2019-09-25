import Vue from 'vue';
import App from './App.vue';
import router from '@router';
import VueHighlightJS from 'vue-highlight.js';

import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

// Highlightjs config
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    bash,
    javascript,
    vue,
  },
});

// If running inside Cypress ensure tests fail when Vue emits an error.
if (process.env.VUE_APP_TEST === 'e2e') {
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException;
}

(async function() {
  const app = new Vue({
    router,
    render: (h) => h(App),
    mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
  }).$mount('#app');

  // If running e2e tests attach the app to the window for convenience
  if (process.env.VUE_APP_TEST === 'e2e') {
    window.__app__ = app;
  }
})();
