// eslint-disable-next-line no-shadow
export enum BanquetQuizSteps {
  PERSONS,
  EVENT_TYPE,
  OPTIONS,
  BUDGET,
  CONTACTS_INFO
}

interface BanquetQuizContactsInfoValues {
  name?: string;
  phone?: string;
}

export interface BanquetQuizStepsValues {
  [BanquetQuizSteps.PERSONS]: string;
  [BanquetQuizSteps.EVENT_TYPE]: string;
  [BanquetQuizSteps.OPTIONS]: string[];
  [BanquetQuizSteps.BUDGET]: string;
  [BanquetQuizSteps.CONTACTS_INFO]: BanquetQuizContactsInfoValues;
}
