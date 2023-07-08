import type { Meta, StoryObj } from '@storybook/vue3';
import { IcFacebook } from '@/assets/icons';
import { VButton } from '.';
import { VButtonProps } from './VButton.types';

const Template = (args: VButtonProps) => <VButton {...args}>Click Me</VButton>;

const meta = {
  title: 'components/VButton',
  component: Template,
  tags: ['autodocs'],
} as Meta<VButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'second',
    icon: {
      slot: 'end',
      component: IcFacebook,
    },
  },
};
