import { DeleteOutline, Edit } from '@mui/icons-material';
import { Avatar, Box, Chip, IconButton, Typography } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { useAxios, useUtils } from '../../utils/hooks';
import { ModuleDataGridTable } from '../shared';
import EmptyView from '../shared/EmptyView';

interface UserMetadata {
  Restaurant: string;
  Description: string;
}
interface User {
  vendorId: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  metadata: UserMetadata;
}
interface UserData {
  users: User[];
  total: string;
}

const AllList: FC = () => {
  const [refetch, { data, response, error, loading }] = useAxios<UserData>({
    url: 'accounts/profiles?limit=10&offset=0'
  });
  const { getAvatarInitials, getShortId } = useUtils();

  const columns: GridColumns = [
    {
      field: 'vendorId',
      headerName: 'Account Id',
      flex: 0.5,
      renderCell: ({ row }: GridRenderCellParams<string>) => getShortId(row?.vendorId),
    },
    {
      field: 'fullName',
      headerName: 'FullName',
      flex: 1,
      renderCell: ({ row }: GridRenderCellParams<object>) => (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Avatar src={row.avatarUrl ? row.avatarUrl : getAvatarInitials(row?.firstName, row?.lastName)} sx={{ mr: 2 }} />
          <Typography color="textPrimary" variant="body1">
            {`${row.firstName} ${row.lastName}`}
          </Typography>
        </Box>
      ),
    },
    { field: 'email', headerName: 'E-mail', flex: 1 },

    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Chip
          label={value}
          color={value === 'ACTIVE' ? 'secondary' : 'primary'}
          sx={{ color: '#FFF', textAlign: 'center' }}
        />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => [
        <IconButton component={NavLink} to={`/app/users/${id}`}>
          <Edit color="secondary" />
        </IconButton>,
        <IconButton onClick={() => console.log(id)}>
          <DeleteOutline color="primary" />
        </IconButton>,
      ]
    },
  ];

  return (
    <>
      {(data?.users && data?.users.length > 0) ? (
        <ModuleDataGridTable
          rows={data?.users || []}
          count={data?.total || '0'}
          columns={columns}
          idName="vendorId"
          loading={loading}
          // toolbar
          refetch={refetch}
          refetchUrl="accounts/profiles?limit=10&offset=0"
        />
      ) : (
        <EmptyView title="You don't have any Vendor" link="Click here to add your vendor" />
      )}
    </>
  );
};

export default AllList;