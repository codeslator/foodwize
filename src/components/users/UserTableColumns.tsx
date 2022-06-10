import { DeleteOutline, Edit } from '@mui/icons-material';
import { Avatar, Box, Chip, IconButton, Typography } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useUI, useUtils } from '../../utils/hooks';
import { ModuleDialog } from '../shared';
import AlertDialogSlide from '../shared/ConfirmationModal';
import AddUserForm from './AddUserForm';

const { getShortId, getAvatarInitials } = useUtils();

// const { toggleDialog, openDialog } = useUI();

interface UserMetadata {
  Restaurant: string;
  Description: string;
}
interface User {
  vendorId: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  metadata: UserMetadata;
}
interface UserData {
  users: User[];
  total: string;
}
export const columns: GridColumns = [
  {
    field: 'vendorId',
    headerName: 'Account Id',
    flex: 0.5,
    renderCell: ({ row }: GridRenderCellParams<string>) => getShortId(row?.vendorId),
  },
  {
    field: 'fullName',
    headerName: 'FullName',
    flex: 1,
    renderCell: ({ row }: GridRenderCellParams<object>) => (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Avatar src={row.avatarUrl ? row.avatarUrl : getAvatarInitials(row?.firstName, row?.lastName)} sx={{ mr: 2 }} />
        <Typography color="textPrimary" variant="body1">
          {`${row.firstName} ${row.lastName}`}
        </Typography>
      </Box>
    ),
  },
  { field: 'email', headerName: 'E-mail', flex: 1 },

  {
    field: 'status',
    headerName: 'Status',
    flex: 0.7,
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <Chip
        label={value}
        color={value === 'ACTIVE' ? 'secondary' : 'primary'}
        sx={{ color: '#FFF', textAlign: 'center' }}
      />
    ),
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      const [open, setOpen] = useState(false);
      return [
        <IconButton component={NavLink} to={`${id}`}>
          <Edit color="secondary" />
        </IconButton>,
        <IconButton onClick={() => setOpen(true)}>
          <DeleteOutline color="primary" />
        </IconButton>,
        // <AlertDialogSlide open2={open} setOpen2={setOpen} />,
      ];
    },
  },
];