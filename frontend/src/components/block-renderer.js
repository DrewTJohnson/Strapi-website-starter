import React from "react"
import { graphql } from "gatsby"
import BlockHero from "./block-hero"
import BlockParagraph from "./block-paragraph"
import BlockSplitFeature from "./block-split-feature"

const componentsMap = {
    STRAPI__COMPONENT_LAYOUT_ELEMENTS_MULTIPLE_CALLOUT: blockMultipleCallout,
    STRAPI__COMPONENT_LAYOUT_ELEMENTS_SIMPLE_PARAGRAPH: BlockParagraph,
    STRAPI__COMPONENT_LAYOUT_ELEMENTS_SPLIT_FEATURE: BlockSplitFeature,
    STRAPI__COMPONENT_MEDIA_ELEMENT_HERO: BlockHero,
    STRAPI__COMPONENT_META_DATA_DEFAULT_SEO: blockSeo
}

const Block = ({ Block }) => {
    const Component = componentsMap[Block.__typename]

    if(!component) {
        return null
    }

    return <Component data={Block} />
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

export const query = graphql`
    fragment Blocks on STRAPI_COMPONENT_LAYOUT_ELEMENTS_MULTIPLE_CALLOUTSTRAPI__COMPONENT_LAYOUT_ELEMENTS_SIMPLE_PARAGRAPHSTRAPI_COMPONENT_LAYOUT_ELEMENTS_SPLIT_FEATURESTRAPI__COMPONENT_MEDIA_ELEMENT_HEROSTRAPI__COMPONENT_META_DATA_DEFAULT_SEO {
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
            Media {
                id
                mime
                localFile {
                    url
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
                localFile {
                    url
                }
                alternativeText
            }
          }
          ... on STRAPI__COMPONENT_META_DATA_DEFAULT_SEO {
            id
          }
    }
`