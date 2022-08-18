import React from "react"

const BlockHero = ({ data }) => {
    const isVideo = data.Media.mime.startsWith("video")

    return (
        <div className="hero-container" style={{backgroundImage:`url(${data.Media.localFile.url})`}}>
            {/* {isVideo ? (
                <p>TODO: Video</p>
            ) : (
                <GatsbyImage image={getImage(data.Media.localFile)} alt="" />
            )} */}
            <div className="text-container">
                <h1>{data.Heading}</h1>
                <p>{data.Description}</p>
            </div>
        </div>
    )
}

export default BlockHero