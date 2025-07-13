import { contactPhones, socialMediaLinks } from "./contactInfo";

const rootLinks = {
  home: {
    key: "Home",
    value: "/",
    newPage: false,
  },
  aboutUs: {
    key: "About Us",
    value: "/about-us",
    newPage: false,
  },
  activities: {
    key: "Activities",
    value: "/activities",
    newPage: false,
  },
  gallery: {
    key: "Gallery",
    value: "/gallery",
    newPage: false,
  },
  contactUs: {
    key: "Contact Us",
    value: "/contact-us",
    newPage: false,
  },
  privacyPolicy: {
    key: "Privacy Policy",
    value: "/privacy-policy",
    newPage: false,
  },
  termsAndConditions: {
    key: "Terms & Conditions",
    value: "/terms-and-conditions",
    newPage: false,
  },
};

export const bookTicketsLink = {
  key: "Book Now",
  value: "https://circledigital.in",
  newPage: true,
};

const rootLinksArr = Object.values(rootLinks);

export const navLinks = {
  logo: "/logo.svg",
  links: rootLinksArr.filter(
    (item) =>
      item.key !== rootLinks.privacyPolicy.key &&
      item.key !== rootLinks.termsAndConditions.key,
  ),
  doubts: {
    text: "Have doubts?",
    phone: contactPhones[0],
    image: "/phone.svg",
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
        image: "/instagram.svg",
        link: socialMediaLinks.instagram,
      },
      {
        image: "/facebook.svg",
        link: socialMediaLinks.facebook,
      },
      {
        image: "/youtube.svg",
        link: socialMediaLinks.youtube,
      },
      {
        image: "/linkedin.svg",
        link: socialMediaLinks.linkedin,
      },
    ],
  },
  copyright: [
    {
      text: "© Copyright Cozy Food & Entertainment LLP Design & Development By ",
    },
    {
      text: "Circle Digital Solutions.",
      href: "https://circledigital.in",
    },
  ],
};
