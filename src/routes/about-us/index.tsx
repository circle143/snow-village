import AboutInfo from "@/components/AboutUs/Info/Info";
import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-us/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: [
        {
          name: "description",
          content:
            "Explore the story of Snow Village—our vision, traditions, and what makes our snowy retreat a truly magical destination.Explore the story of Snow Village—our vision, traditions, and what makes our snowy retreat a truly magical destination.Explore the story of Snow Village—our vision, traditions, and what makes our snowy retreat a truly magical destination.",
        },
        {
          title: "Snow Village - About Us",
        },
      ],
    };
  },
});

function RouteComponent() {
  return (
    <div className="about-us-page">
      <Hero
        image="/about-us/about-us-hero.png"
        currentPage={WebpageValue.aboutUs}
      />

      <AboutInfo />
    </div>
  );
}
