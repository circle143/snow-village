import ActivityGroup from "@/components/Activities/ActivityGroup/ActivityGroup";
import HeroVideoTitle from "@/components/hero/Herovideotitle";
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
   <HeroVideoTitle
  image="/home/Snow-Village.mp4"
  currentPage={WebpageValue.activities}
  title="Activities"
/>

      <ActivityGroup />
    </div>
  );
}
