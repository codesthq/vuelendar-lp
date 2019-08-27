<template>
  <Layout>
    <div class="page-home">
      <VSectionIntro />
      <VSectionExample />
      <VPageSection :offset="1" :size="10">
        <h2>Usage</h2>
        <ol>
          <li>
            <h3>Install via NPM</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis
            </p>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </li>

          <li>
            <h3>Load in your JS code</h3>
            <p>
              Tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </li>

          <li>
            <h3>Extend as you wish</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis
            </p>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </li>
        </ol>
      </VPageSection>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';
import VPageSection from '@components/v-page-section';
import VSectionIntro from '@components/v-section-intro';
import VSectionExample from '@components/v-section-example';

export default {
  name: 'Home',
  components: {
    Layout,
    VPageSection,
    VSectionIntro,
    VSectionExample,
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
