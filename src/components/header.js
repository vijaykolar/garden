import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import logo from '../images/logo.png'
import './header.css';

const Header = ({ siteTitle }) => (
  <header style={{ background: `rebeccapurple` }} >
    <div className="container">
      <nav className="navbar navbar-expand-lg">
         <Link to="/">
          <img src={logo} alt='logo' className="logo/>
          <span> green factory </span>
         </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-nav-menu ml-auto">
            <li className="nav-item navbar-nav__item active">
              <Link to="/about-us/" className="navbar-nav__link">about us</Link>
            </li>
            <li className="nav-item navbar-nav__item">
            <Link to="/services/" className="navbar-nav__link">services</Link>
            </li>
            <li className="nav-item navbar-nav__item">
            <Link to="/contact/" className="navbar-nav__link">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
