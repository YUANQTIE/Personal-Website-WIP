import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import LeftBox from '@/components/ui/AboutMe/LeftBox';

type StoryProps = ComponentProps<typeof LeftBox>

const meta: Meta<StoryProps> = {
    component: LeftBox,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const LBox: Story = {};