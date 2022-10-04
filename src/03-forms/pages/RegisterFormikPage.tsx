import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h2>Register Formik page</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Mínimo 2 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("El formato es incorrecto")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Mínimo 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no coinciden")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput name="name" label="Nombre" />
            <MyTextInput name="email" label="Email" />
            <MyTextInput name="password1" label="Password" type="password" />
            <MyTextInput name="password2" label="Password" type="password" />

            <button type="submit">Create</button>
            <button type="reset" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
