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

interface SignInFormProps {
  isLoading: boolean;
  login: (email: string, password: string) => void;
};

export const SignInForm: FC<SignInFormProps> = ({ login, isLoading }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const logIn = (values: typeof SIGN_IN_INITIAL_VALUES) => {
    const { email, remember, password } = values;
    if(remember) {
      // TODO: Implement and correct error when use localStorage custom hook
      localStorage.setItem('localLogin', JSON.stringify({
        email,
        remember,
        password: ''
      }));
    }
    login(email, password);
  };

  return (
    <Formik
      initialValues={SIGN_IN_INITIAL_VALUES}
      onSubmit={(values) => logIn(values)}
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={(
                  <Checkbox
                    name="remember"
                    value={values.remember}
                    checked={values.remember}
                    color="primary"
                    onChange={handleChange}
                  />
                )}
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
