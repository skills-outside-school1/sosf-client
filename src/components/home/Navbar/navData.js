export const navData = [
  {
    title: "About",
    type: "dropdown",
    sections: [
      {
        heading: "About Us",
        links: [
          { name: "Who We Are", href: "/who-we-are" },
          { name: "Our History", href: "/our-history" },
          { name: "Our Pillars", href: "/our-pillars" },
          { name: "Our Core Values", href: "/core-values" },
          { name: "Our USPs", href: "/our-usp" },
          { name: "Our Focus Areas", href: "/our-focus-areas" },
          { name: "Our Target Audience", href: "/our-target-audience" },
        ],
      },
      {
        heading: "Global Goals",
        links: [{ name: "SDGs We Align With", href: "/sdgs" }],
      },
      {
        heading: "Collaborations",
        links: [{ name: "Our Partners & Investors", href: "/collaborations" }],
      },
    ],
  },
  {
    title: "Our Work",
    type: "dropdown",
    links: [
      { name: "Data", href: "/projects" },
      { name: "Advocacy", href: "/advocacy" },
      {
        name: "Interventions",
        nested: [
          { name: "SOSF Headstart Agropreneurs", href: "/#" },
          { name: "SOSF Bridge Program", href: "/#" },
          { name: "SOSF Online Skill-Up for Business", href: "/#" },
          { name: "SOSF Grants", href: "/#" },
          { name: "SOSF Funds", href: "/#" },
        ],
      },
    ],
  },
  { title: "Insights", href: "/news-insights" },
  { title: "Get Involved", href: "/get-involved" },
  { title: "Careers", href: "/careers" },
  { title: "Contacts", href: "/contact" },
];
