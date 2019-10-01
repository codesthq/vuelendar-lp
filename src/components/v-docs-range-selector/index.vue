<template>
  <VPane>
    <template v-slot:title>
      <a id="range-selector" href="#range-selector">Range selector</a>
    </template>
    <template v-slot:default>
      <VSection>
        <template v-slot:title>
          <a id="range-selector-usage" href="#range-selector-usage">
            Usage
          </a>
        </template>
        <template v-slot:default>
          <h4>Register component</h4>
          <highlight-code lang="javascript">
            <pre>
              import VRangeSelector from 'vuelendar/components/vl-range-selector';
              export default {
                components: {
                  VDaySelector
                },
                data () {
                  return { range: {} }
                }
              }
            </pre>
          </highlight-code>

          <h4>Use in template</h4>
          <highlight-code lang="vue">
            <pre>
              &lt;v-range-selector
                :start-date.sync=&quot;range.start&quot;
                :end-date.sync=&quot;range.end&quot;
              /&gt;
            </pre>
          </highlight-code>
        </template>
      </VSection>
      <VSection>
        <template v-slot:title>
          <a id="range-selector-props" href="#range-selector-props">
            Props
          </a>
        </template>
        <template v-slot:default>
          <h4>is-disabled</h4>
          In range selector date disabling is achieved by providing function to
          is disabled prop. Function should accept one string argument
          containing date to be tested in YYYY-MM-DD format.<br />
          YYYY-MM-DD format is has it's practical benefits since it since it can
          be easily compared.

          <highlight-code lang="vue">
            <pre>
              &lt;v-range-selector
                :start-date.sync=&quot;range.start&quot;
                :end-date.sync=&quot;range.end&quot;
                :is-disabled=&quot;date =&gt;date > '2020-01-01'&quot;
              /&gt;
            </pre>
          </highlight-code>
          In this example dates later than 1st of January 2020 will be disabled.
        </template>
      </VSection>
    </template>
  </VPane>
</template>

<script>
import VPane from '@components/v-pane';
import VSection from '@components/v-section';

export default {
  name: 'VDocsRangeSelector',
  components: {
    VPane,
    VSection,
  },
};
</script>

<style lang="scss" src="./v-docs-day-selector.scss" />
