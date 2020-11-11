<template>
  <div>
    <!-- 自动绑定所有 父组件传过来的事件 -->
    <!-- 绑定自定义class -->
    <button
      v-bind="$attrs"
      :class="{ [`theme-${theme}`]: theme }"
      class="button-item"
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  // 组件的根标签不会 继承父组件传过来的属性。
  inheritAttrs: false,
  props: {
    idDark: Boolean,
    theme: String,
  },
  setup(props, context) {
    // 父组件传过来的所有属性
    // log技巧，解构打印
    console.log({ ...context.attrs });
    console.log({ ...props });

    console.log(typeof context.attrs.isDark);

    const onClick = () => {
      context.emit("onClick");
    };
    const onFocus = () => {
      context.emit("onFocus");
    };
    const onMouseover = () => {
      context.emit("onMouseover");
    };

    return {
      onClick,
      onFocus,
      onMouseover,
    };
  },
};
</script>

<style lang="scss" scoped>
.button-item {
  border: none;
  &:focus {
    outline: none;
  }
  &.dark {
    background: #666;
  }
  &.theme-default {
    background-color: snow;
  }
  &.theme-link {
    background-color: #999;
  }
  &.theme-text {
    background-color: orange;
  }
}
</style>
