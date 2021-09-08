import React from 'react'
import {Helmet} from 'react-helmet'

export default function SEO({title, description, keywords, isPost = false, index = false}) {
    return (
        <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Mitchell Tsutsulis" />

            {/* Robots */}
            {index ? <meta name="robots" content="noindex, nofollow" /> : null}
            
            {/* OpenGraph tags */}
            {isPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter Card tags */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}