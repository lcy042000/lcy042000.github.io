module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {},
    },
  ],
  title: "LEECY",
  description: "LEECY's Blog",
  author: "LEECY",
  siteUrl: "https://lcy042000.github.io",
  social: {
    github: "https://github.com/lcy042000",
  },
  // icon: // favicon
  keywords: ["blog"],
  comment: {},
  configs: {
    countOfInitialPost: 10,
  },
};
