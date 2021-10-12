import React from 'react';
import { Link } from 'react-router-dom'
import ProductSlider from '../Product/ProductSlider'

const TabNav = () => {
  return (
    <>
      <div className="section products-block product-tab nav-color show-hover nav-round best-sellers">
        <div className="block-title">
          <h2 className="title">Best <span>Sellers</span></h2>
          <div className="sub-title">Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor</div>
        </div>
        <div className="block-content">
          <div className="tab-nav">
            <ul>
              <li className="active">
                <Link data-toggle="tab" to="#all-products">
                  <img src="img/product/product-category-0.png" alt="All Product" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link data-toggle="tab" to="#vegetables">
                  <img src="img/product/product-category-1.png" alt="Vegetables" />
                  <span>Vegetables</span>
                </Link>
              </li>
              <li>
                <Link data-toggle="tab" to="#fruits">
                  <img src="img/product/product-category-2.png" alt="Fruits" />
                  <span>Fruits</span>
                </Link>
              </li>
              <li>
                <Link data-toggle="tab" to="#bread">
                  <img src="img/product/product-category-3.png" alt="Bread" />
                  <span>Bread</span>
                </Link>
              </li>
              <li>
                <Link data-toggle="tab" to="#juices">
                  <img src="img/product/product-category-4.png" alt="Juices" />
                  <span>Juices</span>
                </Link>
              </li>
              <li>
                <Link data-toggle="tab" to="#tea">
                  <img src="img/product/product-category-5.png" alt="Tea" />
                  <span>Tea</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Product */}
        <ProductSlider />
      </div>

    </>
  );
};

export default TabNav;