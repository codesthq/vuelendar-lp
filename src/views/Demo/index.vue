<template>
  <Layout>
    <div class="page-demo">
      <VContainer>
        <VDemoSection title="Single date">
          <iframe
            src="https://codesandbox.io/embed/vue-template-e482d?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
            title="Vue Template"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style="width:100%; height:500px; overflow:hidden; border:0; border-radius: 4px;"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </VDemoSection>

        <VDemoSection title="Range">
          <iframe
            src="https://codesandbox.io/embed/vue-template-fh1cy?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
            title="Vue Template"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style="width:100%; height:500px; overflow:hidden; border:0; border-radius: 4px;"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </VDemoSection>

        <VDemoSection title="Disable dates">
          <iframe
            src="https://codesandbox.io/embed/vue-template-ktehm?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
            title="Vue Template"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style="width:100%; height:500px; overflow:hidden; border:0; border-radius: 4px;"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </VDemoSection>

        <VDemoSection title="Disable from">
          <iframe
            src="https://codesandbox.io/embed/vue-template-ls7ho?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
            title="Vue Template"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style="width:100%; height:500px; overflow:hidden; border:0; border-radius: 4px;"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </VDemoSection>

        <VDemoSection title="Disable to">
          <iframe
            src="https://codesandbox.io/embed/vue-template-fpvo5?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
            title="Vue Template"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style="width:100%; height:500px; overflow:hidden; border:0; border-radius: 4px;"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </VDemoSection>
      </VContainer>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';
import VContainer from '@components/v-container';
import VDemoSection from '@components/v-demo-section';

export default {
  name: 'About',
  components: {
    Layout,
    VContainer,
    VDemoSection,
  },
  page: {
    title: 'Vuelendar - Demo',
    meta: [
      {
        name: 'description',
        content: 'Vuelendar - Simple and clean calendar written in Vue.js.',
      },
    ],
  },
};
</script>

<style lang="scss" src="./demo.scss" />
