import { FC } from 'react';
import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ModuleToolbar } from '../../components/shared';
import ModuleTabs from '../../components/shared/ModuleTabs';
import { SuppliersList, DeliveriesList, OrdersList } from '../../components/suppliers';

const SuppliersView: FC = () => {
  return (
    <>
      <Helmet>
        <title>Suplliers | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar
            title="Suppliers"
            action={() => console.log('Suppliers module here')}
            actionTitle="Add Supplier"
          />

        </Grid>
        <Grid item xs={12}>
          <ModuleTabs
            tabNames={[
              'Orders',
              'Suppliers',
              'Delivery',
            ]}
            tabs={[
              <OrdersList />,
              <SuppliersList />,
              <DeliveriesList />,
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SuppliersView;