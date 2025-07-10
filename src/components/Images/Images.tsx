import type { ImagesProps } from "./types";
import styles from "./images.module.css";
import { useState } from "react";
import Button from "../button/button";
import { ButtonFontSize, ButtonVariant } from "../button/types";

const Images = ({ images }: ImagesProps) => {
  const [displayImages, setDisplayImages] = useState(images.slice(0, 9));
  const showButton =
    images.length > 9 && displayImages.length !== images.length;

  const handleShowImages = () => {
    setDisplayImages(images);
  };

  return (
    <div className={styles["images"]}>
      <div className={styles["image-container"]}>
        {displayImages.map((item) => {
          return <img src={item} key={item} />;
        })}
      </div>

      {showButton && (
        <Button
          label="Show more"
          onPress={handleShowImages}
          variant={ButtonVariant.secondary}
          fontSize={ButtonFontSize.large}
        />
      )}
    </div>
  );
};

export default Images;
