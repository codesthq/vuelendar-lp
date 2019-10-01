<template>
  <Layout>
    <div class="page-docs">
      <div class="page-docs__container">
        <div class="page-docs__side-nav">
          <VSideNav />
        </div>
        <div class="page-docs__content">
          <VContainer inner>
            <VDocsIntro />
            <VDocsInstallation />
            <VDocsCustomTypes />
            <VDocsDaySelector />
            <VDocsRangeSelector />
          </VContainer>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';
import VContainer from '@components/v-container';
import VSideNav from '@components/v-side-nav';
import VDocsIntro from '@components/v-docs-intro';
import VDocsInstallation from '@components/v-docs-installation';
import VDocsCustomTypes from '@components/v-docs-custom-types';
import VDocsDaySelector from '@components/v-docs-day-selector';
import VDocsRangeSelector from '@components/v-docs-range-selector';

export default {
  name: 'Docs',
  components: {
    Layout,
    VContainer,
    VSideNav,
    VDocsIntro,
    VDocsInstallation,
    VDocsCustomTypes,
    VDocsDaySelector,
    VDocsRangeSelector,
  },
  page: {
    title: 'Documentation',
    meta: [
      {
        name: 'description',
        content: 'Documentation of vuelendar',
      },
    ],
  },
};
</script>

<style lang="scss" src="./Docs.scss" />
