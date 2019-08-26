<template>
  <div v-html="content"></div>
</template>

<script>
export default {
  name: 'VSvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      content: null,
    };
  },
  async mounted() {
    // For some reason JEST don't like @assets alias with !!raw-loader! plugin...
    // Maybe move raw loader as default plugin for svg?
    const iconObject = await import(
      '!!raw-loader!./../../assets/icons/' + this.icon + '.svg'
    );
    this.content = iconObject.default;
  },
};
</script>
