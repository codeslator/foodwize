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
import ModuleConfirm from '../../../components/shared/ModuleConfirm';

const initialUser = {
  firstName: '',
  lastName: '',
  role: '',
  avatarUrl: '',
  vendorId: '',
  accountId: '',
}

export const Header: FC = () => {
  const matches = useMediaQuery(defaultTheme.breakpoints.up('md'));
  const { toggleDrawer, toggleConfirm, openConfirm } = useUI();
  const { currentUser } = useAuth();
  const { firstName, lastName, role, avatarUrl, accountId, vendorId } = currentUser.user ? currentUser.user : initialUser;
  const { getAvatarInitials, getShortId } = useUtils();
  console.log(firstName, currentUser.user)

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={3}
      sx={{
        width: {
          md: 'calc(100% - 15vw)',
          lg: 'calc(100% - 10vw)'
        },
        ml: {
          md: '15vw',
          lg: '10vw',
        },
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
                    alt={getShortId(accountId || vendorId)}
                    src={avatarUrl ? avatarUrl : getAvatarInitials(firstName, lastName)}
                  />
                  {/* <ListItemText primary="Jhon Doe" secondary="Admin" sx={{ textAlign: 'right' }} /> */}
                  {/* <Avatar
                    alt="jhon_doe"
                    src={getAvatarInitials('Jhon', 'Doe')}
                  /> */}
                </ListItemAvatar>
              </ListItem>
            </List>
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleConfirm}
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
      <ModuleConfirm
        title="Confirm?"
        open={openConfirm}
        handleCancel={toggleConfirm}
        handleConfirm={() => console.log('Confirm success.')}
        size="lg"
      >
        <>Hello world</>
      </ModuleConfirm>
    </AppBar>
  );
};
