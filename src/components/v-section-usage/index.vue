<template>
  <VPageSection
    :offset="{ medium: 1 }"
    :size="{ medium: 10 }"
    class="section-usage"
  >
    <h2 class="section-usage__title">Usage</h2>
    <VStepsList />
  </VPageSection>
</template>

<script>
import VPageSection from '@components/v-page-section';
import VStepsList from '@components/v-steps-list';

export default {
  name: 'VSectionUsage',
  components: {
    VPageSection,
    VStepsList,
  },
};
</script>

<style lang="scss" src="./v-section-usage.scss" />
