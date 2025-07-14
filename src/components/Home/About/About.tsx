import Button from "@/components/button/button";
import { ButtonFontSize, ButtonVariant } from "@/components/button/types";
import Container from "@/components/container/Container";
import { ContainerVariant } from "@/components/container/types";
import { homePageContent } from "@/utils/homePage";
import styles from "./about.module.css";
import { useNavigate } from "@tanstack/react-router";

const HomeAbout = () => {
  const navigate = useNavigate({ from: "/" });
  const buttonComp = (
    <div className={styles["button"]}>
      <Button
        label={homePageContent.info.buttonText}
        onPress={() => {
          navigate({ to: "/activities" });
        }}
        variant={ButtonVariant.secondary}
        fontSize={ButtonFontSize.normal}
      />
    </div>
  );

  return (
    <Container variant={ContainerVariant.small} className={styles["about"]}>
      <h2 className={styles["heading"]} data-font="snow">
        {homePageContent.info.heading}
      </h2>

      <div className={styles["content"]}>
        <div className={styles["text"]}>
          {homePageContent.info.content.map((value, index) => {
            const showSpecialText =
              index === homePageContent.info.content.length - 1;
            return (
              <p key={value} className={styles["content-item"]}>
                {value}{" "}
                {showSpecialText && (
                  <span className={styles["special"]}>
                    {homePageContent.info.specialText}
                  </span>
                )}
              </p>
            );
          })}

          {buttonComp}
        </div>

        <div className={styles["video"]}>
          <video
            src={homePageContent.info.video}
            loop
            autoPlay
            muted
            playsInline
            controls={false}
          />

          {buttonComp}
        </div>
      </div>
    </Container>
  );
};

export default HomeAbout;
