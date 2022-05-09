import React, { FC } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Paper, Theme, Typography } from '@mui/material';

export const CheckList: FC<{ checks: Array<{ label: string }>; title: string }> = ({ checks, title }) => (
  <Paper sx={{ width: '12rem' }} variant="outlined" square>
    <Box
      sx={(theme: Theme) => ({
        p: '12px 8px',
        borderBottom: `1px solid ${theme.palette.greys['20']}`,
        backgroundColor: '#F8FBFC',
      })}
    >
      <Typography>{title}</Typography>
    </Box>
    <Box>
      {checks.map(({ label }, i) => (
        <FormControl
          key={`check-${label}-${Math.random() * i++}`}
          fullWidth
          sx={(theme: Theme) => ({
            p: '0px 8px',
            borderBottom: `1px ${checks.length === i ? 'none' : 'dashed'} ${theme.palette.greys['20']}`,
          })}
        >
          <FormControlLabel label={label} control={<Checkbox color="secondary" />} />
          {/* <FormHelperText>{false ? 'You can display an error' : ''}</FormHelperText> */}
        </FormControl>
      ))}
    </Box>
  </Paper>
);