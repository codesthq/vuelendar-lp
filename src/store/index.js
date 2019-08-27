import Vue from 'vue';
import Vuex from 'vuex';

import inViewportDirective from 'vue-in-viewport-directive';
Vue.directive('in-viewport', inViewportDirective);

import modulesFactory from './modules';

Vue.use(Vuex);

export default function({ httpClientWithCache, httpClientWithoutCache }) {
  const modules = modulesFactory({
    httpClientWithCache,
    httpClientWithoutCache,
  });

  const strict = process.env.NODE_ENV !== 'production';

  return new Vuex.Store({
    modules,
    strict,
  });
}
