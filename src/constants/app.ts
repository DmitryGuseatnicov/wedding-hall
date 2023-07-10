import hallImg from '@/assets/images/hall-plan-1.png';

export const APP_INFO = {
  phone: '+7 (123) 45-67-89',
  address: 'г. Ставрополь, ул. Пушкина 272',
  social: {
    facebook: '/change-me',
    vk: '/change-me',
    telegram: '/change-me',
    whatsapp: '/change-me',
  },
  halls: [
    {
      name: 'Зал Первый',
      schemaImg: hallImg,
      description: 'Просторный зал с панорамным видом на город',
      square: 160,
      banquetPersons: 100,
      buffetPersons: 200,
    },
    {
      name: 'Зал Второй',
      schemaImg: hallImg,
      description: 'Большой зал, подойдет для грандиозных мероприятий',
      square: 360,
      banquetPersons: 200,
      buffetPersons: 500,
    },
  ],
};
