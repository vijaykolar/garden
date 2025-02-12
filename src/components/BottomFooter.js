import React from 'react';
import { Link } from "gatsby"
import './bottom-footer.css';

export const BottomFooter = () => {
  return(
    <section class="nav-bottom">
      <div className="container">

        <ul className="d-flex align-items-center mb-0">
          <li>
            <Link to="/" className="navbar-nav__link">Home</Link>
          </li>
          <li>
            <Link to="/about-us/" className="navbar-nav__link">about us</Link>
          </li>
          <li>
            <Link to="/services/" className="navbar-nav__link">services</Link>
          </li>
          <li>
            <Link to="/contact/" className="navbar-nav__link">contact</Link>
          </li>

        </ul>
      </div>
    </section>
  );
}
