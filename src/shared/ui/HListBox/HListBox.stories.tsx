import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HListBox } from './HListBox';

export default {
  title: 'shared/HListBox',
  component: HListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Label',
    value: 'Select Value',
    items: [
      {
        value: '1',
        content: 'content 1',
      },
      {
        value: '2',
        content: 'content 2',
      },
      {
        value: '3',
        content: 'content 3 12312312312',
        disabled: true,
      },
    ],
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof HListBox>;

const Template: ComponentStory<typeof HListBox> = (args) => <HListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom_left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom_right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top_right',
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top_right',
};
