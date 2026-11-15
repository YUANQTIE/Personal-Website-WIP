import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import EducationSection from '@/components/ui/Education/EducationSection';

type StoryProps = ComponentProps<typeof EducationSection>

const meta: Meta<StoryProps> = {
    component: EducationSection,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
