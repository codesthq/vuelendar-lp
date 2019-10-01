<template>
  <div class="prop-definition">
    <header class="prop-definition__header">
      <div class="prop-definition__name">
        <a :href="'#' + this.id" :id="this.id" class="prop-definition__link">
          <slot name="name"></slot>
        </a>
      </div>
      <div class="prop-definition__type">
        <a :href="this.typeAnchor">{{ this.type }}</a>
        <span
          v-if="argumentsTypes && argumentsTypes.length > 0"
          class="brackets"
          :class="{ 'brackets--pointy': isPointyBracket }"
        >
          <a
            v-for="(value, index) in argumentsTypesAnchors"
            :key="index"
            :href="value.anchor"
          >
            {{ value.type }}
          </a>
        </span>
        <span v-if="returnType" class="icon"></span>
        <a v-if="returnType" :href="this.returnTypeAnchor">{{
          this.returnType
        }}</a>
      </div>
    </header>

    <div class="prop-definition__description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export const TYPES = {
  DateString: '#types-date-string',
  String:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
  Boolean:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
  Number:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  Object:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
  Array:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  Function:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
};

export default {
  name: 'VPropDefinition',
  props: {
    type: {
      validator: function(value) {
        return Object.keys(TYPES).indexOf(value) !== -1;
      },
      required: true,
    },
    argumentsTypes: {
      validator: function(values) {
        return values.every(
          (value) => Object.keys(TYPES).indexOf(value) !== -1
        );
      },
      required: false,
    },
    returnType: {
      validator: function(value) {
        return Object.keys(TYPES).indexOf(value) !== -1;
      },
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    isPointyBracket: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeAnchor() {
      return TYPES[this.type];
    },
    argumentsTypesAnchors() {
      return this.argumentsTypes.map((argumentType) => ({
        type: argumentType,
        anchor: TYPES[argumentType],
      }));
    },
    returnTypeAnchor() {
      return TYPES[this.returnType];
    },
  },
};
</script>

<style lang="scss" src="./v-prop-definition.scss" />
