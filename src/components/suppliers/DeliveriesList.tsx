import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';
import { useAxios, useUtils } from '../../utils/hooks';
import { ModuleDataGridTable } from '../shared';
import EmptyView from '../shared/EmptyView';
import { ModuleListRowActions } from '../shared/ModuleList';

const DeliveriesList: FC = () => {
  const [refetch, { data, response, error, loading }] = useAxios<Array<any>>({
    url: 'suppliers/drinks'
  }, foodwizeStockApi);
  const { getStatusColor } = useUtils();

  const columns: GridColumns = [
    {
      field: 'id',
      headerName: 'Supplier Details Id',
      flex: 1,
    },
    { field: 'address', headerName: 'Address', flex: 2 },
    { field: 'geoaddress', headerName: 'Geo Address', flex: 1 },
    { field: 'label', headerName: 'Label', flex: 1 },
    { field: 'lastOrder', headerName: 'Last Order', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
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
                action: () => console.log('Detail ID', id),
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
          idName="supplierId"
          loading={loading}
          count={data?.length.toString() || '0'}
          refetch={refetch}
          refetchUrl="warehouse/orders"
        />
      ) : (
        <EmptyView title="You don't have any Supplier" link="Click here to add your supplier" />
      )}
    </>
  );
};

export default DeliveriesList;