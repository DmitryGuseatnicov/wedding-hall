import type { Meta, StoryObj } from '@storybook/vue3';
import { BanquetQuiz } from '.';

const Template = () => <BanquetQuiz />;

const meta = {
  title: 'components/BanquetQuiz',
  component: Template,
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
