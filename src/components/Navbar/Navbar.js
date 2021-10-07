import React from 'react';

const Navbar = () => {
  return (
    <>
      <div id="main-menu">
        <ul className="menu">
          <li className="dropdown">
            <a href="/" title="Homepage">Home</a>
          </li>
          <li className="dropdown">
            <a href="/" title="Product">Product</a>
            <div className="dropdown-menu">
              <ul>
                <li className="has-image">
                  <img src="img/product/product-category-1.png" alt="Product_Category_Image"/>
                  <a href="/" title="Vegetables">Vegetables</a>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-2.png" alt="Product_Category_Image" />
                  <a href="/" title="Fruits">Fruits</a>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-3.png" alt="Product_Category_Image" />
                  <a href="/" title="Bread">Bread</a>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-4.png" alt="Product_Category_Image" />
                  <a href="/" title="Juices">Juices</a>
                </li>
                <li className="has-image">
                  <img src="img/product/product-category-5.png" alt="Product_Category_Image" />
                  <a href="/" title="Tea and coffee">Tea and coffee</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="dropdown">
            <a href="/">Blog</a>
          </li>
          <li className="dropdown">
            <a href="/">About Us</a>
          </li>
          <li className="dropdown">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Navbar;