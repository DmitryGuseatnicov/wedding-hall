<script setup lang="ts">
import { VChip } from '@/components/VChip';
import { BanquetQuizSteps, BanquetQuizStepsValues } from '@/components/BanquetQuiz/BanquetQuiz.types';
import { useBreakpoints } from '@/hooks';

import { BANQUET_QUIZ_EVENT_TYPE_VALUES } from './BanquetQuizEventTypeStep.constants';

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
  <div class="banquet-quiz-event-type-step">
    <p class="banquet-quiz-event-type-step__question">Тип Мероприятия</p>
    <div class="banquet-quiz-event-type-step__chips">
      <VChip
        type="radio"
        name="eventType"
        v-for="value in BANQUET_QUIZ_EVENT_TYPE_VALUES"
        :key="value"
        :label="value"
        :value="value"
        :size="breakPointType === 'mobile' ? 'small' : 'medium'"
        :checked="quizValues[BanquetQuizSteps.EVENT_TYPE] === value"
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
