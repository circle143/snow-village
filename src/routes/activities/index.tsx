import ActivityGroup from "@/components/Activities/ActivityGroup/ActivityGroup";
import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/activities/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="activities-page">
      <Hero
        image="/activities/activities-hero.png"
        currentPage={WebpageValue.activities}
      />

      <ActivityGroup />
    </div>
  );
}
