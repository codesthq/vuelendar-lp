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
  background-color: $color-white;
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
