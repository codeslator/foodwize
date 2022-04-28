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
          mb: '2px',
          color: '#5E565A',
          cursor: 'pointer',
        }}
      >
        {toolBarList.map((item, i) => {
          return i === 0 ? (
            <Grid
              key={i}
              item
              sx={{
                textDecoration: 'underline',
                textUnderlineOffset: 6,
                textDecorationColor: 'green',
                fontWeight: 'bold',
              }}
            >
              All
            </Grid>
          ) : (
            <Grid key={i} item>
              {item}
            </Grid>
          );
        })}
      </Grid>
      <Divider />
    </List>
  );
};
