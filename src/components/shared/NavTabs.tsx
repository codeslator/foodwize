/* eslint-disable react/destructuring-assignment */
import React, { FC, ReactNode, useState } from 'react';
import { SxProps, Theme, Divider, Fade, Box } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews, { SwipeableViewsProps } from 'react-swipeable-views';

export const useNavTabs = (tabs: Array<string>) => {
  const [tabSelected, setTab] = useState(tabs[0]);
  const tabSelectedIndex = tabs.indexOf(tabSelected);

  return { tabs, tabSelected, setTab, tabSelectedIndex };
};

interface SwipeableTabsProps {
  tabSelectedIndex: number;
  children: Array<JSX.Element>;
  axis?: SwipeableViewsProps['axis'];
}
export const SwipeableTabs: FC<SwipeableTabsProps> = ({ tabSelectedIndex, children, axis }) => (
  <SwipeableViews index={tabSelectedIndex} axis={axis}>
    {children.map((tabContent: JSX.Element, i: number) => (
      <Fade
        key={`swipeable-tab-${i++}`}
        timeout={{
          enter: 1000,
          exit: 200,
        }}
        in={i === tabSelectedIndex}
      >
        <Box>{tabContent}</Box>
      </Fade>
    ))}
  </SwipeableViews>
);

interface NavTabsProps {
  tabNames: Array<string>;
  tabPanels: Array<ReactNode | FC | JSX.Element>;
  onSetTab: React.Dispatch<React.SetStateAction<string>>;
}
export const NavTabs: FC<NavTabsProps> = ({ tabNames, onSetTab }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    onSetTab(tabNames[newValue]);
  };

  const tabSX: SxProps<Theme> = (theme) => ({
    minWidth: 0,
    minHeight: 0,
    p: 0,
    mr: '12px',
    color: theme.palette.greys['60'],
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    '&.Mui-selected': {
      color: theme.palette.greys['100'],
    },
  });
  return (
    <>
      <Tabs
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        sx={{
          cursor: 'pointer',
          fontWeight: 'bold',
          minHeight: 0,
        }}
      >
        {tabNames.map((item, i) => {
          return <Tab sx={tabSX} disableRipple label={item} key={`header-tab-${i++}`} />;
        })}
      </Tabs>
      <Divider />
    </>
  );
};
