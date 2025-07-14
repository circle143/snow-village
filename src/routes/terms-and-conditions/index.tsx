import Hero from "@/components/hero/hero";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: [
        {
          title: "Snow Village - Terms and Conditions",
        },
      ],
    };
  },
});

function RouteComponent() {
  return (
    <div className="terms-and-conditions-page">
      <Hero
        image="/activities/activities-hero.png"
        currentPage={WebpageValue.activities}
      />

      <TermsAndConditions />
    </div>
  );
}
