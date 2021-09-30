import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConfirmButton from './ConfirmButton';

export default {
  title: 'Common Button',
  component: ConfirmButton,
} as ComponentMeta<typeof ConfirmButton>;

const Template: ComponentStory<typeof ConfirmButton> = (args) => (
  <ConfirmButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '入力内容を送信します',
  id: 'submit',
  type: 'submit',
};
