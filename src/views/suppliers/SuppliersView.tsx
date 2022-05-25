import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ModuleToolbar } from '../../components/shared';
import ModuleTabs from '../../components/shared/ModuleTabs';
import { SuppliersList, DeliveriesList, OrdersList } from '../../components/suppliers';
import ModuleDialog from '../../components/shared/ModuleDialog';
import { useUI } from '../../utils/hooks';
import OrderForm from '../../components/suppliers/OrderForm';

const SuppliersView: FC = () => {
  const { toggleDialog, openDialog } = useUI();
  return (
    <>
      <Helmet>
        <title>Suppliers | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar title="Suppliers" action={toggleDialog} actionTitle="Add Supplier">
            <ModuleDialog title="Create Product" open={openDialog} handleClose={toggleDialog} size="sm">
              <OrderForm isLoading={false} />
            </ModuleDialog>
          </ModuleToolbar>
        </Grid>
        <Grid item xs={12}>
          <ModuleTabs
            tabNames={['Orders', 'Suppliers', 'Delivery']}
            tabs={[<OrdersList />, <SuppliersList />, <DeliveriesList />]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SuppliersView;
