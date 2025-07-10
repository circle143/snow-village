import type { ReactNode } from "react";

export enum ContainerVariant {
  full = "full",
  normal = "normal",
  small = "small",
}

export interface ContainerProps {
  variant: ContainerVariant;
  children: ReactNode;
  className?: string;
}
