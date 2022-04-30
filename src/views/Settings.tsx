/* eslint-disable no-constant-condition */
import { Box, Checkbox, FormControl, FormControlLabel, FormHelperText, Paper, Theme, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useState } from 'react';
import NavTabs, { TabContent } from '../components/shared/NavTabs';

const Check = () => (
  <FormControl
    fullWidth
    sx={(theme: Theme) => ({ p: '0px 8px', borderBottom: `1px dashed ${theme.palette.greys['20']}` })}>
    <FormControlLabel label="Test" control={<Checkbox color="secondary" />} />
    <FormHelperText>{false ? 'You can display an error' : ''}</FormHelperText>
  </FormControl>
);

const Settings = () => {
  // const tableData = [
  //   'Apolline',
  //   'Labrie',
  //   '+33 44 196060',
  //   'ApollineLabrie@ersurgeon.fr',
  //   'Finances',
  // ];
  const tabs = ['Notifications', 'Security', 'Permissions'];
  const [tab, setTab] = useState(tabs[0]);
  const tabIndex = tabs.indexOf(tab);
  console.log(tab);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
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
        <SwipeableViews index={tabIndex}>
          <TabContent index={0} tabIndex={tabIndex}>
            <Box>
              <Typography>Manage what kind of notifications you want to receive from us</Typography>
              <Paper sx={{ width: '12rem' }} variant="outlined" square>
                <Box
                  sx={(theme: Theme) => ({
                    p: '12px 8px',
                    borderBottom: `1px solid ${theme.palette.greys['20']}`,
                    backgroundColor: '#F8FBFC',
                  })}>
                  <Typography>Notifications</Typography>
                </Box>
                <Box>
                  <Check />
                  <Check />
                  <Check />
                </Box>
              </Paper>
            </Box>
          </TabContent>

          <TabContent index={1} tabIndex={tabIndex}>
            <Typography fontWeight="bold" variant="h4" color="#5E565A">
              Security
            </Typography>
          </TabContent>

          <TabContent index={2} tabIndex={tabIndex}>
            <Typography fontWeight="bold" variant="h4" color="#5E565A">
              Permissions
            </Typography>
          </TabContent>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default Settings;
