<template>
  <div class="container" :class="{ 'container--inner': inner }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VContainer',
  props: {
    inner: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" src="./v-container.scss" />
