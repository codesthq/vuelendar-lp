<template>
  <nav class="sidebar-navlist" :class="{ 'sidebar-navlist--opened': opened }">
    <div class="sidebar-navlist__header">
      <h2 class="sidebar-navlist__title">Vuelendar</h2>
      <button
        class="sidebar-navlist__close"
        aria-label="close"
        @click="closeClick"
      ></button>
    </div>
    <ul class="sidebar-navlist__list">
      <li class="sidebar-navlist__item">
        <router-link
          class="sidebar-navlist__link"
          :to="{ name: 'home' }"
          exaxct
        >
          Home
        </router-link>
      </li>
      <li class="sidebar-navlist__item">
        <router-link class="sidebar-navlist__link" :to="{ name: 'demo' }">
          Demo
        </router-link>
      </li>
      <li class="sidebar-navlist__item">
        <router-link class="sidebar-navlist__link" :to="{ name: 'docs' }">
          Docs
        </router-link>
      </li>
      <li class="sidebar-navlist__item">
        <router-link class="sidebar-navlist__link" :to="{ name: 'team' }">
          Team
        </router-link>
      </li>
      <li class="sidebar-navlist__item">
        <a
          class="sidebar-navlist__link sidebar-navlist__link--icon"
          href="https://github.com/codesthq/vuelendar"
        >
          Github
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'VSidebarNavlist',
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeClick() {
      this.$emit('closeClick');
    },
    bodyClick(event) {
      if (this.opened) {
        const isSidebar = event.target.closest('.sidebar-navlist');
        if (!isSidebar) {
          event.stopPropagation();
          this.$emit('closeClick');
        }
      }
    },
  },
  mounted() {
    document.body.addEventListener('click', this.bodyClick, true);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.bodyClick, true);
  },
};
</script>

<style lang="scss" src="./v-sidebar-navlist.scss" />
