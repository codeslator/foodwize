import { FC, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Collapse,
  Grid,
  Link,
  Typography
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { Helmet } from 'react-helmet';
import { SignInForm } from '../components/auth/SignInForm';
import { useAuth } from '../utils/hooks';

const SignInView: FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { login, isLoading, isAuthenticated, error } = useAuth();
  
  useEffect(() => {
    if (error.length > 0) {
      enqueueSnackbar(error, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        TransitionComponent: Collapse,
      });
    }
  }, [error]);

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/test');
    }
  }, [isAuthenticated]);
  
  return (
    <>
      <Helmet>
        <title>Login | Foodwize</title>
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
          <SignInForm login={login} isLoading={isLoading} />
          <Grid container sx={{ mt: 1 }}>
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