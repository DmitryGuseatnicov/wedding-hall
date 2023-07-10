<script setup lang="ts">
import { computed } from 'vue';
import { VButtonProps } from './VButton.types';
import {
  FILL_VARIANTS,
  SIZE_VARIANTS,
  COLOR_VARIANTS,
} from './VButton.constants';

const props = withDefaults(defineProps<VButtonProps>(), {
  size: 'standard',
  color: 'second',
  fill: 'solid',
  icon: () => ({
    slot: 'end',
  }),
});

const classes = computed(() => [
  'custom-button',
  FILL_VARIANTS[props.fill],
  SIZE_VARIANTS[props.size],
  COLOR_VARIANTS[props.color],
].join(' '));

</script>

<template>
  <button :class="classes">
    <component
      class="custom-button__icon"
      v-if="props.icon.component && props.icon.slot === 'start'"
      :is="props.icon.component"
    />
    <slot />
    <component
      class="custom-button__icon"
      v-if="props.icon.component && props.icon.slot === 'end'"
      :is="props.icon.component"
    />
  </button>
</template>

<style lang="scss">
.custom-button {
  background: transparent;
  border: none;
  transition: 0.2s;
  cursor: pointer;

  @include text-second;
  @include centered-flexbox;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &:active {
    box-shadow: $drop-shadow-main;
  }

  &:disabled {
    opacity: 0.5;
  }

  &_size_fit-content {
    padding: 0;
    height: fit-content;
    width: fit-content;
  }

  &_size_small {
    padding: 8px 16px;
  }

  &_size_standard {
    padding: 16px 32px;
  }

  &_fill_outlined {
    border: 2px solid;

    &.custom-button_color_second {
      border-color: $color-second;
      color: $color-second;
    }
  }

  &_fill_solid {
    &.custom-button_color_second {
      background: $color-second;
      color: #fff;
    }
  }

  &__icon {
    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }
  }
}
</style>
