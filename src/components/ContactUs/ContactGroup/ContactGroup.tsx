import Container from "@/components/container/Container";
import ContactUsForm from "../Form/Form";
import { ContainerVariant } from "@/components/container/types";
import styles from "./contactGroup.module.css";
import ContactUsInfo from "../Info/Info";

const ContactGroup = () => {
  return (
    <Container
      variant={ContainerVariant.normal}
      className={styles["container"]}
    >
      <ContactUsInfo />
      <ContactUsForm />
    </Container>
  );
};

export default ContactGroup;
