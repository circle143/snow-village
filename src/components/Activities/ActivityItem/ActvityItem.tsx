import type { ActivityItemProps } from "./types";
import styles from "./activityItem.module.css";
import BookTicketsButton from "@/components/book-tickets-button/BookTicketsButton";

const ActivityItem = ({ heading, text, image }: ActivityItemProps) => {
  return (
    <div className={styles["activity-item"]}>
      <div className={styles["image"]}>
        <img src={image} />
      </div>

      <div className={styles["content"]}>
        <h2 data-font="snow">{heading}</h2>

        <p>{text}</p>

        <div>
          <BookTicketsButton extendedText={false} />
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
