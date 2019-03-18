import React from "react";
import { Banner } from '../components/Banner';
// import { Link } from "gatsby"
import { SectionTitle } from '../components/SectionTitle';
import { SectionInfo } from '../components/SectionInfo';
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutUs extends React.Component {

  constructor() {
    super();
    this.state = {
      bannerURL: 'https://images.pexels.com/photos/1811991/pexels-photo-1811991.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      alt: 'Imagealt',
      heading: 'about us',
      subHeading: 'Lorem ipsum',
      sectionHeading: 'Green Factory offers a full-service garden design to clients.',
      sectionInfo: 'We work with a select group of landscape contractors, water feature and lighting design specialists to ensure the garden design process, from initial concept to project completion, is smooth and seamless.'

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

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 text-center">
                <SectionTitle title={this.state.sectionHeading} />
                <SectionInfo info={this.state.sectionInfo} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
export default AboutUs
