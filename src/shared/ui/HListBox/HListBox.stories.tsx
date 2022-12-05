import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HListBox } from './HListBox';

export default {
  title: 'shared/HListBox',
  component: HListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HListBox>;

const Template: ComponentStory<typeof HListBox> = (args) => <HListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
