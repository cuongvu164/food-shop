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
              <Link className="category-title" to="/">Vegetables</Link>
              <div className="sub-category collapse" id="vegetables" role="main">
                <div className="item">
                  <Link to="/">Tomato</Link>
                </div>
                <div className="item">
                  <Link to="/">Broccoli</Link>
                </div>
                <div className="item">
                  <Link to="/">Cabbage</Link>
                </div>
                <div className="item">
                  <Link to="/">Cucumber</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <span className="arrow collapsed" data-toggle="collapse" data-target="#fruits" aria-expanded="false" role="button">
                <i className="zmdi zmdi-minus" />
                <i className="zmdi zmdi-plus" />
              </span>
              <Link className="category-title" to="/">Fruits</Link>
              <div className="sub-category collapse" id="fruits" role="main">
                <div className="item">
                  <Link to="/">Orange</Link>
                </div>
                <div className="item">
                  <Link to="/">Apple</Link>
                </div>
                <div className="item">
                  <Link to="/">Banana</Link>
                </div>
                <div className="item">
                  <Link to="/">Strawberry</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <span className="arrow collapsed" data-toggle="collapse" data-target="#juices" aria-expanded="false" role="button">
                <i className="zmdi zmdi-minus" />
                <i className="zmdi zmdi-plus" />
              </span>
              <Link className="category-title" to="/">Juices</Link>
              <div className="sub-category collapse" id="juices"role="main">
                <div className="item">
                  <Link to="/">Orange Juices</Link>
                </div>
                <div className="item">
                  <Link to="/">Tomato Juices</Link>
                </div>
                <div className="item">
                  <Link to="/">Apple Juices</Link>
                </div>
                <div className="item">
                  <Link to="/">Peaches Juices</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <Link className="category-title" to="/">Tea and Coffee</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="/">Jam</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="/">SeaFood</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="/">Fresh Meats</Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SideBar;