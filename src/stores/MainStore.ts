import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface ListContentType {
  id: number,
  quantity: string | null,
  color: string | null,
}

export const useMainStore = defineStore('MainStore', () => {
  const listContent = ref<ListContentType[]>([
    {id: 1, quantity: '4', color: '50, 50, 101, 1'},
    {id: 2, quantity: '42', color: '127, 170, 50, 1'},
    {id: 3, quantity: '42', color: '32, 10, 150, 1'}
  ]);

  const items = ref<Array<ListContentType>>(Array.from({ length: 25 }, (_, i) => {
    return  {id: i, quantity: null, color: null}
  }));

  const isOpenModalWindow = ref<boolean>(false);
  const contentModal = ref<ListContentType | null>(null);

  const openModalWindow = (item: ListContentType) => {
    if(item.quantity === null) return;
    isOpenModalWindow.value = true;
    contentModal.value = item;
  };

  return { listContent, isOpenModalWindow, openModalWindow, contentModal, items }
})
