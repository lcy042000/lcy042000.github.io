import { SiteConfig } from "./types";

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "LEECY's Blog", // Homepage title
    titleShort: "YOU__P log", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "LEECY's log", // Website name used for homescreen (PWA) and SEO
    description: "This is LEECY's Blog", // Website description used for RSS feeds/meta description tag
    language: "kr", // Sets the global HTML lang attribute
    logoUrl: "logos/leecy-logo-512W.png", // Logo used for SEO
    url: "https://lcy042000.github.io", // Domain of your website without the pathPrefix
    rss: "/rss.xml", // Path to the RSS file
    rssTitle: "Gatsby Advanced Starter RSS Feed", // Title of the RSS feedW
    copyright: "© Copyright 2021", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#D83850", // Used for setting manifest and progress theme colors.
    backgroundColor: "#F7F7F7", // Used for setting manifest background color.
  },

  // User configuration
  user: {
    about: "안녕하세요. front-end 개발자 이충엽입니다.",
    avatar: "/avatar/avatar.jpg",
    firstName: "ChoongYoup",
    github: "lcy042000",
    email: "8410294@naver.com",
    id: "lcy042000",
    lastName: "Lee",
    linkedIn: "www.linkedin.com/in/충엽-이-28a154283",
    location: "koera",
  },

  // Organization information used for SEO
  organization: undefined,

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  contentDir: undefined, // Directory for MDX posts
  assetDir: undefined, // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  iconPath: "/logos/leecy-logo-512W.png", // Icon used for manifest icon creation.
  iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
  iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

  basePath: undefined, // Base path for mounting pages. Allows for multiple themes to be used in a single website.
};

export default config;
