<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { ProgressLine } from '@/components/ProgressLine';
import { VButton } from '@/components/VButton';
import { IcArrow } from '@/assets/icons';
import { useBooleanState, useBreakpoints } from '@/hooks';

import { BanquetQuizSteps, BanquetQuizStepsValues } from './BanquetQuiz.types';
import { BANQUET_QUIZ_BY_STEP, BANQUET_QUIZ_DEFAULT_VALUES } from './BanquetQuiz.constants';
import { validateQuizValues } from './BanquetQuiz.utils';

const { breakPointType } = useBreakpoints();
const [isQuizVisible, showQuiz] = useBooleanState(false);

const currentStep = ref(BanquetQuizSteps.PERSONS);
const isFormSendSuccess = ref(false);
const totalSteps = Object.keys(BanquetQuizSteps).length / 2;
const isLastStep = computed(() => currentStep.value + 1 < totalSteps);

const quizValues = reactive<Partial<BanquetQuizStepsValues>>({});
const stepsValidity = computed(() => validateQuizValues(quizValues));

const handleDraftValuesChange = (values: BanquetQuizStepsValues[typeof currentStep.value]) => {
  Object.assign(quizValues, { [currentStep.value]: values });
};

const handleFormSubmit = () => {
  isFormSendSuccess.value = true;
};

const handleRepeatButtonClick = () => {
  Object.assign(quizValues, BANQUET_QUIZ_DEFAULT_VALUES);
  isFormSendSuccess.value = false;
  currentStep.value = BanquetQuizSteps.PERSONS;
};

</script>
<template>
  <div class="banquet-quiz">
    <h3 class="banquet-quiz__title">
      Рассчитайте стоимость вашего банкета
    </h3>
    <p v-if="breakPointType !== 'desktop'" class="banquet-quiz__subtitle">
      Ответьте на 5 вопросов и получите горку из шампанского в подарок
    </p>
    <form class="banquet-quiz__inner" @submit.prevent="">
      <div
        v-if="breakPointType === 'desktop' || isQuizVisible"
        class="banquet-quiz__steps">
          <div class="banquet-quiz__steps-content">
            <p class="banquet-quiz__progress-description">
            {{ `Вопрос ${currentStep + 1} из ${totalSteps}` }}
          </p>
          <ProgressLine
            class="banquet-quiz__progress-line"
            :steps="totalSteps"
            :currentStep="currentStep + 1"
          />
          <component
            class="banquet-quiz__step"
            :is="BANQUET_QUIZ_BY_STEP[currentStep]"
            :quizValues="quizValues"
            @onQuizValuesChange="handleDraftValuesChange"
          />
        </div>
        <p class="banquet-quiz__message" v-if="isFormSendSuccess">
          Спасибо, скоро с вами свяжется администратор!
          <VButton
            class="banquet-quiz__repeat-button"
            fill="clear"
            size="content"
            @click="handleRepeatButtonClick"
          >
              Пройти еще раз
          </VButton>
        </p>
        <div class="banquet-quiz__next-button">
          <VButton
            :icon="{slot: 'end', component: IcArrow}"
            :disabled="!stepsValidity[currentStep]"
            @click="isLastStep ? currentStep++ : handleFormSubmit()"
            :type="isLastStep ? 'submit' : 'button'"

          >
            {{ isLastStep ?  'Следующий вопрос': 'Забронировать' }}
          </VButton>
        </div>
      </div>
      <div
        class="banquet-quiz__banner"
        v-if="breakPointType === 'desktop' || !isQuizVisible"
      >
        <img class="banquet-quiz__banner-img" src="../../assets/images/bottle.png" alt="bottle">
        <p class="banquet-quiz__banner-text" v-if="breakPointType === 'desktop'">
          Ответьте на 5 вопросов и получите горку из шампанского в подарок
        </p>
        <VButton
          v-if="breakPointType !== 'desktop'"
          class="banquet-quiz__start-button"
          size="small"
          @click="showQuiz()"
          :icon="{slot: 'end', component: IcArrow}"
        >
          Начать
        </VButton>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.banquet-quiz {
  @include app-container;

  @include mobile {
    padding: 0 auto;
  }

  &__title {
    color: $color-main-darkness;
    @include title-small;

    @include desktop {
      @include title-big;
    }
  }

  &__subtitle {
    margin-top: 4px;

    @include text-main-small;
  }

  &__progress-description {
    color: $color-main-dark;
  }

  &__progress-line {
    margin-top: 8px;
  }

  &__inner {
    display: flex;
    column-gap: 20px;
    margin-top: 14px;
  }

  &__steps {
    position: relative;
    z-index: 2;
    background: $background-second;
    border-radius: 8px;
    flex-grow: 2;
  }

  &__steps-content {
    padding: 32px 40px;
    border-bottom: 1px solid #fff;

    @include mobile {
      padding: 24px 8px;
    }
  }

  &__step {
    margin-top: 32px;
  }

  &__message {
    padding: 0 40px;

      @include mobile {
        padding: 0px 16px;
      }
  }

  &__repeat-button {
    color: $color-second;
  }

  &__next-button {
    padding: 32px 40px;

    @include mobile {
      padding: 24px 16px;
    }
  }

  &__banner {
    position: relative;
    display: flex;
    background: url('../../assets/images/background.png') no-repeat center / cover;
    border-radius: 16px;
    max-width: 650px;
    flex-grow: 2;

    @include tablet {
      max-width: 100%;
      width: 100%;
    }

    @include mobile {
      max-width: 100%;
      width: 100%;
    }
  }

  &__banner-img {
    position: absolute;
    z-index: 0;
    top: -15px;
    bottom: 0;
    right: 0;
    height: calc(100% + 15px);
    object-fit: cover;
  }

  &__banner-text {
    margin: auto auto 32px 40px;
    max-width: 476px;
    position: relative;
    z-index: 1;
    color: $color-main-darkness;

    @include text-main-medium;
  }

  &__start-button {
    margin: 300px auto 30px 16px;
    position: relative;
    z-index: 1;
  }
}
</style>
