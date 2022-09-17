import React from "react"
import { graphql } from "gatsby"
import BlockHero from "./block-hero"
import BlockParagraph from "./block-paragraph"
import BlockSplitFeature from "./block-split-feature"

const componentsMap = {
    // STRAPI__COMPONENT_LAYOUT_ELEMENTS_MULTIPLE_CALLOUT: blockMultipleCallout,
    STRAPI__COMPONENT_LAYOUT_ELEMENTS_SIMPLE_PARAGRAPH: BlockParagraph,
    STRAPI__COMPONENT_LAYOUT_ELEMENTS_SPLIT_FEATURE: BlockSplitFeature,
    STRAPI__COMPONENT_MEDIA_ELEMENT_HERO: BlockHero,
    // STRAPI__COMPONENT_META_DATA_DEFAULT_SEO: blockSeo
}

const Block = ({ block }) => {
    const Component = componentsMap[block.__typename]

    if(!Component) {
        return null
    }

    return <Component data={block} />
}

const BlocksRenderer = ({ blocks }) => {
    return (
        <div>
            {blocks.map((block, index) => (
                <Block key={`${index}${block.__typename}`} block={block} />
            ))}
        </div>
    )
}

export const BlockQuery = graphql`
    fragment Blocks on STRAPI__COMPONENT_LAYOUT_ELEMENTS_CTASTRAPI__COMPONENT_LAYOUT_ELEMENTS_MULTIPLE_CALLOUTSTRAPI__COMPONENT_LAYOUT_ELEMENTS_SIMPLE_PARAGRAPHSTRAPI__COMPONENT_LAYOUT_ELEMENTS_SPLIT_FEATURESTRAPI__COMPONENT_MEDIA_ELEMENT_HEROUnion {
        __typename
        ... on STRAPI__COMPONENT_LAYOUT_ELEMENTS_MULTIPLE_CALLOUT {
            id
            MultipleCalloutItem {
                id
                Heading
                Description
            }
          }
          ... on STRAPI__COMPONENT_LAYOUT_ELEMENTS_SIMPLE_PARAGRAPH {
            id
            Text
          }
          ... on STRAPI__COMPONENT_LAYOUT_ELEMENTS_SPLIT_FEATURE {
            id
            Heading
            Description
            mediaAlignment
            Media {
                id
                mime
                localFile {
                    childImageSharp {
                        gatsbyImageData
                      }
                }
                alternativeText
            }
          }
          ... on STRAPI__COMPONENT_MEDIA_ELEMENT_HERO {
            id
            Heading
            Description
            Media {
                id
                mime
                alternativeText
                localFile {
                    url
                }
                alternativeText
            }
            CTA {
                id
                LinkText
                NewTab
                url
            }
          }
    }
`

export default BlocksRenderer