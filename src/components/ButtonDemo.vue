<template>
  <div>
    <h1>示例1</h1>
    <!-- 这里会触发两次，因为本身有一次click，子组件又触发一次 -->
    <Button
      @onClick="handleButtonClick"
      @onFocus="handleBtnFocus"
      @onMouseover="handleBtnMouseover"
      @click="onClick"
    >
      默认
    </Button>
    <h1>示例2</h1>
    <Button theme="default">默认</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
    <h1>示例3</h1>
    <Button size="small">small size</Button>
    <Button size="normal">normal size</Button>
    <Button size="big">big size</Button>
    <h1>示例4</h1>
    <Button level="main">main lavel</Button>
    <Button level="danger">danger lavel</Button>
    <Button :disabled="false">disabled</Button>
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
