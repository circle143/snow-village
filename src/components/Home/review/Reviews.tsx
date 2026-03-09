import { useEffect, useState, type CSSProperties } from "react";
import { getReviews } from "@/lib/getReviews";
import type { Review } from "@/lib/getReviews";
import styles from "./Reviews.module.css";

// ── Stars ─────────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${styles.star} ${i < rating ? styles["star--filled"] : styles["star--empty"]}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Google Icon ───────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles["google-icon"]}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────
function formatDate(utc: string): string {
  try {
    return new Date(utc).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function truncate(text: string, max = 140): string {
  if (!text || text.length <= max) return text ?? "";
  return text.slice(0, max).trimEnd() + "…";
}

// ── Skeleton card ─────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className={styles.card} style={{ pointerEvents: "none" }}>
      <div className={`${styles.skeleton} ${styles["skeleton-img"]}`} />
      <div className={styles.body}>
        <div className={styles["author-row"]}>
          <div className={`${styles.skeleton} ${styles["skeleton-avatar"]}`} />
          <div className={styles["author-meta"]}>
            <div className={`${styles.skeleton} ${styles["skeleton-name"]}`} />
            <div className={`${styles.skeleton} ${styles["skeleton-date"]}`} />
          </div>
        </div>
        <div className={`${styles.skeleton} ${styles["skeleton-stars"]}`} />
        <div className={`${styles.skeleton} ${styles["skeleton-line"]}`} />
        <div className={`${styles.skeleton} ${styles["skeleton-line"]}`} />
        <div className={`${styles.skeleton} ${styles["skeleton-line-short"]}`} />
      </div>
    </div>
  );
}

// ── Review card ───────────────────────────────────────────────────────────
function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <article
      className={styles.card}
      style={{ "--delay": `${index * 80}ms` } as CSSProperties}
    >
      {/* Customer-uploaded review photo — top of card */}
      <div className={styles["img-wrapper"]}>
        <img
          className={styles["review-img"]}
          src={review.review_img_url}
          alt={`Photo by ${review.author_title}`}
          referrerPolicy="no-referrer"
        />
        {/* Google badge pinned top-right */}
        <div className={styles["google-badge"]}>
          <GoogleIcon />
        </div>
      </div>

      {/* Card body */}
      <div className={styles.body}>
        {/* Author row — avatar + name + date */}
        <div className={styles["author-row"]}>
          <img
            className={styles.avatar}
            src={review.author_image}
            alt={review.author_title}
            referrerPolicy="no-referrer"
          />
          <div className={styles["author-meta"]}>
            <span className={styles["author-name"]}>{review.author_title}</span>
            <span className={styles.date}>
              {formatDate(review.review_datetime_utc)}
            </span>
          </div>
        </div>

        <Stars rating={review.review_rating} />

        <p className={styles["review-text"]}>{truncate(review.review_text)}</p>
      </div>
    </article>
  );
}

// ── Main component ────────────────────────────────────────────────────────
export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getReviews()
      .then((data) => {
        if (data.length === 0) setError(true);
        else setReviews(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>What visitors say</p>
        <h2 className={styles.title}>Real Reviews</h2>
        <p className={styles.subtitle}>
          Straight from Google — no filters, no edits.
        </p>
      </div>

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : reviews.map((review, i) => (
              <ReviewCard key={review.reviews_id} review={review} index={i} />
            ))}
      </div>

      {!loading && (
        <div className={styles.footer}>
          <a
            href="https://www.google.com/search?client=firefox-b-d&q=snow+village&zx=1773038990414&no_sw_cr=1&sei=jW2uacegFfng4-EPusjO4AQ&dlnr=1#wptab=si:AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZWnf4JM4yJxNTv63g55Pa_rkNxiNLvYB83s_QEIaV3YtzJ_zLWGAAXquYK11DiayV9LvOV72ZLoT-P4ZqqOcy8gUwrKlV1kAKQ_84aRPRrfyJJdJw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            See all reviews on Google
          </a>
        </div>
      )}
    </section>
  );
}

