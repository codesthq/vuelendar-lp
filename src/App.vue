<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import '~nprogress/nprogress.css';
@import '~@design';

:root {
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  font-size: $font-mobile-base;
  background-color: $color-white;

  @include respond-to('small') {
    font-size: $font-desktop-base;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
}

.app {
  min-height: 100vh;
}
</style>
