import HeroVideoTitle from "@/components/hero/Herovideotitle";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: [
        {
          title: "Snow Village - Privacy Policy",
        },
      ],
    };
  },
});

function RouteComponent() {
  return (
    <div className="privacy-policy-page">
      <HeroVideoTitle
        image="/home/Snow-Village.mp4"
        currentPage={WebpageValue.privacyPolicy}
        title="Privacy Policy"
      />
      <PrivacyPolicy />
      
    </div>
  );
}
