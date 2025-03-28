<script setup lang="ts">
const props = defineProps<{
  header: string | null | undefined;
}>();
</script>

<template>
  <div
      class="modal-window__header"
      :style="props.header ? { 'background-color': `rgba(${props.header})` } : {}"
  />
</template>