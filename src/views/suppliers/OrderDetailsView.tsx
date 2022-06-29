import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { ModuleDataGridTable, ModuleDetailsToolbar } from '../../components/shared';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';
import { useAxios } from '../../utils/hooks';
import { Formik } from 'formik';
import { IOrder, ORDER_VALIDATION_SCHEMA } from '../../utils/validations/suplliersValidations';
import { GridColumns } from '@mui/x-data-grid';
import { ModuleListRowActions } from '../../components/shared/ModuleList';

const statuses = [
  {
    label: 'Accepted',
    value: 'ACCEPTED'
  },
  {
    label: 'Processing',
    value: 'PROCESSING'
  },
  {
    label: 'Rejected',
    value: 'REJECTED'
  },
  {
    label: 'PostPoned',
    value: 'POSTPONED'
  },
];

const OrderDetailsView: FC = () => {
  const { orderId } = useParams();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [refetch, { data, error, loading }] = useAxios<IOrder>({
    url: `warehouse/orders/${orderId}`,
  }, foodwizeStockApi);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  }

  const ORDER_INITAL_VALUES = {
    supplier_details_id: data?.supplier_details_id || '',
    total_cost: data?.total_cost || '',
    actual_cost: data?.actual_cost || '',
    tax: data?.tax || '',
    discount: data?.discount || '',
    status: data?.status || '',
  }

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    { field: 'warehouse_orders_id', headerName: 'Warehouse Order ID', flex: 1 },
    { field: 'supplier_products_id', headerName: 'Supplier Product ID', flex: 1 },
    { field: 'unit_cost', headerName: 'Unit Cost', flex: 1 },
    { field: 'total_cost', headerName: 'Total Cost', flex: 1 },
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
            ]}
          />
        ];
      },
    },
  ];

  return (
    <>
      <ModuleDetailsToolbar
        title={`Order #${orderId}`}
        actions={[
          (<Button
            variant="outlined"
            color="quaternary"
            // onClick={toggleDialog}
            sx={{
              ml: 1,
            }}
          >
            Print Invoice
          </Button>),
          !isEditing ?
            (<Button
              variant="outlined"
              color="quinary"
              onClick={toggleIsEditing}
              sx={{
                ml: 1,
              }}
            >
              Edit
            </Button>) : (
              <>
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  // onClick={toggleDialog}
                  sx={{
                    ml: 1,
                  }}
                >
                  Update
                </Button>
                <Button
                  type="submit"
                  variant="outlined"
                  color="inherit"
                  onClick={toggleIsEditing}
                  sx={{
                    ml: 1,
                  }}
                >
                  Cancel
                </Button>
              </>
            ),
        ]}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Order Summary</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={ORDER_INITAL_VALUES}
            onSubmit={(values) => console.log(values)}
            validationSchema={ORDER_VALIDATION_SCHEMA}
            enableReinitialize
          >
            {({
              handleSubmit,
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      id="supplier_details_id"
                      name="supplier_details_id"
                      label="Supplier Detail Id"
                      value={values.supplier_details_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.supplier_details_id && errors.supplier_details_id)}
                      helperText={touched.supplier_details_id && errors.supplier_details_id}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      id="total_cost"
                      name="total_cost"
                      label="Total Cost"
                      value={values.total_cost}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.total_cost && errors.total_cost)}
                      helperText={touched.total_cost && errors.total_cost}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      id="actual_cost"
                      name="actual_cost"
                      label="Actual Cost"
                      value={values.actual_cost}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.actual_cost && errors.actual_cost)}
                      helperText={touched.actual_cost && errors.actual_cost}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      id="tax"
                      name="tax"
                      label="Tax"
                      value={values.tax}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.tax && errors.tax)}
                      helperText={touched.tax && errors.tax}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      id="discount"
                      name="discount"
                      label="Discount"
                      value={values.discount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.discount && errors.discount)}
                      helperText={touched.discount && errors.discount}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      id="status"
                      name="status"
                      label="Status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.status && errors.status)}
                      helperText={touched.status && errors.status}
                      fullWidth
                      select
                      disabled={!isEditing}
                    >
                      {statuses.map(({ label, value }) => (
                        <MenuItem key={value} value={value} selected={values.status === value}>
                          {label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Typography>Item List</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <ModuleDataGridTable
            rows={[
              {
                id: 1,
                name: 'Item 1',
                warehouse_orders_id: 1,
                supplier_products_id: 1,
                unit_cost: "0.00",
                total_cost: "0.00",
              },
              {
                id: 2,
                name: 'Item 2',
                warehouse_orders_id: 1,
                supplier_products_id: 1,
                unit_cost: "0.00",
                total_cost: "0.00",
              },
            ]}
            columns={columns}
            idName="id"
            loading={loading}
            count={'0'}
            refetch={refetch}
            refetchUrl="warehouse/orders"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderDetailsView;