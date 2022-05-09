import { LoadingButton } from '@mui/lab';
import { Grid, MenuItem, TextField } from '@mui/material';

const Form = () => {
  return (
    <form>
      <Grid container spacing={3} sx={{ padding: '20px 80px 60px' }}>
        <Grid item xs={12} sm={12}>
          <TextField name="Name" label="Name" variant="outlined" fullWidth placeholder="Input text" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField name="Last Name" label="Last Name" variant="outlined" fullWidth placeholder="Input text" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField name="Phone Number" label="Phone Number" variant="outlined" fullWidth placeholder="Input text" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField name="Email" label="Email" variant="outlined" fullWidth placeholder="Input text" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField select label="User Role" fullWidth>
            <MenuItem value={'User'}>User</MenuItem>
            <MenuItem value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'Super Admin'}>Super Admin</MenuItem>
            <MenuItem value={'Finances'}>Finances</MenuItem>
            <MenuItem value={'Operations'}>Operations</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField select label="Status" fullWidth>
            <MenuItem key={1} value="Active">
              Active
            </MenuItem>
            <MenuItem key={2} value="Inactive">
              Inactive
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <LoadingButton color="inherit" type="submit" variant="contained" sx={{ color: '#333', width: '50%' }}>
            Clear
          </LoadingButton>
          <LoadingButton color="primary" type="submit" variant="contained" sx={{ color: '#FFF', width: '50%' }}>
            Submit
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
