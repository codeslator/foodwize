import { FC } from 'react'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
});

interface Props {
  text: string;
  icon?: any;
  [x: string]: any;
};

export const SidebarListItemButton: FC<Props> = ({ text, icon, ...props }) => {
  const classes = useStyles();

  return (
    <ListItemButton
      className={classes.button}
      {...props}
    >
      <ListItemIcon className={classes.icon}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
