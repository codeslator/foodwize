import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, DeleteOutline } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { ModuleDataGridTable } from '../shared';
import { useUtils, useAxios } from '../../utils/hooks';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';
import EmptyView from '../shared/EmptyView';
import { ModuleListRowActions } from '../shared/ModuleList';


const OrdersList: FC = () => {
  const navigate = useNavigate();
  const [refetch, { data, response, error, loading }] = useAxios<Array<any>>({
    url: 'warehouse/orders'
  }, foodwizeStockApi);
  const { getStatusColor } = useUtils();

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
      flex: 0.7,
      align: 'center',
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Chip
          label={value}
          sx={(theme) => ({
            backgroundColor: (value) ? getStatusColor(value) : theme.palette.grey[500],
            color: '#fff',
          })}
        />
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
          <ModuleListRowActions
            options={[
              {
                label: 'See Detail',
                action: () => navigate(`/${id}`),
              },
              {
                label: 'Edit',
                action: () => console.log('Detail ID', id),
              },
              {
                label: 'Delete',
                action: () => console.log('Detail ID', id),
              },
              {
                label: 'Change Status:',
                action: () => console.log('Detail ID', id),
                children: [
                  {
                    label: 'Completed',
                    action: () => console.log('Detail ID', id),
                    value: 'COMPLETED',
                    isStatus: true
                  },
                  {
                    label: 'Processing',
                    action: () => console.log('Detail ID', id),
                    value: 'PROCESSING',
                    isStatus: true
                  },
                  {
                    label: 'Rejected',
                    action: () => console.log('Detail ID', id),
                    value: 'REJECTED',
                    isStatus: true
                  },
                ]
              },
            ]}
          />
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
