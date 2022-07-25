import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
    return (
        <header className="main-navigation">
            <nav className="navbar primary-nav">
                <div className="site-logo-container">
                    <Link to="/" className="nav-item">
                        SiteName
                    </Link>
                </div>
                <div className="nav-item-container nav-row">
                    <Link to="/drinks" className="nav-item">
                        Drink Menu
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar