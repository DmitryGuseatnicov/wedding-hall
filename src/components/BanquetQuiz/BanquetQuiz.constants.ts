import { BanquetQuizSteps } from './BanquetQuiz.types';
import { BanquetQuizPersonsStep } from './BanquetQuizPersonsStep';
import { BanquetQuizContactsInfoStep } from './BanquetQuizContactsInfoStep';
import { BanquetQuizOptionsStep } from './BanquetQuizOptionsStep';
import { BanquetQuizEventTypeStep } from './BanquetQuizEventTypeStep';
import { BanquetQuizBudgetStep } from './BanquetQuizBudgetStep';

export const BANQUET_QUIZ_BY_STEP = {
  [BanquetQuizSteps.PERSONS]: BanquetQuizPersonsStep,
  [BanquetQuizSteps.EVENT_TYPE]: BanquetQuizEventTypeStep,
  [BanquetQuizSteps.OPTIONS]: BanquetQuizOptionsStep,
  [BanquetQuizSteps.BUDGET]: BanquetQuizBudgetStep,
  [BanquetQuizSteps.CONTACTS_INFO]: BanquetQuizContactsInfoStep,
};

export const BANQUET_QUIZ_VALIDITY = {
  [BanquetQuizSteps.PERSONS]: false,
  [BanquetQuizSteps.EVENT_TYPE]: false,
  [BanquetQuizSteps.OPTIONS]: false,
  [BanquetQuizSteps.BUDGET]: false,
  [BanquetQuizSteps.CONTACTS_INFO]: false,
};
