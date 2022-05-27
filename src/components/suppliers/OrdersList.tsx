import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Edit, DeleteOutline } from '@mui/icons-material';
import { Chip, IconButton } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { suppliersData } from '../shared/mockData';
import { ModuleDataGridTable } from '../shared';

const OrdersList: FC = () => {
  

  const columns: GridColumns = [
    {
      field: 'id',
      headerName: 'Supplier Details Id',
      flex: 1,
    },
    { field: 'totalCost', headerName: 'Total Cost', flex: 1 },
    { field: 'actualCost', headerName: 'Actual Cost', flex: 1 },
    { field: 'tax', headerName: 'Tax', flex: 2 },
    { field: 'discount', headerName: 'Discount', flex: 0.8 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Chip label={value} color={value === 'Active' ? 'success' : 'error'} />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <IconButton
            component={NavLink}
            to={`${id}`}
          >
            <Edit color="secondary" />
          </IconButton>,
          <IconButton
            component={NavLink}
            to={`${id}`}
          >
            <DeleteOutline color="primary" />
          </IconButton>,
        ];
      },
    },
  ];

  return (
    <>
      <ModuleDataGridTable
        rows={[]}
        columns={columns}
        idName="supplierId"
        loading={false}
      />
      {/* <Outlet /> */}
    </>
  );
};

export default OrdersList;