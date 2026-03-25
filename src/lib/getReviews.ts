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
    const baseUrl = (import.meta.env.VITE_API_URL ?? "").toString().trim().replace(/\/$/, "");
    const res = await fetch(`${baseUrl}/api/reviews`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const text = await res.text();
    try {
      const data = JSON.parse(text);
      return data.reviews ?? [];
    } catch (parseError) {
      console.error("[getReviews] Unexpected response (not JSON):", text);
      return [];
    }
  } catch (error) {
    console.error("[getReviews] Failed:", error);
    return [];
  }
}