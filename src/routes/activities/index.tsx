import ActivityGroup from "@/components/Activities/ActivityGroup/ActivityGroup";
import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/activities/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: [
        {
          name: "description",
          content:
            "Experience the best of Snow Village with thrilling snow adventures like skiing and snowmobile tours, plus fun-filled activities for families and kids.",
        },
        {
          title: "Snow Village - Activities",
        },
      ],
    };
  },
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
