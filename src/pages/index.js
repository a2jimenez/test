import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <p>this is a test</p>
    <p>
      need a person <Link to="/contact-us">Contat us</Link>
    </p>
  </Layout>
)

export default IndexPage
