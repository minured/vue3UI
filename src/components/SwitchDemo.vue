<template>
  <div>
    <h1>示例1</h1>
    <!-- 新版v-model，类似之前的.sync修饰符，emit触发的事件名规定 update:value  -->
    <Switch v-model:value="switchValue" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },

  setup() {
    const switchValue = ref<boolean>(false);
    return {
      switchValue,
    };
  },
};
</script>

<style></style>
