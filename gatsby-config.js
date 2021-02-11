module.exports = {
  siteMetadata: {
    title: "playez-site",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "260559174",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
  ],
};
