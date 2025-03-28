<script setup lang="ts">

import EmptyContent from "@/components/UI/EmptyContent.vue";
</script>

<template>
  <div class="footer-block">
    <div class="footer-block__close">X</div>
    <EmptyContent class="footer-block__content"/>
  </div>
</template>

<style scoped lang="scss">
.footer-block {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: var(--main-color);
  padding: 20px;

  &__content {
    width: 90%;
    height: 36px;
  }

  &__close {
    position: absolute;
    color: #fff;
    right: 14px;
    top: 14px;
    cursor: pointer;
  }
}
</style>