import React from "react"
// import { Link } from "gatsby"
import { Banner } from "../components/Banner";
import { SectionTitle } from "../components/SectionTitle";
import { SectionInfo } from "../components/SectionInfo";
import Layout from "../components/layout";
import SEO from "../components/seo";

class Services extends React.Component {

  constructor() {
    super();
    this.state = {
      bannerURL: 'https://images.pexels.com/photos/1811991/pexels-photo-1811991.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      alt: 'Imagealt',
      heading: 'Services',
      subHeading: 'we destroy the envirnoment Margaret Mead',
      sectionHeading: 'Green Factory offers a full-service garden design to clients.',
      sectionInfo: 'We work with a select group of landscape contractors, water feature and lighting design specialists to ensure the garden design process, from initial concept to project completion, is smooth and seamless.'

    }
  }

  render() {
    return(
      <Layout>
        <SEO title="Services " />

        <Banner 
          src={this.state.bannerURL} 
          alt={this.state.alt} 
          heading={this.state.heading}
          subHeading={this.state.subHeading} 
        />
        
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-10 text-center offset-md-1">
                <SectionTitle title="Vertical garden dfd" />
                <SectionInfo info="A vertical garden is a garden that grows upward (vertically) using a trellis or other support system, rather than on the ground (horizontally). Anything grown on a trellis or even a fence is technically part of a vertical garden. ... More recently, vertical gardens can also be used to grow flowers and even vegetables." />

                <div className="img-wrap" style={{marginTop: "50px"}}>
                  <img className="img-fluid" src={this.state.bannerURL} alt={this.state.alt} />
                </div>
             </div>
            </div>
          </div>
        </section>
        <section className="section" style={{backgroundColor: "#f5f5f5"}}>
          <div className="container">
            <div className="row">
              <div className="col-md-10 text-center offset-md-1">
                <SectionTitle title="Vertical garden dfd" />
                <SectionInfo info="A vertical garden is a garden that grows upward (vertically) using a trellis or other support system, rather than on the ground (horizontally). Anything grown on a trellis or even a fence is technically part of a vertical garden. ... More recently, vertical gardens can also be used to grow flowers and even vegetables." />

                <div className="img-wrap" style={{marginTop: "50px"}}>
                  <img className="img-fluid" src={this.state.bannerURL} alt={this.state.alt} />
                </div>
             </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-10 text-center offset-md-1">
                <SectionTitle title="Vertical garden dfd" />
                <SectionInfo info="A vertical garden is a garden that grows upward (vertically) using a trellis or other support system, rather than on the ground (horizontally). Anything grown on a trellis or even a fence is technically part of a vertical garden. ... More recently, vertical gardens can also be used to grow flowers and even vegetables." />

                <div className="img-wrap" style={{marginTop: "50px"}}>
                  <img className="img-fluid" src={this.state.bannerURL} alt={this.state.alt} />
                </div>
             </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  
}

export default Services;
