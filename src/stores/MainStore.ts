import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface ListContentType {
  id: number,
  quantity: number | null,
  color: string | null,
}

export const useMainStore = defineStore('MainStore', () => {
  const listContent = ref<ListContentType[]>([
    {id: 1, quantity: 4, color: '127, 170, 101, 1'},
    {id: 2, quantity: 42, color: '127, 170, 50, 1'}
  ]);

  const isOpenModalWindow = ref<boolean>(false);
  const contentModal = ref<ListContentType | null>(null);

  const openModalWindow = (item: ListContentType) => {
    isOpenModalWindow.value = true;
    contentModal.value = item;
  };

  return { listContent, isOpenModalWindow, openModalWindow, contentModal }
})
