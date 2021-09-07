require("dotenv").config({
    path: '.env'
});

module.exports = {
    siteMetadata: {
        title: "Mitchell Tsutsulis",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: process.env.API_URL,
                collectionTypes: ["project"],
                singleTypes: ["index", "about"],
                queryLimit: 1000,
            },
        }
    ],
};
