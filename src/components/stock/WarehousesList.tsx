import { FC } from 'react';
import { Grid } from '@mui/material';
import { ModuleList } from '../shared';
import { ModuleListRowActions } from '../shared/ModuleList';
import ModuleFilter from '../shared/ModuleFilter';

const expiredProdcutsActions = [
  {
    label: 'Action 1',
    handleAction: () => console.log('Action 1'),
  },
  {
    label: 'Action 2',
    handleAction: () => console.log('Action 2'),
  },
];

const expiredProductColumns = [
  {
    field: 'warehouseId',
    label: 'Warehouse Id'
  },
  {
    field: 'name',
    label: 'Name'
  },
  {
    field: 'category',
    label: 'Category'
  },
  {
    field: 'actions',
    label: 'Actions'
  },
];


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
        <ModuleFilter
          by="Location"
          filters={[
            {
              label: 'Warehouse 1',
              count: 13
            },
            {
              label: 'Warehouse 1',
              count: 5
            },
          ]}
        />
        <ModuleFilter
          by="Category"
          filters={[
            {
              label: 'Food',
              count: 13
            },
            {
              label: 'Drink',
              count: 5
            },
            {
              label: 'Season',
              count: 20
            },
          ]}
        />
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