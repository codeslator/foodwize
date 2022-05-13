import { FC } from 'react';
import { Formik } from 'formik';
import { Grid, TextField, MenuItem, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ORDER_INITIAL_VALUES, ORDER_VALIDATION_SCHEMA } from '../../utils/validations/suplliersValidations';

interface OrderFormProps {
  isLoading: boolean;
}

const categories = [
  {
    label: 'Category 1',
    value: 'category-1'
  },
  {
    label: 'Category 2',
    value: 'category-2'
  },
  {
    label: 'Category 3',
    value: 'category-3'
  },
  {
    label: 'Category 4',
    value: 'category-4'
  },
];

const subCategories = [
  {
    label: 'SubCategory 1',
    value: 'subcategory-1'
  },
  {
    label: 'SubCategory 2',
    value: 'subcategory-2'
  },
  {
    label: 'SubCategory 3',
    value: 'subcategory-3'
  },
  {
    label: 'SubCategory 4',
    value: 'subcategory-4'
  },
];

const OrderForm: FC<OrderFormProps> = ({ isLoading }) => {
  return (
    <Formik
      initialValues={ORDER_INITIAL_VALUES}
      onSubmit={(values) => console.log(values)}
      validationSchema={ORDER_VALIDATION_SCHEMA}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleReset,
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item xs={12}>
              <TextField
                id="minMadLeanTime"
                name="minMadLeanTime"
                label="Min Mad Lean Time"
                value={values.minMadLeanTime}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.minMadLeanTime && errors.minMadLeanTime)}
                helperText={touched.minMadLeanTime && errors.minMadLeanTime}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="averageMadLeanTime"
                name="averageMadLeanTime"
                label="Average Mad Lean Time"
                value={values.averageMadLeanTime}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.averageMadLeanTime && errors.averageMadLeanTime)}
                helperText={touched.averageMadLeanTime && errors.averageMadLeanTime}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="maxMadLeanTime"
                name="maxMadLeanTime"
                label="Max Mad Lean Time"
                value={values.maxMadLeanTime}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.maxMadLeanTime && errors.maxMadLeanTime)}
                helperText={touched.maxMadLeanTime && errors.maxMadLeanTime}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="maxMadLeanTime"
                name="maxMadLeanTime"
                label="Max Mad Lean Time"
                value={values.maxMadLeanTime}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.maxMadLeanTime && errors.maxMadLeanTime)}
                helperText={touched.maxMadLeanTime && errors.maxMadLeanTime}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="categoryId"
                name="categoryId"
                label="Categories"
                value={values.categoryId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.categoryId && errors.categoryId)}
                helperText={touched.categoryId && errors.categoryId}
                fullWidth
                select
              >
                {categories.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="subCategoryId"
                name="subCategoryId"
                label="Sub Categories"
                value={values.subCategoryId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.subCategoryId && errors.subCategoryId)}
                helperText={touched.subCategoryId && errors.subCategoryId}
                fullWidth
                select
              >
                {subCategories.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Button variant="contained" color="inherit" fullWidth onClick={handleReset}>
                    Clear All
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ color: '#ffffff' }}
                    loading={isLoading}
                    disabled={isLoading}
                  >
                    Save
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default OrderForm;