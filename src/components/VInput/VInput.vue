<script setup lang="ts">
import { vMaska } from 'maska';

import { VInputProps } from './VInput.types';

withDefaults(defineProps<VInputProps>(), {
  type: 'text',
});

</script>

<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label class="input">
    <span class="input__label-text" v-if="label">{{ label }}</span>
    <input
      v-if="type !== 'phone'"
      v-bind="$attrs"
      class="input__input-field"
      :type="type"
    >
    <input
      v-if="type === 'phone'"
      v-bind="$attrs"
      class="input__input-field"
      type="text"
      v-maska
      placeholder="+7 (___) ___-__-__"
      data-maska="+7 (###) ###-##-##"
    >
    <span v-if="error" class="input__error-text">{{ error }}</span>
  </label>
</template>

<style lang="scss">
  .input {
    position: relative;
    display: block;
    padding-bottom: 18px;

    &__label-text {
      display: block;
      color: $color-main-light;
      user-select: none;

      @include text-second;
    }

    &__input-field {
      margin-top: 5px;
      padding: 16px;
      width: 100%;
      color: $color-main-darker;
      background: $color-main-lighter;
      border: none;
      outline: none;

      @include text-second;

      &:placeholder {
        color: $color-main;

        @include text-second-small;
      }
    }

    &__error-text {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      white-space: nowrap;
      color: $color-second;
      user-select: none;

      @include text-second;
    }
  }
</style>
