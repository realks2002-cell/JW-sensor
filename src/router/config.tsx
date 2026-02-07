import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import HomeEn from "../pages/home/page-en";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/en",
    element: <HomeEn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
