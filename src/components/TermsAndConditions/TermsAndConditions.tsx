import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import styles from "./termsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <Container
      variant={ContainerVariant.normal}
      className={styles["container"]}
    >
      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>Terms and Conditions</h3>
        <ol>
          <li>
            Admission ticket permits admission for one individual and needs to
            be retained at the respective time slot.
          </li>
          <li>Children below 3ft are exempted from any ticket charges.</li>
          <li>
            Total Duration: 1 Hour (Snow Room: 45 mins + Reception: 15 mins).
          </li>
          <li>
            Parka Jackets, Gloves, Hood and Boots will be provided with each
            admission.
          </li>
          <li>Tickets once purchased will not be RETURNED/REFUNDED.</li>
          <li>
            Refund or entry due to loss of tickets will not be entertained.
          </li>
          <li>
            Children below 10 years and senior citizens need to be accompanied
            by a guardian. Same rates applicable.
          </li>
          <li>
            Snow World Management/Company or its Employees will not be
            responsible for loss, theft or any damage of any valuables.
          </li>
          <li>
            All accessories are not of accurate sizes and are subject to
            availability.
          </li>
          <li>
            Outside eatables/beverages, tobacco, alcohol & arms & ammunitions
            are strictly prohibited.
          </li>
        </ol>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>Key to Safety</h3>
        <ul>
          <li>Snow is slippery in nature. So mind your footsteps.</li>
          <li>
            Socks are mandatory. Carry your own or purchase from a counter
            available inside Snow World reception.
          </li>
          <li>
            For your safety and comfort, you are advised not to enter the snow
            chamber in case of:
            <ul>
              <li>Pregnancy</li>
              <li>
                Suffering from any medical problems related to heart, cold or
                allergy
              </li>
              <li>Feeling sick</li>
              <li>
                Suffering from any condition that could be aggravated by this
                experience
              </li>
            </ul>
            <p>
              While every reasonable effort has been made to ensure your safety
              and comfort, the management won't be liable for any injuries
              caused.
            </p>
          </li>
          <li>
            First Aid Service is available on request or in case of emergency.
          </li>
          <li>
            Rights of Admission are reserved by the Management of Snow World.
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default TermsAndConditions;
