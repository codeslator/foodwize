import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
// import { HeaderToolBar } from '../components/shared/HeaderToolBar';
import DataGridTable from '../components/shared/DataGridTable';
import { NavTabs, useNavTabs } from '../components/shared/NavTabs';
import { GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { DeleteOutline, Edit } from '@mui/icons-material';
import { rowsData } from '../components/shared/mockData';
import BasicModal from '../components/shared/Modal';
import Form from '../components/shared/Form';

const Users = () => {
  const { tabs, setTab, tabSelectedIndex } = useNavTabs(['All', 'Users', 'Finances', 'Operations', 'Admins', 'Super Admin']);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const columns: GridColumns = [
    {
      field: 'firstName',
      headerName: 'Name',
      flex: 1,
      editable: true,
    },
    { field: 'lastName', headerName: 'Last name', flex: 1 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 2 },
    { field: 'role', headerName: 'Role', flex: 0.8 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
      cellClassName: 'status-theme--cell',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<Edit />}
            label="Edit"
            className="textPrimary"
            color="secondary"
            onClick={() => console.log(id)}
          />,
          <GridActionsCellItem
            icon={<DeleteOutline />}
            label="Delete"
            color="primary"
            onClick={() => console.log(id)}
          />,
        ];
      },
    },
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
        <Button color="secondary" variant="contained" onClick={handleOpen}>
          <Typography variant="body2" color="#fff" sx={{ textTransform: 'none', padding: '0 20px' }}>
            Add Users
          </Typography>
        </Button>
      </Box>
      <Box mt={2}>
        <NavTabs tabs={tabs} onSetTab={setTab} />
      </Box>
      {/* <TableView headerListNames={headerListNames} tableData={tableUsers} /> */}
      <DataGridTable
        columns={columns}
        rows={rowsData}
      />
      <BasicModal open={open} onClose={handleClose}>
        <Form />
      </BasicModal>
    </>
  );
};

export default Users;
