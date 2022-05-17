import { FC } from 'react';
import { Grid } from '@mui/material';
import { ModuleList } from '../shared';
import ModuleFilter from '../shared/ModuleFilter';
import { expiredProdcutsActions, expiredProductColumns, moduleFilters } from './stockLists';
import { ModuleListRowActions } from '../shared/ModuleList';

const WarehousesList: FC = () => {
  const expiredProductRows = [
    {
      warehouseId: 'abc123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions />
  
    },
    {
      warehouseId: 'def123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions />
    },
    {
      warehouseId: 'ghi123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions />
    },
    {
      warehouseId: 'jkl123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions />
    },
    {
      warehouseId: 'mno123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions />
    },
  ]

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={3} lg={2}>
        {moduleFilters.map(({ title, filters }) => (
          <ModuleFilter
            key={title}
            by={title}
            filters={filters}
          />
        ))}
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <ModuleList
              title="Expired Products"
              actions={expiredProdcutsActions}
              columns={expiredProductColumns}
              rows={expiredProductRows}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ModuleList
              title="Restock Products"
              actions={expiredProdcutsActions}
              columns={expiredProductColumns}
              rows={expiredProductRows}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ModuleList
              title="Delivery"
              actions={expiredProdcutsActions}
              columns={expiredProductColumns}
              rows={expiredProductRows}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ModuleList
              title="Top Products"
              actions={expiredProdcutsActions}
              columns={expiredProductColumns}
              rows={expiredProductRows}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WarehousesList;