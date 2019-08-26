import storeFactory from '.';
import Vuex from 'vuex';

describe('@store', () => {
  it('create vuex store', () => {
    const httpClientWithCacheMock = () => {};
    const httpClientWithoutCacheMock = () => {};

    const store = storeFactory({
      httpClientWithCache: httpClientWithCacheMock,
      httpClientWithoutCache: httpClientWithoutCacheMock,
    });

    expect(store).toBeInstanceOf(Vuex.Store);
  });
});
