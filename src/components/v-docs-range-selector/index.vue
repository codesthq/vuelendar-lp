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
                  VRangeSelector
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
          <VPropDefinition
            id="range-selector-prop-start-date"
            type="DateString"
          >
            <template v-slot:name>
              start-date
            </template>
            <template v-slot:default>
              Start of the selected range.
            </template>
          </VPropDefinition>
          <VPropDefinition id="range-selector-prop-end-date" type="DateString">
            <template v-slot:name>
              end-date
            </template>
            <template v-slot:default>
              End of the selected range.
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="range-selector-prop-custom-classes"
            type="String"
          >
            <template v-slot:name>
              custom-classes
            </template>
            <template v-slot:default>
              Defines custom classes
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="range-selector-prop-default-date"
            type="DateString"
          >
            <template v-slot:name>
              default-date
            </template>
            <template v-slot:default>
              [TBA]
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="range-selector-prop-block-start-date"
            type="Boolean"
          >
            <template v-slot:name>
              block-start-date
            </template>
            <template v-slot:default>
              [TBA]
            </template>
          </VPropDefinition>
          <VPropDefinition id="range-selector-prop-disabled" type="Boolean">
            <template v-slot:name>
              disabled
            </template>
            <template v-slot:default>
              [TBA]
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="range-selector-prop-disabled-dates"
            type="Array"
            :argumentsTypes="['DateString']"
            :is-pointy-bracket="true"
          >
            <template v-slot:name>
              disabled-dates
            </template>
            <template v-slot:default>
              Array of <a href="#types-date-string">DataString</a>
              [TBA]
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="range-selector-prop-is-disabled"
            type="Function"
            returnType="Boolean"
            :argumentsTypes="['DateString']"
          >
            <template v-slot:name>
              is-disabled
            </template>
            <template v-slot:default>
              <p>
                Function that should decide if given date should be disabled.
              </p>

              <highlight-code lang="vue">
                <pre>
                  &lt;v-range-selector
                    :start-date.sync=&quot;range.start&quot;
                    :end-date.sync=&quot;range.end&quot;
                    :is-disabled=&quot;date =&gt; date > '2020-01-01'&quot;
                  /&gt;
                </pre>
              </highlight-code>
              <p>
                In this example dates later than 1st of January 2020 will be
                disabled.
              </p>
            </template>
          </VPropDefinition>
          <VPropDefinition id="range-selector-prop-single-month" type="Boolean">
            <template v-slot:name>
              single-month
            </template>
            <template v-slot:default>
              [TBA]
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="range-selector-prop-enable-single-date"
            type="Boolean"
          >
            <template v-slot:name>
              enable-single-date
            </template>
            <template v-slot:default>
              [TBA]
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="range-selector-prop-first-day-of-week"
            type="String"
          >
            <template v-slot:name>
              first-day-of-week
            </template>
            <template v-slot:default>
              [TBA]
            </template>
          </VPropDefinition>
        </template>
      </VSection>
    </template>
  </VPane>
</template>

<script>
import VPane from '@components/v-pane';
import VSection from '@components/v-section';
import VPropDefinition from '@components/v-prop-definition';

export default {
  name: 'VDocsRangeSelector',
  components: {
    VPane,
    VSection,
    VPropDefinition,
  },
};
</script>

<style lang="scss" src="./v-docs-range-selector.scss" />
