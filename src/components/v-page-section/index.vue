<template>
  <div class="page-section">
    <VContainer>
      <div class="page-section__inner" :class="computedInnerClass">
        <slot />
      </div>
    </VContainer>
  </div>
</template>

<script>
import VContainer from '@components/v-container';

export default {
  name: 'VPageSection',
  props: {
    size: {
      type: Object,
      default: () => {},
    },
    offset: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    VContainer,
  },
  computed: {
    sizeClasses() {
      const classBase = 'page-section__inner--size-';
      if (this.size) {
        const breakpoints = Object.keys(this.size);
        return breakpoints.map((b) => classBase + b + '-' + this.size[b]);
      }

      return [];
    },
    offsetClasses() {
      const classBase = 'page-section__inner--offset-';
      if (this.offset) {
        const breakpoints = Object.keys(this.offset);
        return breakpoints.map((b) => classBase + b + '-' + this.offset[b]);
      }

      return [];
    },
    computedInnerClass() {
      const sizeClass = this.sizeClasses.join(' ');
      const offsetClass = this.offsetClasses.join(' ');

      return sizeClass + ' ' + offsetClass;
    },
  },
};
</script>

<style lang="scss" src="./v-page-section.scss" />
