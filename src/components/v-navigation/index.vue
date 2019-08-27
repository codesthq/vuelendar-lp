<template>
  <VContainer>
    <div class="navigation">
      <div>
        <router-link class="navigation__link navigation__link--blank" to="/">
          <img :src="require('@assets/Vuelendar-logo.png')" alt="" />
        </router-link>
      </div>
      <nav class="navigation__main">
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link class="navigation__link" to="/">
              Features
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" to="/">
              Demo
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" to="/">
              Docs
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" to="/">
              Team
            </router-link>
          </li>
          <li class="navigation__item">
            <a
              class="navigation__link navigation__link--icon"
              href="https://github.com/codesthq/vuelendar"
            >
              <VSvgIcon icon="github" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </VContainer>
</template>

<script>
import VContainer from '@components/v-container';
import VSvgIcon from '@components/v-svg-icon';

export default {
  name: 'VNavigation',
  components: {
    VContainer,
    VSvgIcon,
  },
};
</script>

<style lang="scss" src="./v-navigation.scss" />
