import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../../../assets/img/logo.svg';

const useStyles = makeStyles({
  caption: {
    marginBottom: 5,
  }
});

export const SidebarFooter: FC = () => {
  const classes = useStyles();
  
  return (
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
  );
};
