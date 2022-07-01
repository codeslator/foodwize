import { Box, Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { CheckList } from '../shared/CheckList';

const Notifications = () => {
  const checks = [
    {
      label: 'Email',
    },
    {
      label: 'Push',
    },
    {
      label: 'Text Messages',
    },
    {
      label: 'Phone Call',
    },
  ];

  return (
    <Box>
      <Typography>Manage what kind of notifications you want to receive from us</Typography>
      <Grid container mt={2}>
        <Grid item mr={2}>
          <CheckList checks={checks} title="Notifications" />
        </Grid>
        <Grid item mr={2}>
          <CheckList checks={checks} title="Messages" />
        </Grid>
      </Grid>
      <Box mt={2}>
        <LoadingButton type="submit" variant="contained" color="secondary" sx={{ color: '#ffffff' }}>
          Save
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default Notifications;