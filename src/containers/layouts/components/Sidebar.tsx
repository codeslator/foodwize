import { FC } from 'react';
import { Drawer, List, Divider, useMediaQuery, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Store, Home, LocalOffer, PieChart, PeopleAlt, Logout, SettingsOutlined } from '@mui/icons-material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { defaultTheme } from '../../../assets/themes';
import { SidebarListItemButton } from '../../../components/shared/SidebarListButton';
import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import useUI from '../../../utils/hooks/useUI';
import useAuth from '../../../utils/hooks/useAuth';

const useStyles = makeStyles({
  root: {
    '& .MuiDrawer-paper': {
      width: 200,
      MaxHeight: '100%',
      overflowY: 'unset',
      boxSizing: 'border-box',
      backgroundColor: defaultTheme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
});

const routes = [
  {
    name: 'Home',
    to: '/',
    Icon: Home,
  },
  {
    name: 'Stock',
    to: '/test',
    Icon: Store,
  },
  {
    name: 'Products',
    to: '/test',
    Icon: LocalOffer,
  },
  {
    name: 'Analytics',
    to: '/test',
    Icon: PieChart,
  },
  {
    name: 'Users',
    to: '/users',
    Icon: PeopleAlt,
  },
  {
    name: 'Settings',
    to: '/settings',
    Icon: SettingsOutlined,
  },
];

export const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const matches = useMediaQuery(defaultTheme.breakpoints.up('sm'));
  const { toggleDrawer, openDrawer } = useUI();
  const { logout } = useAuth();

  const logOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <Drawer
      variant={matches ? 'permanent' : 'temporary'}
      open={openDrawer}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      className={classes.root}>
      <SidebarHeader />
      {/* <Box sx={{ 'max-height': '50%', overflow: 'hidden', position: 'relative' }}> */}
      <PerfectScrollbar>
        {routes.map(({ name, to, Icon }, index) => (
          <SidebarListItemButton
            key={index}
            text={name}
            component={NavLink}
            to={to}
            icon={<Icon />}
            selected={pathname === to}
          />
        ))}
      </PerfectScrollbar>
      {/* </Box> */}
      <Box>
        <SidebarListItemButton text="Log Out" to="/login" icon={<Logout />} onClick={logOut} />
        <Divider />
        <SidebarFooter />
      </Box>
    </Drawer>
  );
};
