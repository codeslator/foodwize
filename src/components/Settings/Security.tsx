import { FC, useState, useEffect } from 'react';
import {IconButton, TextField, InputAdornment, Typography, Grid, Collapse } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useAxiosMutation } from '../../utils/hooks';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSnackbar } from 'notistack';
import { UPDATE_PASSWORD_INITIAL_VALUES, UPDATE_PASSWORD_VALIDATION_SCHEMA } from '../../utils/validations/settingsValidations';

type UpdatePasswordData = {
  password: string;
  confirm_password: string;
};

const Security: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [onPut, { loading, error }] = useAxiosMutation<UpdatePasswordData>({
    url: '/identities',
    method: 'put',
    onSuccess() {
      enqueueSnackbar('Successfull Password Update', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        TransitionComponent: Collapse,
      });
    },
  });

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error?.message, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        TransitionComponent: Collapse,
      });
    }
  }, [error]);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Update your Password</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Formik
          initialValues={UPDATE_PASSWORD_INITIAL_VALUES}
          validationSchema={UPDATE_PASSWORD_VALIDATION_SCHEMA}
          onSubmit={(values) => onPut(values)}
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
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                          >
                            {!showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    fullWidth
                    placeholder="New Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="confirm_password"
                    name="confirm_password"
                    label="Password Confirm"
                    type={showPassword ? 'text' : 'password'}
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.confirm_password && errors.confirm_password)}
                    helperText={touched.confirm_password && errors.confirm_password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                          >
                            {!showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    fullWidth
                    placeholder="Confirm Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <LoadingButton
                    type="submit"
                    // fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ color: '#ffffff' }}
                    loading={loading}
                    disabled={loading}
                  >
                    Save
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Security;