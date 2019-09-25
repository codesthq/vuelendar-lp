<template>
  <Layout>
    <div class="page-team">
      <VContainer>
        <VCompanyInfo />
        <VContributors />
      </VContainer>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';
import VContainer from '@components/v-container';
import VCompanyInfo from '@components/v-company-info';
import VContributors from '@components/v-contributors';

export default {
  name: 'Docs',
  components: {
    Layout,
    VContainer,
    VCompanyInfo,
    VContributors,
  },
  page: {
    title: 'Team',
    meta: [
      {
        name: 'description',
        content: 'About Vuelendar creators',
      },
    ],
  },
};
</script>

<style lang="scss" src="./Team.scss" />
