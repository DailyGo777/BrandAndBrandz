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

export const applicationFormSchema = yup.object().shape({
  full_name: yup.string().required("Full Name is required"),
  phone_number: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email_address: yup.string().email("Invalid email").required("Email is required"),
  educational_qualification: yup.string().required("Qualification is required"),
  location: yup.string().required("Location is required"),
  current_year_or_graduation_year: yup.string().required("Graduation year is required"),
  portfolio_link: yup.string().url("Must be a valid URL").nullable(),
  why_internship: yup.string().required("This field is required"),
  prior_experience: yup.string().nullable(),
  resume_file: yup
    .mixed()
    .test("required", "Resume is required", (value) => value && value.length > 0)
    .test("fileType", "Only PDF or DOCX files are allowed", (value) => {
      if (!value || value.length === 0) return false;
      const allowed = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      return allowed.includes(value[0].type);
    }),
});