<template>
  <div>
    <button
      @click="onClick"
      @focus="onFocus"
      @mouseover="onMouseover"
      :class="{ dark: isDark }"
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    idDark: Boolean,
  },
  setup(props, context) {
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
button {
  &.dark {
    background: #666;
  }
}
</style>
