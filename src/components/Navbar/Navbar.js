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
            <div className="dropdown-menu">
              <ul>
                <li className="has-image">
                  <img src="img/product/product-category-1.png" alt="Product_Category_Image"/>
                  <Link to="/" title="Vegetables">Vegetables</Link>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-2.png" alt="Product_Category_Image" />
                  <Link to="/" title="Fruits">Fruits</Link>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-3.png" alt="Product_Category_Image" />
                  <Link to="/" title="Bread">Bread</Link>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-4.png" alt="Product_Category_Image" />
                  <Link to="/" title="Juices">Juices</Link>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-5.png" alt="Product_Category_Image" />
                  <Link to="/" title="Tea and coffee">Tea and coffee</Link>
                </li>
              </ul>
            </div>
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