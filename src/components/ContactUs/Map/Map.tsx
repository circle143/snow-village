import styles from "./map.module.css";

const Map = () => {
  return (
    <div className={styles["map"]}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.792973444947!2d77.37893179999999!3d28.575978799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8e7b5f4941%3A0xd169681166d5df44!2sSnow%20Village!5e0!3m2!1sen!2sin!4v1752657250053!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
