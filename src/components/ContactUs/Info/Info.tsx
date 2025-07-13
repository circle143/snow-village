import {
  contactUsPageContent,
  ContactUsPageInfoType,
} from "@/utils/contactUsPage";
import styles from "./info.module.css";

const ContactUsInfo = () => {
  return (
    <div className={styles["info"]}>
      {contactUsPageContent.info.map((item, index) => (
        <div key={index} className={styles["info-group"]}>
          <h3 className={styles["heading"]}>{item.heading}</h3>
          <ul className={styles["list"]}>
            {item.content.map((value, i) => {
              if (item.type === ContactUsPageInfoType.email) {
                return (
                  <li key={i}>
                    <a href={`mailto:${value}`}>{value}</a>
                  </li>
                );
              } else if (item.type === ContactUsPageInfoType.phone) {
                return (
                  <li key={i}>
                    <a href={`tel:${value}`}>{value}</a>
                  </li>
                );
              } else {
                return <li key={i}>{value}</li>;
              }
            })}
          </ul>
        </div>
      ))}

      <div className={styles["avatar"]}>
        <img src={contactUsPageContent.avtar} />
      </div>
    </div>
  );
};

export default ContactUsInfo;
