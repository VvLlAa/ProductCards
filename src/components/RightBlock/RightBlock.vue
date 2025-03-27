<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useMainStore} from "@/stores/MainStore.ts";
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";

const MainStore = useMainStore();

const draggedItemIndex = ref<number>(-1);

const saveToLocalStorage = () => {
  localStorage.setItem("items", JSON.stringify(MainStore.items));
};

const handleDragStart = (index: number) => {
  draggedItemIndex.value = index;
};

const handleDragEnd = () => {
  draggedItemIndex.value = -1;
  saveToLocalStorage();
};

const handleDrop = (e: DragEvent, targetIndex: number) => {
  e.preventDefault();
  if (draggedItemIndex.value === targetIndex) return;

  const newItems = [...MainStore.items];
  [newItems[draggedItemIndex.value], newItems[targetIndex]] =
      [newItems[targetIndex], newItems[draggedItemIndex.value]];

  MainStore.items = newItems;
};

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
};

watch(MainStore.items, saveToLocalStorage, { deep: true });

onMounted(() => {
  const local = localStorage.getItem("items");
  const storedItems = local ? JSON.parse(local) : [];
  if(storedItems.length > 0) {
    MainStore.items = storedItems;
  } else {
    MainStore.listContent.forEach((item, index) => {
      MainStore.items[index] = item;
    })
  }
})
</script>

<template>
  <div class="right-block">
    <div
        v-for="(item, index) in MainStore.items"
        :key="index"
        class="right-block__item"
        draggable="true"
        @click="MainStore.openModalWindow(item)"
        @dragstart="handleDragStart(index)"
        @dragend="handleDragEnd"
        @dragover="handleDragOver"
        @drop="handleDrop($event, index)"
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