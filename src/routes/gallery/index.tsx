import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Hero
        image="/gallery/gallery-hero.png"
        currentPage={WebpageValue.gallery}
      />
    </div>
  );
}
