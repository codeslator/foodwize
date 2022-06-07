import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ModuleToolbar, ModuleTabs, ModuleDialog } from '../../components/shared';
import { useUI, useAxiosMutation } from '../../utils/hooks';
import OrderForm from '../../components/suppliers/OrderForm';
import { foodwizeStockApi } from '../../config/useAxiosInterceptor';

const SuppliersView: FC = () => {
  const { toggleDialog, openDialog } = useUI();
  const [postData, { loading, error }] = useAxiosMutation({
    url: '/warehouse/orders',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    onFinally: () => console.log('Register successfull')
  }, foodwizeStockApi);

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
              <OrderForm isLoading={loading} onSave={postData} />
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
              <Outlet />,
              <Outlet />,
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