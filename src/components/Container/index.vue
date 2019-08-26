<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss">
@import '~@design';

.container {
  width: 100%;
  padding: size(1);

  @include respond-to('smaller') {
    width: $breakpoint-smaller;
    padding: 0 size(2);
    margin: 0 auto;
  }

  @include respond-to('medium') {
    width: $breakpoint-medium;
  }

  @include respond-to('large') {
    width: $breakpoint-large;
  }

  @include respond-to('x-large') {
    width: $breakpoint-x-large;
  }
}
</style>
