import { FC, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Grid, Button } from '@mui/material';
import { ModuleDialog, ModuleTabs, ModuleToolbar } from '../../components/shared';
import { CanteensList, WarehousesList } from '../../components/stock';
import { useUI } from '../../utils/hooks';
import StockForm from '../../components/stock/StockForm';

const StockView: FC = () => {
  const { toggleDialog, openDialog } = useUI();

  return (
    <>
      <Helmet>
        <title>Stock | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar
            title="Stock Management"
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
                Add Stock
              </Button>
            )}
          >
            <ModuleDialog title="Create Product" open={openDialog} handleClose={toggleDialog} size="lg">
              <StockForm isLoading={false} />
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