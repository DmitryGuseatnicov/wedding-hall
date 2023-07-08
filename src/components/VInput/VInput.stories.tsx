import type { Meta, StoryObj } from '@storybook/vue3';
import { VInput } from '.';
import { VInputProps } from './VInput.types';

const Template = (args: VInputProps) => <VInput {...args} />;

const meta = {
  title: 'components/VInput',
  component: Template,
  tags: ['autodocs'],
} as Meta<VInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    label: 'test',
    error: 'error',
  },
};
