module.exports = {
  siteMetadata: {
    title: "G & S Engineering Landing Page",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "G & S Engineering Landing Page",
        short_name: "G-S Eng",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#744C9E",
        display: "standalone",
        icon: "src/assets/logos/g-s-logo-compact.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/`,
        name: "src",
      },
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
  ],
};
