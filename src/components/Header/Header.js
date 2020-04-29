import React from 'react';
import './Header.css';

class Header extends React.Component {
  // Here I have just written simple hardcoded values for header.
  render(){
    return (
      <div className="header">
        <div className="logo">
            <a>LOGO</a>
        </div>
        <div className="header-links">
            <a className="anchor-link">Home</a>
            <a className="anchor-link">My Portfolio</a>
            <a className="anchor-link">Clients</a>
        </div>
        <div className="header-button">
            <a className="anchor-button">Get in Touch</a>
        </div>
      </div>
    );
  }
  
}

export default Header;
