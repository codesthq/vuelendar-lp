<template>
  <nav class="side-nav">
    <ol class="side-nav__list">
      <li class="side-nav__list-item">
        <a class="side-nav__link" href="#introduction">Introduction</a>
        <ol class="side-nav__list side-nav__list--inner">
          <li class="side-nav__list-item">
            <a class="side-nav__link" href="#introduction-features">Features</a>
          </li>
          <li class="side-nav__list-item">
            <a class="side-nav__link" href="#introduction-requirements">
              Requirements
            </a>
          </li>
          <li class="side-nav__list-item">
            <a class="side-nav__link" href="#introduction-demo">Demo</a>
          </li>
        </ol>
      </li>
      <li class="side-nav__list-item">
        <a class="side-nav__link" href="#installation">Installation</a>
      </li>
      <li class="side-nav__list-item">
        <a class="side-nav__link" href="#day-selector">Day selector</a>
        <ol class="side-nav__list side-nav__list--inner">
          <li class="side-nav__list-item">
            <a class="side-nav__link" href="#day-selector-usage">Usage</a>
          </li>
          <li class="side-nav__list-item">
            <a class="side-nav__link" href="#day-selector-props">Props</a>
          </li>
        </ol>
      </li>
      <li class="side-nav__list-item">
        <a class="side-nav__link" href="#range-selector">Range selector</a>
        <ol class="side-nav__list side-nav__list--inner">
          <li class="side-nav__list-item">
            <a class="side-nav__link" href="#range-selector-usage">Usage</a>
          </li>
          <li class="side-nav__list-item">
            <a class="side-nav__link" href="#range-selector-props">Props</a>
          </li>
        </ol>
      </li>
    </ol>
  </nav>
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

<style lang="scss" src="./v-side-nav.scss" />
