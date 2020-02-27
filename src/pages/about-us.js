import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutUs = () => {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>This is the about us page</p>
      <Link to="/contact-us">Go to contact page</Link>
    </Layout>
  )
}

export default AboutUs
