import styles from "./map.module.css";

const Map = () => {
  return (
    <div className={styles["map"]}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.793335284691!2d77.3776931261426!3d28.575967936645934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9c8ab18a4f%3A0xd4e1f2bee2052460!2sSpectrum%20Metro%20Mall!5e0!3m2!1sen!2sin!4v1752160687039!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
