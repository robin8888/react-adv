import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element
export interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
const Lazy1 = lazy(() => import(/* webpackChunkName:"Lazy1" */ "../01-lazyLoad/pages/LazyLoad1"))
const Lazy2 = lazy(() => import(/* webpackChunkName:"Lazy2" */ "../01-lazyLoad/pages/LazyLoad2"))
const Lazy3 = lazy(() => import(/* webpackChunkName:"Lazy3" */ "../01-lazyLoad/pages/LazyLoad3"))

export const routes: Route[] = [
  { to: "/lazyLoad1", path: "lazyLoad1",name: "lazyLoad1", Component: Lazy1 },
  { to: "/lazyLoad2", path: "lazyLoad2", name: "lazyLoad2", Component: Lazy2 },
  { to: "/lazyLoad3", path: "lazyLoad3", name: "lazyLoad3", Component: Lazy3 },
];

