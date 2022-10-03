import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstractation = () => {
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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
