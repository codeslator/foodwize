import { FC } from 'react'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Box,
  Typography,
} from '@mui/material';
import { makeStyles, Theme } from '@mui/styles';
import { Mail, Inbox } from '@mui/icons-material';
import { defaultTheme } from '../../../assets/themes';
import Foodwise from '../../../assets/img/foodwize.svg';
import Logo from '../../../assets/img/logo.svg';

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
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  icon: {
    color: '#ffffff',
    minWidth: 0,
  },
  caption: {
    marginBottom: 5,
  }
});

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
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            my: '30px'
          }}>
            <img src={Foodwise} alt="foodwize logo" />
          </Box>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItemButton
                key={text}
                className={classes.button}
                selected={index === 1}
              >
                <ListItemIcon className={classes.icon}>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box>
          <List>
            {['Logout'].map((text, index) => (
              <ListItemButton
                key={text}
                className={classes.button}
                selected={index === 1}
              >
                <ListItemIcon className={classes.icon}>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            my: '30px'
          }}>
            <Typography
              color="white"
              variant="caption"
              className={classes.caption}
            >
              Powered by
            </Typography>
            <img src={Logo} alt="foodwize logo" />
          </Box>
        </Box>
      </Drawer>
    </nav>
  )
}
