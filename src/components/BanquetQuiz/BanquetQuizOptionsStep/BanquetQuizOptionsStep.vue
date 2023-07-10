<script setup lang="ts">
import { VChip } from '@/components/VChip';
import { BanquetQuizSteps, BanquetQuizStepsValues } from '@/components/BanquetQuiz/BanquetQuiz.types';
import { useBreakpoints } from '@/hooks';

import { BANQUET_QUIZ_OPTIONS_VALUES } from './BanquetQuizOptionsStep.constants';

const props = defineProps<{
  quizValues: Partial<BanquetQuizStepsValues>
}>();

const emit = defineEmits<{
  (event: 'onQuizValuesChange', value: BanquetQuizStepsValues[BanquetQuizSteps.OPTIONS]): void
}>();

const { breakPointType } = useBreakpoints();

const handleVChipChange = ({ target }: {target: HTMLInputElement}) => {
  emit('onQuizValuesChange', props.quizValues[BanquetQuizSteps.OPTIONS]?.includes(target.value)
    ? props.quizValues[BanquetQuizSteps.OPTIONS].filter((value) => value !== target.value)
    : [...(props.quizValues[BanquetQuizSteps.OPTIONS] ?? []), target.value]);
};

</script>

<template>
  <div class="banquet-quiz-event-type-step">
    <p class="banquet-quiz-event-type-step__question">Дополнительные опции</p>
    <div class="banquet-quiz-event-type-step__chips">
      <VChip
        type="checkbox"
        name="options"
        v-for="value in BANQUET_QUIZ_OPTIONS_VALUES"
        :key="value"
        :label="value"
        :value="value"
        :size="breakPointType === 'mobile' ? 'small' : 'medium'"
        :checked="quizValues[BanquetQuizSteps.OPTIONS]?.includes(value)"
        @change.stop="handleVChipChange"
      />
    </div>
  </div>
</template>

<style lang="scss">
.banquet-quiz-event-type-step {
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
