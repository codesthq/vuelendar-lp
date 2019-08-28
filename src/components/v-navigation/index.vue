<template>
  <VContainer>
    <div class="navigation">
      <div>
        <router-link class="navigation__link navigation__link--blank" to="/">
          <img :src="require('@assets/Vuelendar-logo.png')" alt="" />
        </router-link>
      </div>
      <div class="navigation__desktop">
        <VInlineNavlist />
      </div>
      <div class="navigation__mobile">
        <button
          @click="toggleSidebar"
          class="navigation__toggle"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <VSidebarNavlist :opened="sidebarOpened" @closeClick="toggleSidebar" />
      </div>
    </div>
  </VContainer>
</template>

<script>
import VContainer from '@components/v-container';
import VInlineNavlist from '@components/v-inline-navlist';
import VSidebarNavlist from '@components/v-sidebar-navlist';

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
  },
};
</script>

<style lang="scss" src="./v-navigation.scss" />
