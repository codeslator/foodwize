import { TableList } from './TableList';
import { Box, Table, TableBody } from '@mui/material';
import { TableHeader } from './TableHeader';

export const TableView = ({}) => {
  const headerListNames = [
    'Name',
    'Last Name',
    'Phone Number',
    'Email',
    'Role',
    'Status',
    'Actions',
  ];

  const tableData = [
    'Apolline',
    'Labrie',
    '+33 44 196060',
    'ApollineLabrie@ersurgeon.fr',
    'Finances',
  ];

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
          <TableList tableData={tableData} />
          <TableList tableData={tableData} />
          <TableList tableData={tableData} />
        </TableBody>
      </Table>
    </Box>
  );
};
