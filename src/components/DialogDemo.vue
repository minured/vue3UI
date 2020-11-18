<template>
  <div>
    <h1>示例1</h1>
    <Dialog
      v-model:visible="isVisible"
      title="MyTitle"
      @confirm="onConfirm"
      @cancel="onCancel"
      @close="onClose"
      :overlayCloseDialog="true"
    >
      <template v-slot:title>dialog title</template>
      <template v-slot:content>
        dialog content dialog content dialog content dialog content dialog
        content dialog content dialog content
      </template>
    </Dialog>
    <Button
      @click="
        () => {
          isVisible = !isVisible;
        }
      "
    >
      show dialog
    </Button>
  </div>
</template>

<script lang="ts" scoped>
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Dialog, Button },

  setup() {
    const isVisible = ref<Boolean>(false);
    const onConfirm = () => {
      console.log("confirm");
    };
    const onCancel = () => {
      console.log("cancel");
    };
    const onClose = () => {
      console.log("close");
    };

    return {
      isVisible,
      onConfirm,
      onCancel,
      onClose,
    };
  },
};
</script>

<style></style>
