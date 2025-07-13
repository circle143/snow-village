import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Nav />

      <Outlet />

      <Footer />
    </>
  ),
});
