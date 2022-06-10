import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Avatar, Box, Chip, Typography, IconButton, Collapse } from '@mui/material';
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { ModuleDataGridTable } from '../components/shared';
import { DeleteOutline, Edit } from '@mui/icons-material';
import { useAxios, useUtils } from '../utils/hooks';
import { useSnackbar } from 'notistack';

interface VendorMetadata {
  Restaurant: string;
  Description: string;
}
interface Vendor {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  metadata: VendorMetadata;
}

interface VendorData {
  vendors: Vendor[];
  total: string;
}

const TestView: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { getShortId, getAvatarInitials } = useUtils();
  const [refetch, { data, response, loading, error }] = useAxios<VendorData>({ url: 'vendors?limit=10&offset=0' });

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        TransitionComponent: Collapse,
      });
    }
  }, [error]);

  const columns: GridColumns = [
    {
      field: 'accountId',
      headerName: 'Account Id',
      flex: 0.5,
      renderCell: ({ row }: GridRenderCellParams<string>) => getShortId(row.accountId),
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
          <Avatar src={row.avatarUrl ? row.avatarUrl : getAvatarInitials(row.firstName, row.lastName)} sx={{ mr: 2 }} />
          <Typography color="textPrimary" variant="body1">
            {`${row.firstName} ${row.lastName}`}
          </Typography>
        </Box>
      ),
    },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    {
      field: 'restaurant',
      headerName: 'Restaurant',
      flex: 1,
      renderCell: ({ row }: GridRenderCellParams<string>) => row.metadata.Restaurant,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      renderCell: ({ row }: GridRenderCellParams<string>) => row.metadata.Description,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Chip label={value} color={value === 'ACTIVE' ? 'success' : 'error'} />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <IconButton component={NavLink} to={`${id}`}>
            <Edit color="secondary" />
          </IconButton>,
          <IconButton component={NavLink} to={`${id}`}>
            <DeleteOutline color="primary" />
          </IconButton>,
        ];
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Test | Foodwize CMS</title>
      </Helmet>
      <ModuleDataGridTable
        rows={data?.vendors || []}
        count={data?.total || '0'}
        columns={columns}
        idName="accountId"
        loading={loading}
        toolbar
        refetch={refetch}
        refetchUrl="vendors"
      />
    </>
  );
};

export default TestView;
