import { FC, useState } from 'react'
import { Formik } from 'formik';
import { Button, Collapse, Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { STOCK_INITIAL_VALUES, STOCK_VALIDATION_SCHEMA } from '../../utils/validations/stockValidations';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface StockFormProps {
  isLoading: boolean;
}

const StockForm: FC<StockFormProps> = ({ isLoading }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Formik
      initialValues={STOCK_INITIAL_VALUES}
      validationSchema={STOCK_VALIDATION_SCHEMA}
      onSubmit={(values) => console.log(values)}
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
                id="warehouseDetailId"
                name="warehouseDetailId"
                label="Warehouse Detail Id"
                value={values.warehouseDetailId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.warehouseDetailId && errors.warehouseDetailId)}
                helperText={touched.warehouseDetailId && errors.warehouseDetailId}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                id="warehouseOrderId"
                name="warehouseOrderId"
                label="Warehouse Order Id"
                value={values.warehouseOrderId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.warehouseOrderId && errors.warehouseOrderId)}
                helperText={touched.warehouseOrderId && errors.warehouseOrderId}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <DatePicker
                label="Expired At"
                inputFormat="dd/MM/yyyy"
                value={values.expiredAt}
                onChange={(value) => setFieldValue('expiredAt', value)}
                renderInput={(params) => <TextField type="text" fullWidth {...params} />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <DatePicker
                label="Manufactured At"
                inputFormat="dd/MM/yyyy"
                value={values.manufacturedAt}
                onChange={(value) => setFieldValue('manufacturedAt', value)}
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
                      id="initialQuantity"
                      name="initialQuantity"
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
                      value={values.initialQuantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.initialQuantity && errors.initialQuantity)}
                      helperText={touched.initialQuantity && errors.initialQuantity}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="currentQuantity"
                      name="currentQuantity"
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
                      value={values.currentQuantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.currentQuantity && errors.currentQuantity)}
                      helperText={touched.currentQuantity && errors.currentQuantity}
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
                      id="supplierLabel"
                      name="supplierLabel"
                      label="Supplier Label"
                      value={values.supplierLabel}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.supplierLabel && errors.supplierLabel)}
                      helperText={touched.supplierLabel && errors.supplierLabel}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="supplierProductId"
                      name="supplierProductId"
                      label="Warehouse Order Id"
                      value={values.supplierProductId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.supplierProductId && errors.supplierProductId)}
                      helperText={touched.supplierProductId && errors.supplierProductId}
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
                  <Button variant="contained" onClick={handleReset}>
                    Reset
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Button type="submit" color="secondary" variant="contained" sx={{ color: '#fff' }}>
                    Save
                  </Button>
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