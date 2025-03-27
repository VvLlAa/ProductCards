<script setup lang="ts">
import {onMounted, ref} from "vue";
import {type ListContentType, useMainStore} from "@/stores/MainStore.ts";
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";

const MainStore = useMainStore();
const items = ref<Array<ListContentType>>(Array.from({ length: 25 }, (_, i) => {
  return  {id: i, quantity: null, color: null}
}));

const isDragging = ref<boolean>(false);
const movedItem = ref<ListContentType | number | null>(null);

const handleDragStart = (index: number) => {
  isDragging.value = true;
  movedItem.value = items.value[index];
};

const handleDragEnd = () => {
  isDragging.value = false;
};

const handleDragOver = (e: DragEvent, index: number) => {
  e.preventDefault();
  if (!isDragging.value) return;

  const newItems = [...items.value];
  const draggedItem = newItems.findIndex(item => item === movedItem.value);
  [newItems[draggedItem], newItems[index]] = [newItems[index], newItems[draggedItem]];
  items.value = newItems;
};

onMounted(() => {
  MainStore.listContent.forEach((item, index) => {
    items.value[index] = item;
  })
})
</script>

<template>
  <div class="right-block">
    <div
        v-for="(item, index) in items"
        :key="index"
        class="right-block__item"
        draggable="true"
        @click="MainStore.openModalWindow(item)"
        @dragstart="handleDragStart(index)"
        @dragend="handleDragEnd"
        @dragover="handleDragOver($event, index)"
        @drop="handleDragEnd"
    >
      <div
          class="right-block__element"
          :style="item.color ? { 'background-color': `rgba(${item.color})` } : {}"
      />
      <div :class="item.quantity ? 'right-block__quantity' : ''">
        {{ item?.quantity }}
      </div>
    </div>
    <ModalWindow/>
  </div>
</template>

<style scoped lang="scss">
.right-block {
  position: relative;
  display: grid;
  padding: 50px;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(77, 77, 77, 1);
    background-color: #262626;
    width: 100%;
  }

  &__element {
    position: absolute;
    width: 40%;
    height: 40%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__quantity {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #4D4D4D;
    border-top-left-radius: 12px;
    background-color: #262626;
    color: #4D4D4D;
    font-weight: 600;
  }

  &__item:first-child {
    border-top-left-radius: 12px;
  }

  &__item:nth-child(5) {
    border-top-right-radius: 12px;
  }

  &__item:nth-child(21) {
    border-bottom-left-radius: 12px;
  }

  &__item:nth-child(25) {
    border-bottom-right-radius: 12px;
  }
}
</style>