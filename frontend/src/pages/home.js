import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"

const HomePage = () => {
    const { strapiHomepage } = useStaticQuery(graphql`
        query {
            strapiHomepage {
                Blocks {
                    ...Blocks
                }
            }
        }
    `)
    const { Blocks } = strapiHomepage

    // const seo = {
    //     metaTitle: title,
    //     metaDescription: title
    // }

    return (
        <Layout>
            <BlocksRenderer blocks={Blocks} />
        </Layout>
    )
}

export default HomePage