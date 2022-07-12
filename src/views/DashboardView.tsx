import { FC } from 'react';
import { Grid, Box } from '@mui/material';


const DashboardView: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          component="iframe"
          src="http://foodwize-data.storehus.com/"
          sx={{
            width: '100%',
            height: '83vh',
            overflowX: 'hidden',
            border: 'none'
          }}
        />
      </Grid>
    </Grid>
  );
};

export default DashboardView;