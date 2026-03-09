export interface Review {
  reviews_id: string;
  author_title: string;
  author_image: string;       // reviewer's profile photo
  review_img_url: string;     // photo uploaded by customer with the review
  review_rating: number;
  review_text: string;
  review_datetime_utc: string;
}

export async function getReviews(): Promise<Review[]> {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/reviews`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data.reviews ?? [];
  } catch (error) {
    console.error("[getReviews] Failed:", error);
    return [];
  }
}