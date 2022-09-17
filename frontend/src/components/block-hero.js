import React from "react"

const BlockHero = ({ data }) => {
    const isVideo = data.Media.mime.startsWith("video")

    return (
        <div className="hero-container">
            {/* {isVideo ? (
                <p>TODO: Video</p>
            ) : (
                <GatsbyImage image={getImage(data.Media.localFile)} alt="" />
            )} */}
            <div className="text-container">
                <div className="content">
                    <h1>{data.Heading}</h1>
                    <p>{data.Description}</p>
                    <div className="link-container">
                        <a href={data.CTA.url} target={data.CTA.NewTab}>{data.CTA.LinkText}</a>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src={data.Media.localFile.url} alt={data.Media.localFile.alt} />
            </div>
        </div>
    )
}

export default BlockHero