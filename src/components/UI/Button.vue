<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: #FA7272;
  width: 100%;
  padding: 11px;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 14px;
}
</style>