import type { Meta, StoryObj } from '@storybook/vue3';
import { ProgressLine } from '.';
import { ProgressLineProps } from './ProgressLine.types';

const Template = (args: ProgressLineProps) => <ProgressLine {...args} />;

const meta = {
  title: 'components/ProgressLine',
  component: Template,
  tags: ['autodocs'],
} as Meta<ProgressLineProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: 6,
    currentStep: 2,
  },
};
