import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import IconBox from '@/components/ui/AboutMe/IconBox';

type StoryProps = ComponentProps<typeof IconBox>

const meta: Meta<StoryProps> = {
    component: IconBox,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const IBox: Story = {};