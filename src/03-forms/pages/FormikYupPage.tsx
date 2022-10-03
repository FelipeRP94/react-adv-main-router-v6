import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe de tener 15 caracteres o menos")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Debe de tener 10 caracteres o menos")
        .required("Required"),
      email: Yup.string()
        .email("Formato de email inválido")
        .required("Required"),
    }),
  });

  return (
    <div>
      <h2>Formik Yup</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="text" {...getFieldProps("email")} />
        {touched.lastName && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
