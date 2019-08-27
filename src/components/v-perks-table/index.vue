<template>
  <div class="perks-table">
    <div class="perks-table__item" v-in-viewport.once>
      <div class="perks-table__icon">
        <VSvgIcon icon="puzzle" />
      </div>
      <div class="perks-table__caption">
        Easy to use
      </div>
    </div>
    <div class="perks-table__item" v-in-viewport.once>
      <div class="perks-table__icon">
        <VSvgIcon icon="scale" />
      </div>
      <div class="perks-table__caption">
        Extendable
      </div>
    </div>
    <div class="perks-table__item" v-in-viewport.once>
      <div class="perks-table__icon">
        <VSvgIcon icon="balance" />
      </div>
      <div class="perks-table__caption">
        Optimized
      </div>
    </div>
    <div class="perks-table__item" v-in-viewport.once>
      <div class="perks-table__icon">
        <VSvgIcon icon="tag" />
      </div>
      <div class="perks-table__caption perks-table__caption--mark">
        Totally free!
      </div>
    </div>
  </div>
</template>

<script>
import VSvgIcon from '@components/v-svg-icon';

export default {
  name: 'VPerksTable',
  components: {
    VSvgIcon,
  },
};
</script>

<style lang="scss" src="./v-perks-table.scss" />
