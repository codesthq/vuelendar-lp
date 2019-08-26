<template>
  <main class="layout">
    <slot />
  </main>
</template>

<style lang="scss">
.layout {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
