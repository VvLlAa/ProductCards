<script setup lang="ts">
import {ref} from "vue";

const items = ref(Array.from({ length: 25 }, (_, i) => i + 1));
</script>

<template>
  <div class="right-block">
    <div
        v-for="(item, index) in items"
        :key="index"
        class="right-block__item"
    >
      {{item}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-block {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  padding: 10px;
  border-radius: 8px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>