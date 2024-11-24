import * as Yup from 'yup';

export const validations = Yup.object().shape({
    email: Yup.string().email("Enter a valid email address").required("This field is required"),
    password: Yup.string().min(5, "Minimal password length must be at least 5 characters").required("This field is required")
})