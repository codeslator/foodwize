import { FC } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  Box,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
import { Menu, KeyboardArrowDown } from '@mui/icons-material';
import { defaultTheme } from '../../../assets/themes';
import { useAuth, useUI, useUtils } from '../../../utils/hooks';

export const Header: FC = () => {
  const matches = useMediaQuery(defaultTheme.breakpoints.up('md'));
  const { toggleDrawer } = useUI();
  const { currentUser } = useAuth();
  const { getAvatarInitials, getShortId } = useUtils();
  const { user: { firstName, lastName, role, avatarUrl, accountId } } = currentUser;

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={3}
      sx={{
        width: { md: `calc(100% - ${200}px)` },
        ml: { md: `${200}px` },
      }}>
      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={matches ? 'flex-end' : 'space-between'}
          alignItems="center"
          width="100%">
          {!matches && (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
          )}
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <List sx={{ width: '100%', maxWidth: 360, padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <ListItemText primary={`${firstName} ${lastName}`} secondary={role} sx={{ textAlign: 'right' }} />
                <ListItemAvatar sx={{ ml: '10px' }}>
                  <Avatar
                    alt={getShortId(accountId)}
                    src={avatarUrl ? avatarUrl : getAvatarInitials(firstName, lastName)}
                  />
                </ListItemAvatar>
              </ListItem>
            </List>
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                // edge="end"
                // onClick={handleDrawerToggle}
                // sx={{ mr: 2 }}
              >
                <KeyboardArrowDown />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
