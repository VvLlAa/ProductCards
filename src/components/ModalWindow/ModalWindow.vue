<script setup lang="ts">
import {useMainStore} from "@/stores/MainStore.ts";
import ModalBody from "@/components/ModalWindow/ModalBody.vue";
import ModalHeader from "@/components/ModalWindow/ModalHeader.vue";
import ModalFooter from "@/components/ModalWindow/ModalFooter.vue";

const MainStore = useMainStore();
</script>

<template>
  <span
      @click="MainStore.isOpenModalWindow = false"
      v-if="MainStore.isOpenModalWindow"
      class="close-modal"
  />
  <div
      v-if="MainStore.isOpenModalWindow"
      class="modal-window"
  >
    <div class="modal-window__content">
      <div
          @click="MainStore.isOpenModalWindow = false"
          class="modal-window__close"
      >
        X
      </div>
      <ModalHeader :header="MainStore.contentModal?.color"/>
      <ModalBody/>
      <ModalFooter/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.close-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.modal-window {
  position: absolute;
  padding: 40px;
  right: 0;
  width: 40%;
  height: 100%;
  background-color: var(--color-background);
  border: 1px solid var(--main-color);
  border-radius: 12px;

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }

  &__header {
    width: 100%;
    height: 30%;
  }
}
</style>