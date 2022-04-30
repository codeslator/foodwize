/* eslint-disable react/destructuring-assignment */
import React, { FC, useState } from 'react';
import { SxProps, Theme, Divider, Fade, Box } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';

interface Props {
  tabs: Array<string>;
  onSetTab: React.Dispatch<React.SetStateAction<string>>;
}

export const useNavTabs = (tabs: Array<string>) => {
  const [tabSelected, setTab] = useState(tabs[0]);
  const tabSelectedIndex = tabs.indexOf(tabSelected);

  return { tabSelected, setTab, tabSelectedIndex };
};

export const TabContent: FC<{ index: number; tabIndex: number }> = ({ children, index, tabIndex }) => (
  <Fade
    timeout={{
      enter: 1000,
      exit: 200,
    }}
    in={index === tabIndex}>
    <Box>{children}</Box>
  </Fade>
);

export const SwipeableTabs = (tabIndex: number, tabs: Array<JSX.Element>) => (
  <SwipeableViews index={tabIndex}>
    {tabs.map((tabContent: JSX.Element, i: number) => (
      <TabContent index={i} tabIndex={tabIndex}>
        {tabContent}
      </TabContent>
    ))}
  </SwipeableViews>
);

const NavTabs: FC<Props> = ({ tabs, onSetTab }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    onSetTab(tabs[newValue]);
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
        sx={(theme) => ({
          cursor: 'pointer',
          fontWeight: 'bold',
          minHeight: 0,
        })}>
        {tabs.map((item, i) => {
          return <Tab sx={tabSX} disableRipple label={item} key={`header-tab-${i++}`} />;
        })}
      </Tabs>
      <Divider />
    </>
  );
};

export default NavTabs;
