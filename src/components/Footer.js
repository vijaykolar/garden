import React from 'react';

export const Footer = () => {
    return(
        <footer>
          <div className="container">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Green garden</a>
          
          </div>
      </footer>
    );
}