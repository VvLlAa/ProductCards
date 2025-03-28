<script setup lang="ts">
import EmptyContent from "@/components/UI/EmptyContent.vue";
</script>

<template>
  <div class="item-stats">
    <div class="item-stats__img"/>
    <div class="item-stats__content">
      <EmptyContent class="item-stats__title"/>
      <div class="item-stats__text">
        <EmptyContent/>
        <EmptyContent/>
        <EmptyContent/>
        <EmptyContent/>
        <EmptyContent/>
        <EmptyContent/>
        <EmptyContent/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-stats {
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  padding: 18px 14px;
  border-radius: 12px;

  &__title {
    height: 50px;
    margin: 20px 0 24px 0;
  }

  &__img {
    width: 100%;
    height: 46%;
    background-color: var(--color-content);
    border-radius: 8px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>