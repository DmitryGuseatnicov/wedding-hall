<script setup  lang="ts">
import { computed } from 'vue';
import { SIZE_VARIANTS } from './VChip.constants';
import { VChipProps } from './VChip.types';

const props = withDefaults(defineProps<VChipProps>(), {
  size: 'medium',
});

const classes = computed(() => [
  'v-chip',
  SIZE_VARIANTS[props.size],
]);
</script>

<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label :class="classes">
    <input class="v-chip__input" v-bind="$attrs" :type="type">
    <span class="v-chip__text">{{ label }}</span>
  </label>
</template>

<style lang="scss">
.v-chip {
  user-select: none;
  cursor: pointer;

  &_size_small {
    .v-chip__text {
      padding: 14px 24px 14px 40px;

      @include text-main-small;

      &::before {
        left: 12px;
        top: 16px;
      }

      &::after {
        top: 21px;
        left: 17px;
      }
    }
  }

  &_size_medium {
    .v-chip__text {
      padding: 12px 32px 12px 52px;

      &::before {
        left: 16px;
        top: 18px;
      }

      &::after {
        top: 23px;
        left: 21px;
      }
    }
  }

  &__input {
    opacity: 0;
    appearance: none;

    &:checked + span::before {
      border-color: $color-second;
    }

    &:checked + span {
      color: $color-main-darker;
      border-color: $color-second;
      box-shadow: $drop-shadow-main;
    }

    &:focus + span {
      color: $color-main-darker;
      border-color: $color-second;
      box-shadow: $drop-shadow-main;
    }

    &:checked + span::after {
      display: block;
    }

    &:disabled + span::before {
      opacity: 0.5;
    }

    @media (any-hover: hover) {
      &:hover + span {
        box-shadow: $drop-shadow-main;
      }
    }
  }

  &__text {
    position: relative;
    display: inline-flex;
    border-radius: 4px;
    background: #fff;
    color: $color-main;
    border: 1px solid #fff;
    transition: 0.2s;

      &::before {
        position: absolute;

        width: 16px;
        height: 16px;
        border: 2px solid $color-main-lightest;
        border-radius: 50%;
        content: '';
      }

      &::after {
        position: absolute;
        display: none;
        width: 6px;
        height: 6px;
        background: $color-second;
        border-radius: 50%;
        content: '';
      }
  }
}
</style>
