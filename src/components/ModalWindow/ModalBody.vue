<script setup lang="ts">

import EmptyContent from "@/components/UI/EmptyContent.vue";
</script>

<template>
  <div class="modal-body">
    <EmptyContent class="modal-body__title"/>
    <div class="modal-body__text">
      <EmptyContent/>
      <EmptyContent/>
      <EmptyContent/>
      <EmptyContent/>
      <EmptyContent/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-body {
  flex-grow: 1;
  border-top: 1px solid var(--main-color);
  border-bottom: 1px solid var(--main-color);
  margin-top: 40px;

  &__title {
    margin: 16px 0 24px 0;
    height: 50px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>