import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Edit, DeleteOutline } from '@mui/icons-material';
import { Chip, IconButton } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { ModuleDataGridTable } from '../shared';
import useAxios from '../../utils/hooks/useAxios';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';


const OrdersList: FC = () => {
  const [refetch, { data, response, error, loading }] = useAxios<Array<any>>({
    url: 'warehouse/orders'
  }, foodwizeStockApi);

  console.log(data)

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
        rows={data || []}
        columns={columns}
        idName="supplierId"
        loading={loading}
        count={data?.length.toString() || '0'}
        refetch={refetch}
        refetchUrl="warehouse/orders"
      />
      {/* <Outlet /> */}
    </>
  );
};

export default OrdersList;