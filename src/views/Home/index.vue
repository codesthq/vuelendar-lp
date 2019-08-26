<template>
  <Layout>
    <div class="home">
      <Container>
        <h1>Temp</h1>
      </Container>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';
import Container from '@components/Container';

export default {
  name: 'Home',
  components: {
    Layout,
    Container,
  },
  page: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'Home page of a starter pack',
      },
    ],
  },
};
</script>
