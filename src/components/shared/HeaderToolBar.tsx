import { FC } from 'react';
import React from 'react';
import { Divider, List, Grid } from '@mui/material';

interface Props {
  toolBarList: Array<string>;
}

export const HeaderToolBar: FC<Props> = ({ toolBarList }) => {
  return (
    <List>
      <Grid
        container
        spacing={2}
        sx={{
          mb: '15px',
          color: '#5E565A',
          cursor: 'pointer',
        }}
      >
        {toolBarList.map((item, i) => {
          return i === 0 ? (
            <Grid
              item
              sx={{
                textDecoration: 'underline',
                textUnderlineOffset: '20px',
                textDecorationColor: 'green',
                fontWeight: 'bold',
              }}
            >
              All
            </Grid>
          ) : (
            <Grid item>{item}</Grid>
          );
        })}
      </Grid>
      <Divider />
    </List>
  );
};
