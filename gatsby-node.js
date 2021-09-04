const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const queryResult = await graphql(`
    query ProjectSlugQuery {
        allStrapiProject(sort: {order: ASC, fields: id}) {
            nodes {
                slug
            }
        }
    }
    `)

    queryResult.data.allStrapiProject.nodes.forEach(node => {
        createPage({
            path: `/projects/${node.slug}`,
            component: path.resolve('src/templates/project.tsx'),
            context: {
                slug: node.slug
            }
        })
    })
}