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
          <VPropDefinition
            id="day-selector-prop-selected-date"
            type="DateString"
          >
            <template v-slot:name>
              selected-date
            </template>
            <template v-slot:default>
              Selected date
            </template>
          </VPropDefinition>
          <VPropDefinition id="day-selector-prop-custom-classes" type="String">
            <template v-slot:name>
              custom-classes
            </template>
            <template v-slot:default>
              Defines custom classes
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="day-selector-prop-default-date"
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
            id="day-selector-prop-disabled-dates"
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
            id="day-selector-prop-is-disabled"
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
                  &lt;v-day-selector
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
          <VPropDefinition id="day-selector-prop-single-month" type="Boolean">
            <template v-slot:name>
              single-month
            </template>
            <template v-slot:default>
              [TBA]
            </template>
          </VPropDefinition>
          <VPropDefinition
            id="day-selector-prop-first-day-of-week"
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
  name: 'VDocsDaySelector',
  components: {
    VPane,
    VSection,
    VPropDefinition,
  },
};
</script>

<style lang="scss" src="./v-docs-day-selector.scss" />
