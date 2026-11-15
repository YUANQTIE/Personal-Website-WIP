import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import ProjectsSection from '@/components/ui/Projects/ProjectsSection';

type StoryProps = ComponentProps<typeof ProjectsSection>

const meta: Meta<StoryProps> = {
    component: ProjectsSection,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
