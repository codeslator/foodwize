import * as Yup from 'yup';

interface IStock {
  warehouseDetailId?: string;
  warehouseOrderId?: string;
  expiredAt: string | Date;
  manufacturedAt: string | Date;
  initialQuantity: number;
  currentQuantity: number;
  label: string;
  batch: string;
  supplierLabel: string;
  supplierProductId: string;
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
  warehouseDetailId: '',
  warehouseOrderId: '',
  expiredAt: new Date(),
  manufacturedAt: new Date(),
  initialQuantity: 0,
  currentQuantity: 0,
  label: '',
  batch: '',
  supplierLabel: '',
  supplierProductId: '',
  status: ''
};

export const STOCK_VALIDATION_SCHEMA = Yup.object({
  warehouseDetailId: Yup.string().required(),
  warehouseOrderId: Yup.string().required(),
  expiredAt: Yup.date().required(),
  manufacturedAt: Yup.date().required(),
  initialQuantity: Yup.number().required(),
  currentQuantity: Yup.number().required(),
  label: Yup.string().required(),
  batch: Yup.string().required(),
  supplierLabel: Yup.string().required(),
  supplierProductId: Yup.string().required(),
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