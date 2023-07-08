import type { Meta, StoryObj } from '@storybook/vue3';
import { VChip } from '.';
import { VChipProps } from './VChip.types';

const Template = (args: VChipProps) => <div style={{ background: '#F7F7F8', padding: '20px' }}><VChip {...args} /></div>;

const meta = {
  title: 'components/VChip',
  component: Template,
  tags: ['autodocs'],
} as Meta<VChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    type: 'checkbox',
    label: '10-30',
  },
};
