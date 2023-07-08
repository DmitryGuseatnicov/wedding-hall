import { SocialType } from '@/types';

export interface SocialLinkProps {
  type: SocialType;
  color?: 'main' | 'second';
  shape?: 'round' | 'square'
}
