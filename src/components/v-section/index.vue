<template>
  <section class="section">
    <header class="section__header">
      <h3 class="section__title">
        <slot name="title"></slot>
      </h3>
    </header>

    <div class="section__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VSection',
};
</script>

<style lang="scss" src="./v-section.scss" />
