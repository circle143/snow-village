import AboutInfo from "@/components/AboutUs/Info/Info";
import Hero from "@/components/hero/hero";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-us/")({
  component: RouteComponent,
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
