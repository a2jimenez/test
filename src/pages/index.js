import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header1 from "../components/header-1"

const IndexPage = () => (
  <div>
    <Header1 />
    <p>this is a test</p>
    <p>
      need a person <Link to="/contact-us">Contat us</Link>
    </p>
    <Footer />
  </div>
)

export default IndexPage
