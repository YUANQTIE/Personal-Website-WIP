import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import HexagonFrame from '@/components/ui/Hero/HexagonFrame';

type StoryProps = ComponentProps<typeof HexagonFrame>

const meta: Meta<StoryProps> = {
    component: HexagonFrame,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Hex: Story = {};