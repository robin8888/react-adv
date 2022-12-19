import { lazy, LazyExoticComponent } from "react";
import {RegisterPage, FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage} from '../03-forms/pages';


type JSXComponent = () => JSX.Element
export interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
const Lazy2 = lazy(() => import(/* webpackChunkName:"Lazy2" */ "../01-lazyLoad/pages/LazyLoad2"))
const Lazy3 = lazy(() => import(/* webpackChunkName:"Lazy3" */ "../01-lazyLoad/pages/LazyLoad3"))

export const routes: Route[] = [
  {to:"/register", path: "register", name: "register", Component: RegisterPage},
  { to: "/formik-basic", path: "formik-basic",name: "Formik Basic", Component: FormikBasicPage },
  { to: "/formik-yup", path: "formik-yup",name: "Formik Yup", Component: FormikYupPage },
  { to: "/formik-components", path: "formik-components",name: "Formik Components", Component: FormikComponents },
  { to: "/formik-abstract", path: "formik-abstract",name: "Formik Abstract", Component: FormikAbstract },

  { to: "/lazyLoad2", path: "lazyLoad2", name: "About", Component: Lazy2 },
  { to: "/lazyLoad3", path: "lazyLoad3", name: "Users", Component: Lazy3 },
];

