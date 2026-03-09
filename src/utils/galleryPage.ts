const cmGalleryImages = [
  "/gallery/cm/Customer 1.webp",
  "/gallery/cm/Customer 2.webp",
  "/gallery/cm/Customer 3.webp",
  "/gallery/cm/Customer 5.webp",
  "/gallery/cm/Customer 6.webp",
  "/gallery/cm/Customer 7.webp",
  "/gallery/cm/Customer 8.webp",
  "/gallery/cm/Customer 9.webp",
];

const arGalleryImages = [
  "/gallery/ar/Dancing-people.jpg",
  "/gallery/ar/ICE-SKATING.jpg",
  "/gallery/ar/Sledge-Pulling.jpg",
  "/gallery/ar/Snow-Ball-Fight.jpg",
  "/gallery/ar/Straight-Slide.jpg",
  "/gallery/ar/Tube-Slide.jpg",
];

const adGalleryImages = [
  "/gallery/ad/1.png",
  "/gallery/ad/2.png",
  "/gallery/ad/3.jpg",
  "/gallery/ad/4.jpg",
  "/gallery/ad/5.png",
  "/gallery/ad/6.png",
  "/gallery/ad/7.png",
  "/gallery/ad/8.png",
  "/gallery/ad/9.png",
];

const galleryCategories = {
  activities: arGalleryImages,
  ambience: adGalleryImages,
  customerMoments: cmGalleryImages,
};

export const allGalleryImages = Object.values(galleryCategories).flat();

const getRandomImages = (arr: string[], count = 9) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, arr.length));
};
export const homeImages = getRandomImages(allGalleryImages);

export const galleryPageContent = {
  hero: {
    image: "/gallery/gallery-hero.png",
  },
  image: [
    {
      category: "All",
      normalized: "all",
      items: allGalleryImages,
    },
    {
      category: "Activities & Rides",
      normalized: "activites-and-rides",
      items: galleryCategories.activities,
    },
    {
      category: "Ambience & Decor",
      normalized: "ambience-and-decor",
      items: galleryCategories.ambience,
    },
    {
      category: "Customer Moments",
      normalized: "customer-moments",
      items: galleryCategories.customerMoments,
    },
  ],
};
