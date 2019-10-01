<template>
  <VPane>
    <template v-slot:title>
      <a id="installation" href="#installation">Installation</a>
    </template>
    <template v-slot:default>
      <p>
        Install package
      </p>
      <highlight-code lang="bash">
        npm install vuelendar@1.0.0
      </highlight-code>
      <p>
        Include calendar styles
      </p>
      <highlight-code lang="vue">
        <pre>
          &lt;style src="vuelendar/scss/vuelendar.scss" lang="scss"&gt;&lt;/style&gt;
        </pre>
      </highlight-code>
      <p>
        or in your SCSS
      </p>
      <highlight-code lang="scss">
        <pre>
          @import '~vuelendar/scss/vuelendar.scss';
        </pre>
      </highlight-code>
    </template>
  </VPane>
</template>

<script>
import VPane from '@components/v-pane';

export default {
  name: 'VDocsInstallation',
  components: {
    VPane,
  },
};
</script>

<style lang="scss" src="./v-docs-installation.scss" />
