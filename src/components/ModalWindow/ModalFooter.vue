<script setup lang="ts">
import {type ListContentType, useMainStore} from "@/stores/MainStore.ts";

const MainStore = useMainStore();

import Button from "@/components/UI/Button.vue";
import {ref, watch} from "vue";

const removeBtn = ref<boolean>(false);
const inputValue = ref<string>('');

const removeItem = (num : number) => {
  const localItems = localStorage.getItem("items");
  const storedItems = localItems ? JSON.parse(localItems) : [];

  if(num === 0) {
    removeBtn.value = !removeBtn.value ;
  } else {
    const item = storedItems.find((item : ListContentType) => item.id === MainStore.contentModal?.id);
    if(item) {
      item.quantity = inputValue.value;
      localStorage.setItem('items', JSON.stringify(storedItems));
      MainStore.items = storedItems;
    }
  }
};

watch(inputValue, (newValue, oldValue) => {
  const filteredValue = newValue.replace(/\D/g, "");
  if (newValue !== filteredValue) {
    inputValue.value = filteredValue;
  }
});
</script>

<template>
  <div class="modal-footer">
    <Button
        @click="removeItem(0)"
        v-if="!removeBtn"
    >
      Удалить предмет
    </Button>
    <div v-else>
      <input
          v-model="inputValue"
          placeholder="Введите количество"
          type="text"
          class="modal-footer__remove-input"
      >
      <div class="modal-footer__btns">
        <Button
            @click="removeItem(0)"
            style="background-color: #fff; color: #000; padding: 8px"
        >
          Отмена
        </Button>
        <Button
            @click="removeItem(1)"
            style="padding: 8px"
        >
          Подтвердить
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-footer {
  margin-top: 16px;

  &__remove-input {
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
  }

  &__btns {
    display: flex;
    margin-top: 20px;
    gap: 10px;
  }
}
</style>