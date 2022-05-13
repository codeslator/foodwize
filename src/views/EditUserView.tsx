import { Box, Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import rowsData from '../components/shared/mockData';

const EditUsers = () => {
  const { id, firstName, lastName, email, phoneNumber, role, status } = rowsData[0];
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" color="#5E565A">
          User Detail
        </Typography>
        <Button color="secondary" variant="outlined">
          <Typography variant="body2" sx={{ textTransform: 'none', padding: '0 20px' }}>
            Edit User
          </Typography>
        </Button>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1" color="#5E565A">
          Personal Information
        </Typography>
        <Divider />
      </Box>

      <Grid container spacing={3} sx={{ padding: '20px 0' }} xs={8} item>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <TextField name="Name" label="Name" variant="outlined" fullWidth placeholder="Input text" value={firstName} />
          <TextField
            name="Last Name"
            label="Last Name"
            variant="outlined"
            fullWidth
            placeholder="Input text"
            value={lastName}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <TextField
            name="Phone Number"
            label="Phone Number"
            variant="outlined"
            fullWidth
            placeholder="Input text"
            value={phoneNumber}
          />
          <TextField name="Email" label="Email" variant="outlined" fullWidth placeholder="Input text" value={email} />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Typography variant="subtitle1" color="#5E565A">
          User Information
        </Typography>
        <Divider />
      </Box>
      <Grid container spacing={3} sx={{ padding: '20px 0' }} xs={8} item>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <TextField select label="User Role" fullWidth value={role}>
            <MenuItem value={'User'}>User</MenuItem>
            <MenuItem value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'Super Admin'}>Super Admin</MenuItem>
            <MenuItem value={'Finances'}>Finances</MenuItem>
            <MenuItem value={'Operations'}>Operations</MenuItem>
          </TextField>
          <TextField select label="Status" fullWidth value={status}>
            <MenuItem key={1} value="Active">
              Active
            </MenuItem>
            <MenuItem key={2} value="nactive">
              Inactive
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'start', gap: '15px' }}>
        <LoadingButton
          disabled
          color="secondary"
          type="submit"
          variant="contained"
          sx={{ color: '#FFF', width: '7%', mt: '20px' }}
        >
          Submit
        </LoadingButton>
      </Grid>
    </>
  );
};

export default EditUsers;
