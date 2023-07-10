<script setup lang="ts">
import { useRouter } from 'vue-router';

import { VButton } from '@/components/VButton';

import { HallInfoProps } from './HallInfo.types';

defineProps<HallInfoProps>();

const router = useRouter();
</script>

<template>
  <div class="hall-info">
    <p class="hall-info__description">{{ title }}</p>
    <div class="hall-info__params">
      <div class="hall-info__param">
        <span class="hall-info__param-name">площадь</span>
        <span class="hall-info__param-value">{{ `${square} кв. метров` }}</span>
      </div>
      <div class="hall-info__param">
        <span class="hall-info__param-name">вместимость</span>
        <span class="hall-info__param-value">{{ `до ${ banquetPersons } человек` }}</span>
      </div>
      <div class="hall-info__param">
        <span class="hall-info__param-name">фуршет</span>
        <span class="hall-info__param-value">{{ `до ${ buffetPersons } человек` }}</span>
      </div>
    </div>
    <div class="hall-info__buttons">
      <VButton class="hall-info__button">
        Забронировать
      </VButton>
      <VButton class="hall-info__button" fill="outlined" @click="router.push('/gallery')">
        Посмотреть галерею
      </VButton>
    </div>
  </div>
</template>

<style lang="scss">
.hall-info {
  padding: 24px 16px;
  border-radius: 16px;
  box-shadow: 0px 8px 16px 0px #2223241A;

  @include desktop {
    padding: 40px 40px 48px 40px;
  }

  &__description {
    @include title-small;

    @include desktop {
      @include title-medium;
    }
  }

  &__params {
    margin-top: 24px;
  }

  &__param {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 2px solid $color-main-lightest;
  }

  &__param-name,
  &__param-value {
    width: 50%;
  }

  &__param-name {
    color: $color-main-light;
  }

  &__param-value {
    color: $color-main-darkness;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
    gap: 16px;
  }

  &__button {
    @include mobile {
      width: 100%;
    }
  }
}
</style>
