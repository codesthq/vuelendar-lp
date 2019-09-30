<template>
  <div class="company-info">
    <VPane>
      <template v-slot:title>
        <a href="#about-codest">We are Codest!</a>
      </template>
      <template v-slot:default>
        <div class="company-info__container">
          <div class="company-info__brand">
            <img
              class="company-info__logo"
              :src="require('@assets/codest-logo-horizontal.png')"
              alt="Codest logo"
            />
          </div>
          <div class="company-info__content">
            <p>
              A software house specialized in building products from scratch.<br />
              We strive to turn ideas into software products.
            </p>
            <p>
              Our team consists of experienced developers and passionate product
              designers.<br />
              We have strong skills in Ruby, Rails, JavaScript, React, Vue.js,
              React Native or AWS services.<br />
              Codest builds software (backend, frontend, design) for e-commerce,
              marketplace, adtech, fintech, proptech and SaaS industries.
            </p>
            <p>
              Do you have any questions? Do not hesitate. We will be more than
              happy to talk with you.<br />Write to us a
              <a href="https://codesthq.com/#contact">message</a> or check our
              <a href="https://codesthq.com/">website</a>.
            </p>
          </div>
        </div>
      </template>
    </VPane>
  </div>
</template>

<script>
import VPane from '@components/v-pane';
export default {
  name: 'VCompanyInfo',
  components: {
    VPane,
  },
};
</script>

<style lang="scss" src="./v-company-info.scss" />
