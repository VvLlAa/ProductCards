<script setup lang="ts">
import LeftBlock from "@/components/LeftBlock/LeftBlock.vue";
import RightBlock from "@/components/RightBlock/RightBlock.vue";
import FooterBlock from "@/components/FooterBlock/FooterBlock.vue";
</script>
<template>
  <div class="inventory-view">
    <LeftBlock />
    <RightBlock />
    <FooterBlock />
  </div>
</template>

<style scoped lang="scss">
.inventory-view {
  display: grid;
  grid-template-columns: 236px 1fr;
  grid-template-rows: 1fr auto;
  height: 100vh;

  .FooterBlock {
    grid-column: 1 / span 2;
  }
}
</style>
