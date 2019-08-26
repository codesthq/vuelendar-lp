import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';
import { setup } from 'axios-cache-adapter';
import axios from 'axios';

export default async function({
  hasCache = true,
  maxAge = 15 * 60 * 1000,
} = {}) {
  if (!hasCache) {
    return axios;
  }

  await localforage.defineDriver(memoryDriver);

  const driver = [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE,
    memoryDriver._driver,
  ];

  const store = localforage.createInstance({
    driver,
    name: 'cache-',
  });

  return setup({
    cache: { maxAge, store },
  });
}
