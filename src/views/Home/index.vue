<template>
  <Layout>
    <div>
      <h1>Temp</h1>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';

export default {
  name: 'Home',
  components: {
    Layout,
  },
  page: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'Vuelendar - Vue.js calendar component',
      },
    ],
  },
};
</script>
