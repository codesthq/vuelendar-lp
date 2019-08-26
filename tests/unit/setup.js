import Vue from 'vue';
import router from '@router';
import * as vueTestUtils from '@vue/test-utils';

// Configure Vue
Vue.config.productionTip = false;

// Configure Vue
Vue.extend(router);

// Mock window properties not handled by jsdom
Object.defineProperty(window, 'localStorage', {
  value: (function() {
    let store = {};
    return {
      getItem: function(key) {
        return store[key] || null;
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      },
    };
  })(),
});

// Global helpers
// https://vue-test-utils.vuejs.org/api/#mount
global.mount = vueTestUtils.mount;

// https://vue-test-utils.vuejs.org/api/#shallowmount
global.shallowMount = vueTestUtils.shallowMount;
