import { Box, Button, Typography } from '@mui/material';
import DataGridTable from '../components/shared/DataGridTable';
import { NavTabs } from '../components/shared/NavTabs';
import { SetStateAction } from 'react';
import { useState } from 'react';
import BasicModal from '../components/shared/Modal';
import Form from '../components/shared/Form';

const Users = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toolBarList = ['All', 'Users', 'Finances', 'Operations', 'Admins', 'Super Admin'];

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
        <Button color="secondary" variant="contained" onClick={handleOpen}>
          <Typography variant="body2" color="#fff" sx={{ textTransform: 'none' }}>
            Add Users
          </Typography>
        </Button>
      </Box>
      <Box mt={2}>
        <NavTabs
          tabs={toolBarList}
          onSetTab={function (value: SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Box>
      {/* <TableView headerListNames={headerListNames} tableData={tableUsers} /> */}
      <DataGridTable />
      <BasicModal open={open} onClose={handleClose}>
        <Form />
      </BasicModal>
    </>
  );
};

export default Users;
