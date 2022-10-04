import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../box';

export default {
  component: Box,
  title: 'Box',
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box
    {...args}
    css={{
      backgroundColor: 'gray',
      color: 'white',
      height: '200px',
      width: '300px',
      p: 8,
    }}
  >
    This is a box
  </Box>
);
export const Default = Template.bind({});
