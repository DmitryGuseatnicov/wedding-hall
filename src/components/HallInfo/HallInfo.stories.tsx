import type { Meta, StoryObj } from '@storybook/vue3';
import { HallInfo } from '.';
import { HallInfoProps } from './HallInfo.types';

const Template = (args: HallInfoProps) => <HallInfo {...args} />;

const meta = {
  title: 'components/HallInfo',
  component: Template,
  tags: ['autodocs'],
} as Meta<typeof HallInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Просторный зал с панорамным видом на город',
    square: 160,
    banquetPersons: 100,
    buffetPersons: 200,
  },
};
