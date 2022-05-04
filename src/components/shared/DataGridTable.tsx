import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
  GridColumns,
  GridRowId,
} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { defaultPalette } from '../../assets/themes/defaultPalette';
import { CustomNoRowsOverlay } from './EmptyTable';
import rowsData from './mockData';

export default function DataGridTable() {
  const handleEditClick = (id: GridRowId) => (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('editing ', id);
  };

  const handleDeleteClick = (id: GridRowId) => (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('deleting', id);
  };

  const [rows, setRows] = React.useState(rowsData);

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
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            color="secondary"
            onClick={handleEditClick(id)}
          />,
          <GridActionsCellItem
            icon={<DeleteOutlineIcon />}
            label="Delete"
            color="primary"
            onClick={handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];
  return (
    <Box
      sx={{
        height: '78vh',
        width: '100%',
        marginTop: '25px',
        '& .status-theme--cell': {
          '& .MuiDataGrid-cellContent': {
            fontSize: '13px',
            color: '#FFF',
            backgroundColor: defaultPalette.secondary.main,
            borderRadius: '100px',
            padding: '3px 12px',
          },
        },
      }}
    >
      <DataGrid
        components={{
          Toolbar: GridToolbar,
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        sx={{
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F8FBFC',
            color: defaultPalette.primary.main,
          },
          '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 'bold' },
        }}
      />
    </Box>
  );
}
