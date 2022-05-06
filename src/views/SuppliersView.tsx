import { Grid } from '@mui/material';
import { FC } from 'react'
import { Helmet } from 'react-helmet';
import { ModuleToolbar } from '../components/shared';
import ModuleTabs from '../components/shared/ModuleTabs';

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
              'Tab 1',
              'Tab 2',
            ]}
            tabs={[
              <>Hola mundo 1</>,
              <>Hola mundo 2</>,
            ]}
          />

        </Grid>
      </Grid>
    </>
  );
};

export default SuppliersView;