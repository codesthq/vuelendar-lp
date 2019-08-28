<template>
  <section class="demo-section">
    <header class="demo-section__header">
      <h2 class="demo-section__title">
        <a class="demo-section__link" :href="'#' + slug" :id="slug">{{
          this.title
        }}</a>
      </h2>
    </header>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'VDemoSection',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    slug() {
      return this.title
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    },
  },
};
</script>

<style lang="scss" src="./v-demo-section.scss" />
