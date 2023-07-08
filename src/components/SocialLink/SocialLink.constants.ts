import {
  IcFacebook, IcTelegram, IcVk, IcWhatsUp,
} from '@/assets/icons';
import { APP_INFO } from '@/constants';

export const APP_SOCIAL_INFO = {
  facebook: {
    link: APP_INFO.social.facebook,
    Icon: IcFacebook,
  },
  vk: {
    link: APP_INFO.social.vk,
    Icon: IcVk,
  },
  telegram: {
    link: APP_INFO.social.telegram,
    Icon: IcTelegram,
  },
  whatsapp: {
    link: APP_INFO.social.whatsapp,
    Icon: IcWhatsUp,
  },
};

export const COLOR_VARIANTS = {
  main: 'social-link_color_main',
  second: 'social-link_color_second',
};

export const SHAPE_VARIANTS = {
  round: 'social-link_shape_round',
  square: 'social-link_shape_square',
};
