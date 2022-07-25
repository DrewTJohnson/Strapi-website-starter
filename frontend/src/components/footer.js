import React from "react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-container">
            <div className="container">
                <p>Copyright {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer