import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header1 from "../components/header-1"

const ContactPage = () => (
    <Layout>
    <SEO title="Contact us" />
    <h1>This is the contact page</h1>
    <p>Welcome to contact page</p>
    <p>
      Twitter account:{" "}
      <a href="https://twitter.com/dediabetescom" target="_blank">
        diabetes.com
      </a>
    </p>
    <Link to="/">Go back to the homepage</Link>
    <Layout>
)

export default ContactPage
