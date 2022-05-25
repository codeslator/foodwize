import * as Yup from 'yup';

interface ISignIn {
  email: string;
  password: string;
  remember: boolean;
}

let localLogin: ISignIn = {
  email: '',
  password: '',
  remember: false,
};

if (localStorage.getItem('localLogin')) {
  localLogin = JSON.parse(`${localStorage.getItem('localLogin')}`);
}

//Checks if there's an user and stores its id
const localUserId = localStorage.user && JSON.parse(localStorage.user).user.vendorId;

export const SIGN_IN_INITIAL_VALUES: ISignIn = {
  email: localLogin ? localLogin.email : '',
  password: '',
  remember: localLogin ? localLogin.remember : false,
};

export const ADD_USER_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  status: '',
  role: '',
  parent_vendor: localUserId,
};

export const SIGN_IN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  password: Yup.string().max(255).required('Password is required'),
});

export const RECOVER_PASSWORD_INITIAL_VALUES = {
  email: '',
};

export const RECOVER_PASSWORD_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
});

export const RESET_PASSWORD_INITIAL_VALUES = {
  password: '',
  passwordConfirm: '',
};

export const RESET_PASSWORD_VALIDATION_SCHEMA = Yup.object({
  password: Yup.string().max(255).required('Password is required'),
  // TODO: Validate passwords must be equals
  passwordConfirm: Yup.string().max(255).required('Password is required'),
});

export const ADD_USER_VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().max(255).required('Name is requied'),
  lastName: Yup.string().max(255).required('Last Name is requied'),
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  //TODO: una mayuscula y 8 caracteres
  password: Yup.string().max(255).required('Password is required'),
  role: Yup.string().max(255).required('Role is required'),
  status: Yup.string().max(255).required('Status is requied'),
});
