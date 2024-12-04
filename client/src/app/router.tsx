import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "@/config/paths";

export const AppRootErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { CryptoTrackerRoute } = await import("@/features/crypto-tracker/routes");
        return { Component: CryptoTrackerRoute };
      },
    },

    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return {
          Component: NotFoundRoute,
        };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
