import { FC, useEffect } from 'react';
import { Formik } from 'formik';
import { Button, MenuItem, Grid, InputAdornment, TextField, Collapse } from '@mui/material';
import { WAREHOUSE_INITIAL_VALUES, WAREHOUSE_VALIDATION_SCHEMA } from '../../utils/validations/stockValidations';
import { LocationOnOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import { useAxiosMutation } from '../../utils/hooks';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';

interface WarehouseFormProps {
  onClose: () => void;
};

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

const WarehouseForm: FC<WarehouseFormProps> = ({ onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [onPost, { loading, error }] = useAxiosMutation({
    url: '/warehouse/details',
    method: 'post',
    onSuccess: () => enqueueSnackbar('Warehouse registered successful', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      TransitionComponent: Collapse,
    }),
    onFinally: () => onClose()
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

  return (
    <Formik
      initialValues={WAREHOUSE_INITIAL_VALUES}
      validationSchema={WAREHOUSE_VALIDATION_SCHEMA}
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
                id="geo_address"
                name="geo_address"
                label="geo_address"
                value={values.geo_address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.geo_address && errors.geo_address)}
                helperText={touched.geo_address && errors.geo_address}
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
                    loading={loading}
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