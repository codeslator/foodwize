import { Box, Button, Collapse, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useAxios, useAxiosMutation } from '../../utils/hooks';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import { ADD_USER_INITIAL_STATE, ADD_USER_VALIDATION_SCHEMA } from '../../utils/validations/authValidations';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

interface UserMetadata {
  Restaurant: string;
  Description: string;
}
interface User {
  vendorId: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  role: string;
  Metadata: UserMetadata;
}

interface Roles {
  id: number;
  roleName: [];
}

interface UserData {
  result: string;
}
const EditUsers = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();
  const { vendorId } = useParams();
  const [, { data: user }] = useAxios<User>({ url: `vendors/${vendorId}` });
  const [, { data: roles = [], loading: isLoadingRoles }] = useAxios<Roles[]>({ url: 'utils/roles' });
  const [onPut, { error, loading }] = useAxiosMutation<UserData>({
    url: `accounts/profiles/${vendorId}`,
    method: 'put',
    onFinally: () => {
      navigate(-1);
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

  const INITIAL_FORM_STATUS = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    status: user?.status || '',
    role: user?.role || '',
  };
  console.log(INITIAL_FORM_STATUS)


  return (
    <>
      <Helmet>
        <title>Users | Foodwize</title>
      </Helmet>

      <Formik
        initialValues={INITIAL_FORM_STATUS}
        // validationSchema={ADD_USER_VALIDATION_SCHEMA}
        onSubmit={(values) => onPut({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          role: 1,
          status: values.status,
        })}
      >
        {({
          handleSubmit,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleReset,
          dirty,
          isValid,
          initialValues,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h4" color="#5E565A">
                User Detail
              </Typography>
              <Grid>
                <Button color="secondary" variant="outlined">
                  <Typography variant="body2" sx={{ textTransform: 'none', padding: '0 10px' }}>
                    Edit User
                  </Typography>
                </Button>
                <Button color="primary" variant="outlined" sx={{ marginLeft: '20px' }}>
                  <Typography variant="body2" sx={{ textTransform: 'none', padding: '0 20px' }}>
                    Delete
                  </Typography>
                </Button>
              </Grid>
            </Box>

            <Box mt={2}>
              <Typography variant="subtitle1" color="#5E565A">
                Personal Information
              </Typography>
              <Divider />
            </Box>
            <Grid container spacing={3} sx={{ padding: '20px 0' }} xs={12} item>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <TextField
                  name="firstName"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Typography variant="subtitle1" color="#5E565A">
                User Information
              </Typography>
              <Divider />
            </Box>
            <Grid container spacing={3} sx={{ padding: '20px 0' }} xs={8} item>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                {!isLoadingRoles && (
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
                )}
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
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'start', gap: '15px' }}>
              <LoadingButton
                color="secondary"
                type="submit"
                variant="contained"
                sx={{ color: '#FFF', width: '7%', mt: '20px', textTransform: 'none' }}
                disabled={!dirty}
                loading={loading}
              >
                Save
              </LoadingButton>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default EditUsers;

// id: params.orderId,
// email: 'jhon@dao.com',
// firstName: 'Jhon',
// lastName: 'Dao',
// vendor_parent: '783643-GH-235345',
// role: 'ADMIN',
// status: 'ACTIVE ',
// sold_rule: '10%',
// unsold_rule: '5%',
// metadata: {
//   Restaurant: 'McDonalds',
//   Description: 'Best restaurant ever',
// },
