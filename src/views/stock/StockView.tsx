import { FC } from 'react'
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';
import { ModuleTabs, ModuleToolbar } from '../../components/shared';
import { CanteensList, WarehousesList } from '../../components/stock';

const StockView: FC = () => {
  return (
    <>
      <Helmet>
        <title>Suplliers | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar
            title="Stock Management"
            action={() => console.log('Stock Management module here')}
            actionTitle="Add Stock"
          />

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