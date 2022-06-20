import { FC, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Chip, Collapse } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import { ModuleDataGridTable, ModuleDialog } from '../shared';
import { useUtils, useAxios, useAxiosMutation } from '../../utils/hooks';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';
import EmptyView from '../shared/EmptyView';
import { ModuleListRowActions } from '../shared/ModuleList';
import OrderForm from './OrderForm';

type ContexType = [
  openDialog: boolean,
  toggleDialog: () => void
];

const OrdersList: FC = () => {
  const [openDialog, toggleDialog] = useOutletContext<ContexType>();
  const { enqueueSnackbar } = useSnackbar();
  const { getStatusColor } = useUtils();
  const [refetch, { data, error, loading }] = useAxios<Array<any>>({
    url: 'warehouse/orders'
  }, foodwizeStockApi);

  // TODO: Add loading feedback
  const [onPut] = useAxiosMutation({
    method: 'put',
    onSuccess: () => enqueueSnackbar('Record updated successfully', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      TransitionComponent: Collapse,
    }),
    onFinally: () => refetch()
  }, foodwizeStockApi);

  // TODO: Add loading feedback
  const [onDelete] = useAxiosMutation({
    method: 'delete',
    onSuccess: () => enqueueSnackbar('Record deleted successfully', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      TransitionComponent: Collapse,
    }),
    onFinally: () => refetch()
  }, foodwizeStockApi);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        TransitionComponent: Collapse,
      });
    }
  }, [error]);

  const onClose = () => {
    toggleDialog();
    refetch();
  }

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
                hasRouter: true,
                to: `${id}`
              },
              {
                label: 'Edit',
                // action: () => console.log('Detail ID', id),
              },
              {
                label: 'Delete',
                action: () => onDelete({}, { url: `warehouse/orders/${id}` }),
              },
              {
                label: 'Change Status:',
                action: () => console.log('Detail ID', id),
                children: [
                  {
                    label: 'Completed',
                    action: () => onPut(
                      {
                        status: 'COMPLETED',
                      },
                      {
                        url: `warehouse/orders/${id}`,
                      }),
                    value: 'COMPLETED',
                    isStatus: true
                  },
                  {
                    label: 'Processing',
                    action: () => onPut({ status: 'PROCESSING' }, { url: `warehouse/orders/${id}` }),
                    value: 'PROCESSING',
                    isStatus: true
                  },
                  {
                    label: 'Rejected',
                    action: () => onPut({ status: 'REJECTED' }, { url: `warehouse/orders/${id}` }),
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
      <ModuleDialog title="Create Product" open={openDialog} handleClose={toggleDialog} size="sm">
        <OrderForm onClose={onClose} />
      </ModuleDialog>
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
