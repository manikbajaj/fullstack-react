import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Tasks from "./pages/tasks/tasks.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
