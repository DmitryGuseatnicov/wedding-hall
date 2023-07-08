import type { Meta, StoryObj } from '@storybook/vue3';
import { AppHeader } from '.';

const Template = () => <AppHeader />;

const meta = {
  title: 'components/AppHeader',
  component: Template,
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
