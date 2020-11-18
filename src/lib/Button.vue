<template>
  <!-- 根标签会默认继承传过来的属性，通过 inheritAttrs: fasel 关闭 -->

  <!-- 自动绑定所有 父组件传过来的事件 -->
  <!-- 计算属性 绑定所有class -->
  <button
    v-bind="$attrs"
    :class="classes"
    class="gulu-button"
    :disabled="disabled"
  >
    <span></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  // 组件的根标签不会 继承父组件传过来的属性。
  inheritAttrs: false,
  props: {
    theme: String,
    size: String,
    level: String,
    disabled: Boolean,
  },
  setup(props, context) {
    // 父组件传过来的所有属性
    // log技巧，解构打印
    // console.log({ ...context.attrs });
    // console.log({ ...props });

    // console.log(typeof context.attrs.isDark);

    const onClick = () => {
      context.emit("onClick");
    };
    const onFocus = () => {
      context.emit("onFocus");
    };
    const onMouseover = () => {
      context.emit("onMouseover");
    };

    // 通过计算属性一次性绑定所有类
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`miui-button-theme-${theme}`]: theme,
        [`miui-button-size-${size}`]: size,
        [`miui-butotn-level-${level}`]: level,
      };
    });

    return {
      onClick,
      onFocus,
      onMouseover,
      classes,
    };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gulu-theme-button {
    &.gulu-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-text {
    &.gulu-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gulu-theme-link,
  &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
