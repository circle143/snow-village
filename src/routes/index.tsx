import Hero from "@/components/hero/hero";
import HomeAbout from "@/components/Home/About/About";

import Reviews from "@/components/Home/review/Reviews";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
  component: App,
  head: () => {
    return {
      title: "Snow Village | Best Snow Theme Park Experience in Noida",
      meta: [
        {
          name: "description",
          content:
            "Experience the magic of Snow Village, the ultimate theme park in Noida. Enjoy indoor snow, slides, and family fun at Noida's biggest snowpark.",
        },
      ],
    };
  },
});

function App() {

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
