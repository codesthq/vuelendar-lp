<template>
  <Layout>
    <div class="page-home">
      <VSectionIntro />
      <VPageSection :offset="2" :size="8" color="brand">
        <h2>
          Selecting a date was never easier
        </h2>
        <p>
          Vuelendar is fully-interactive and allows you to manage events freely.
          You can specify various series of selections and style them with SCSS
          easily.
        </p>

        <div>
          <button>
            See examples
          </button>
        </div>
      </VPageSection>
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

export default {
  name: 'Home',
  components: {
    Layout,
    VPageSection,
    VSectionIntro,
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
