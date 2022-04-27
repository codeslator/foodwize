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
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  icon: {
    minWidth: 0,
  },
});

interface Props {
  text: string;
  icon?: any;
  [x: string]: any;
};

export const SidebarListItemButton: FC<Props> = ({ text, icon, ...props }) => {
  const { selected } = props;
  const classes = useStyles();

  // console.log(selected);

  return (
    <ListItemButton
      className={classes.button}
      {...props}
      sx={{
        color: selected ? 'primary.main' : '#fff',
        backgroundColor: selected && '#FCE7E1 !important',
      }}
    >
      <ListItemIcon
        className={classes.icon}
        sx={{
          color: selected ? 'primary.main' : '#fff',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
