import { FC } from 'react'
import {
  Drawer,
  List,
  Divider,
  useMediaQuery,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Mail, Inbox, Home } from '@mui/icons-material';
import { defaultTheme } from '../../../assets/themes';
import { SidebarListItemButton } from '../../../components/shared/SidebarListButton';
import { NavLink } from 'react-router-dom';
import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';

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
    name: 'Mails',
    to: '/',
    Icon: Inbox
  }
]

export const Sidebar: FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery(defaultTheme.breakpoints.up('sm'));

  return (
    <nav>
      <Drawer
        variant={matches ? 'permanent' : 'temporary'}
        // open={mobileOpen}
        // onClose={handleDrawerToggle}
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
              />
            ))}
          </List>
        </Box>
        <Box>
          <List>
            <SidebarListItemButton
              text="Log Out"
              component={NavLink}
              to="/"
              icon={<Mail />}
            />
          </List>
          <Divider />
          <SidebarFooter />
        </Box>
      </Drawer>
    </nav>
  )
}
