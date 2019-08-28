<template>
  <button class="burger-button" aria-label="Toggle menu" v-on="$listeners">
    <span class="burger-button__segment"></span>
    <span class="burger-button__segment"></span>
    <span class="burger-button__segment"></span>
  </button>
</template>

<script>
export default {
  name: 'VBurgerButton',
};
</script>

<style lang="scss" src="./v-burger-button.scss" />
