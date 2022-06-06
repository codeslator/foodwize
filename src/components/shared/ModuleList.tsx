import { FC, useState } from 'react';
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { GridRowParams } from '@mui/x-data-grid';
import { MoreHoriz, Square } from '@mui/icons-material';
import { useUtils } from '../../utils/hooks';

interface MenuOptions {
  label: string;
  handleAction: () => void;
}

interface TableColumn {
  field: string;
  label: string;
}

interface ModuleListProps {
  title: string;
  columns: Array<TableColumn>;
  rows: Array<any>;
  actions?: Array<MenuOptions>
}

interface MenuOption {
  label: string;
  value?: string | number;
  action: () => void;
  isStatus?: boolean;
  children?: Array<MenuOption>;
}

interface ModuleListRowActionsProps {
  item?: GridRowParams;
  options: Array<MenuOption>;
}

export const ModuleListRowActions: FC<ModuleListRowActionsProps> = ({ item, options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { getStatusColor } = useUtils();
  const openMenu = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        id="demo-positioned-button"
        onClick={handleOpen}
        aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options.map(({ label, value, action, children }) => {
          if (children) {
            return (
              <>
                <Divider />
                <MenuItem>{label}</MenuItem>
                {children.map(({ label, value, action, isStatus }) => (
                  <MenuItem onClick={action}>
                    {Boolean(isStatus) && (
                      <ListItemIcon>
                        <Square sx={{ color: (value) ? getStatusColor(value) : 'default' }} />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={label} />
                  </MenuItem>
                ))}
              </>
            );
          }
          return (
            <MenuItem onClick={action}>{label}</MenuItem>
          )
        })}
        {/* <MenuItem onClick={() => console.log('Works')}>Action 2</MenuItem> */}
      </Menu>
    </>
  );
};

const ModuleList: FC<ModuleListProps> = ({ title, columns, rows, actions }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box
      sx={{
        borderRadius: '15px',
        border: 'solid 1px #DFDDDE'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          bgcolor: '#BCD4DE',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      >
        <Typography variant="h6">
          {title}
        </Typography>
        {Boolean(actions) && (
          <>
            <IconButton
              id="demo-positioned-button"
              onClick={handleOpen}
              aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
            >
              <MoreHoriz />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {actions?.map(({ label, handleAction }) => (
                <MenuItem onClick={handleAction} key={label}>{label}</MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Box>
      <TableContainer
        sx={{
          maxHeight: 250,
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
          }}
          size="small"
        >
          <TableHead sx={{ bgcolor: '#F8FBFC' }}>
            <TableRow>
              {columns.map(({ field, label }) => (
                <TableCell align="center" key={field}>{label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
              >
                {columns.map(({ field }, i) => (
                  <TableCell
                    align="center"
                    key={i}
                    sx={{
                      borderBottom: 'none'
                    }}
                  >
                    {row[field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ModuleList;