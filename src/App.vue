<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<!-- The only place where we are defining global styles -->
<style lang="scss">
@import '~normalize.css/normalize.css';
@import '~nprogress/nprogress.css';

:root {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  background-color: #fefefe;
  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
}

.app {
  @import '~@design';

  min-height: 100vh;
}
</style>
