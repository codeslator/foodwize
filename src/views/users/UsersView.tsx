import { FC, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Grid, Button, Box, Avatar, Typography, Chip, IconButton } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { DeleteOutline, Edit } from '@mui/icons-material';
import { ModuleDataGridTable, ModuleDialog, ModuleTabs, ModuleToolbar } from '../../components/shared';
import { useAxios, useUI, useUtils } from '../../utils/hooks';
import AddUserForm from '../../components/users/AddUserForm';

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

const UsersView: FC = () => {
  const [refetch, { data, response, error, loading }] = useAxios<UserData>({
    url: 'accounts/profiles?limit=10&offset=0'
  });
  const { toggleDialog, openDialog } = useUI();
  const { getAvatarInitials, getShortId } = useUtils();

  const onClose = () => {
    refetch();
    toggleDialog();
  };

  const columns: GridColumns = [
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
        ];
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Users | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar
            title="Users"
            actions={
              <Button
                variant="contained"
                color="secondary"
                onClick={toggleDialog}
                sx={{
                  color: '#fff',
                  ml: 1,
                }}
              >
                Add User
              </Button>
            }
          >
            <ModuleDialog title="Add User" open={openDialog} handleClose={toggleDialog} size="sm">
              <AddUserForm onClose={onClose} />
            </ModuleDialog>
          </ModuleToolbar>
        </Grid>
        <Grid item xs={12}>
          <ModuleTabs
            tabNames={['All', 'Users', 'Finances', 'Operations', 'Admins', 'Super Admin']}
            tabs={[
              <ModuleDataGridTable
                rows={data?.users || []}
                count={data?.total || '0'}
                columns={columns}
                idName="vendorId"
                loading={loading}
                // toolbar
                refetch={refetch}
                refetchUrl="accounts/profiles?limit=10&offset=0"
              />,
              <Outlet />
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UsersView;
