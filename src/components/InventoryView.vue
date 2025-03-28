<script setup lang="ts">
import LeftBlock from "@/components/LeftBlock/LeftBlock.vue";
import RightBlock from "@/components/RightBlock/RightBlock.vue";
import FooterBlock from "@/components/FooterBlock/FooterBlock.vue";
</script>
<template>
  <div class="inventory-view container">
    <LeftBlock />
    <RightBlock />
    <FooterBlock class="footer-block"/>
  </div>
</template>

<style scoped lang="scss">
.inventory-view {
  display: grid;
  grid-template-columns: 236px 1fr;
  grid-template-rows: 1fr auto;
  gap: 24px;
  height: 100vh;
}

.footer-block {
  grid-column: 1 / -1;
  height: 72px;
  background-color: var(--color-background);
  border-radius: 12px;
}
</style>
