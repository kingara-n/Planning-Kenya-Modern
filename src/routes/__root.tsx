import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/sonner";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
      {process.env.NODE_ENV === "development" \u0026\u0026 (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </>
  ),
});
