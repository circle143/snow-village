import Container from "@/components/container/Container";
import { ContainerVariant } from "@/components/container/types";
import styles from "./activityGroup.module.css";
import { activitiesPageContent } from "@/utils/activitiesPage";
import ActivityItem from "../ActivityItem/ActvityItem";

const ActivityGroup = () => {
  return (
    <Container variant={ContainerVariant.normal} className={styles["activity"]}>
      <div className={styles["sticky"]}>
        <img src={activitiesPageContent.snowFlake} />
      </div>

      <div className={styles["activity-group"]}>
        {activitiesPageContent.info.map(({ heading, text, image }) => {
          return (
            <ActivityItem
              heading={heading}
              text={text}
              image={image}
              key={heading}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ActivityGroup;
