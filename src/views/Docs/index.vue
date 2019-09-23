<template>
  <Layout>
    <div class="page-docs">
      <div class="page-docs__container">
        <div class="page-docs__side-nav">
          <VSideNav />
        </div>
        <div class="page-docs__content">
          <VContainer inner>
            <VPane>
              <template v-slot:title>
                <a id="introduction" href="#introduction">Introduction</a>
              </template>

              <template v-slot:default>
                <p>
                  Simple and clean calendar written in Vue.js.
                </p>

                <VSection>
                  <template v-slot:title>
                    <a id="introduction-features" href="#introduction-features"
                      >Features</a
                    >
                  </template>
                  <template v-slot:default>
                    <p>
                      Select single date
                    </p>

                    <p>
                      Select range of dates
                    </p>
                  </template>
                </VSection>

                <VSection>
                  <template v-slot:title>
                    <a
                      id="introduction-requirements"
                      href="#introduction-requirements"
                      >Requirements</a
                    >
                  </template>
                  <template v-slot:default>
                    <ul>
                      <li>
                        Vue.js
                      </li>
                    </ul>
                  </template>
                </VSection>

                <VSection>
                  <template v-slot:title>
                    <a id="introduction-demo" href="#introduction-demo">Demo</a>
                  </template>
                  <template v-slot:default>
                    <p>
                      <router-link :to="{ name: 'demo' }"
                        >Go to demo page</router-link
                      >.
                    </p>
                  </template>
                </VSection>
              </template>
            </VPane>
            <VPane>
              <template v-slot:title>
                <a id="installation" href="#installation">Installation</a>
              </template>
              <template v-slot:default>
                <p>
                  Install package
                </p>
                <highlight-code lang="bash">
                  npm install vuelendar@1.0.0
                </highlight-code>
                <p>
                  Include calendar styles
                </p>
                <highlight-code lang="vue">
                  <pre>
                    &lt;style src="vuelendar/scss/vuelendar.scss" lang="scss"&gt;&lt;/style&gt;
                  </pre>
                </highlight-code>
              </template>
            </VPane>
            <VPane>
              <template v-slot:title>
                <a id="day-selector" href="#day-selector">Day selector</a>
              </template>
              <template v-slot:default>
                <VSection>
                  <template v-slot:title>
                    <a id="day-selector-usage" href="#day-selector-usage"
                      >Usage</a
                    >
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
                    <a id="day-selector-props" href="#day-selector-props"
                      >Props</a
                    >
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
                    </pre
                      >
                    </highlight-code>

                    <h5>Using object</h5>

                    Disable all dates from 21st April 2019 and 25th April 2019:
                    <highlight-code lang="vue">
                      <pre>
                      &lt;v-day-selector v-model="date" disabled-dates="{
                        from: '2019-04-21',
                        to: '2019-04-23',
                      }" /&gt;
                    </pre
                      >
                    </highlight-code>

                    Specifying only 'from' attribute will disable all dates past
                    that date. Disable all dates from 21st April 2019:
                    <highlight-code lang="vue">
                      <pre>
                      &lt;v-day-selector v-model="date" disabled-dates="{
                        from: '2019-04-21',
                      }" /&gt;
                    </pre
                      >
                    </highlight-code>

                    Specifying only 'to' attribute will disable all dates before
                    that date. Disable all dates before 21st April 2019
                    <highlight-code lang="vue">
                      <pre>
                      &lt;v-day-selector v-model="date" disabled-dates="{
                        to: '2019-04-21',
                      }" /&gt;
                    </pre
                      >
                    </highlight-code>
                  </template>
                </VSection>
              </template>
            </VPane>
            <VPane>
              <template v-slot:title>
                <a id="range-selector" href="#range-selector">range selector</a>
              </template>
              <template v-slot:default>
                <VSection>
                  <template v-slot:title>
                    <a id="range-selector-usage" href="#range-selector-usage"
                      >Usage</a
                    >
                  </template>
                  <template v-slot:default>
                    [TBA]
                  </template>
                </VSection>
                <VSection>
                  <template v-slot:title>
                    <a id="range-selector-props" href="#range-selector-props"
                      >Props</a
                    >
                  </template>
                  <template v-slot:default>
                    [TBA]
                  </template>
                </VSection>
              </template>
            </VPane>
          </VContainer>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main';
import VContainer from '@components/v-container';
import VSideNav from '@components/v-side-nav';
import VPane from '@components/v-pane';
import VSection from '@components/v-section';

export default {
  name: 'Docs',
  components: {
    Layout,
    VContainer,
    VSideNav,
    VPane,
    VSection,
  },
  page: {
    title: 'Documentation',
    meta: [
      {
        name: 'description',
        content: 'Documentation of vuelendar',
      },
    ],
  },
};
</script>

<style lang="scss" src="./Docs.scss" />
