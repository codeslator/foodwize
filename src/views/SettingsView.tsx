/* eslint-disable no-constant-condition */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavTabs, SwipeableTabs, useNavTabs } from '../components/shared/NavTabs';
import { Notifications } from '../components/Settings/Notifications';
import { Security } from '../components/Settings/Security';
import { Permissions } from '../components/Settings/Permissions';

const SettingsView = () => {
  const { tabs, setTab, tabSelectedIndex } = useNavTabs([
    // 'Notifications',
    'Security',
    // 'Permissions'
  ]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontWeight="bold" variant="h4" color="#5E565A">
          Settings
        </Typography>
        {/* <Button color="secondary" variant="contained">
          <Typography
            variant="body2"
            color="#fff"
            sx={{ textTransform: 'none' }}
          >
            Add Users
          </Typography>
        </Button> */}
      </Box>
      <Box mt={2}>
        <NavTabs tabs={tabs} onSetTab={setTab} />
      </Box>
      <Box mt={2}>
        <SwipeableTabs tabSelectedIndex={tabSelectedIndex}>
          {[
            // <Notifications />,
            <Security />,
            // <Permissions />
          ]}
        </SwipeableTabs>
      </Box>
    </>
  );
};

export default SettingsView;
