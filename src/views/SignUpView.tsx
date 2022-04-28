import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Link,
  Typography
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { SignInForm } from '../components/auth/SignInForm';

const SignInView: FC = () => {
  return (
    <>
      <Helmet>
        <title>Register | Foodwize</title>
      </Helmet>
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 2 }}>
          <SignInForm />
          <Grid container>
            <Grid item xs>
              <Link component={NavLink} to="/recover-password" variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link component={NavLink} to="/register" variant="body2">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignInView;