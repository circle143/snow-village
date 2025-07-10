import Container from "@/components/container/Container";
import styles from "./info.module.css";
import { ContainerVariant } from "@/components/container/types";
import { aboutUsPageContent } from "@/utils/aboutUsPage";

const AboutInfo = () => {
  return (
    <Container variant={ContainerVariant.normal} className={styles["info"]}>
      <div className={styles["content"]}>
        <h3 className={styles["heading"]}>{aboutUsPageContent.info.heading}</h3>

        {aboutUsPageContent.info.content.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>

      <div className={styles["image"]}>
        <img src={aboutUsPageContent.info.image} />
      </div>
    </Container>
  );
};

export default AboutInfo;
