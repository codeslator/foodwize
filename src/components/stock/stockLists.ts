import React from 'react';
import { ModuleListRowActions } from '../shared/ModuleList';

export const expiredProdcutsActions = [
  {
    label: 'Action 1',
    handleAction: () => console.log('Action 1'),
  },
  {
    label: 'Action 2',
    handleAction: () => console.log('Action 2'),
  },
];

export const expiredProductColumns = [
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

export const moduleFilters = [
  {
    title: 'Location',
    filters: [
      {
        label: 'Warehouse 1',
        count: 13
      },
      {
        label: 'Warehouse 2',
        count: 5
      },
    ]
  },
  {
    title: 'Category',
    filters: [
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
    ]
  },
  {
    title: 'Brand',
    filters: [
      {
        label: 'My Healthy Food',
        count: 13
      },
      {
        label: 'Terre et Fourchette',
        count: 5
      },
    ]
  },
]