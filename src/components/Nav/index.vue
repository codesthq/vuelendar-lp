<template>
  <nav class="nav">
    <Container>
      <ul class="nav__list">
        <li class="nav__item"
          ><router-link class="nav__link" to="/">Home</router-link></li
        >
        <li class="nav__item"
          ><router-link class="nav__link" to="/about">About</router-link></li
        >
      </ul>
    </Container>
  </nav>
</template>

<script>
import Container from '@components/Container';

export default {
  name: 'Nav',
  components: {
    Container,
  },
};
</script>

<style lang="scss">
@import '~@design';

.nav {
  padding-top: size(1);
  padding-bottom: size(1);
  background-color: $color-white;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);

  &__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: block;

    & + & {
      padding-left: size(2);
    }
  }

  &__link {
    position: relative;
    display: block;
    color: $color-brand;
    text-decoration: none;

    &:after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      content: '';
      background-color: $color-brand;
      transition: transform $time-short ease-in-out;
      transform: scale(0);
      transform-origin: left;
    }

    &:hover,
    &:focus,
    &:active {
      &:after {
        transform: scale(1);
      }
    }
  }
}
</style>
