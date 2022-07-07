import * as yup from 'yup';

interface IUpdatePassword {
  password: string;
  confirm_password: string;
}

export const UPDATE_PASSWORD_INITIAL_VALUES: IUpdatePassword = {
  password: '',
  confirm_password: '',
}

export const UPDATE_PASSWORD_VALIDATION_SCHEMA = yup.object({
  password: yup.string().required().min(8),
  confirm_password: yup.string()
        .equals([yup.ref('password')], 'Confirm Password are not equal to New Password')
        .required()
        .min(8),
})
