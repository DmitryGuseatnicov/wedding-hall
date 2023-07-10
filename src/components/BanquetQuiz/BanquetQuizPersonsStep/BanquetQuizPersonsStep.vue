<script setup lang="ts">
import { VChip } from '@/components/VChip';
import { BanquetQuizSteps, BanquetQuizStepsValues } from '@/components/BanquetQuiz/BanquetQuiz.types';
import { useBreakpoints } from '@/hooks';

import { BANQUET_QUIZ_PERSONS_VALUES } from './BanquetQuizPersonsStep.constants';

defineProps<{
  quizValues: Partial<BanquetQuizStepsValues>
}>();

const emit = defineEmits<{
  (event: 'onQuizValuesChange', value: BanquetQuizStepsValues[BanquetQuizSteps.PERSONS]): void
}>();

const { breakPointType } = useBreakpoints();

const handleVChipChange = ({ target }: {target: HTMLInputElement}) => {
  emit('onQuizValuesChange', target.value);
};

</script>

<template>
  <div class="banquet-quiz-persons-step">
    <p class="banquet-quiz-persons-step__question">Количество гостей</p>
    <div class="banquet-quiz-persons-step__chips">
      <VChip
        type="radio"
        name="persons"
        v-for="value in BANQUET_QUIZ_PERSONS_VALUES"
        :key="value"
        :label="value"
        :value="value"
        :size="breakPointType === 'mobile' ? 'small' : 'medium'"
        :checked="quizValues[BanquetQuizSteps.PERSONS] === value"
        @change.stop="handleVChipChange"
      />
    </div>
  </div>
</template>

<style lang="scss">
.banquet-quiz-persons-step {
  &__question {
    color: $color-main-dark;

    @include text-main-medium;
  }

  &__chips {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }
}
</style>
