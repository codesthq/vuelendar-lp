<template>
  <VPageSection
    :offset="{ medium: 1 }"
    :size="{ medium: 10 }"
    class="intro-wrapper"
  >
    <section class="section-intro">
      <div class="section-intro__header">
        <h1 class="section-intro__title">
          Simple. Fast. Reactive.
        </h1>
        <div class="section-intro__subtitle">
          Vue.js calendar component
        </div>
      </div>
      <ul class="section-intro__actions">
        <li class="section-intro__action">
          <VButton :to="{ name: 'demo' }">Live Demo</VButton>
        </li>
        <li class="section-intro__action">
          <a href="#section-usage" class="button button--ghost">
            Download
          </a>
        </li>
      </ul>

      <div class="section-intro__table">
        <VPerksTable />
      </div>
    </section>
  </VPageSection>
</template>

<script>
import VPageSection from '@components/v-page-section';
import VPerksTable from '@components/v-perks-table';
import VButton from '@components/v-button';

export default {
  name: 'VSectionIntro',
  components: {
    VPageSection,
    VPerksTable,
    VButton,
  },
};
</script>

<style lang="scss" src="./v-section-intro.scss" />
