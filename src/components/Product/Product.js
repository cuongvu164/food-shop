import React from 'react';
import {Link} from 'react-router-dom'

const Product = () => {
  const product = [
    {
      name: 'Organic Strawberry Fruits',
      image: 'img/product/4.jpg',
      salePrice: '$80.00',
      basePrice: '$90.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...',
      stock: 'In stock'
    },
    {
      name: 'Organic Strawberry Fruits',
      image: 'img/product/4.jpg',
      salePrice: '$80.00',
      basePrice: '$90.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...',
      stock: 'In stock'
    },
    {
      name: 'Organic Strawberry Fruits',
      image: 'img/product/4.jpg',
      salePrice: '$80.00',
      basePrice: '$90.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...',
      stock: 'In stock'
    },
    {
      name: 'Organic Strawberry Fruits',
      image: 'img/product/4.jpg',
      salePrice: '$80.00',
      basePrice: '$90.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...',
      stock: 'In stock'
    }
  ]
  return (
    <>
      <div id="center-column" className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
        <div className="product-category-page">
          {/* Nav Bar */}
          <div className="products-bar">
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <div className="gridlist-toggle" role="tablist">
                  <ul className="nav nav-tabs">
                    <li className="active"><Link to="#products-grid" data-toggle="tab" aria-expanded="true"><i className="fa fa-th-large" /></Link></li>
                    <li><Link to="#products-list" data-toggle="tab" aria-expanded="false"><i className="fa fa-bars" /></Link></li>
                  </ul>
                </div>
                <div className="total-products">There are 12 products</div>
              </div>
              <div className="col-md-6 col-xs-6">
                <div className="filter-bar">
                  <form action="#" className="pull-right">
                    <div className="select">
                      <select className="form-control">
                        <option value>Sort By</option>
                        <option value={1}>Price: Lowest first</option>
                        <option value={2}>Price: Highest first</option>
                        <option value={3}>Product Name: A to Z</option>
                        <option value={4}>Product Name: Z to A</option>
                        <option value={5}>In stock</option>
                      </select>
                    </div>
                  </form>
                  <form action="#" className="pull-right">
                    <div className="select">
                      <select className="form-control">
                        <option value>Relevance</option>
                        <option value={1}>Price: Lowest first</option>
                        <option value={2}>Price: Highest first</option>
                        <option value={3}>Product Name: A to Z</option>
                        <option value={4}>Product Name: Z to A</option>
                        <option value={5}>In stock</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-content">
            {/* Products Grid */}
            <div className="tab-pane active" id="products-grid">
              <div className="products-block">
                <div className="row">
                  {
                    product.map((item, index) => {
                      return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={index}>
                          <div className="product-item">
                            <div className="product-image">
                              <Link to="product-detail-left-sidebar.html">
                                <img className="img-responsive" src={item.image} alt="Product_Image" />
                              </Link>
                            </div>
                            <div className="product-title">
                              <Link to="product-detail-left-sidebar.html">
                                {item.name}
                              </Link>
                            </div>
                            <div className="product-rating">
                              <div className="star on" />
                              <div className="star on" />
                              <div className="star on " />
                              <div className="star on" />
                              <div className="star" />
                            </div>
                            <div className="product-price">
                              <span className="sale-price">{item.salePrice}</span>
                              <span className="base-price">{item.basePrice ? item.basePrice : ''}</span>
                            </div>
                            <div className="product-buttons">
                              <Link className="add-to-cart" to="#">
                                <i className="fa fa-shopping-basket" aria-hidden="true" />
                              </Link>
                              <Link className="add-wishlist" to="#">
                                <i className="fa fa-heart" aria-hidden="true" />
                              </Link>
                              <Link className="quickview" to="#">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            {/* Products List */}
            <div className="tab-pane" id="products-list">
              <div className="products-block layout-5">
                {
                  product.map((item, index) => {
                    return (
                      <div className="product-item" key={index}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="product-image">
                              <Link to="product-detail-left-sidebar.html">
                                <img className="img-responsive" src={item.image} alt="Product Image" />
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="product-info">
                              <div className="product-title">
                                <Link to="product-detail-left-sidebar.html">
                                  {item.name}
                                </Link>
                              </div>
                              <div className="product-rating">
                                <div className="star on" />
                                <div className="star on" />
                                <div className="star on " />
                                <div className="star on" />
                                <div className="star" />
                                <span className="review-count">(3 Reviews)</span>
                              </div>
                              <div className="product-price">
                                <span className="sale-price">{item.salePrice}</span>
                                <span className="base-price">{item.basePrice ? item.basePrice : ''}</span>
                              </div>
                              <div className="product-stock">
                                <i className="fa fa-check-square-o" aria-hidden="true" />{item.stock}
                              </div>
                              <div className="product-description">
                                {item.description}
                              </div>
                              <div className="product-buttons">
                                <Link className="add-to-cart" to="#">
                                  <i className="fa fa-shopping-basket" aria-hidden="true" />
                                  <span>Add To Cart</span>
                                </Link>
                                <Link className="add-wishlist" to="#">
                                  <i className="fa fa-heart" aria-hidden="true" />
                                </Link>
                                <Link className="quickview" to="#">
                                  <i className="fa fa-eye" aria-hidden="true" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>


        {/* Pagination Bar */}
        <div className="pagination-bar">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="text">Showing 1-12 of 20 item(s)</div>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="pagination">
                <ul className="page-list">
                  <li><Link to="#" className="prev">Previous</Link></li>
                  <li><Link to="#" className="current">1</Link></li>
                  <li><Link to="#">2</Link></li>
                  <li><Link to="#" className="next">Next</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Product;