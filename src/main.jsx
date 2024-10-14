import "./index.css";

import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="login">Login</Link>
      </div>
    ),
  },
  {
    path: "login",
    element: <div>Login</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
