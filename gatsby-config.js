/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /*flags: {
    DEV_SSR: true
  },*/
  plugins: [
    "@openeventkit/event-site",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ]
};
