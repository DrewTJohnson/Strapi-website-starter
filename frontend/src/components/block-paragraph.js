import React from "react"

const BlockParagraph = ({ data }) => {
    return (
        <div className="text-contaienr">
            <p>{data.Text}</p>
        </div>
    )
}

export default BlockParagraph