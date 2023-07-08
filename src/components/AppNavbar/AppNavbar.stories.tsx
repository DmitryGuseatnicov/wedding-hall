import type { Meta, StoryObj } from '@storybook/vue3';
import { AppNavbar } from '.';

const Template = () => <AppNavbar />;

const meta = {
  title: 'components/AppNavbar',
  component: Template,
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
