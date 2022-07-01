import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { Formik } from 'formik';
// import { Helmet } from 'react-helmet';
import { useAxios, useAxiosMutation } from '../../utils/hooks';
import { ADD_USER_INITIAL_STATE, ADD_USER_VALIDATION_SCHEMA } from '../../utils/validations/authValidations';
import { useSnackbar } from 'notistack';
import { ModuleDetailsToolbar } from '../../components/shared';

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

interface Role {
  id: number;
  roleName: string;
}

interface UserData {
  result: string;
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

const EditUsers: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const { vendorId } = useParams();
  const [refetch, { data: user }] = useAxios<User>({ url: `vendors/${vendorId}` });
  const [, { data: roles, loading: loadingRoles }] = useAxios<Role[]>({ url: 'utils/roles' });

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const [onPut, { error, loading }] = useAxiosMutation<UserData>({
    url: `accounts/profiles/${vendorId}`,
    method: 'put',
    onFinally: () => {
      toggleIsEditing();
      refetch();
    },
  });

  const USER_INITIAL_VALUES = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    status: user?.status || '',
    role: user?.role || '',
  };

  console.log(USER_INITIAL_VALUES, roles)

  return (
    <>
      <ModuleDetailsToolbar
        title="User Detail"
        actions={[
          (<Button
            variant="outlined"
            color="quinary"
            onClick={toggleIsEditing}
            sx={{
              ml: 1,
            }}
          >
            Edit
          </Button>),
          (<Button
            variant="outlined"
            color="primary"
            // onClick={toggleIsEditing}
            sx={{
              ml: 1,
            }}
          >
            Delete
          </Button>)
        ]}
      />
      <Formik
        initialValues={USER_INITIAL_VALUES}
        // validationSchema={ADD_USER_VALIDATION_SCHEMA}
        onSubmit={(values) => onPut(values)}
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
              <Grid item xs={12}>
                <Typography>Personal Information</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.firstName}
                      onBlur={handleBlur}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.lastName}
                      onBlur={handleBlur}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography>User Information</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={4}>
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
                      disabled={!isEditing}
                    >
                      {roles?.map((role) => (
                        <MenuItem key={role.id} value={role.roleName} selected={values.role === role.roleName}>
                          {role.roleName}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      select
                      name="status"
                      id="status"
                      label="Status"
                      onChange={handleChange}
                      value={values.status}
                      onBlur={handleBlur}
                      error={Boolean(touched.status && errors.status)}
                      helperText={touched.status && errors.status}
                      disabled={!isEditing}
                      fullWidth
                    >
                      {statuses.map(({ label, value }) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <LoadingButton
                  color="secondary"
                  type="submit"
                  variant="contained"
                  sx={{ color: '#FFF', mt: '20px', textTransform: 'none' }}
                  disabled={!isEditing}
                  loading={loading}
                  fullWidth
                >
                  Save
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default EditUsers;