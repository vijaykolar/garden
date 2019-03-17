import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";
import { SectionTitle } from '../components/SectionTitle';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Garden`, `Vertical garden`, `Garden providers`]} />
    <section>
      <div className="container">
        <SectionTitle title="work"/>
        
      </div>
    </section>
  </Layout>
)

export default IndexPage
