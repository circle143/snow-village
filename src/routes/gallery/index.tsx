import Container from "@/components/container/Container";
import { ContainerVariant } from "@/components/container/types";
import Filters from "@/components/gallery/Filters/Filters";
import Hero from "@/components/hero/hero";
import Images from "@/components/Images/Images";
import { galleryPageContent } from "@/utils/galleryPage";
import { WebpageValue } from "@/utils/pages";
import { createFileRoute } from "@tanstack/react-router";

type GallerySearch = { filter: string };

export const Route = createFileRoute("/gallery/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: [
        {
          name: "description",
          content:
            "Get a glimpse of Snow Village's charm through breathtaking images of our winter wonderland, fun-filled activities, and scenic views.",
        },
        {
          title: "Snow Village - Gallery",
        },
      ],
    };
  },
  validateSearch: (search: Record<string, unknown>): GallerySearch => {
    return { filter: (search.filter as string) || "all" };
  },
});

function RouteComponent() {
  const { filter } = Route.useSearch();
  const images: string[] =
    galleryPageContent.image.find((val) => val.normalized === filter)?.items ||
    [];

  console.log("filter: ", filter);
  console.log("images: ", images);

  return (
    <div className="gallery-page">
      {" "}
      <Hero
        image="/gallery/gallery-hero.png"
        currentPage={WebpageValue.gallery}
      />
      <Filters key={filter} />
      <Container variant={ContainerVariant.normal}>
        <Images images={images} key={filter} />
      </Container>
    </div>
  );
}
