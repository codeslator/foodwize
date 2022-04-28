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

if(localStorage.getItem('localLogin')) {
  localLogin = JSON.parse(`${localStorage.getItem('localLogin')}`);
};

export const SIGN_IN_INITIAL_VALUES: ISignIn = {
  email: (localLogin) ? localLogin.email : '',
  password: '',
  remember: (localLogin) ? localLogin.remember : false,
};

export const SIGN_IN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  password: Yup.string().max(255).required('Password is required'),
});