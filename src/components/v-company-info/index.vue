<template>
  <div class="company-info">
    <VPane>
      <template v-slot:title>
        <a href="#about-codest">About Codest</a>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              accusantium accusantium accusantium accusantium alias culpa
              distinctio, eius ex facere fugit harum labore libero magni, modi
              odit perspiciatis porro sed ut velit voluptas, voluptatum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              deleniti dignissimos dolorum facere illo iste libero magni minima
              mollitia nostrum, pariatur praesentium quam quibusdam similique
              soluta tempora ullam voluptates!
            </p>
            <p>
              Check out out <a href="https://codesthq.com/">site</a> and
              <a href="https://codesthq.com/blog/">blog</a>.
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
