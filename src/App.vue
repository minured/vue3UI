<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted, provide, ref } from "vue";
import router from "./router";
export default {
  name: "App",
  setup() {
    let width = ref(document.documentElement.clientWidth);
    let menuVisible = ref(width.value <= 500 ? false : true);
    router.afterEach(() => {
      if (width.value >= 500) return;
      menuVisible.value = false;
    });
    onMounted(() => {
      window.onresize = () => {
        width.value = document.documentElement.clientWidth;

        // if (width.value > 500) {
        //   menuVisible.value = false;
        // }

        menuVisible.value = width.value <= 500 ? false : true;
      };
    });
    provide("menuVisible", menuVisible);
    provide("screenWidth", width);
  },
};
</script>
