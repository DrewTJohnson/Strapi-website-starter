import React from "react"

const Headings = ({ title, description }) => {
    return (
        <header className="container">
            <h1 className="main-heading">{title}</h1>
            {description && (
                <p className="paragraph">{description}</p>
            )}
        </header>
    )
}

export default Headings