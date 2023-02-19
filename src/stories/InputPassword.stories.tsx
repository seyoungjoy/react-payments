import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputPassword from '../components/form/InputPassword';

export default {
  title: 'Form',
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => (
  <InputPassword {...args} />
);

export const Password = Template.bind({});
