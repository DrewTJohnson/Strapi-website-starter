import React, { Children } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../../styles.scss"

const Layout = ({ children }) => {
    return (
        <div className="page-container">
            <Navbar />
            <main>{ children }</main>
            <Footer />
        </div>
    )
}

export default Layout