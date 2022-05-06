import { FC } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
  // GridActionsCellItem,
  GridColumns,
  GridRowIdGetter,
  // GridRowId,
} from '@mui/x-data-grid';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from '@mui/icons-material/Edit';
// import { defaultPalette } from '../../assets/themes/defaultPalette';
import { CustomNoRowsOverlay } from './EmptyTable';
// import rowsData from './mockData';
import { SxProps, Theme } from '@mui/material';

interface DataGridTableProps {
  rows: Array<any>;
  columns: GridColumns;
  toolbar?: boolean;
  idName: string;
}

const dataGridSX: SxProps<Theme> = (theme) => ({
  border: 'none',
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#F8FBFC',
    color: theme.palette.primary.main,
  },
  '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 'bold' },
})

const DataGridTable: FC<DataGridTableProps> = ({ rows, columns, toolbar, idName }) => {
  console.log(rows);

  return (
    <Box
      sx={{
        height: '67vh',
      }}
    >
      <DataGrid
        components={{
          Toolbar: (toolbar) ? GridToolbar : null,
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        rows={rows}
        getRowId={(row) => row[idName]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50]}
        checkboxSelection
        sx={dataGridSX}
      />
    </Box>
  );
}

export default DataGridTable; 