module.exports = {
  siteMetadata: {
    title: "Haluk Kürkçüoğlu Atölyesi",
    author: "Haluk Kurkcuoglu",
    description: "Geleneksel el sanatları Ebru ve Katı, Vücuda Ebru uygulaması, Body Marbling"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        region: "eu-central-1",
        bucketName: "halukkurkcuoglu.com",
        bucketName: "www.halukkurkcuoglu.com",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
