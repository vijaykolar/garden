import React from "react"
// import { Link } from "gatsby";
// import axios from 'axios';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo";
import { SectionTitle } from '../components/SectionTitle';
import ProductList from '../components/ProductList';

class IndexPage extends React.Component {

  constructor() {
    super();
    this.state = {
      pictures: [
        { title: 'title 1', id: 1 },
        { title: 'title 1', id: 2 },
      ],
      count: 0
    }
  }

  render() {
    return (  
      <Layout>
        <SEO title="Home" keywords={[`Garden`, `Vertical garden`, `Garden providers`]} />
        <section className="section">
          <div className="container">
            <SectionTitle title="works" />
            {/* <ProductList pictureLoad={this.state.pictures} /> */}
          </div>
        </section>
      </Layout>
    );
  }
}


export default IndexPage
