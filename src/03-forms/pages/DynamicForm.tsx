import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

formJson.forEach((field) => {
  initialValues[field.name] = field.value;

  let schema = Yup.string();

  if (field.validations) {
    field.validations.forEach((rule) => {
      if (rule.type === "required") {
        schema = schema.required("Requerido");
      }

      if (rule.type === "min") {
        schema = schema.min(
          (rule as any).value || 1,
          `Mínimo ${(rule as any).value} caracteres`
        );
      }

      if (rule.type === "email") {
        schema = schema.email("Formato de email incorrecto");
      }
    });

    requiredFields[field.name] = schema;
  }
});

const textInputTypes = ["input", "password", "email"];

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {
              if (textInputTypes.includes(type)) {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Select an option</option>
                    {options?.map((option) => (
                      <option value={option.id}>{option.label}</option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`El type: ${type} no es soportado`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
