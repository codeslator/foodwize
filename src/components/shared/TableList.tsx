import { FC } from 'react';
import {
  Checkbox,
  TableCell,
  TableRow,
  Button,
  Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  tableData: Array<string>;
}

export const TableList: FC<Props> = ({ tableData }) => {
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox color="secondary" value="true" />
      </TableCell>
      {tableData.map((item, i) => {
        return <TableCell key={i}>{item}</TableCell>;
      })}
      <TableCell>
        <Button
          sx={{
            borderRadius: '100px',
            textTransform: 'none',
            fontSize: '13px',
            padding: '2px',
            boxShadow: 0,
            '&:hover': {
              boxShadow: 0,
              cursor: 'inherit',
            },
          }}
          color="secondary"
          variant="contained"
        >
          <Typography variant="inherit" color="#FFF">
            Active
          </Typography>
        </Button>
      </TableCell>
      <TableCell>
        <Button color="secondary">
          <EditIcon
            sx={{
              color: '#9E9A9C',
            }}
          />
        </Button>
        <Button color="primary">
          <DeleteOutlineIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
