import { FC, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Grid, Button } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { ModuleDialog, ModuleTabs, ModuleToolbar } from '../../components/shared';
import { CanteensList, WarehousesList } from '../../components/stock';
import { useUI } from '../../utils/hooks';
import { StockForm, WarehouseForm, CanteenForm } from '../../components/stock';

const StockView: FC = () => {
  const { toggleDialog, openDialog } = useUI();
  const [openWarehouseDialog, setOpenWarehouseDialog] = useState<boolean>(false);
  const [openCanteenDialog, setOpenCanteenDialog] = useState<boolean>(false);

  const toggleWarehouseDialog = () => {
    setOpenWarehouseDialog(!openWarehouseDialog);
  };

  const toggleCanteenDialog = () => {
    setOpenCanteenDialog(!openCanteenDialog);
  };

  const buttons = [

  ]

  return (
    <>
      <Helmet>
        <title>Stock | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar
            title="Stock Management"
            actions={[
              (<Button
                variant="contained"
                color="secondary"
                onClick={toggleDialog}
                sx={{
                  color: '#fff',
                  ml: 1,
                }}
              >
                Add Stock
              </Button>),
              (<Button
                variant="contained"
                startIcon={<AddCircleOutline />}
                onClick={toggleWarehouseDialog}
                sx={{
                  color: '#fff',
                  bgcolor: '#5E565A',
                  ml: 1,
                  '&:hover': {
                    bgcolor: '#342d31'
                  }
                }}
              >
                Add Warehouse
              </Button>),
              (<Button
                variant="contained"
                startIcon={<AddCircleOutline />}
                onClick={toggleCanteenDialog}
                sx={{
                  color: '#fff',
                  bgcolor: '#5E565A',
                  ml: 1,
                  '&:hover': {
                    bgcolor: '#342d31'
                  }
                }}
              >
                Add Canteen
              </Button>)
            ]}
          >
            <ModuleDialog title="Create Product" open={openDialog} handleClose={toggleDialog} size="lg">
              <StockForm isLoading={false} />
            </ModuleDialog>
            <ModuleDialog title="Create Warehouse" open={openWarehouseDialog} handleClose={toggleWarehouseDialog} size="sm">
              <WarehouseForm isLoading={false} />
            </ModuleDialog>
            <ModuleDialog title="Create Canteen" open={openCanteenDialog} handleClose={toggleCanteenDialog} size="sm">
              <CanteenForm isLoading={false} />
            </ModuleDialog>
          </ModuleToolbar>
        </Grid>
        <Grid item xs={12}>
          <ModuleTabs
            tabNames={[
              'Warehouses',
              'Canteens',
            ]}
            tabs={[
              <WarehousesList />,
              <CanteensList />,
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default StockView;