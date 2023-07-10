<script setup lang="ts">
import { VChip } from '@/components/VChip';
import { BanquetQuizSteps, BanquetQuizStepsValues } from '@/components/BanquetQuiz/BanquetQuiz.types';
import { useBreakpoints } from '@/hooks';

import { BANQUET_QUIZ_BUDGET_VALUES } from './BanquetQuizBudgetStep.constants';

defineProps<{
  quizValues: Partial<BanquetQuizStepsValues>
}>();

const emit = defineEmits<{
  (event: 'onQuizValuesChange', value: BanquetQuizStepsValues[BanquetQuizSteps.EVENT_TYPE]): void
}>();

const { breakPointType } = useBreakpoints();

const handleVChipChange = ({ target }: {target: HTMLInputElement}) => {
  emit('onQuizValuesChange', target.value);
};

</script>

<template>
  <div class="banquet-quiz-budget-step">
    <p class="banquet-quiz-budget-step__question">Буджет</p>
    <div class="banquet-quiz-budget-step__chips">
      <VChip
        type="radio"
        name="budget"
        v-for="value in BANQUET_QUIZ_BUDGET_VALUES"
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
.banquet-quiz-budget-step {
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
