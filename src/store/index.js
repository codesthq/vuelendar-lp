import Vue from 'vue';
import Vuex from 'vuex';

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
