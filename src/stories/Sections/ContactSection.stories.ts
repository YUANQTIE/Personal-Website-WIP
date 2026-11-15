import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import ContactSection from '@/components/ui/Contact/ContactSection';

type StoryProps = ComponentProps<typeof ContactSection>

const meta: Meta<StoryProps> = {
    component: ContactSection,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
