import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import AboutMeSection from '@/components/ui/AboutMe/AboutMeSection';

type StoryProps = ComponentProps<typeof AboutMeSection>

const meta: Meta<StoryProps> = {
    component: AboutMeSection,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const AbtMe: Story = {};