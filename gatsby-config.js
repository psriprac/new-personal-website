module.exports = {
  siteMetadata: {
    title: `Patrick Sriprachandr`,
    siteUrl: `https://www.sriprachandr.netlify.com`
  },
  plugins: ["gatsby-plugin-netlify", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/
      }
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/site-icon.svg'
    }
  }]
};