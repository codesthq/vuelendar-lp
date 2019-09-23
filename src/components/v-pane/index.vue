<template>
  <article class="pane">
    <header class="pane__header">
      <h2 class="pane__title">
        <slot name="title"></slot>
      </h2>
    </header>

    <div>
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VPane',
};
</script>

<style lang="scss" src="./v-pane.scss" />
