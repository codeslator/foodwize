import { LoadingButton } from '@mui/lab';
import { Button, Collapse, Grid, MenuItem, TextField } from '@mui/material';
import { useAxios, useAxiosMutation } from '../../utils/hooks';
import { Formik } from 'formik';
import { ADD_USER_VALIDATION_SCHEMA, ADD_USER_INITIAL_STATE } from '../../utils/validations/authValidations';
import { FC, useEffect, useState } from 'react';
import { AxiosConfig, ServerErrorResponse } from '../../config/interfaces';
import axios, { AxiosError, AxiosResponse } from 'axios';
import DeleteInventoryModal from '../shared/DeleteModal';
import AlertDialogSlide from '../shared/ConfirmationModal';
import { useSnackbar } from 'notistack';

interface Roles {
  id: number;
  roleName: [];
}
interface OrderFormProps {
  open: boolean;
  handleClose: () => void;
  isLoading: boolean;
}

interface UserData {
  result: string;
}
const AddUserForm: FC<OrderFormProps> = ({ isLoading, open, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar();

  const { data: roles = [], refetch } = useAxios<Roles[]>({ url: 'utils/roles' });

  const [updateData, { response, error, loading: userLoading, data }] = useAxiosMutation<UserData>({
    url: `identities`,
    method: 'post',
    onFinally: () => {
      handleClose();
    },
  });
  useEffect(() => {
    if (error?.response?.data?.errorMessage)
      enqueueSnackbar(error.response.data.errorMessage.slice(23, -2), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        TransitionComponent: Collapse,
      });
  }, [error]);
  const localUserId = localStorage.user && JSON.parse(localStorage.user).user.vendorId;
  console.log(`🚀 ~ localUserId`, localUserId);
  return (
    <>
      <Formik
        initialValues={ADD_USER_INITIAL_STATE}
        onSubmit={(values) => {
          console.log('SUBMITING', values);
          updateData({
            // email: 'jhon@dao.com',
            // name: 'Jhon',
            // last_name: 'Dao',
            // vendor_parent: '783643-GH-235345',
            // role: 'ADMIN',
            // status: 'ACTIVE ',
            email: values.email,
            first_name: values.firstName,
            password: values.password,
            last_name: values.lastName,
            vendor_parent: localUserId,
            role: 1,
            status: values.status,
          });
        }}
        // validationSchema={ADD_USER_VALIDATION_SCHEMA}
      >
        {({ handleSubmit, values, errors, touched, handleChange, handleBlur, handleReset, dirty, isValid }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{ padding: '20px 0' }}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="firstName"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  placeholder="Input text"
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  placeholder="Input text"
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  placeholder="Input text"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  placeholder="Input text"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="User Role"
                  fullWidth
                  id="id"
                  name="role"
                  select
                  onChange={handleChange}
                  value={values.role}
                  onBlur={handleBlur}
                  error={Boolean(touched.role && errors.role)}
                  helperText={touched.role && errors.role}
                >
                  {roles?.map((role) => (
                    <MenuItem key={role.id} value={role.roleName}>
                      {role.roleName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  select
                  name="status"
                  label="Status"
                  fullWidth
                  onChange={handleChange}
                  value={values.status}
                  onBlur={handleBlur}
                  error={Boolean(touched.status && errors.status)}
                  helperText={touched.status && errors.status}
                >
                  <MenuItem key="ACTIVE" value="ACTIVE">
                    Active
                  </MenuItem>
                  <MenuItem key="INACTIVE" value="INACTIVE">
                    Inactive
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <Button
                  color="inherit"
                  type="reset"
                  variant="text"
                  sx={{ color: '#333', width: '50%' }}
                  onClick={handleReset}
                >
                  Clear
                </Button>
                <LoadingButton
                  color="primary"
                  type="submit"
                  variant="contained"
                  sx={{ color: '#FFF', width: '50%' }}
                  disabled={!dirty || !isValid}
                  loading={isLoading}
                >
                  Submit
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddUserForm;
