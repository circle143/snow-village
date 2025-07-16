import Hero from "@/components/hero/hero";
import HomeAbout from "@/components/Home/About/About";
import Showcase from "@/components/Home/Showcase/Showcase";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";
import { useMediaQuery } from "usehooks-ts";

export const Route = createFileRoute("/")({
  component: App,
  head: () => {
    return {
      meta: [
        {
          title: "Noida's Biggest Snowpark | Snow Village",
        },
      ],
    };
  },
});

function App() {
  const matches = useMediaQuery("(min-width: 45rem)");

  return (
    <div className="home-page">
      <Hero
        image={matches ? "/home/home-hero.png" : "/home/home-hero-small.png"}
        currentPage={WebpageValue.home}
      />

      <HomeAbout />

      <Showcase />
    </div>
  );
}
