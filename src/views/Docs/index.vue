<template>
  <Layout>
    <div class="page-docs">
      <div class="page-docs__container">
        <div class="page-docs__side-nav">
          <VSideNav />
        </div>
        <div class="page-docs__content">
          <VContainer inner>
            <article class="pane">
              <header class="pane__header">
                <h2 id="introduction">
                  <a href="#introduction">Introduction</a>
                </h2>
              </header>

              <p>
                Simple and clean calendar written in Vue.js.
              </p>

              <section>
                <header>
                  <h3 id="introduction-features">
                    <a href="#introduction-features">Features</a>
                  </h3>
                </header>

                <p>
                  Select single date
                </p>

                <p>
                  Select range of dates
                </p>
              </section>

              <section>
                <header>
                  <h3 id="introduction-requirements">
                    <a href="#introduction-requirements">Requirements</a>
                  </h3>
                </header>

                <ul>
                  <li>
                    Vue.js
                  </li>
                </ul>
              </section>

              <section>
                <header>
                  <h3 id="introduction-demo">
                    <a href="#introduction-demo">Demo</a>
                  </h3>
                </header>
                <p>
                  <router-link :to="{ name: 'demo' }"
                    >Go to demo page</router-link
                  >.
                </p>
              </section>
            </article>
            <article class="pane">
              <header class="pane__header">
                <h2 id="installation">
                  <a href="#installation">Installation</a>
                </h2>
              </header>

              <p>
                Install package
              </p>
              <code>
                npm install vuelendar@1.0.0
              </code>
              <p>
                Include calendar styles
              </p>
              <highlight-code lang="vue">
                &lt;style src="vuelendar/scss/vuelendar.scss"
                lang="scss"&gt;&lt;/style&gt;
              </highlight-code>
            </article>
            <article class="pane">
              <header class="pane__header">
                <h2 id="day-selector">
                  <a href="#day-selector">Day selector</a>
                </h2>
              </header>
              <section>
                <header>
                  <h3 id="day-selector-usage">
                    <a href="#day-selector-usage">Usage</a>
                  </h3>
                </header>

                <h4>Register component</h4>
                <highlight-code lang="javascript">
                  import VDaySelector from
                  'vuelendar/components/vl-day-selector'; export default {
                  components: { VDaySelector }, data () { return { date: null }
                  } }
                </highlight-code>

                <h4>Use in template</h4>
                <highlight-code lang="vue">
                  &lt;v-day-selector v-model="date" /&gt;
                </highlight-code>
              </section>
              <section>
                <header>
                  <h3 id="day-selector-props">
                    <a href="#day-selector-props">Props</a>
                  </h3>
                </header>

                <h4>disabled-dates</h4>
                Vuelendar allows two ways for disabling dates.

                <h5>Using array</h5>

                Disable 21st April 2019 and 25th April 2019:
                <highlight-code lang="vue">
                  &lt;v-day-selector v-model="date"
                  disabled-dates="['2019-04-21', '2019-04-25'] /&gt;
                </highlight-code>

                <h5>Using object</h5>

                Disable all dates from 21st April 2019 and 25th April 2019:
                <highlight-code lang="vue">
                  &lt;v-day-selector v-model="date" disabled-dates="{ from:
                  '2019-04-21', to: '2019-04-23' }" /&gt;
                </highlight-code>

                Specifying only 'from' attribute will disable all dates past
                that date. Disable all dates from 21st April 2019:
                <highlight-code lang="vue">
                  &lt;v-day-selector v-model="date" disabled-dates="{ from:
                  '2019-04-21', }" /&gt;
                </highlight-code>

                Specifying only 'to' attribute will disable all dates before
                that date. Disable all dates before 21st April 2019
                <highlight-code lang="vue">
                  &lt;v-day-selector v-model="date" disabled-dates="{ to:
                  '2019-04-21', }" /&gt;
                </highlight-code>
              </section>
            </article>
            <article class="pane">
              <header class="pane__header">
                <h2 id="range-selector">
                  <a href="#range-selector">range selector</a>
                </h2>
              </header>
              <section>
                <header>
                  <h3 id="range-selector-usage">
                    <a href="#range-selector-usage">Usage</a>
                  </h3>
                </header>
              </section>
              <section>
                <header>
                  <h3 id="range-selector-props">
                    <a href="#range-selector-props">Props</a>
                  </h3>
                </header>
              </section>
            </article>
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

export default {
  name: 'Docs',
  components: {
    Layout,
    VContainer,
    VSideNav,
  },
  page: {
    title: 'Docs',
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
