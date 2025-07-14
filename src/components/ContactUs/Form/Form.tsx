import { contactUsPageContent, FormElementType } from "@/utils/contactUsPage";
import styles from "./form.module.css";
import { Fragment } from "react";
import Button from "@/components/button/button";
import { ButtonFontSize, ButtonVariant } from "@/components/button/types";
import { toast } from "react-toastify";
import { toE164 } from "@/utils/form";
const ContactUsForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // ✅ Save the reference
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    if (data["phone"]) {
      const formattedPhone = toE164(data["phone"]);
      if (!formattedPhone) {
        toast.error("Please enter a valid phone number.");
        return;
      }
      data["phone"] = formattedPhone;
    }

    try {
      const response = await fetch(
        "https://api-wo48.onrender.com/snow-village/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      toast.success("Message sent successfully!");
      form.reset(); // ✅ Use the saved reference
    } catch (err: any) {
      toast.error(err.message || "Failed to send message.");
    }
  };

  return (
    <div className={styles["form"]}>
      <h3 className={styles["heading"]}>
        {contactUsPageContent.form.heading.map((item, index) => {
          const blue = index == contactUsPageContent.form.heading.length - 1;
          return blue ? (
            <span className={styles["blue"]}>{item}</span>
          ) : (
            <Fragment key={item}>{item}</Fragment>
          );
        })}
      </h3>

      <form className={styles["form-elements"]} onSubmit={handleSubmit}>
        {contactUsPageContent.form.elements.map((el) => {
          const baseProps = {
            name: el.key,
            required: el.required,
          };

          return (
            <label key={el.key} className={styles["label"]}>
              {el.label}
              {el.type === FormElementType.text ||
              el.type === FormElementType.email ||
              el.type === FormElementType.phone ? (
                <input
                  type={
                    el.type === FormElementType.email
                      ? "email"
                      : el.type === FormElementType.phone
                        ? "tel"
                        : "text"
                  }
                  placeholder={(el as any).placeholder}
                  {...baseProps}
                />
              ) : el.type === FormElementType.textarea ? (
                <textarea
                  placeholder={(el as any).placeholder}
                  {...baseProps}
                />
              ) : el.type === FormElementType.select ? (
                <select {...baseProps}>
                  <option value="">Select one</option>
                  {el.options!.map((opt) => (
                    <option key={opt.key} value={opt.key}>
                      {opt.display}
                    </option>
                  ))}
                </select>
              ) : null}
            </label>
          );
        })}

        <div>
          <Button
            type="submit"
            label={contactUsPageContent.form.submitButtonText}
            variant={ButtonVariant.grey}
            fontSize={ButtonFontSize.large}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
