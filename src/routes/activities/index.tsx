import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/activities/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Hero
        image="/activities/activities-hero.png"
        currentPage={WebpageValue.activities}
      />
    </div>
  );
}
