<template>
  <div class="main">
    <header class="main__header">
      <VNavigation />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
import VNavigation from '@components/v-navigation';

export default {
  name: 'Main',
  components: {
    VNavigation,
  },
};
</script>

<style lang="scss" src="./main.scss" />
