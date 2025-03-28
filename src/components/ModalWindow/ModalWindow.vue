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
      :class="MainStore.isOpenModalWindow ? 'is-active' : 'no-active'"
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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 9;
}

.modal-window {
  position: fixed;
  top: 32px;
  right: 32px;
  width: 40%;
  height: calc(100% - 72px - 64px - 24px);
  padding: 40px;
  background-color: var(--color-background);
  border: 1px solid var(--main-color);
  border-radius: 0 12px 0 0;
  transition: transform 0.3s ease;
  z-index: 10;

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

.is-active {
  transform: translateX(0);
}

.no-active {
  transform: translateX(120%);
}

</style>