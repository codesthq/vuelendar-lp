/**
 *
 * @param httpClient
 * @returns {function(string, string): Array}
 */
export default function(httpClient) {
  return async function(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
    try {
      const response = await httpClient.get(url);

      if (response.statusText === 'OK') {
        return response.data.slice(0, 20);
      }

      return [];
    } catch (e) {
      throw new Error(e);
    }
  };
}
