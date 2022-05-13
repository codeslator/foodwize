import { FC } from 'react'
import { Box, Typography, Link, SxProps } from '@mui/material';
import FoodwizeEmpty from '../../assets/img/FoodwizeEmpty.png'

interface EmptyViewProps {
  title: string;
  link: string | JSX.Element;
}

const boxSX: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${FoodwizeEmpty})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  height: '65vh'
};

const EmptyView: FC<EmptyViewProps> = ({ title, link }) => {
  return (
    <Box sx={boxSX}>
      <Box
        sx={{
          px: {
            xs: 17,
            sm: 20,
            md: 25,
            lg: 35,
            xl: 60
          }
        }}
      >
        <Typography variant="h4" align="center" fontWeight={700}>{title}</Typography>
        <Typography variant="subtitle1" align="center">{link}</Typography>
      </Box>
    </Box>
  )
}

export default EmptyView