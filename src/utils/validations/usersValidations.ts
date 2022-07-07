import * as Yup from 'yup';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  status: string;
  parent_vendor?: string;
}

//Checks if there's an user and stores its id
const localUserId = localStorage.user && JSON.parse(localStorage.user).user.vendorId;

export const USER_INITIAL_STATE: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  status: '',
  role: '',
  parent_vendor: localUserId,
};

export const USER_VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().max(255).required('Name is requied'),
  lastName: Yup.string().max(255).required('Last Name is requied'),
  email: Yup.string().email('Must be a valid E-mail').max(255).required('E-mail is required'),
  //TODO: una mayuscula y 8 caracteres
  password: Yup.string().max(255).required('Password is required'),
  role: Yup.string().max(255).required('Role is required'),
  status: Yup.string().max(255).required('Status is requied'),
});