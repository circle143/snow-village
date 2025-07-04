import { bookTicketsButtonText } from "@/utils/bookTicketsButton";
import Button from "../button/button";
import { ButtonFontSize, ButtonVariant } from "../button/types";
import type { BookTicketsButtonProps } from "./types";

const BookTicketsButton = ({ extendedText }: BookTicketsButtonProps) => {
  const label = extendedText
    ? bookTicketsButtonText.extendedText
    : bookTicketsButtonText.text;

  const handleBookTickets = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // book ticket action here
  };

  return (
    <Button
      label={label}
      variant={ButtonVariant.secondary}
      fontSize={ButtonFontSize.normal}
      onPress={handleBookTickets}
    />
  );
};

export default BookTicketsButton;
