<template>
  <nav class="inline-navlist">
    <ul class="inline-navlist__list">
      <li class="inline-navlist__item">
        <router-link class="inline-navlist__link" :to="{ name: 'home' }" exact>
          Home
        </router-link>
      </li>
      <li class="inline-navlist__item">
        <router-link class="inline-navlist__link" :to="{ name: 'demo' }">
          Demo
        </router-link>
      </li>
      <li class="inline-navlist__item">
        <router-link class="inline-navlist__link" :to="{ name: 'docs' }">
          Docs
        </router-link>
      </li>
      <li class="inline-navlist__item">
        <router-link class="inline-navlist__link" :to="{ name: 'team' }">
          Team
        </router-link>
      </li>
      <li class="inline-navlist__item">
        <a
          class="inline-navlist__link inline-navlist__link--icon"
          href="https://github.com/codesthq/vuelendar"
          aria-label="Github"
        >
          <VSvgIcon icon="github" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import VSvgIcon from '@components/v-svg-icon';

export default {
  name: 'VInlineNavlist',
  components: {
    VSvgIcon,
  },
};
</script>

<style lang="scss" src="./v-inline-navlist.scss" />
