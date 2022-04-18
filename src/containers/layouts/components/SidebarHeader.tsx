import { FC } from 'react';
import { Box } from '@mui/material';
import Foodwise from '../../../assets/img/foodwize.svg';

export const SidebarHeader: FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      my: '30px'
    }}>
      <img src={Foodwise} alt="foodwize logo" />
    </Box>
  );
};
