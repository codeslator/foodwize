import { FC } from 'react';
import { Formik } from 'formik';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PersonOutline } from '@mui/icons-material';
import { RECOVER_PASSWORD_INITIAL_VALUES, RECOVER_PASSWORD_VALIDATION_SCHEMA } from '../../utils/validations/authValidations';

export const RecoverPasswordForm: FC = () => {
  return (
    <Formik
      initialValues={RECOVER_PASSWORD_INITIAL_VALUES}
      onSubmit={(values) => console.log(values)}
      validationSchema={RECOVER_PASSWORD_VALIDATION_SCHEMA}
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
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ color: '#ffffff' }}
                // loading={isLoading}
                // disabled={isLoading}
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