import type { Meta, StoryObj } from '@storybook/vue3';
import { AppFooter } from '.';

const Template = () => <AppFooter />;

const meta = {
  title: 'components/AppFooter',
  component: Template,
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
