<template>
  <ol class="steps-list">
    <li class="steps-list__item" v-in-viewport.once>
      <h3 class="steps-list__item-title">Install via NPM</h3>
      <p class="steps-list__item-paragraph">
        Install package as a dependency in your project.
        <highlight-code lang="bash">
          <pre>
            npm i vuelendar
          </pre>
        </highlight-code>
        or
        <highlight-code lang="bash">
          <pre>
            yarn add vuelendar
          </pre>
        </highlight-code>
      </p>
    </li>

    <li class="steps-list__item" v-in-viewport.once>
      <h3 class="steps-list__item-title">Load in your code</h3>
      <h4>JS</h4>

      <p class="steps-list__item-paragraph">
        Import and register Vuelendar component,
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
      </p>

      <p class="steps-list__item-paragraph">
        Use Vuelendar in a template.
        <highlight-code lang="vue">
          <pre>
            &lt;v-day-selector v-model="date" /&gt;
          </pre>
        </highlight-code>
      </p>

      <h4>CSS</h4>
      <p class="steps-list__item-paragraph">
        Import styles in vue file
        <highlight-code lang="vue">
          <pre>
            &lt;style src="vuelendar/scss/vuelendar.scss" lang="scss"&gt;&lt;/style&gt;
          </pre>
        </highlight-code>
        or in your SCSS
        <highlight-code lang="scss">
          <pre>
            @import '~vuelendar/scss/vuelendar.scss';
          </pre>
        </highlight-code>
      </p>
    </li>

    <li class="steps-list__item" v-in-viewport.once>
      <h3 class="steps-list__item-title">Extend as you wish</h3>
      <p class="steps-list__item-paragraph">
        You can customize Vuelendar by overriding SCSS variables to fit your
        app.

        <highlight-code lang="scss">
          <pre>
            // Import Vuelendar stylesheet
            @import '~vuelendar/scss/vuelendar.scss';

            // Set Vuelendar primary color to primary color of your app
            $vl-primary: $color-primary;
          </pre>
        </highlight-code>
      </p>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'VStepsList',
};
</script>

<style lang="scss" src="./v-steps-list.scss" />
