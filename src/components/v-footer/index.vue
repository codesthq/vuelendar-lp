<template>
  <footer class="footer">
    <div class="footer__brand">
      <a href="https://codesthq.com/" class="footer__logo" aria-label="Codest">
        <VSvgIcon icon="codest-logo" aria-hidden="true" />
      </a>
    </div>
    <div class="footer__copy">
      Copyright &copy; 2019 by Codest. All rights reserved.
    </div>
  </footer>
</template>

<script>
import VSvgIcon from '@components/v-svg-icon';
export default {
  name: 'VFooter',
  components: {
    VSvgIcon,
  },
};
</script>

<style lang="scss" src="./v-footer.scss" />
