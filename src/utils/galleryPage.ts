const cmGalleryImages = [
  "/gallery/cm/cm (2).webp",
  "/gallery/cm/cm (3).webp",
  "/gallery/cm/cm (4).webp",
  "/gallery/cm/cm (5).webp",
  "/gallery/cm/cm (6).webp",
  "/gallery/cm/cm (7).webp",
  "/gallery/cm/cm.webp",
];

const arGalleryImages = [
  "/gallery/ar/ar (2).webp",
  "/gallery/ar/ar (3).webp",
  "/gallery/ar/ar (4).webp",
  "/gallery/ar/ar (5).webp",
  "/gallery/ar/ar (6).webp",
  "/gallery/ar/ar.webp",
];

const adGalleryImages = [
  "/gallery/ad/ad (2).webp",
  "/gallery/ad/ad (3).webp",
  "/gallery/ad/ad (4).webp",
  "/gallery/ad/ad (5).webp",
  "/gallery/ad/ad (6).webp",
  "/gallery/ad/ad.webp",
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
      cagetgory: "All",
      items: allGalleryImages,
    },
    {
      category: "Activities & Rides",
      items: galleryCategories.activities,
    },
    {
      category: "Ambience & Decor",
      items: galleryCategories.ambience,
    },
    {
      category: "Customer Moments",
      items: galleryCategories.customerMoments,
    },
  ],
};
