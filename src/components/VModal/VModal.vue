<script setup lang="ts">
import { VButton } from '@/components/VButton';
import { IcClose } from '@/assets/icons';
import { VModalProps } from './VModal.types';

defineProps<VModalProps>();
defineEmits<{(event: 'onClose'): void}>();

</script>

<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <div class="v-modal" v-if="isOpen" @click="$emit('onClose')">
    <div class="v-modal__content" @click.stop="">
      <VButton
        class="v-modal__close-button"
        size="content"
        fill="clear"
        @click="$emit('onClose')"
      >
        <IcClose/>
      </VButton>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  .v-modal {
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #333;
    animation-name: fade-in;
    animation-duration: .4s;

    @include centered-flexbox;

    @include mobile {
      align-items: end;
    }

    &__content {
      padding: 16px;
      box-shadow: 0px 8px 16px 0px #2223241A;
      background: #fff;
      border-radius: 16px;

      @include mobile {
        border-radius: 16px 16px 0px 0px;
        animation-duration: .4s;
        animation-name: fade-in-up;
      }
    }

    &__close-button {
      margin-left: auto;
    }
  }
</style>
