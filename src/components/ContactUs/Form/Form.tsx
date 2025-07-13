import { contactUsPageContent, FormElementType } from "@/utils/contactUsPage";
import styles from "./form.module.css";
import { Fragment } from "react";
import Button from "@/components/button/button";
import { ButtonFontSize, ButtonVariant } from "@/components/button/types";

const ContactUsForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    e.currentTarget.reset();
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
