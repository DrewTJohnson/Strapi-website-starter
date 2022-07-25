import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Headings from "../components/headings"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home() {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
          SiteName
          SiteDescription
      }
    }
  `)
  return (
    <div className="body">
      <Layout>
        <Seo seo={{ MetaTitle: "Home" }} />
        <Headings
          title={strapiGlobal.SiteName}
          description={strapiGlobal.SiteDescription}
        />
      </Layout>
    </div>
  )
}
