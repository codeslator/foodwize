import { FC } from 'react'
import { Box, Typography, Link } from '@mui/material';
// import FoodwizeEmpty from '../../assets/img/FoodwizeEmpty.svg'

interface EmptyViewProps {
  title: string;
  link: string;
}

const EmptyView: FC<EmptyViewProps> = ({ title, link }) => {
  return (
    <Box>
      {/* <img src={FoodwizeEmpty} alt="empty" /> */}
      <Typography variant="h4" align="center">{title}</Typography>
      <Typography variant="h6" align="center">{link}</Typography>
    </Box>
  )
}

export default EmptyView