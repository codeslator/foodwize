import { FC, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ModuleToolbar, ModuleTabs, ModuleDialog } from '../../components/shared';
import { useUI } from '../../utils/hooks';

const SuppliersView: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(pathname === '/app/suppliers') {
      navigate('/app/suppliers/orders')
    }
  }, [])  
  const { toggleDialog, openDialog } = useUI();

  return (
    <>
      <Helmet>
        <title>Suppliers | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar
            title="Suppliers"
            actions={
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
            }
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
              <Outlet context={[ openDialog, toggleDialog ]} />,
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
