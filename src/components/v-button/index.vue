<template>
  <router-link class="button" :class="computedClass" :to="this.to">
    <slot />
  </router-link>
</template>

<script>
const buttonStyles = ['regular', 'ghost', 'invert'];

export default {
  name: 'VButton',
  props: {
    to: {
      type: String,
    },
    type: {
      type: String,
      default: null,
      validator: (v) => buttonStyles.includes(v),
    },
  },
  computed: {
    computedClass() {
      const classBase = 'button';
      return this.type ? classBase + '--' + this.type : '';
    },
  },
};
</script>

<style lang="scss" src="./v-button.scss" />
