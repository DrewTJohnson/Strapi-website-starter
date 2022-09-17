import { Link, useStaticQuery } from "gatsby"
import React from "react"
import { graphql } from "gatsby"



const Navbar = () => {
    const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
          SiteName
          SiteDescription
      }
    }
  `)

    return (
        <header className="main-navigation">
            <nav className="navbar primary-nav">
                <div className="site-logo-container">
                    <Link to="/home" className="nav-item">
                        {strapiGlobal.SiteName}
                    </Link>
                </div>
                <div className="nav-item-container nav-row">
                    <Link to="/about-us" className="nav-item">
                        About Us
                    </Link>
                    {/* <Link to="/drinks" className="nav-item">
                        Drink Menu
                    </Link> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar