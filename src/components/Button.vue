<template>
  <component
    :is="type"
    :href="href"
    :type="submit"
    :class="[
      'button',
      { 'button-full': width === 'full' },
      round,
      size,
      state,
      variation,
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
      validator: (value) => {
        return value.match(/(button|a)/);
      },
    },

    width: {
      type: String,
    },

    size: {
      type: String,
    },
    round: {
      type: String,
      validator: (value) => {
        return value.match(/(round)/);
      },
    },

    href: {
      type: String,
      default: null,
    },
    submit: {
      type: String,
      default: null,
      validator: (value) => {
        return value.match(/(null|submit)/);
      },
    },
    state: {
      type: String,
      default: null,
      validator: (value) => {
        return value.match(/(hover|active|focus)/);
      },
    },
    variation: {
      type: String,
      default: null,
      validator: (value) => {
        return value.match(/(primary|outline|gray|dark|secondary)/);
      },
    },
  },
};
</script>

<style lang="scss" >
@import "~assets/scss/config";
@import "~assets/scss/mixins";
.button {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  font-size: 12px;
  line-height: 33px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  padding: 0 20px;
  height: 48px;
  text-align: center;
  white-space: nowrap;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000040;
  color: #720c0c;
  justify-content: center;

  &.primary {
    background: color(green);
    color: #fff;
  }

  &:hover,
  &.hover {
    transform: translateZ(0) scale(1.03);
  }
  &:active,
  &.active {
    transform: translateZ(0) scale(1);
  }
  &:focus,
  &.focus {
    transform: translateZ(0) scale(1);
    outline: 0;
  }
  &.round {
    border-radius: 50px;
  }
  &.medium {
    height: 48px;
    line-height: 48px;
    padding: 0 28px;
  }

  &.button-full {
    width: 100%;
  }
  &.primary {
    background: #720c0c 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000040;
    color: #fff;
  }
}
</style>