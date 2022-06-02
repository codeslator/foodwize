import * as Yup from 'yup';

export interface IProduct {
  productMealId?: string;
  minMadLeanTime: string | Date;
  averageMadLeanTime: string | Date;
  maxMadLeanTime: string | Date;
  categoryId: string;
  subCategoryId: string;
}

export const PRODUCT_INITIAL_VALUES: IProduct = {
  minMadLeanTime: '',
  averageMadLeanTime: '',
  maxMadLeanTime: '',
  categoryId: '',
  subCategoryId: '',
};

export const PRODUCT_VALIDATION_SCHEMA = Yup.object({
  minMadLeanTime: Yup.string().required(),
  averageMadLeanTime: Yup.string().required(),
  maxMadLeanTime: Yup.string().required(),
  categoryId: Yup.string().required(),
  subCategoryId: Yup.string().required(),
});

export interface IOrder {
  id?: number;
  supplier_details_id: string | number;
  total_cost: string | number;
  actual_cost: string | number;
  tax: string | number;
  discount: string | number;
  status: string;
}

export const ORDER_INITIAL_VALUES: IOrder = {
  supplier_details_id: '',
  total_cost: '',
  actual_cost: '',
  tax: '',
  discount: '',
  status: '',
};

export const ORDER_VALIDATION_SCHEMA = Yup.object({
  supplier_details_id: Yup.string().required(),
  total_cost: Yup.string().required(),
  actual_cost: Yup.string().required(),
  tax: Yup.string().required(),
  discount: Yup.string().required(),
  status: Yup.string().required(),
});