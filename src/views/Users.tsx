import { Box, Button, Typography } from '@mui/material';
import { HeaderToolBar } from '../components/shared/HeaderToolBar';
import DataGridTable from '../components/shared/DataGridTable';

const Users = () => {
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
      {/* <TableView headerListNames={headerListNames} tableData={tableUsers} /> */}
      <DataGridTable />
    </>
  );
};

export default Users;
