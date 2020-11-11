<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted, provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    let width = document.documentElement.clientWidth;
    let menuVisible = ref(width <= 500 ? false : true);
    onMounted(() => {
      window.onresize = () => {
        width = document.documentElement.clientWidth;
        menuVisible.value = width <= 500 ? false : true;
      };
    });
    provide("menuVisible", menuVisible);
    provide("screenWidth", width);
  },
};
</script>
