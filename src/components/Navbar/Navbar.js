import React from 'react';
import  {
  Link
} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div id="main-menu" style={{zIndex:1}}>
        <ul className="menu">
          <li className="dropdown">
            <Link to="/" title="Homepage">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/product" title="Product">Product</Link>
          </li>
          <li className="dropdown">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="dropdown">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="dropdown">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Navbar;