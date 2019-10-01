<template>
  <VPane>
    <template v-slot:title>
      <a id="introduction" href="#introduction">Introduction</a>
    </template>

    <template v-slot:default>
      <p>
        Simple and clean calendar written in Vue.js.
      </p>

      <VSection>
        <template v-slot:title>
          <a id="introduction-features" href="#introduction-features">
            Features
          </a>
        </template>
        <template v-slot:default>
          <p>
            Select single date
          </p>

          <p>
            Select range of dates
          </p>
        </template>
      </VSection>

      <VSection>
        <template v-slot:title>
          <a id="introduction-requirements" href="#introduction-requirements"
            >Requirements</a
          >
        </template>
        <template v-slot:default>
          <ul>
            <li>
              Vue.js
            </li>
          </ul>
        </template>
      </VSection>

      <VSection>
        <template v-slot:title>
          <a id="introduction-demo" href="#introduction-demo">Demo</a>
        </template>
        <template v-slot:default>
          <p>
            <router-link :to="{ name: 'demo' }">Go to demo page </router-link>
            .
          </p>
        </template>
      </VSection>
    </template>
  </VPane>
</template>

<script>
import VPane from '@components/v-pane';
import VSection from '@components/v-section';

export default {
  name: 'VDocsIntro',
  components: {
    VPane,
    VSection,
  },
};
</script>

<style lang="scss" src="./v-docs-intro.scss" />
