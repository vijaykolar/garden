/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header";
import { Footer } from "./Footer";
import { BottomFooter } from "./BottomFooter";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./layout.css";
import './section.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle="Garden" />
        
          <main>{children}</main>
         
        <Footer />
        <BottomFooter />
        
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
