<template>
  <Layout>
    <div>
      <h1>404 Page not found</h1>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/simple';

export default {
  name: 'About',
  components: {
    Layout,
  },
  page: {
    title: '404 - Page Not found',
    meta: [
      {
        name: 'description',
        content: 'Page not found',
      },
    ],
  },
};
</script>
