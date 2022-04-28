import { TableRow } from './TableList';
import { Box, Table, TableBody } from '@mui/material';
import { TableHeader } from './TableHeader';
import { FC } from 'react';

interface Props {
  tableData: Array<{}>;
  headerListNames: Array<string>;
}

export const TableView: FC<Props> = ({ tableData, headerListNames }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '25px',
        color: 'primary',
      }}
    >
      <Table>
        <TableHeader headerListNames={headerListNames} />
        <TableBody>
          {tableData.map((item, i) => (
            <TableRow key={i} tableData={Object.values(item)} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
