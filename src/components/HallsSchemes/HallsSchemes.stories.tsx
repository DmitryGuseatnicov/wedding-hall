import type { Meta, StoryObj } from '@storybook/vue3';
import { HallsSchemes } from '.';
import { HallsSchemesProps } from './HallsSchemes.types';

const Template = (args: HallsSchemesProps) => <HallsSchemes {...args} />;

const meta = {
  title: 'components/HallsSchemes',
  component: Template,
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
