import * as Yup from 'yup';

interface IStock {
  warehouse_id?: string | number;
  warehouse_details_id: string;
  warehouse_orders_id: string;
  expired_at: string | Date;
  manufactured_at: string | Date;
  initial_quantity: number;
  current_quantity: number;
  label: string;
  batch: string;
  supplier_label: string;
  supplier_products_id: string;
  status: string;
}

interface IWarehouse {
  name: string;
  label: string;
  size: number | string;
  address: string;
  geolocation: string;
  status: string;
}

interface ICanteen {
  name: string;
  label: string;
  size: number | string;
  address: string;
  geolocation: string;
  status: string;
}

export const STOCK_INITIAL_VALUES: IStock = {
  warehouse_id: '',
  warehouse_details_id: '',
  warehouse_orders_id: '',
  expired_at: new Date(),
  manufactured_at: new Date(),
  initial_quantity: 0,
  current_quantity: 0,
  label: '',
  batch: '',
  supplier_label: '',
  supplier_products_id: '',
  status: ''
};

export const STOCK_VALIDATION_SCHEMA = Yup.object({
  // warehouse_id: Yup.string().required(),
  warehouse_details_id: Yup.string().required(),
  warehouse_orders_id: Yup.string().required(),
  expired_at: Yup.date().required(),
  manufactured_at: Yup.date().required(),
  initial_quantity: Yup.number().required(),
  current_quantity: Yup.number().required(),
  label: Yup.string().required(),
  batch: Yup.string().required(),
  supplier_label: Yup.string().required(),
  supplier_products_id: Yup.string().required(),
  status: Yup.string().required()
});

export const WAREHOUSE_INITIAL_VALUES: IWarehouse = {
  name: '',
  label: '',
  size: '',
  address: '',
  geolocation: '',
  status: '',
};

export const WAREHOUSE_VALIDATION_SCHEMA = Yup.object({
  name: Yup.string().required(),
  label: Yup.string().required(),
  size: Yup.string().required(),
  address: Yup.string().required(),
  geolocation: Yup.string().required(),
  status: Yup.string().required(),
})

export const CANTEEN_INITIAL_VALUES: ICanteen = {
  name: '',
  label: '',
  size: '',
  address: '',
  geolocation: '',
  status: '',
};

export const CANTEEN_VALIDATION_SCHEMA = Yup.object({
  name: Yup.string().required(),
  label: Yup.string().required(),
  size: Yup.string().required(),
  address: Yup.string().required(),
  geolocation: Yup.string().required(),
  status: Yup.string().required(),
})