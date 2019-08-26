<template>
  <div class="page-section" :class="computedRootClass">
    <VContainer>
      <div class="page-section__inner" :class="computedInnerClass">
        <slot />
      </div>
    </VContainer>
  </div>
</template>

<script>
import columnSizeValidator from '@utils/columnSizeValidator';

import VContainer from '@components/v-container';

export default {
  name: 'VPageSection',
  props: {
    size: {
      type: Number,
      default: 12,
      validator: columnSizeValidator,
    },
    offset: {
      type: Number,
      default: 0,
      validator: columnSizeValidator,
    },
    color: {
      type: String,
      default: null,
    },
  },
  components: {
    VContainer,
  },
  computed: {
    computedRootClass() {
      const classBase = 'page-section';
      return this.color ? classBase + '--color-' + this.color : '';
    },

    computedInnerClass() {
      const classBase = 'page-section__inner';
      const sizeClass = classBase + '--size-' + this.size;
      const offsetClass = classBase + '--offset-' + this.offset;

      return sizeClass + ' ' + offsetClass;
    },
  },
};
</script>

<style lang="scss" src="./v-page-section.scss" />
