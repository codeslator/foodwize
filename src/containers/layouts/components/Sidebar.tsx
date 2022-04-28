import { FC } from 'react'
import {
  Drawer,
  List,
  Divider,
  useMediaQuery,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  Store,
  Home,
  LocalOffer,
  PieChart,
  PeopleAlt,
  Logout
} from '@mui/icons-material';
import { defaultTheme } from '../../../assets/themes';
import { SidebarListItemButton } from '../../../components/shared/SidebarListButton';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import useUI from '../../../utils/hooks/useUI';
import useAuth from '../../../utils/hooks/useAuth';

const useStyles = makeStyles({
  root: {
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 200,
      backgroundColor: defaultTheme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
  },
});

const routes = [
  {
    name: 'Home',
    to: '/',
    Icon: Home
  },
  {
    name: 'Stock',
    to: '/test',
    Icon: Store
  },
  {
    name: 'Products',
    to: '/test',
    Icon: LocalOffer
  },
  {
    name: 'Analytics',
    to: '/test',
    Icon: PieChart
  },
  {
    name: 'Users',
    to: '/test',
    Icon: PeopleAlt, Logout
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
  }

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
          </List>
        </Box>
        <Box>
          <List>
            <SidebarListItemButton
              text="Log Out"
              to="/login"
              icon={<Logout />}
              onClick={logOut}
            />
          </List>
          <Divider />
          <SidebarFooter />
        </Box>
      </Drawer>
    </nav>
  )
}
