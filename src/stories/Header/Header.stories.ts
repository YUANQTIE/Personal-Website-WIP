import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import Header from '@/components/ui/Header/Header';

type StoryProps = ComponentProps<typeof Header>

const meta: Meta<StoryProps> = {
    component: Header,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
