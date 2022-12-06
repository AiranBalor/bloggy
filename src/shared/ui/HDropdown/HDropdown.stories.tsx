import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button/Button';
import { HDropdown } from './HDropdown';

export default {
  title: 'shared/HDropdown',
  component: HDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HDropdown>;

const Template: ComponentStory<typeof HDropdown> = (args) => <HDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'Text1',
    },
    {
      content: 'Text2',
    },
    {
      content: 'Text3',
    },
  ],
};
