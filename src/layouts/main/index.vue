<template>
  <div class="main">
    <header class="main__header">
      <Nav />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
import Nav from '@components/Nav';

export default {
  name: 'Main',
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
@import '~@design';

.main {
  &__header {
    margin-bottom: size(2);
  }
}
</style>
