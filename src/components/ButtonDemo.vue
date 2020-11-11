<template>
  <div>
    button文档
    <!-- 这里会触发两次，因为本身有一次click，子组件又触发一次 -->
    <Button
      @onClick="handleButtonClick"
      @onFocus="handleBtnFocus"
      @onMouseover="handleBtnMouseover"
      :isDark="true"
      @click="onClick"
    >
      默认
    </Button>
    <Button theme='default'>默认</Button>
    <Button theme='link'>链接</Button>
    <Button theme='text'>文本</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const handleButtonClick = () => {
      console.log("btn click");
    };
    const handleBtnFocus = () => {
      console.log("focus");
    };
    const handleBtnMouseover = () => {
      console.log("mouseover");
    };
    const onClick = () => {
      console.log("attrs click");
    };
    return {
      handleBtnMouseover,
      handleBtnFocus,
      handleButtonClick,
      onClick,
    };
  },
};
</script>

<style lang="scss" scoped></style>
