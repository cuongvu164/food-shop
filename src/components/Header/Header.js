import React from 'react';

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            {/* Search */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="form-search">
                <form action="#" method="get">
                  <input type="text" className="form-input" placeholder="Search" />
                  <button type="submit" className="fa fa-search" />
                </form>
              </div>
            </div>
            {/* Logo */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="logo">
                <a href="index.html">
                  <img className="img-responsive" src="img/logo.png" alt="Logo" />
                </a>
              </div>
              <span id="toggle-mobile-menu"><i className="zmdi zmdi-menu" /></span>
            </div>
            {/* Cart */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="block-cart dropdown">
                <div className="cart-title">
                  <i className="fa fa-shopping-basket" />
                  <span className="cart-count">2</span>
                </div>
                <div className="dropdown-content">
                  <div className="cart-content">
                    <table>
                      <tbody>
                        <tr>
                          <td className="product-image">
                            <a href="/">
                              <img src="img/product/7.jpg" alt="Product" />
                            </a>
                          </td>
                          <td>
                            <div className="product-name">
                              <a href="product-detail-left-sidebar.html">Organic Strawberry Fruits</a>
                            </div>
                            <div>
                              2 x <span className="product-price">$28.98</span>
                            </div>
                          </td>
                          <td className="action">
                            <a className="remove" href="/">
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-image">
                            <a href="product-detail-left-sidebar.html">
                              <img src="img/product/6.jpg" alt="Product" />
                            </a>
                          </td>
                          <td>
                            <div className="product-name">
                              <a href="product-detail-left-sidebar.html">Organic Strawberry</a>
                            </div>
                            <div>
                              1 x <span className="product-price">$35.00</span>
                            </div>
                          </td>
                          <td className="action">
                            <a className="remove" href="/">
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </td>
                        </tr>
                        <tr className="total">
                          <td>Total:</td>
                          <td colSpan={2}>$92.96</td>
                        </tr>
                        <tr>
                          <td colSpan={3}>
                            <div className="cart-button">
                              <a className="btn btn-primary" href="product-cart.html" title="View Cart">View Cart</a>
                              <a className="btn btn-primary" href="product-checkout.html" title="Checkout">Checkout</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;