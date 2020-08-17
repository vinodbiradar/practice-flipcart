import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import More from "../components/more";
import Cart from "../components/cart";
import Home from "../components/layouts/Home";
import Dashboard from "../components/layouts/Dashboard";
import ProductDetail from "../components/products/productdetail";
import BuyProduct from "../components/products/BuyProduct";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
  {
    path: "/more",
    component: More,
    exact: true,
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/admin",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/productdetail",
    component: ProductDetail,
    exact: true,
  },
  {
    path: "/buyproduct",
    component: BuyProduct,
    exact: true,
  },
];
const Router = () => (
  <Switch>
    {routes.map((_route, index) => (
      <Route key={index} {..._route} />
    ))}
  </Switch>
);

export default Router;
