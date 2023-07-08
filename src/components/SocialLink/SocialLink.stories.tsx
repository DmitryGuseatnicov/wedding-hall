import type { Meta, StoryObj } from '@storybook/vue3';
import { SocialLink } from '.';
import { SocialLinkProps } from './SocialLink.types';

const Template = (args: SocialLinkProps) => <SocialLink {...args} />;

const meta = {
  title: 'components/SocialLink',
  component: Template,
  tags: ['autodocs'],
} as Meta<SocialLinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'main',
    shape: 'round',
    type: 'telegram',
  },
};
