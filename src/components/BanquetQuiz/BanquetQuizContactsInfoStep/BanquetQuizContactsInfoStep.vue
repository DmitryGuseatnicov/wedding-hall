<script setup lang="ts">
import { VInput } from '@/components/VInput';
import { BanquetQuizSteps, BanquetQuizStepsValues } from '../BanquetQuiz.types';

const props = defineProps<{
    quizValues: Partial<BanquetQuizStepsValues>
  }>();

const emit = defineEmits<{
    (event: 'onQuizValuesChange', data: BanquetQuizStepsValues[BanquetQuizSteps.CONTACTS_INFO]): void
  }>();

const handleVChipChange = ({ target }: {target: HTMLInputElement}) => {
  emit('onQuizValuesChange', { ...props.quizValues[BanquetQuizSteps.CONTACTS_INFO], [target.name]: target.value });
};

</script>
<template>
  <div class="banquet-quiz-contacts-step">
    <p class="banquet-quiz-contacts-step__question">Ваши контакты</p>
    <div class="banquet-quiz-contacts-step__inner">
      <VInput
        :value="quizValues[BanquetQuizSteps.CONTACTS_INFO]?.name"
        name="name"
        label="Ваше имя"
        @change.stop="handleVChipChange"
      />
      <VInput
        :value="quizValues[BanquetQuizSteps.CONTACTS_INFO]?.phone"
        label="Ваш номер телефона"
        name="phone"
        type="phone"
        @change.stop="handleVChipChange"
      />
  </div>
</div>
</template>

<style lang="scss">
.banquet-quiz-contacts-step {
  &__question {
    color: $color-main-dark;

    @include text-main-medium;
  }

  &__inner {
    margin-top: 16px;
    max-width: 550px;
  }
}
</style>
