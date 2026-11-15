import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import RightBox from '@/components/ui/AboutMe/RightBox';

type StoryProps = ComponentProps<typeof RightBox>

const meta: Meta<StoryProps> = {
    component: RightBox,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const RBox: Story = {};