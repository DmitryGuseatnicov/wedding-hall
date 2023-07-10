<script setup lang="ts">
import { BanquetQuiz } from '@/components/BanquetQuiz';
import { HallsSchemes } from '@/components/HallsSchemes';
import { APP_INFO } from '@/constants';
</script>

<template>
  <div class="about">
    <section class="about__quiz">
      <BanquetQuiz />
    </section>
    <section class="about__halls-schemas">
      <HallsSchemes :halls="APP_INFO.halls"/>
    </section>
  </div>
</template>

<style lang="scss">
.about {
  &__quiz {
    margin-top: 24px;
  }

  &__halls-schemas {
    margin-top: 24px;

    @include desktop {
      margin-top: 32px;
    }
  }
}
</style>
