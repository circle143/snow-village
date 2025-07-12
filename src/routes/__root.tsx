import Footer from "@/components/Footer/Footer";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />

      <Footer />
    </>
  ),
});
