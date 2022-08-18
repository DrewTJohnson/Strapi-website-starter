import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlockSplitFeature = ({ data }) => {
    const isVideo = data.Media.mime.startsWith("video")
    const leftAlignment = data.mediaAlignment.startsWith("Left")

    if(leftAlignment) {
        return (
            <div className={`split-feature-container ${data.mediaAlignment}`}>
                
                <div className="img-container">
                    {isVideo ? (
                        <p>TODO: Video</p>
                    ) : (
                    <GatsbyImage
                        image={getImage(data.Media.localFile)}
                        alt={data.Media.alternativeText}
                    />
                    )}
                </div>
                <div className="text-container">
                    <h2>{data.Heading}</h2>
                    <p>{data.Description}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`split-feature-container ${data.mediaAlignment}`}>
                <div className="text-container">
                    <h2>{data.Heading}</h2>
                    <p>{data.Description}</p>
                </div>
                <div className="img-container">
                    {isVideo ? (
                        <p>TODO: Video</p>
                    ) : (
                    <GatsbyImage
                        image={getImage(data.Media.localFile)}
                        alt={data.Media.alternativeText}
                    />
                    )}
                </div>
            </div>
        )
    }
    
}

export default BlockSplitFeature