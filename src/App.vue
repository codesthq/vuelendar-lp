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
  scroll-behavior: smooth;

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

/* stylelint-disable */
#nprogress .bar {
  background-color: $color-green-500;
}

.app {
  min-height: 100vh;
}

pre {
  margin: 0;
}

a {
  color: $color-green-500;
}
</style>
