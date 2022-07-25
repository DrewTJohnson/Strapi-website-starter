import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlockHero = ({ data }) => {
    const isVideo = data.Media.mime.startsWith("video")

    return (
        <div className="hero-container">
            {isVideo ? (
                <p>TODO: Video</p>
            ) : (
                <GatsbyImage
                    image={getImage(data.Media.localFile)}
                    alt={data.Media.alternativeText}
                />
            )}
            <div className="text-container">
                <h1>{data.Heading}</h1>
                <p>{data.Description}</p>
            </div>
        </div>
    )
}

export default BlockHero