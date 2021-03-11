module.exports = {
  siteMetadata: {
    title: `FAIR PLAY OFF-PITCH UGANDA`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-json`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `cvqp2engtdz6`,
    //     accessToken: `N0od5zSaWZygn8SRx703-MRea_lCh1TNGPGnq33Y_LU`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
