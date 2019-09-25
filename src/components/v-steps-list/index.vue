<template>
  <ol class="steps-list">
    <li class="steps-list__item" v-in-viewport.once>
      <h3 class="steps-list__item-title">Install via NPM</h3>
      <p class="steps-list__item-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis
      </p>
      <p class="steps-list__item-paragraph">
        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
        accumsan lacus vel facilisis.
      </p>
    </li>

    <li class="steps-list__item" v-in-viewport.once>
      <h3 class="steps-list__item-title">Load in your JS code</h3>
      <p class="steps-list__item-paragraph">
        Tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
    </li>

    <li class="steps-list__item" v-in-viewport.once>
      <h3 class="steps-list__item-title">Extend as you wish</h3>
      <p class="steps-list__item-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis
      </p>
      <p class="steps-list__item-paragraph">
        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
        accumsan lacus vel facilisis.
      </p>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'VStepsList',
};
</script>

<style lang="scss" src="./v-steps-list.scss" />
