<template>
  <VPane>
    <template v-slot:title>
      <a id="day-selector" href="#day-selector">Day selector</a>
    </template>
    <template v-slot:default>
      <VSection>
        <template v-slot:title>
          <a id="day-selector-usage" href="#day-selector-usage">Usage</a>
        </template>
        <template v-slot:default>
          <h4>Register component</h4>
          <highlight-code lang="javascript">
            <pre>
              import VDaySelector from 'vuelendar/components/vl-day-selector';
              export default {
                components: {
                  VDaySelector
                },
                data () {
                  return { date: null }
                }
              }
            </pre>
          </highlight-code>

          <h4>Use in template</h4>
          <highlight-code lang="vue">
            <pre>
              &lt;v-day-selector v-model="date" /&gt;
            </pre>
          </highlight-code>
        </template>
      </VSection>
      <VSection>
        <template v-slot:title>
          <a id="day-selector-props" href="#day-selector-props">
            Props
          </a>
        </template>
        <template v-slot:default>
          <h4>disabled-dates</h4>
          Vuelendar allows two ways for disabling dates.

          <h5>Using array</h5>

          Disable 21st April 2019 and 25th April 2019:
          <highlight-code lang="vue">
            <pre>
              &lt;v-day-selector v-model="date" disabled-dates="[
                '2019-04-21',
                '2019-04-25'
              ] /&gt;
            </pre>
          </highlight-code>

          <h5>Using object</h5>

          Disable all dates from 21st April 2019 and 25th April 2019:
          <highlight-code lang="vue">
            <pre>
              &lt;v-day-selector v-model="date" disabled-dates="{
                from: '2019-04-21',
                to: '2019-04-23',
              }" /&gt;
            </pre>
          </highlight-code>

          Specifying only 'from' attribute will disable all dates past that
          date. Disable all dates from 21st April 2019:
          <highlight-code lang="vue">
            <pre>
              &lt;v-day-selector v-model="date" disabled-dates="{
                from: '2019-04-21',
              }" /&gt;
            </pre>
          </highlight-code>

          Specifying only 'to' attribute will disable all dates before that
          date. Disable all dates before 21st April 2019
          <highlight-code lang="vue">
            <pre>
              &lt;v-day-selector v-model="date" disabled-dates="{
                to: '2019-04-21',
              }" /&gt;
            </pre>
          </highlight-code>
        </template>
      </VSection>
    </template>
  </VPane>
</template>

<script>
import VPane from '@components/v-pane';
import VSection from '@components/v-section';

export default {
  name: 'VDocsIntro',
  components: {
    VPane,
    VSection,
  },
};
</script>

<style lang="scss" src="./v-docs-day-selector.scss" />
