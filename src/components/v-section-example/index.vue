<template>
  <VPageSection
    :offset="{ medium: 2 }"
    :size="{ medium: 8 }"
    class="section-example"
  >
    <section>
      <header class="section-example__header">
        <h2 class="section-example__title">
          Selecting a date was never easier
        </h2>
      </header>
      <div class="section-example__content">
        <p>
          Vuelendar is fully-interactive and allows you to manage events freely.
          You can specify various series of selections and style them with SCSS
          easily.
        </p>
      </div>
      <div>
        <VButton type="invert" :to="{ name: 'docs' }"
          >See Documentation</VButton
        >
      </div>
    </section>
  </VPageSection>
</template>

<script>
import VPageSection from '@components/v-page-section';
import VButton from '@components/v-button';

export default {
  name: 'VSectionExample',
  components: {
    VButton,
    VPageSection,
  },
};
</script>

<style lang="scss" src="./v-section-example.scss" />
