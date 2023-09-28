import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import { Home } from "../Home/Home";
import { Presentation } from "../Presentation/Presentation";

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.PRESENTATION,
    element: <Presentation />,
  },
]);
