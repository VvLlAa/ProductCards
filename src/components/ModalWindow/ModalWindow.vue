<script setup lang="ts">
import {useMainStore} from "@/stores/MainStore.ts";
import {ref} from "vue";

const MainStore = useMainStore();

const removeBtn = ref<boolean>(false);

const removeItem = () => {
  removeBtn.value = !removeBtn.value ;
};
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
      <div
          class="modal-window__header"
          :style="MainStore.contentModal?.color ? { 'background-color': `rgba(${MainStore.contentModal?.color})` } : {}"
      />
      <div class="modal-window__body">
        <div class="modal-window__element"/>
      </div>
      <div class="modal-window__footer">
        <button
            @click="removeItem"
            v-if="removeBtn"
            class="modal-window__remove-btn"
        >
          Удалить предмет
        </button>
        <div v-else>
          <input
              placeholder="Введите количество"
              type="text"
              class="modal-window__remove-input"
          >
          <div>
            <button @click="removeItem" class="modal-window__cancellation-btn">Отмена</button>
            <button class="modal-window__confirm-btn">Подтвердить</button>
          </div>
        </div>
      </div>
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
  top: 50px;
  right: 50px;
  width: 40%;
  height: calc(100% - 100px);
  background-color: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;


  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  &__close {
    color: #fff;
  }

  &__header {
    width: 100%;
    height: 30%;
  }

  &__body {
    flex-grow: 1;
    border-top: 1px solid #4D4D4D;
    border-bottom: 1px solid #4D4D4D;
  }

  &__footer {
    margin-top: 16px;
  }

  &__remove-btn {
    width: 100%;
    padding: 20px 0;
    background-color: #FA7272;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-size: 14px;
  }

  &__remove-input {
    height: 40px;
    width: 100%;
    padding: 10px;
    border: 1px solid #4D4D4D;
    background: none;
    font-size: 16px;
    color: #fff;
  }
}

</style>