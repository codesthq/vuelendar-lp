<template>
  <VPane>
    <template v-slot:title>
      <a id="types" href="#types">Types</a>
    </template>

    <template v-slot:default>
      <VSection>
        <template v-slot:title>
          <a id="types-date-string" href="#types-date-string">
            DateString
          </a>
        </template>
        <template v-slot:default>
          <p>
            Represents date as a string.<br />
            Is used internally in vuelendar, and is represented by date
            <code>YYYY-MM-DD</code> format.
          </p>
          <p>
            <code>YYYY-MM-DD</code> format is has it's practical benefits since
            it can be easily compared.
          </p>
        </template>
      </VSection>
      <VSection>
        <template v-slot:title>
          <a id="types-function-object" href="#types-function-object">
            FunctionObject
          </a>
        </template>
        <template v-slot:default>
          <p>
            Object that should consist of key-function pairs.
          </p>
          Example:
          <highlight-code lang="javascript">
            <pre>
              {
                'example-class': date => date > '2010-02-20',
                'event-class': date => date === '2020-01-01',
              }
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
  name: 'VDocsCustomTypes',
  components: {
    VPane,
    VSection,
  },
};
</script>

<style lang="scss" src="./v-docs-custom-types.scss" />
