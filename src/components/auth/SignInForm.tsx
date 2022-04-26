import { FC, useState } from 'react';
import { Formik } from 'formik';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  PersonOutline,
  Key,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import {
  SIGN_IN_INITIAL_VALUES,
  SIGN_IN_VALIDATION_SCHEMA
} from '../../utils/validations/authValidations';
import useAuth from '../../utils/hooks/useAuth';

export const SignInForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login, isLoading } = useAuth();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={SIGN_IN_INITIAL_VALUES}
      onSubmit={(values) => login(values.email, values.password)}
      validationSchema={SIGN_IN_VALIDATION_SCHEMA}
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="E-mail Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
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
                  startAdornment: (
                    <InputAdornment position="start">
                      <Key />
                    </InputAdornment>
                  ),
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
              // autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value={values.remember} color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ color: '#ffffff' }}
                loading={isLoading}
                disabled={isLoading}
              >
                Sign In
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  
  );
};
