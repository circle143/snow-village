import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Hero
        image="/contact-us/contact-us-hero.png"
        currentPage={WebpageValue.contactUs}
      />
    </div>
  );
}
