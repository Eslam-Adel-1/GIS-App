import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/Rootlayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import("../pages/Homepage");
          return { Component: HomePage };
        },
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            lazy: async () => {
              const { DashboardPage } = await import("../pages/DashboardPage");
              return { Component: DashboardPage };
            },
          },
        ],
      },

      // 404 Fallback
      {
        path: "*",
        lazy: async () => {
          const { NotFoundPage } = await import("../pages/NotFoundPage");
          return { Component: NotFoundPage };
        },
      },
    ],
  },
]);
