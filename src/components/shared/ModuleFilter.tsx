import { FC, useState } from 'react'
import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@mui/material';

interface Filter {
  label: string;
  count: number;
}

interface ModuleFilterProps {
  by: string;
  filters: Array<Filter>;
}

const ModuleFilter: FC<ModuleFilterProps> = ({ by, filters }) => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box>
      <Typography variant="subtitle1">By {by}</Typography>
      <List>
        {filters.map(({ label, count }, index) => {
          const labelId = `checkbox-list-label-${label}`;

          return (
            <ListItem
              key={label}
              disablePadding
              sx={{
                '& .MuiListItem-secondaryAction': {
                  top: '42%'
                }
              }}
            >
              <ListItemButton
                sx={{
                  borderRadius: '10px',
                  bgcolor: '#fffbf3',
                  mb: 1,
                  '&.Mui-selected': {
                    bgcolor: '#fff2dc'
                  },
                  '&.Mui-selected:hover': {
                    bgcolor: '#fff2dc'
                  },
                  '&:hover': {
                    bgcolor: '#fff6e7'
                  }
                }}
                role={undefined}
                onClick={handleToggle(index)}
                dense
                selected={checked.indexOf(index) !== -1}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    sx={{
                      '&.Mui-checked': {
                        color: '#ffd489',
                      },
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={label} />
                <ListItemSecondaryAction>
                  <Typography
                    variant="caption"
                  >
                    ({count})
                  </Typography>
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ModuleFilter;