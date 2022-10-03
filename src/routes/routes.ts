import { LazyExoticComponent } from "react";
import {
  FormikAbstractation,
  FormikBasePage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: RegisterPage,
    name: "Register page",
  },
  {
    to: "/formik",
    path: "/formik",
    Component: FormikBasePage,
    name: "Forkim page",
  },
  {
    to: "/formikYup",
    path: "/formikYup",
    Component: FormikYupPage,
    name: "Forkim Yup page",
  },
  {
    to: "/formikComponents",
    path: "/formikComponents",
    Component: FormikComponents,
    name: "Forkim Components",
  },
  {
    to: "/formikAbs",
    path: "/formikAbs",
    Component: FormikAbstractation,
    name: "Forkim Abstractation",
  },
];
