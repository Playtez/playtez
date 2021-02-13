module.exports = {
  siteMetadata: {
    title: "Aaron Pleitez",
    author: {
      name: "Aaron Pleitez",
      description: "",
    },
    siteUrl: "https://playtez.me",
  },
  plugins: [
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
        path: `${__dirname}/posts`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
  ],
};
