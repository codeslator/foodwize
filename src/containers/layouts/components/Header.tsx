import { FC } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from '@mui/material'
import { Menu, KeyboardArrowDown } from '@mui/icons-material';
import { defaultTheme } from '../../../assets/themes';

export const Header: FC = () => {
  const matches = useMediaQuery(defaultTheme.breakpoints.up('sm'));

  return (
    <header>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          width: { sm: `calc(100% - ${200}px)` },
          ml: { sm: `${200}px` },
        }}
      >
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent={matches ? 'flex-end' : 'space-between'}
            alignItems="center"
            width="100%"
          >
            {!matches && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                // onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
            )}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent='center'
              alignItems="center"
            >
              <List sx={{ width: '100%', maxWidth: 360, py: 0, px: 0 }}>
                <ListItem>
                  <ListItemText primary="John Doe" secondary="Admin" sx={{ textAlign: 'right' }} />
                  <ListItemAvatar sx={{ ml: '10px' }}>
                    <Avatar>
                      JD
                    </Avatar>
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
    </header>
  );
};
