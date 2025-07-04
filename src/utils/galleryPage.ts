const tempGalleryItems = [
  "/gallery/temp-1.png",
  "/gallery/temp-2.png",
  "/gallery/temp-3.png",
  "/gallery/temp-4.png",
  "/gallery/temp-5.png",
  "/gallery/temp-6.png",
  "/gallery/temp-7.png",
  "/gallery/temp-8.png",
];

const galleryCategories = {
  activities: tempGalleryItems,
  ambience: tempGalleryItems,
  customerMoments: tempGalleryItems,
};

export const allGalleryImages = Object.values(galleryCategories).flat();

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
