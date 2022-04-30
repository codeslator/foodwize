import React, { FC } from 'react';
import { SxProps, Theme, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface Props {
  tabs: Array<string>;
  onSetTab: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderTabs: FC<Props> = ({ tabs, onSetTab }) => {
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

export default HeaderTabs;
