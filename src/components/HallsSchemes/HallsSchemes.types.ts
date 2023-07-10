export interface Hall {
  name: string,
  schemaImg: string,
  description: string;
  square: number;
  banquetPersons: number;
  buffetPersons: number;
}

export interface HallsSchemesProps {
  halls: Hall[]
}
