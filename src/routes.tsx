import { createHashRouter } from "react-router-dom";
import Landing from "./pages/landing";
import About from "./pages/about";
import MainLayout from "./layouts/main-layout";

const routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
