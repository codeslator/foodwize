import { useState, FC } from 'react';
import { Box, FormControl, FormHelperText, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useAxiosMutation } from '../../utils/hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSnackbar } from 'notistack';

type UpdatePasswordData = {
  password: string;
  confirm_password: string;
};

const Security: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [updatePassword, { data, loading, error }] = useAxiosMutation<UpdatePasswordData>({
    url: '/identities',
    method: 'PUT',
  });

  const form = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: yup.object().shape({
      newPassword: yup.string().required().min(8),
      confirmNewPassword: yup
        .string()
        .equals([yup.ref('newPassword')], 'Confirm Password are not equal to New Password')
        .required()
        .min(8),
    }),
    onSubmit(values) {
      updatePassword({
        data: {
          password: values.newPassword,
          confirm_password: values.confirmNewPassword,
        },
        event: {
          onSuccess() {
            enqueueSnackbar('Successfull Password Update', {
              variant: 'success',
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
              },
            });
            form.resetForm();
          },
        },
      });
    },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box>
      <Typography>Update your Password</Typography>
      <Box component="form" onSubmit={form.handleSubmit}>
        <Box mt="1rem">
          <Typography>Type New Password</Typography>
          <FormControl error={Boolean(form.errors.newPassword)}>
            <Input
              value={form.values.newPassword}
              name="newPassword"
              onChange={form.handleChange}
              type={showPassword ? 'password' : 'text'}
              disableUnderline
              placeholder="New Password"
              sx={{
                width: '28rem',
                border: '2px solid grey',
                borderRadius: '8px',
                padding: '8px',
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                    {!showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{form.errors.newPassword}</FormHelperText>
          </FormControl>
        </Box>
        <Box mt="1rem">
          <Typography>Confirm New Password</Typography>
          <FormControl error={Boolean(form.errors.confirmNewPassword)}>
            <Input
              value={form.values.confirmNewPassword}
              name="confirmNewPassword"
              onChange={form.handleChange}
              type={showPassword ? 'password' : 'text'}
              disableUnderline
              placeholder="Confirm Password"
              sx={{
                width: '28rem',
                border: '2px solid grey',
                borderRadius: '8px',
                padding: '8px',
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                    {!showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{form.errors.confirmNewPassword}</FormHelperText>
          </FormControl>
        </Box>
        <Box mt={2}>
          <LoadingButton
            disabled={!form.dirty || !form.isValid}
            loading={loading}
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ color: '#ffffff' }}
          >
            Save
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Security;