const { resolve } = require('path')
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        query {
            allStrapiPage {
                edges {
                    node {
                        Slug
                        Name
                        ParentPage {
                            Slug
                        }
                    }
                }
            }
        }
    `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL Query`)
        return
    }

    const pageTemplate = path.resolve('./src/layouts/page-layout.js')
    result.data.allStrapiPage.edges.forEach(edge => {
        const path = `${edge.node.Slug}`
        const parentPath = `${edge.node.ParentPage.Slug}`
            createPage({
                path,
                component: pageTemplate,
                context: {
                    Slug: edge.node.Slug
                },
            })
        resolve()
    })
}