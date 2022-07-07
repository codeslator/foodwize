import { FC, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import { Button, Collapse, Grid, MenuItem, TextField } from '@mui/material';
import { useAxios, useAxiosMutation } from '../../utils/hooks';
import { Formik } from 'formik';
import { USER_VALIDATION_SCHEMA, USER_INITIAL_STATE } from '../../utils/validations/usersValidations';
import { useSnackbar } from 'notistack';
interface Role {
  id: number;
  roleName: [];
}
interface UserData {
  result: string;
}
interface UserFormProps {
  onClose: () => void;
}

const statuses = [
  {
    label: 'ACTIVE',
    value: 'ACTIVE',
  },
  {
    label: 'INACTIVE',
    value: 'INACTIVE',
  },
]

const UserForm: FC<UserFormProps> = ({ onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const localUserId = localStorage.user && JSON.parse(localStorage.user).user.vendorId;
  const [, { data: roles = [] }] = useAxios<Role[]>({
    url: 'utils/roles'
  });
  const [onPost, { error, loading }] = useAxiosMutation<UserData>({
    url: `identities`,
    method: 'post',
    onSuccess: () => enqueueSnackbar('Register Successful', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      TransitionComponent: Collapse,
    }),
    onFinally: () => onClose()
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

  return (
    <>
      <Formik
        initialValues={USER_INITIAL_STATE}
        onSubmit={(values) => onPost({
          ...values,
          first_name: values.firstName,
          last_name: values.lastName,
          vendor_parent: localUserId,
          role: values.role,
          // status: values.status,
        })
        }
        validationSchema={USER_VALIDATION_SCHEMA}
      >
        {({ handleSubmit, values, errors, touched, handleChange, handleBlur, handleReset, dirty, isValid }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ pt: 3 }}>
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
                    <Button
                      color="inherit"
                      type="reset"
                      variant="text"
                      onClick={handleReset}
                      fullWidth
                    >
                      Clear
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <LoadingButton
                      color="primary"
                      type="submit"
                      variant="contained"
                      sx={{ color: '#fff' }}
                      // disabled={!dirty || !isValid}
                      loading={loading}
                      fullWidth
                    >
                      Submit
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
