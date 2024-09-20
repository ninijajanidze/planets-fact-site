import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Layout from "./pages/Layout";
import Planet from "./components/planet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:planetName",
        element: <Planet />,
      },
    ],
  },
]);

createRoot(
  document.getElementById("root")!
).render(<RouterProvider router={router} />);
