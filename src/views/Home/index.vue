<template>
  <Layout>
    <VSectionIntro />
    <VSectionExample />
    <VSectionUsage />
  </Layout>
</template>

<script>
import Layout from '@layouts/main';
import VSectionIntro from '@components/v-section-intro';
import VSectionExample from '@components/v-section-example';
import VSectionUsage from '@components/v-section-usage';

export default {
  name: 'Home',
  components: {
    Layout,
    VSectionIntro,
    VSectionExample,
    VSectionUsage,
  },
  page: {
    title: 'Vuelendar - Home',
    meta: [
      {
        name: 'description',
        content: 'Vuelendar - Simple and clean calendar written in Vue.js.',
      },
    ],
  },
};
</script>

<style lang="scss" src="./home.scss" />
