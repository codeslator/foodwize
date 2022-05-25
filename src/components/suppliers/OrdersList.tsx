import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Edit, DeleteOutline } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { GridActionsCellItem, GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { suppliersData } from '../users/mockData';
import DataGridTable from '../shared/DataGridTable';

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
          <GridActionsCellItem
            LinkComponent={NavLink}
            icon={<Edit />}
            label="Edit"
            className="textPrimary"
            color="secondary"
            // onClick={() => console.log(id)}
            // to=""
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
      {/* <ModuleDataGridTable
        rows={suppliersData}
        columns={columns}
        idName="supplierId"
        loading={false}
        toolbar
      /> */}
      <DataGridTable columns={columns} rows={[]} />
    </>
  );
};

export default OrdersList;
