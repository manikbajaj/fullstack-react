import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { TasksContextProvider } from "./context/tasks.context.jsx";
import { createRoot } from "react-dom/client";
import { router } from "./routes.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TasksContextProvider>
        <RouterProvider router={router} />
      </TasksContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
