<template>
  <div>
    button文档
    <!-- 这里会触发两次，因为本身有一次click，子组件又触发一次 -->
    <Button
      @onClick="handleButtonClick"
      @onFocus="handleBtnFocus"
      @onMouseover="handleBtnMouseover"
      :idDark="true"
    >
      默认
    </Button>
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
    return {
      handleBtnMouseover,
      handleBtnFocus,
      handleButtonClick,
    };
  },
};
</script>

<style></style>
