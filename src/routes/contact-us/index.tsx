import ContactGroup from "@/components/ContactUs/ContactGroup/ContactGroup";
import Map from "@/components/ContactUs/Map/Map";
import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: [
        {
          name: "description",
          content:
            "Plan your visit to Snow Village or ask us anything about our experiences, stays, or activities. We're here to help.",
        },
        {
          title: "Snow Village - Contact Us",
        },
      ],
    };
  },
});

function RouteComponent() {
  return (
    <div className="contact-us-page">
      <Hero
        image="/contact-us/contact-us-hero.png"
        currentPage={WebpageValue.contactUs}
      />
      <ContactGroup />
      <Map />
    </div>
  );
}
