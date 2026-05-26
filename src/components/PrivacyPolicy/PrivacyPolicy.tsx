import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import styles from "./privacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <Container
      variant={ContainerVariant.normal}
      className={styles["container"]}
    >
      <div className={styles["intro"]}>
        <p>
          <strong>Effective Date:</strong> August 2025
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://snowvillage.in/">https://snowvillage.in/</a>
        </p>
        <p>
          <strong>Company / Brand Name:</strong> Cozy Foods &amp; Entertainment
          LLP (Snow Village)
        </p>
        <p>
          At Cozy Foods &amp; Entertainment LLP, we respect your privacy and are
          committed to protecting the personal information you share with us
          through our website, forms, calls, emails, advertisements, and other
          digital channels.
        </p>
        <p>
          By using our website or submitting your details through any form, you
          agree to the collection and use of your information as described in
          this Privacy Policy.
        </p>
      </div>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>1. Information We Collect</h3>
        <p>
          We may collect the following information when you visit our website or
          submit an enquiry form:
        </p>
        <ul>
          <li>Full Name</li>
          <li>Mobile Number</li>
          <li>Email Address</li>
          <li>State / City</li>
          <li>
            Type of user, such as Individual, Business, Freelancer, or Company
          </li>
          <li>Service requirement or enquiry details</li>
          <li>
            Source of enquiry, such as Google, Instagram, Facebook, referral,
            advertisement, or website search
          </li>
          <li>Any other information voluntarily submitted by you</li>
        </ul>
        <p>
          We may also collect basic technical information such as browser type,
          device information, IP address, pages visited, and website usage data
          for analytics and security purposes.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>2. How We Use Your Information</h3>
        <p>The information collected may be used for the following purposes:</p>
        <ul>
          <li>To contact you regarding your enquiry</li>
          <li>
            To provide information about our services, pricing, offers, or
            business solutions
          </li>
          <li>
            To understand your requirements and suggest suitable services
          </li>
          <li>
            To improve our website, marketing, and customer experience
          </li>
          <li>
            To send follow-up communication through call, email, SMS, WhatsApp,
            or other communication channels
          </li>
          <li>To maintain internal records and lead management</li>
          <li>
            To run marketing, remarketing, and advertising campaigns
          </li>
          <li>
            To comply with applicable legal or regulatory requirements
          </li>
        </ul>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>3. Consent</h3>
        <p>
          When you submit your information on our website, you voluntarily
          consent to us using your information for communication, lead
          generation, service updates, marketing, and business-related
          follow-ups.
        </p>
        <p>
          You may withdraw your consent at any time by contacting us at{" "}
          <a href="mailto:info@snowvillage.in">info@snowvillage.in</a>. After
          withdrawal, we may stop using your information for marketing or
          communication unless retention is required for legal, business, or
          compliance purposes.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>4. Sharing of Information</h3>
        <p>We do not sell your personal information.</p>
        <p>
          However, we may share your information with trusted third parties
          only, when necessary, such as:
        </p>
        <ul>
          <li>Internal team members</li>
          <li>CRM or lead management tools</li>
          <li>Website hosting and analytics providers</li>
          <li>Marketing and advertising platforms</li>
          <li>Payment or billing service providers, if applicable</li>
          <li>
            Legal, regulatory, or government authorities, if required by law
          </li>
        </ul>
        <p>
          All such sharing is done only for legitimate business, operational,
          legal, or service-related purposes.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>
          5. Cookies and Tracking Technologies
        </h3>
        <p>
          Our website may use cookies, pixels, analytics tools, or similar
          technologies to understand user behaviour, improve website
          performance, and run advertising campaigns.
        </p>
        <p>
          These tools may help us track page visits, traffic sources, campaign
          performance, and user interaction with the website.
        </p>
        <p>
          You can disable cookies from your browser settings, but some parts of
          the website may not function properly.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>6. Data Retention</h3>
        <p>
          We retain your personal information only for as long as necessary for
          business, legal, marketing, customer support, or compliance purposes.
        </p>
        <p>
          If your information is no longer required, we may delete, anonymize,
          or securely store it as per our internal data retention practices.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>7. Data Security</h3>
        <p>
          We use reasonable security measures to protect your personal
          information from unauthorized access, misuse, loss, alteration, or
          disclosure.
        </p>
        <p>
          However, no online platform, website, or digital transmission is
          completely secure. By using our website, you understand and accept
          this risk.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>8. Your Rights</h3>
        <p>You may request to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct or update your information</li>
          <li>Withdraw your consent</li>
          <li>
            Request deletion of your personal information, subject to legal or
            business requirements
          </li>
          <li>Raise a privacy-related complaint or concern</li>
        </ul>
        <p>
          For any such request, contact us at{" "}
          <a href="mailto:info@snowvillage.in">info@snowvillage.in</a>.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>9. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites, social media
          pages, payment gateways, or external platforms.
        </p>
        <p>
          We are not responsible for the privacy practices, policies, or content
          of third-party websites. Please review their privacy policies before
          sharing any information with them.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>10. Children's Privacy</h3>
        <p>
          Our services are not intended to knowingly collect personal
          information from children without appropriate parental or guardian
          consent.
        </p>
        <p>
          If you believe that a child has submitted personal information to us,
          please contact us, and we will take appropriate action.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>
          11. Updates to This Privacy Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our business practices, legal requirements, or website operations.
        </p>
        <p>
          The updated policy will be posted on this page with a revised
          effective date.
        </p>
      </section>

      <section className={styles["section"]}>
        <h3 className={styles["heading"]}>12. Contact Us</h3>
        <p>
          For any privacy-related questions, corrections, withdrawals, or
          complaints, you can contact us at:
        </p>
        <ul>
          <li>
            <strong>Company Name:</strong> Cozy Foods &amp; Entertainment LLP
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@snowvillage.in">info@snowvillage.in</a>
          </li>
          <li>
            <strong>Phone:</strong> +91 9211072266
          </li>
          <li>
            <strong>Address:</strong> 4th Floor, E Tower, Spectrum Metro Phase
            2, Sector 75, Noida, Uttar Pradesh 201307
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default PrivacyPolicy;
