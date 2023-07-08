import { Component } from 'vue';

interface Icon {
  component?: Component;
  slot: 'start' | 'end';
}

export interface VButtonProps {
  size?: 'small' | 'standard' | 'content';
  fill?: 'clear' | 'solid' | 'outlined';
  text?: string;
  color?: 'second';
  icon?: Icon;
}
