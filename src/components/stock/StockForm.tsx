import { FC, useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Button, Collapse, Grid, TextField } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSnackbar } from 'notistack';
import { STOCK_INITIAL_VALUES, STOCK_VALIDATION_SCHEMA } from '../../utils/validations/stockValidations';
import { useAxiosMutation } from '../../utils/hooks';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';

interface StockFormProps {}

const StockForm: FC<StockFormProps> = ({}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState<boolean>(false);
  const [onPost, { loading, error }] = useAxiosMutation({
    url: '/warehouse/orders',
    method: 'post',
    onFinally: () => enqueueSnackbar('Register successful', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      TransitionComponent: Collapse,
    }),
  }, foodwizeStockApi);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        TransitionComponent: Collapse,
      });
    }
  }, [error]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Formik
      initialValues={STOCK_INITIAL_VALUES}
      validationSchema={STOCK_VALIDATION_SCHEMA}
      onSubmit={(values) => onPost(values)}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleReset,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                id="warehouse_detail_id"
                name="warehouse_detail_id"
                label="Warehouse Detail Id"
                value={values.warehouse_detail_id}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.warehouse_detail_id && errors.warehouse_detail_id)}
                helperText={touched.warehouse_detail_id && errors.warehouse_detail_id}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                id="warehouse_order_id"
                name="warehouse_order_id"
                label="Warehouse Order Id"
                value={values.warehouse_order_id}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.warehouse_order_id && errors.warehouse_order_id)}
                helperText={touched.warehouse_order_id && errors.warehouse_order_id}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <DatePicker
                label="Expired At"
                inputFormat="dd/MM/yyyy"
                value={values.expired_at}
                onChange={(value) => setFieldValue('expired_at', value)}
                renderInput={(params) => <TextField type="text" fullWidth {...params} />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <DatePicker
                label="Manufactured At"
                inputFormat="dd/MM/yyyy"
                value={values.manufactured_at}
                onChange={(value) => setFieldValue('manufactured_at', value)}
                renderInput={(params) => <TextField type="text" fullWidth {...params} />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Button endIcon={open ? (<ExpandLess />) : (<ExpandMore />)} onClick={toggleOpen}>
                Advanced
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="initial_quantity"
                      name="initial_quantity"
                      label="Initial Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputProps: {
                          min: 0,
                        }
                      }}
                      value={values.initial_quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.initial_quantity && errors.initial_quantity)}
                      helperText={touched.initial_quantity && errors.initial_quantity}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="current_quantity"
                      name="current_quantity"
                      label="Current Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputProps: {
                          min: 0,
                        }
                      }}
                      value={values.current_quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.current_quantity && errors.current_quantity)}
                      helperText={touched.current_quantity && errors.current_quantity}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="label"
                      name="label"
                      label="Label"
                      value={values.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.label && errors.label)}
                      helperText={touched.label && errors.label}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="batch"
                      name="batch"
                      label="Batch"
                      value={values.batch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.batch && errors.batch)}
                      helperText={touched.batch && errors.batch}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="supplier_label"
                      name="supplier_label"
                      label="Supplier Label"
                      value={values.supplier_label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.supplier_label && errors.supplier_label)}
                      helperText={touched.supplier_label && errors.supplier_label}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="supplier_product_id"
                      name="supplier_product_id"
                      label="Warehouse Order Id"
                      value={values.supplier_product_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.supplier_product_id && errors.supplier_product_id)}
                      helperText={touched.supplier_product_id && errors.supplier_product_id}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
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
                    />
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                  }}>
                  <Button variant="outlined" onClick={handleReset} sx={{ minWidth: '200px' }}>
                    Reset
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <LoadingButton
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{ color: '#fff', minWidth: '200px' }}
                    loading={loading}
                    disabled={loading}
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

export default StockForm;