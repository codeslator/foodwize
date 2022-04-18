import { FC } from 'react'
import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import Logo from '../../../assets/img/foodwise-color.svg'

export const CopyrightHeader: FC = () => {
  return (
    <Box>
      <Typography color="secondary" fontWeight={600} align="center">Welcome to</Typography>
      <Image
        src={Logo}
        alt="logo"
        width="100%"
        easing="linear"
        duration={0}
      />
      <Typography align="center">Lorem ipsum dolor sit amet consectetur</Typography>
    </Box>
  );
};
