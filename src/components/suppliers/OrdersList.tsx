import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Edit, DeleteOutline } from '@mui/icons-material';
import { Chip, IconButton } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { ModuleDataGridTable } from '../shared';
import useAxios from '../../utils/hooks/useAxios';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';
import EmptyView from '../shared/EmptyView';


const OrdersList: FC = () => {
  const [refetch, { data, response, error, loading }] = useAxios<Array<any>>({
    url: 'warehouse/orders'
  }, foodwizeStockApi);

  const columns: GridColumns = [
    {
      field: 'supplier_details_id',
      headerName: 'Supplier Details Id',
      flex: 1,
    },
    { field: 'total_cost', headerName: 'Total Cost', flex: 1 },
    { field: 'actual_cost', headerName: 'Actual Cost', flex: 1 },
    { field: 'tax', headerName: 'Tax', flex: 1 },
    { field: 'discount', headerName: 'Discount', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
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
      {(data && data.length > 0) ? (
        <ModuleDataGridTable
          rows={data || []}
          columns={columns}
          idName="id"
          loading={loading}
          count={data?.length.toString() || '0'}
          refetch={refetch}
          refetchUrl="warehouse/orders"
        />
      ) : (
        <EmptyView title="You don't have any Order" link="Click here to add your order" />
      )}
    </>
  );
};

export default OrdersList;