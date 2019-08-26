import httpClientFactory from '.';

describe('@utils/httpClientFactory', () => {
  it('create not cached instance', async () => {
    const httpClient = await httpClientFactory({
      hasCache: false,
    });

    expect(httpClient).not.toHaveProperty('cache');
  });

  it('create cached instance', async () => {
    const httpClient = await httpClientFactory({
      hasCache: true,
    });

    expect(httpClient).toHaveProperty('cache');
  });

  it('create cached instance by default', async () => {
    const httpClient = await httpClientFactory();

    expect(httpClient).toHaveProperty('cache');
  });
});
