<template>
  <button class="button" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
};
</script>

<style lang="scss">
@import '~@design';

.button {
  padding: size(1) size(2);
  font-weight: 700;
  color: $color-white;
  cursor: pointer;
  background-color: $color-brand;
  border: 0;
  border-bottom: 2px solid $color-white;
  border-radius: size(2);
  box-shadow: 0 size(0.5) size(0.5) size(-0.5) rgba($color-black, 0.5);
  transition: box-shadow $time-short ease-in-out,
    background-color $time-short ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: darken($color-brand, 5%);
    box-shadow: 0 size(0.5) size(0.5) size(-0.5) rgba($color-black, 0.7);
  }
}
</style>
