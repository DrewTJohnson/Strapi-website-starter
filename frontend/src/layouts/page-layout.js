import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"

const PageLayout = ({ data, pageContext }) => {
    const { Slug } = pageContext

    console.log(Slug)

    return (
        <Layout>
            {
                data.allStrapiPage.nodes.map(node => {
                    return (
                        <div key={node.id}>
                        {node.Blocks.__typename === 'STRAPI__COMPONENT_MEDIA_ELEMENT_HERO' &&
                            <h1>{node.Name}</h1>
                        }
                        {node.Blocks &&
                            <BlocksRenderer blocks={node.Blocks} />
                        }
                    </div>
                    )
                    
                })
            }
        </Layout>
    )
}

export const query = graphql`
        query GetPage($Slug: String) {
            allStrapiPage(filter: { Slug: {in: [$Slug]} }) {
                nodes {
                    id
                    Name
                    Blocks {
                        ...Blocks
                    }
                }
            }
        }
    `

export default PageLayout