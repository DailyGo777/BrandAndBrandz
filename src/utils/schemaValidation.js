import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  businessEmail: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  companyName: yup.string().required("Company name is required"),
  phoneNumber: yup.string().required("Mobile Number is required"),
  message: yup.string().required("Message is required"),
});
