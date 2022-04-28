import { FC } from 'react';
import {
  Checkbox,
  TableCell,
  TableRow as MUITableRow,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  tableData: Array<string | number | JSX.Element>;
}

export const TableRow: FC<Props> = ({ tableData }) => {
  const rowData = tableData.map((item, i) => (
    <TableCell key={i}>
      <Typography>{item}</Typography>
    </TableCell>
  ));
  return (
    <MUITableRow>
      <TableCell padding="checkbox">
        <Checkbox color="secondary" value="true" />
      </TableCell>
      {rowData}
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
        <IconButton color="secondary">
          <EditIcon
            sx={{
              color: '#9E9A9C',
            }}
          />
        </IconButton>
        <IconButton color="primary">
          <DeleteOutlineIcon />
        </IconButton>
      </TableCell>
    </MUITableRow>
  );
};
