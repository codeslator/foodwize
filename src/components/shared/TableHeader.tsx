import { FC } from 'react';

import { Checkbox, TableCell, Box, TableHead, TableRow } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import React from 'react';

interface Props {
  headerListNames: Array<string>;
}
/**
 * https://mui.com/material-ui/react-tabs/#customization
 */
export const TableHeader: FC<Props> = ({ headerListNames }) => {
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#F8FBFC' }}>
        <TableCell padding="checkbox">
          <Checkbox color="primary" value="true" />
        </TableCell>
        {headerListNames.map((item, i) => {
          return (
            <TableCell key={i}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: '#EA6A3B',
                  cursor: 'pointer',
                }}
              >
                {item}
                <UnfoldMoreIcon fontSize="small" />
              </Box>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
