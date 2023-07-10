<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

import { VModal } from '@/components/VModal';
import { VInput } from '@/components/VInput';
import { VButton } from '@/components/VButton';

import { ReserveModalProps } from './ReserveModal.types';
import { validateReserveModalForm } from './ReserveModal.utils';

defineProps<ReserveModalProps>();
defineEmits<{(event: 'onClose'): void}>();

const formValues = reactive({
  name: '',
  phone: '',
});

const formValuesValidity = computed(() => validateReserveModalForm(formValues));
const ifFormHasSended = ref(false);

const handleInputChange = ({ target }: {target: HTMLInputElement}) => {
  formValues[target.name as keyof typeof formValues] = target.value;
};

const handleFormSubmit = () => {
  ifFormHasSended.value = true;
  formValues.name = '';
  formValues.phone = '';

  setTimeout(() => { ifFormHasSended.value = false; }, 2000);
};

</script>

<template>
  <VModal :isOpen="isOpen" @onClose="$emit('onClose')">
    <div class="reserve-modal">
      <div class="reserve-modal__info">
        <h4 class="reserve-modal__title">Оставьте заявку</h4>
        <p class="reserve-modal__subtitle">Скоро с вами свяжется администратор</p>
        <p
          class="reserve-modal__subtitle"
          v-if="ifFormHasSended"
        >
          Ваша заявка отправлена, спасибо
        </p>
        <p
          class="reserve-modal__privacy-policy">
            Нажимая на кнопку «Отправить», Вы соглашаетесь
            <a href="/change-me" target="_black">Политикой конфиденциальности</a>
          </p>
      </div>
      <form class="reserve-modal__form" @submit.prevent="handleFormSubmit">
        <VInput
          name="name"
          label="Ваше имя"
          :value="formValues.name"
          @change="handleInputChange"/>
        <VInput
          name="phone"
          type="phone"
          label="Ваш номер телефона"
          :value="formValues.phone"
          @change="handleInputChange"
        />
        <VButton
          :disabled="!(formValuesValidity.name && formValuesValidity.phone)"
        >
          Забронировать
        </VButton>
      </form>
    </div>
  </VModal>
</template>

<style lang="scss">
  .reserve-modal {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    @include desktop {
      padding: 24px;
    }

    &__title {
      color: $color-second;

      @include title-medium;
    }

    &__subtitle {
      margin-top: 8px;
      color: $color-main-light;
    }

    &__info {
      max-width: 400px;
      min-width: 280px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include mobile {
        max-width: 100%;
        width: 100%;
      }
    }

    &__privacy-policy {
      margin-top: auto;
      max-width: 320px;
      color: $color-main-light;

      @include text-second-small;

      & > a {
        color: $color-main-light;

        @include text-second-small;
      }
    }

    &__form {
      min-width: 300px;

      @include mobile {
        max-width: 100%;
        width: 100%;
      }
    }
  }
</style>
