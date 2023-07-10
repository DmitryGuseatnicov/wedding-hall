import { BanquetQuizSteps, BanquetQuizStepsValues } from './BanquetQuiz.types';

export const validateQuizValues = (
  values: Partial<BanquetQuizStepsValues>,
): Record<keyof BanquetQuizStepsValues, boolean> => ({
  [BanquetQuizSteps.PERSONS]: !!values[BanquetQuizSteps.PERSONS],
  [BanquetQuizSteps.EVENT_TYPE]: !!values[BanquetQuizSteps.EVENT_TYPE],
  [BanquetQuizSteps.OPTIONS]: !!values[BanquetQuizSteps.OPTIONS],
  [BanquetQuizSteps.BUDGET]: !!values[BanquetQuizSteps.BUDGET],
  [BanquetQuizSteps.CONTACTS_INFO]:
    !!(values[BanquetQuizSteps.CONTACTS_INFO]?.name
      && values[BanquetQuizSteps.CONTACTS_INFO]?.phone
    ),
});
