import { FC } from 'react';
import { Formik } from 'formik';
import { Button, MenuItem, Grid, InputAdornment, TextField } from '@mui/material';
import { WAREHOUSE_INITIAL_VALUES, WAREHOUSE_VALIDATION_SCHEMA } from '../../utils/validations/stockValidations';
import { LocationOnOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

interface WarehouseFormProps {};

const statusList = ['ACTIVE', 'INACTIVE'];

const WarehouseForm: FC<WarehouseFormProps> = ({}) => {
  return (
    <Formik
      initialValues={WAREHOUSE_INITIAL_VALUES}
      validationSchema={WAREHOUSE_VALIDATION_SCHEMA}
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
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                id="size"
                name="size"
                label="Size"
                value={values.size}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.size && errors.size)}
                helperText={touched.size && errors.size}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                id="address"
                name="address"
                label="Address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.address && errors.address)}
                helperText={touched.address && errors.address}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationOnOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="geolocation"
                name="geolocation"
                label="Geolocation"
                value={values.geolocation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.geolocation && errors.geolocation)}
                helperText={touched.geolocation && errors.geolocation}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationOnOutlined />
                    </InputAdornment>
                  ),
                }}
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
                {statusList.map((status, index) => (
                  <MenuItem value={status} key={index}>{status}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Button variant="outlined" fullWidth onClick={handleReset}>
                    Reset
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <LoadingButton
                    type="submit"
                    fullWidth
                    color="secondary"
                    variant="contained"
                    sx={{ color: '#fff' }}
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

export default WarehouseForm;