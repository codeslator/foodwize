import { Box, Button, Typography } from '@mui/material';
import { HeaderToolBar } from '../components/shared/HeaderToolBar';
import { TableView } from '../components/shared/TableView';

const Users = () => {
  const headerListNames = [
    'Name',
    'Last Name',
    'Phone Number',
    'Email',
    'Role',
    'Status',
    'Actions',
  ];

  // const tableData = [
  //   'Apolline',
  //   'Labrie',
  //   '+33 44 196060',
  //   'ApollineLabrie@ersurgeon.fr',
  //   'Finances',
  // ];

  const tableUsers = [
    {
      firtName: 'Apolline',
      lastName: 'Labrie',
      phone: '+33 44 196060',
      email: 'ApollineLabrie@ersurgeon.fr',
      role: 'Finances',
    },
    {
      firtName: 'Apolline',
      lastName: 'Labrie',
      phone: '+33 44 196060',
      email: 'ApollineLabrie@ersurgeon.fr',
      role: 'Finances',
    },
    {
      firtName: 'Apolline',
      lastName: 'Labrie',
      phone: '+33 44 196060',
      email: 'ApollineLabrie@ersurgeon.fr',
      role: 'Finances',
    },
  ];

  const toolBarList = [
    'All',
    'Users',
    'Finances',
    'Operations',
    'Admins',
    'Super Admin',
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" color="#5E565A">
          Users
        </Typography>
        <Button color="secondary" variant="contained">
          <Typography
            variant="body2"
            color="#fff"
            sx={{ textTransform: 'none' }}
          >
            Add Users
          </Typography>
        </Button>
      </Box>
      <Box mt={2}>
        <HeaderToolBar toolBarList={toolBarList} />
      </Box>
      <Box mt={-2}>
        <TableView headerListNames={headerListNames} tableData={tableUsers} />
      </Box>
    </>
  );
};

export default Users;
