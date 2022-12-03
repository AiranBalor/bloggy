import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: (
      <>
        <div>Flex</div>
        <div>Flex</div>
        <div>Flex</div>
        <div>Flex</div>
      </>
    ),
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
};

export const Gap4 = Template.bind({});
Gap4.args = {
  gap: '4',
};

export const Gap8 = Template.bind({});
Gap8.args = {
  gap: '8',
};

export const Gap16 = Template.bind({});
Gap16.args = {
  gap: '16',
};

export const Gap32 = Template.bind({});
Gap32.args = {
  gap: '32',
};

export const AlignStart = Template.bind({});
AlignStart.args = {
  align: 'start',
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
  justify: 'end',
};

export const justifyBetween = Template.bind({});
justifyBetween.args = {
  justify: 'between',
};
