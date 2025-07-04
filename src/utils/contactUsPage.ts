export enum ContactUsPageInfoType {
  text,
  email,
  phone,
}

export enum FormElementType {
  text,
  textarea,
  email,
  phone,
  select,
}

export const contactUsPageContent = {
  hero: {
    image: "/contact-us/contact-us-hero.png",
  },
  info: [
    {
      type: ContactUsPageInfoType.text,
      heading: "Active Hours",
      content: [
        "Monday to Thursday 11 AM - 10 PM",
        "Friday to Sunday 9:45 AM - 10 PM",
      ],
    },
    {
      type: ContactUsPageInfoType.text,
      heading: "Office Address",
      content: [
        "Snow Village Indoor Snow Park, Plot 28, Sector 75, Noida, UP 201301 (near Sector 50 Metro Station)",
      ],
    },
    {
      type: ContactUsPageInfoType.phone,
      heading: "Phone",
      content: ["+91 9220807720", "+91 9220447720"],
    },
    {
      type: ContactUsPageInfoType.email,
      heading: "Email ID",
      content: ["snowvillage@cozylounge.in"],
    },
  ],
  avtar: "/contact-us/contact-us-avtar.png",
  form: {
    heading: ["Send us a ", "message"],
    submitButtonText: "Submit",
    elements: [
      {
        type: FormElementType.text,
        label: "Full Name",
        placeholder: "Full Name",
        key: "name",
        required: true,
      },
      {
        type: FormElementType.phone,
        label: "Phone/Whatsapp",
        placeholder: "Phone number",
        key: "phone",
        required: true,
      },
      {
        type: FormElementType.email,
        label: "Email ID",
        placeholder: "Email ID",
        key: "email",
        required: true,
      },
      {
        type: FormElementType.select,
        label: "How did you hear about us?",
        key: "origin",
        options: [
          {
            key: "instagram",
            display: "Instagram",
          },
          {
            key: "google",
            display: "Google",
          },
          {
            key: "friends-and-family",
            display: "Friends and Family",
          },
          {
            key: "newspaper-ad",
            display: "Newspaper Ad",
          },
        ],
        required: true,
      },
      {
        type: FormElementType.textarea,
        label: "Comment or Message",
        placeholder: "Anything you want to add?",
        required: false,
      },
    ],
  },
};
