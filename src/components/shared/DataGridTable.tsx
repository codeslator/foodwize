import { FC } from 'react';
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
import {rowsData} from './mockData';

interface DataGridTableProps {
  columns: GridColumns;
  rows: Array<any>;
}

const DataGridTable: FC<DataGridTableProps> = ({ columns, rows }) => {

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

export default DataGridTable;