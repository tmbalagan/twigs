import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '../../stitches.config';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  fontFamily: 'inherit',
  backgroundColor: '$white900',
  paddingInlineStart: '$16',
  paddingInlineEnd: '$16',
  height: 'calc(100% - 3px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$md',
  fontWeight: '$7',
  lineHeight: '$md',
  color: '$neutral700',
  userSelect: 'none',
  borderBottom: '3px solid transparent',
  '&:hover': { color: '$neutral800' },
  '&[data-state="active"]': {
    color: '$secondary700',
    borderBottom: '3px solid currentColor',
  },
  '&:focus': {
    position: 'relative',
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  backgroundColor: '$white900',
  outline: 'none',
});

export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
