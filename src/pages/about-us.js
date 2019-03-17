import React from "react";
import { Banner } from '../components/Banner';
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutUs extends React.Component {

  constructor() {
    super();
    this.state = {
      bannerURL: 'https://images.pexels.com/photos/1811991/pexels-photo-1811991.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      alt: 'Imagealt',
      heading: 'about us',
      subHeading: 'Lorem ipsum'

    }
  }

  render() {
    return(
      <Layout>
        <SEO title="About Us" />
        <Banner 
          src={this.state.bannerURL} 
          alt={this.state.alt} 
          heading={this.state.heading}
          subHeading={this.state.subHeading} 
        />

        <div>dsf</div>
      </Layout>
    );
  }
}
export default AboutUs
