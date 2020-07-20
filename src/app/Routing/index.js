import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import More from "../Components/More/More";
import Cart from "../Components/Cart/Cart";

const routes = [
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
];
const Router = () => (
  <Switch>
    {routes.map((_route) => (
      <Route {..._route} />
    ))}
  </Switch>
);

export default Router;
