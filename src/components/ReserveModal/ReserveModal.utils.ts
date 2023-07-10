import { ReserveModalFormValues } from './ReserveModal.types';

export const validateReserveModalForm = (
  values: ReserveModalFormValues,
):Record<keyof ReserveModalFormValues, boolean> => {
  console.log(values);

  return {
    name: !!values.name,
    phone: !!values.phone,
  };
};
