import Hero from "@/components/hero/hero";
import HomeAbout from "@/components/Home/About/About";
import Showcase from "@/components/Home/Showcase/Showcase";
import Reviews from "@/components/Home/review/Reviews";
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
  image="/home/Snow-Village.mp4"
  currentPage={WebpageValue.home}
/>

      <HomeAbout />

      {/* <Showcase /> */}

      <Reviews />
    </div>
  );
}
