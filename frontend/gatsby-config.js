/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [ 
        "drink", 
        "category", 
        {
          singularName: "page",
          queryParams: {
            populate: {
              Blocks: {
                populate: "*",
                MultipleCalloutItem: {
                  populate: "*",
                },
              },
            },
          },
        },
      ],
        singleTypes: [
          {
            singularName: "global",
            queryParams: {
              populate: {
                DefaultSeo: {
                  populate: "*",
                },
                Favicon: {
                  populate: "*",
                },
              },
            },
          },
        ],
        queryLimit: 1000,
      }
    },
  ],
}
