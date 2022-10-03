import "../styles/styles.css";
import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormikComponents = () => {
  useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      terms: false,
      jobType: "",
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
      terms: Yup.boolean().oneOf(
        [true],
        "Debe aceptar los terminos y condiciones"
      ),
      jobType: Yup.string().required("Debe de seleccionar un tipo de trabajo"),
    }),
  });

  return (
    <div>
      <h2>Formik Components</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Required"),
          email: Yup.string()
            .email("Formato de email inválido")
            .required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "Debe aceptar los terminos y condiciones"
          ),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Debe de seleccionar un tipo de trabajo"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-jr">IT Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
