import { FC } from 'react';
import { Formik } from 'formik';
import { Grid, TextField, MenuItem, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ORDER_INITIAL_VALUES, ORDER_VALIDATION_SCHEMA } from '../../utils/validations/suplliersValidations';
import { AxiosMutationPayload } from '../../config/interfaces';

interface OrderFormProps {
  isLoading: boolean;
  onSave: (payload: AxiosMutationPayload) => void;
}

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

const OrderForm: FC<OrderFormProps> = ({ isLoading, onSave }) => {
  return (
    <Formik
      initialValues={ORDER_INITIAL_VALUES}
      onSubmit={(values) => onSave(values)}
      validationSchema={ORDER_VALIDATION_SCHEMA}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleReset,
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
              >
                {statuses.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Button variant="contained" color="inherit" fullWidth onClick={handleReset}>
                    Clear All
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ color: '#ffffff' }}
                    loading={isLoading}
                    disabled={isLoading}
                  >
                    Save
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default OrderForm;