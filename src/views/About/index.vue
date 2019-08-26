<template>
  <Layout>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';

export default {
  name: 'About',
  components: {
    Layout,
  },
  page: {
    title: 'About',
    meta: [
      {
        name: 'description',
        content: 'Here is something about starter pack',
      },
    ],
  },
};
</script>
