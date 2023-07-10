<script setup lang="ts">
import { BanquetQuiz } from '@/components/BanquetQuiz';
</script>

<template>
  <div class="about">
    <section class="about__quiz">
      <BanquetQuiz />
    </section>
  </div>
</template>

<style lang="scss">
.about {
  &__quiz {
    margin-top: 24px;
  }
}
</style>
