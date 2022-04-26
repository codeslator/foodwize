import * as Yup from 'yup';

export const SIGN_IN_INITIAL_VALUES = {
  email: '',
  password: '',
  remember: false,
};

export const SIGN_IN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  password: Yup.string().max(255).required('Password is required'),
});