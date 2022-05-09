import { FC } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
  GridColumns,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from './EmptyTable';
import { SxProps, Theme } from '@mui/material';
import useDataGrid from '../../utils/hooks/useDataGrid';
import { AxiosConfig } from '../../config/interfaces';

interface ModuleDataGridTableProps {
  rows: Array<any>;
  columns: GridColumns;
  toolbar?: boolean;
  idName: string;
  loading: boolean;
  refetch: (config: AxiosConfig) => void;
  refetchUrl: string;
  count: number;
}

const dataGridSX: SxProps<Theme> = (theme) => ({
  border: 'none',
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#F8FBFC',
    color: theme.palette.primary.main,
  },
  '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 'bold' },
})

const ModuleDataGridTable: FC<ModuleDataGridTableProps> = ({
  rows,
  columns,
  toolbar,
  idName,
  loading,
  refetch,
  refetchUrl,
  count
}) => {
  const {
    handlePageSize,
    pageSize,
    handlePage,
    page,
    handleSelectedItems,
    selectedItems,
  } = useDataGrid({ refetch, defaultUrl: refetchUrl });

  return (
    <Box
      sx={{
        height: '90vh',
      }}
    >
      <DataGrid
        components={{
          Toolbar: (toolbar) ? GridToolbar : null,
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        rows={rows}
        rowCount={count}
        getRowId={(row) => row[idName]}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={handlePageSize}
        rowsPerPageOptions={[10, 20, 50]}
        page={page}
        onPageChange={handlePage}
        checkboxSelection
        onSelectionModelChange={handleSelectedItems}
        selectionModel={selectedItems}
        sx={dataGridSX}
        loading={loading}
        paginationMode="server"
        disableSelectionOnClick={loading}
      />
    </Box>
  );
}

export default ModuleDataGridTable; 