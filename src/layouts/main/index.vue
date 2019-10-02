<template>
  <div class="main">
    <header class="main__header">
      <VNavigation />
    </header>
    <main>
      <slot />
    </main>
    <VFooter />
  </div>
</template>
<script>
import VNavigation from '@components/v-navigation';
import VFooter from '@components/v-footer';

export default {
  name: 'Main',
  components: {
    VNavigation,
    VFooter,
  },
};
</script>

<style lang="scss" src="./main.scss" />
