import * as Yup from 'yup';

interface IOrder {
  productMealId?: string;
  minMadLeanTime: string | Date;
  averageMadLeanTime: string | Date;
  maxMadLeanTime: string | Date;
  categoryId: string;
  subCategoryId: string;
}

export const ORDER_INITIAL_VALUES: IOrder = {
  minMadLeanTime: '',
  averageMadLeanTime: '',
  maxMadLeanTime: '',
  categoryId: '',
  subCategoryId: '',
};

export const ORDER_VALIDATION_SCHEMA = Yup.object({
  minMadLeanTime: Yup.string().required(),
  averageMadLeanTime: Yup.string().required(),
  maxMadLeanTime: Yup.string().required(),
  categoryId: Yup.string().required(),
  subCategoryId: Yup.string().required(),
});
