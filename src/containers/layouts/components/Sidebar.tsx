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
import { useAuth, useUI } from '../../../utils/hooks';
import { URLS_TO } from '../../../config/router/navigation/index';

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
    to: URLS_TO.HOME,
    Icon: Home,
  },
  {
    name: 'Stock',
    to: URLS_TO.STOCK,
    Icon: Store,
  },
  {
    name: 'Products',
    to: URLS_TO.PRODUCTS,
    Icon: LocalOffer,
  },
  {
    name: 'Analytics',
    to: URLS_TO.ANALYTICS,
    Icon: PieChart,
  },
  {
    name: 'Users',
    to: URLS_TO.USERS,
    Icon: PeopleAlt,
    Logout,
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
    navigate(URLS_TO.LOGIN);
  };

  return (
    <nav>
      <Drawer
        variant={matches ? 'permanent' : 'temporary'}
        open={openDrawer}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className={classes.root}
      >
        <Box>
          <SidebarHeader />
          <List>
            {routes.map(({ name, to, Icon }) => (
              <SidebarListItemButton
                key={to}
                component={NavLink}
                text={name}
                to={to}
                icon={<Icon />}
                selected={pathname === to}
              />
            ))}
          </List>
        </Box>
        <Box>
          <List>
            <SidebarListItemButton text="Log Out" icon={<Logout />} onClick={logOut} />
          </List>
          <Divider />
          <SidebarFooter />
        </Box>
      </Drawer>
    </nav>
  );
};
