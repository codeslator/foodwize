import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import useAuth from '../../utils/hooks/useAuth';
import { URLS_TO } from '../../config/router/navigation/index';
import useAxiosInterceptor from '../../config/useAxiosInterceptor';

const AppLayout: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(URLS_TO.ROOT, { replace: true });
    }
  }, []);

  useAxiosInterceptor();

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        sx={{
          width: {
            md: '15vw',
            lg: '10vw',
          },
          flexShrink: { md: 0 }
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${200}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;