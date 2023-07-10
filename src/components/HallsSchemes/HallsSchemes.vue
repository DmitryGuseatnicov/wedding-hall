<script setup lang="ts">
import { HallInfo } from '@/components/HallInfo';
import { computed, ref } from 'vue';

import { HallsSchemesProps } from './HallsSchemes.types';

const props = defineProps<HallsSchemesProps>();

const currentHall = ref(props.halls[0].name);

const hallInfo = computed(() => props.halls.find((hall) => hall.name === currentHall.value));
</script>

<template>
  <div class="halls-schemes">
    <h3 class="halls-schemes__title">Схемы залов</h3>
    <div class="halls-schemes__tabs">
      <button
          :class="[
            'halls-schemes__tab', hall.name == currentHall ? 'halls-schemes__tab_active' : ''
          ]"
          v-for="hall in halls"
          :key="hall.name"
          @click="currentHall = hall.name"
        >
        {{ hall.name }}
      </button>
    </div>
    <div class="halls-schemes__content">
        <div class="halls-schemes__schema">
          <img class="halls-schemes__schema-img" :src="hallInfo?.schemaImg" alt="hall-schema">
        </div>
        <div class="halls-schemes__hall-info">
          <HallInfo
            :title="hallInfo?.description ?? ''"
            :banquet-persons="hallInfo?.banquetPersons ?? 0"
            :buffet-persons="hallInfo?.buffetPersons ?? 0"
            :square="hallInfo?.square ?? 0"
          />
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.halls-schemes {
  @include app-container;

  &__title {
    @include title-small;
    text-align: center;

    @include desktop {
      @include title-big;
      text-align: left;
    }
  }

  &__tabs {
    margin-top: 16px;
    display: flex;
  }

  &__tab {
    border: none;
    background: $color-main-lightest;
    padding: 14px 32px 14px 32px;
    border-radius: 16px 16px 0px 0px;
    cursor: pointer;
    transition: 0.2s;

    &_active {
      background: $background-second;
    }
  }

  &__content {
    background: $background-second;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 12px 0;
  }

  &__schema-img {
    @include tablet {
      max-height: 308px;
    }

    @include mobile {
      max-height: 208px;
    }
  }

  &__hall-info {
    max-width: 536px;

    @include mobile {
      max-width: 100%;
      width: 100%
    }
  };
}
</style>
