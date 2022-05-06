import { FC } from 'react'
import { Box, SxProps, Tab, Tabs, Theme, useTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import useTabs from '../../utils/hooks/useTabs';
import TabPanel from './TabPanel';

interface ModuleTabsProps {
  tabNames: Array<string>;
  tabs: Array<JSX.Element>;
}

const tabSX: SxProps<Theme> = (theme) => ({
  minWidth: 0,
  minHeight: 0,
  px: 2,
  py: '5px',
  color: theme.palette.greys['60'],
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  '&.Mui-selected': {
    color: theme.palette.greys['100'],
  },
});

const ModuleTabs: FC<ModuleTabsProps> = ({ tabNames, tabs }) => {
  const theme = useTheme();
  const { selectedTab, handleSelectedTab, handleSelectedIndex, a11yProps } = useTabs();

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedTab}
          onChange={handleSelectedTab}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
          sx={{
            minHeight: 0,
          }}
        >
          {tabNames.map((name, index) => (
            <Tab label={name} {...a11yProps(index)} sx={tabSX}
            />
          ))}
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={selectedTab}
        onChangeIndex={handleSelectedIndex}
      >
        {tabs.map((Element, index) => (
          <TabPanel value={selectedTab} index={index} dir={theme.direction} key={index}>
            {Element}
          </TabPanel>
        ))}
      </SwipeableViews>
    </>
  )
}

export default ModuleTabs