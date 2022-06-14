import { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Grid, Button } from '@mui/material';
// import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
// import { DeleteOutline, Edit } from '@mui/icons-material';
import { ModuleDialog, ModuleTabs, ModuleToolbar } from '../../components/shared';
import { useUI } from '../../utils/hooks';
import AddUserForm from '../../components/users/AddUserForm';

const UsersView: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(pathname === '/app/users') {
      navigate('/app/users/all')
    }
  }, [])
  
  const { toggleDialog, openDialog } = useUI();

  const onClose = () => {
    // refetch();
    toggleDialog();
  };

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
            hasRouter
            tabNames={[
              'All',
              'Users',
              'Finances',
              'Operations',
              'Admins',
              'Super Admin'
            ]}
            tabs={[
              <Outlet />,
              <Outlet />,
              <Outlet />,
              <Outlet />,
              <Outlet />,
              <Outlet />,
            ]}
            links={[
              'all',
              'users',
              'finances',
              'operations',
              'admins',
              'superadmins',
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UsersView;
