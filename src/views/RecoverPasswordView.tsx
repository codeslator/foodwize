import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Link,
  Typography
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { RecoverPasswordForm } from '../components/auth/RecoverPasswordForm';
import { URLS_TO } from '../config/router/navigation/index';

const SignInView: FC = () => {
  return (
    <>
      <Helmet>
        <title>Recover Password | Foodwize</title>
      </Helmet>
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" color="primary">
          Forgot your password?
        </Typography>
        <Box sx={{ mt: 2 }}>
          <RecoverPasswordForm />
          <Grid container spacing={1} sx={{ mt: 2, textAlign: 'center' }}>
            <Grid item xs={12}>
              <Link component={NavLink} to={URLS_TO.LOGIN} variant="body2">Do you already have an account? Login</Link>
            </Grid>
            <Grid item xs={12}>
              <Link component={NavLink} to={URLS_TO.REGISTER} variant="body2">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignInView;