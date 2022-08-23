import { LazyExoticComponent } from "react";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

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
    Component: ShoppingPage,
    name: "Shopping",
  },
];
