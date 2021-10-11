import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <div id="left-column" className="sidebar col-lg-3 col-md-3 col-sm-3 col-xs-12">
        {/* Block - Product Categories */}
        <div className="block product-categories">
          <h3 className="block-title">Categories</h3>
          <div className="block-content">
            <div className="item">
              <span className="arrow collapsed" data-toggle="collapse" data-target="#vegetables" aria-expanded="false" role="button">
                <i className="zmdi zmdi-minus" />
                <i className="zmdi zmdi-plus" />
              </span>
              <Link className="category-title" to="product-grid-left-sidebar.html">Vegetables</Link>
              <div className="sub-category collapse" id="vegetables" role="main">
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Tomato</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Broccoli</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Cabbage</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Cucumber</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <span className="arrow collapsed" data-toggle="collapse" data-target="#fruits" aria-expanded="false" role="button">
                <i className="zmdi zmdi-minus" />
                <i className="zmdi zmdi-plus" />
              </span>
              <Link className="category-title" to="product-grid-left-sidebar.html">Fruits</Link>
              <div className="sub-category collapse" id="fruits" role="main">
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Orange</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Apple</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Banana</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Strawberry</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <span className="arrow collapsed" data-toggle="collapse" data-target="#juices" aria-expanded="false" role="button">
                <i className="zmdi zmdi-minus" />
                <i className="zmdi zmdi-plus" />
              </span>
              <Link className="category-title" to="product-grid-left-sidebar.html">Juices</Link>
              <div className="sub-category collapse" id="juices"role="main">
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Orange Juices</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Tomato Juices</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Apple Juices</Link>
                </div>
                <div className="item">
                  <Link to="product-grid-left-sidebar.html">Peaches Juices</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <Link className="category-title" to="product-grid-left-sidebar.html">Tea and Coffee</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="product-grid-left-sidebar.html">Jam</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="product-grid-left-sidebar.html">SeaFood</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="product-grid-left-sidebar.html">Fresh Meats</Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SideBar;