<script setup lang="ts">

</script>

<template>
  <div class="modal-body">
    <div class="modal-body__header"/>
    <div class="modal-body__text"/>
    <div class="modal-body__text"/>
    <div class="modal-body__text"/>
    <div class="modal-body__text"/>
    <div class="modal-body__text"/>
  </div>
</template>

<style scoped lang="scss">
.modal-body {
  flex-grow: 1;
  border-top: 1px solid #4D4D4D;
  border-bottom: 1px solid #4D4D4D;
  margin-top: 40px;

  &__header {
    width: 100%;
    height: 50px;
    background-color: rgba(68, 68, 68, 1);
    border-radius: 8px;
    margin-top: 16px;
    margin-bottom: 24px;
  }

  &__text {
    height: 20px;
    background-color: rgba(68, 68, 68, 1);
    border-radius: 8px;
    margin-top: 16px;
  }
}

</style>