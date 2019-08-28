<template>
  <VContainer>
    <div class="navigation">
      <div class="navigation__brand">
        <router-link
          class="navigation__link navigation__link--blank"
          :to="{ name: 'home' }"
        >
          <img
            :src="require('@assets/Vuelendar-logo.png')"
            alt=""
            class="navigation__logo"
          />
        </router-link>
      </div>
      <div class="navigation__desktop">
        <VInlineNavlist />
      </div>
      <div class="navigation__mobile">
        <VBurgerButton @click="toggleSidebar" />
        <VSidebarNavlist :opened="sidebarOpened" @closeClick="toggleSidebar" />
      </div>
    </div>
  </VContainer>
</template>

<script>
import VContainer from '@components/v-container';
import VInlineNavlist from '@components/v-inline-navlist';
import VSidebarNavlist from '@components/v-sidebar-navlist';
import VBurgerButton from '@components/v-burger-button';

export default {
  name: 'VNavigation',
  data() {
    return {
      sidebarOpened: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpened = !this.sidebarOpened;
    },
  },
  components: {
    VContainer,
    VInlineNavlist,
    VSidebarNavlist,
    VBurgerButton,
  },
};
</script>

<style lang="scss" src="./v-navigation.scss" />
