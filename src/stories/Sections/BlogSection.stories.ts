import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import BlogSection from '@/components/ui/Blog/BlogSection';

type StoryProps = ComponentProps<typeof BlogSection>

const meta: Meta<StoryProps> = {
    component: BlogSection,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
