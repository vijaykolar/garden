import React from "react"
// import { Link } from "gatsby";
import axios from 'axios';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo";
import { SectionTitle } from '../components/SectionTitle';
import ProductList from '../components/ProductList';

class IndexPage extends React.Component {

  constructor() {
    super();
    this.state= {
      count: 0
    }

    this.productImage = this.productImage.bind(this);
  }

  async productImage() {

    const response = await axios.get('', {
      params: 90
    })
      console.log(response);
    this.setState({
      count: response
    })
  }

  render() {
    return (  
      <Layout>
        <SEO title="Home" keywords={[`Garden`, `Vertical garden`, `Garden providers`]} />
        <section className="section">
          <div className="container">
            <SectionTitle title="work"/>
            <ProductList productImage={this.state.count} />

            {/* {this.state.count} */}
          </div>
        </section>
      </Layout>
    );
  }
}


export default IndexPage
