import React, { useState } from 'react';
import { Box, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

export const Security = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box>
      <Typography>Update your Password</Typography>
      <Box>
        <Box mt="1rem">
          <Typography>Type New Password</Typography>
          <Input
            type={showPassword ? 'password' : 'text'}
            disableUnderline
            placeholder="Please include an upper case and a number"
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
          {/* <FormHelperText></FormHelperText> */}
        </Box>
        <Box mt="1rem">
          <Typography>Confirm New Password</Typography>
          <Input
            type={showPassword ? 'password' : 'text'}
            disableUnderline
            placeholder="Please include an upper case and a number"
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
          {/* <FormHelperText></FormHelperText> */}
        </Box>
        <Box mt={2}>
          <LoadingButton type="submit" variant="contained" color="secondary" sx={{ color: '#ffffff' }}>
            Save
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};
