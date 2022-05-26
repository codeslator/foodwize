import { FC } from 'react';
import { Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ModuleToolbar } from '../../components/shared';
import ModuleTabs from '../../components/shared/ModuleTabs';
import { SuppliersList, DeliveriesList, OrdersList } from '../../components/suppliers';
import ModuleDialog from '../../components/shared/ModuleDialog';
import { useUI } from '../../utils/hooks';
import OrderForm from '../../components/suppliers/OrderForm';
import { Outlet } from 'react-router-dom';

const SuppliersView: FC = () => {
  const { toggleDialog, openDialog } = useUI();
  return (
    <>
      <Helmet>
        <title>Suplliers | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar
            title="Suppliers"
            actions={(
              <Button
                variant="contained"
                color="secondary"
                onClick={toggleDialog}
                sx={{
                  color: '#fff',
                  ml: 1,
                }}
              >
                Add Supplier
              </Button>
            )}
          >
            <ModuleDialog title="Create Product" open={openDialog} handleClose={toggleDialog} size="sm">
              <OrderForm isLoading={false} />
            </ModuleDialog>
          </ModuleToolbar>
        </Grid>
        <Grid item xs={12}>
          <ModuleTabs
            tabNames={[
              'Orders',
              'Suppliers',
              'Delivery',
            ]}
            tabs={[
              <Outlet />,
              <SuppliersList />,
              <DeliveriesList />,
            ]}
            hasRouter
            links={[
              'orders',
              'suppliers',
              'deliveries',
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SuppliersView;