<template>
  <a class="contributor" :href="url">
    <div class="contributor__header">
      <img
        class="contributor__avatar"
        :src="avatarUrl"
        :alt="`${name} avatar`"
      />
    </div>
    <div class="contributor__content">
      <div class="contributor__name">{{ name }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'VContributor',
  props: {
    url: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./v-contributor.scss" />
