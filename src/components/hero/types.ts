import type { WebpageValue } from "@/utils/pages";

export interface HeroProps {
  image: string;
  currentPage: WebpageValue;
}

export interface HeroImageProps extends HeroProps {
  title?: string;
}

export interface HeroVideoTitleProps extends HeroProps {
  title?: string;
}