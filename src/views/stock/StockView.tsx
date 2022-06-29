import { FC, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Outlet, useNavigate, useLocation } from 'react-router-dom'; 
import { Grid, Button } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { ModuleDialog, ModuleTabs, ModuleToolbar } from '../../components/shared';
// import { CanteensList, WarehousesList } from '../../components/stock';
import { useUI } from '../../utils/hooks';
import { StockForm, WarehouseForm, CanteenForm } from '../../components/stock';

const StockView: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(pathname === '/app/stock') {
      navigate('/app/stock/warehouses')
    }
  }, [])

  const { toggleDialog, openDialog } = useUI();
  const [openWarehouseDialog, setOpenWarehouseDialog] = useState<boolean>(false);
  const [openCanteenDialog, setOpenCanteenDialog] = useState<boolean>(false);

  const toggleWarehouseDialog = () => {
    setOpenWarehouseDialog(!openWarehouseDialog);
  };

  const toggleCanteenDialog = () => {
    setOpenCanteenDialog(!openCanteenDialog);
  };

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
              pathname === '/app/stock/warehouses' ? (<Button
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
              </Button>) :
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
              <StockForm onClose={toggleDialog} />
            </ModuleDialog>
            <ModuleDialog title="Create Warehouse" open={openWarehouseDialog} handleClose={toggleWarehouseDialog} size="sm">
              <WarehouseForm />
            </ModuleDialog>
            <ModuleDialog title="Create Canteen" open={openCanteenDialog} handleClose={toggleCanteenDialog} size="sm">
              <CanteenForm />
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
              <Outlet />,
              <Outlet />,
            ]}
            hasRouter
            links={[
              'warehouses',
              'canteens'
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default StockView;