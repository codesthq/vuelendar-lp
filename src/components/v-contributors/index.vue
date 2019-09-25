<template>
  <VPane>
    <template v-slot:title>
      <a href="#contributors">Contributors</a>
    </template>
    <template v-slot:default>
      <div v-if="isLoaded" class="contributors">
        <ul class="contributors__list">
          <li
            class="contributors__item"
            v-for="contributor in contributors"
            :key="contributor.id"
          >
            <VContributor
              :name="contributor.login"
              :url="contributor.html_url"
              :avatarUrl="contributor.avatar_url"
            />
          </li>
        </ul>
      </div>
      <div v-else> Loading... </div>
    </template>
  </VPane>
</template>

<script>
import getContributorsFactory from '@utils/getContributors';
import httpClientFactory from '@utils/httpClientFactory';

import VPane from '@components/v-pane';
import VContributor from '@components/v-contributor';
export default {
  name: 'VContributors',
  components: {
    VPane,
    VContributor,
  },
  data() {
    return {
      isLoaded: false,
      contributors: [],
    };
  },
  async created() {
    const httpClient = await httpClientFactory({
      hasCache: true,
      maxAge: 86400000, // One day
    });
    const getContributors = getContributorsFactory(httpClient);
    this.contributors = await getContributors('codesthq', 'vuelendar');
    this.isLoaded = true;
  },
};
</script>

<style lang="scss" src="./v-contributors.scss" />
