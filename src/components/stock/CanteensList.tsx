import { Grid } from '@mui/material';
import { FC } from 'react'
import { ModuleFilter, ModuleList } from '../shared';
import { ModuleListRowActions } from '../shared/ModuleList';
import { expiredProdcutsActions, expiredProductColumns, moduleFilters } from './stockLists';

const CanteensList: FC = () => {
  const expiredProductRows = [
    {
      warehouseId: 'abc123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions
        options={[
          {
            label: 'Action 1',
            action: () => console.log('Hello world')
          }
        ]}
      />
    },
    {
      warehouseId: 'def123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions
        options={[
          {
            label: 'Action 1',
            action: () => console.log('Hello world')
          }
        ]}
      />
    },
    {
      warehouseId: 'ghi123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions
        options={[
          {
            label: 'Action 1',
            action: () => console.log('Hello world')
          }
        ]}
      />
    },
    {
      warehouseId: 'jkl123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions
        options={[
          {
            label: 'Action 1',
            action: () => console.log('Hello world')
          }
        ]}
      />
    },
    {
      warehouseId: 'mno123',
      name: 'Warehouse 1',
      category: 'Category 1',
      actions: <ModuleListRowActions
        options={[
          {
            label: 'Action 1',
            action: () => console.log('Hello world')
          }
        ]}
      />
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
        {moduleFilters.map(({ title, filters }) => (
          <ModuleFilter
            key={title}
            by={title}
            filters={filters}
          />
        ))}
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
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

export default CanteensList;