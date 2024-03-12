import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { routes } from "./constants";

export default createBrowserRouter(
  createRoutesFromElements(
    routes.map((route) => <Route path={route.path} element={route.component()} key={route.path} />)
  )
);
