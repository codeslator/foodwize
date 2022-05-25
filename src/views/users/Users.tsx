import { Grid } from '@mui/material';
import { useAxios, useUI } from '../../utils/hooks';
import { ModuleDataGridTable, ModuleDialog, ModuleTabs, ModuleToolbar } from '../../components/shared';
import AddUserForm from '../../components/users/AddUserForm';
import { Helmet } from 'react-helmet';
import { columns } from '../../components/users/UserTableColumns';
// import AlertDialogSlide from '../../components/shared/ConfirmationModal';

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

const Users = () => {
  const { toggleDialog, openDialog } = useUI();

  const { data, loading, refetch } = useAxios<UserData>({ url: 'accounts/profiles?limit=10&offset=0' });
  // console.log(`🚀 ~ data`, data);

  return (
    <>
      <Helmet>
        <title>Users | Foodwize</title>
      </Helmet>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar title="Users" action={toggleDialog} actionTitle="Add User">
            <ModuleDialog title="Add User" open={openDialog} handleClose={toggleDialog} size="sm">
              <AddUserForm isLoading={false} open={openDialog} handleClose={toggleDialog} />
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
                toolbar
                refetch={refetch}
                refetchUrl="accounts/profiles?limit=10&offset=0"
              />,
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
