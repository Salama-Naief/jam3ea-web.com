export const footerLinks = (t: any) => [
  {
    id: 1,
    title: t("customer_support"),
    links: [
      { id: 1, name: t("contact_us"), link: "/contact" },
      // { id: 2, name: "FAQ", link: "/contact-us" },
      // { id: 3, name: "Store Information", link: "/contact-us" },
      // { id: 4, name: "About Us", link: "/about-us" },
    ],
  },
  {
    id: 2,
    title: t("policies"),
    links: [
      { id: 1, name: t("return_refun"), link: "/policy" },
      { id: 2, name: t("privacy_policy"), link: "/privacy" },
      // { id: 3, name: "Privacy Policy", link: "/contact-us" },
      // { id: 4, name: "Terms & Conditions", link: "/about-us" },
    ],
  },
];
