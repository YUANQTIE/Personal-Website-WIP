import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import CategoryTab from '@/components/ui/CategoryTab';

type StoryProps = ComponentProps<typeof CategoryTab>

const meta: Meta<StoryProps> = {
    component: CategoryTab,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const AboutMe: Story = {};