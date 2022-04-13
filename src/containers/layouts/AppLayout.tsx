import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const AppLayout: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box sx={{ width: { sm: 200 }, flexShrink: { sm: 0 } }}>
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${200}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;