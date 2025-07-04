import { contactPhones, socialMediaLinks } from "./contactInfo";

const rootLinks = {
  home: {
    key: "Home",
    value: "/",
  },
  aboutUs: {
    key: "About Us",
    value: "/about-us",
  },
  activities: {
    key: "Activities",
    value: "/activities",
  },
  gallery: {
    key: "Gallery",
    value: "/gallery",
  },
  contactUs: {
    key: "Contact Us",
    value: "/contact-us",
  },
  privacyPolicy: {
    key: "Privacy Policy",
    value: "/privacy-policy",
  },
  termsAndConditions: {
    key: "Terms & Conditions",
    value: "/terms-and-conditions",
  },
};

export const bookTicketsLink = {
  key: "Book Now",
  value: "",
  newPage: true,
};

export const navLinks = {
  logo: "/logo.svg",
  links: Object.values(rootLinks),
  doubts: {
    text: "Have doubts?",
    phone: contactPhones[0],
    image: "",
  },
};

export const footer = {
  background: "/footer.png",
  importantLinks: {
    heading: "Important Links",
    items: [
      rootLinks.home,
      rootLinks.activities,
      rootLinks.gallery,
      bookTicketsLink,
    ],
  },
  more: {
    heading: "More",
    items: [
      rootLinks.contactUs,
      rootLinks.privacyPolicy,
      rootLinks.termsAndConditions,
    ],
  },
  socialLinks: {
    heading: "Follow us on:",
    items: [
      {
        image: "",
        link: socialMediaLinks.instagram,
      },
      {
        image: "",
        link: socialMediaLinks.facebook,
      },
      {
        image: "",
        link: socialMediaLinks.youtube,
      },
      {
        image: "",
        link: socialMediaLinks.linkedin,
      },
    ],
  },
};
