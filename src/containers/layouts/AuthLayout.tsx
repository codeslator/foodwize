import { FC, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Image from 'mui-image';
import Stand from '../../assets/img/stand.svg';
import { CopyrightHeader } from './components/CopyrightHeader';
import useAuth from '../../utils/hooks/useAuth';

const AuthLayout: FC = () => {
  // const navigate = useNavigate();
  // const { isAuthenticated } = useAuth();

  // useEffect(() => {
  //   if(isAuthenticated) {
  //     navigate('/test', { replace: true });
  //   }
  // }, []);

  return (
    <Grid
      container
      component="main"
      sx={{
        height: '100vh',
        background: 'linear-gradient(180deg, #FFD489 70%, #FFE1AC 30%)',
        overflow: 'hidden'
      }}
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
      >
        <Image
          src={Stand}
          fit="scale-down"
          easing="linear"
          duration={0}
          sx={{ display: { xs: 'none', sm: 'block' }, zIndex: 0 }}
          style={{
            width: 'none',
            height: '100vh'
          }}
          wrapperStyle={{
            display: 'block',
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          borderTopLeftRadius: { sm: 30 },
          borderBottomLeftRadius: { sm: 30 },
          zIndex: { xs: 0 },
          backgroundColor: '#ffffff',
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CopyrightHeader />
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={10} lg={8}>
              <Outlet />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;