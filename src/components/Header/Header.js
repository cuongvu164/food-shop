import React from 'react';
import { Link } from 'react-router-dom'

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
                <Link to="/">
                  <img className="img-responsive" src="img/logo.png" alt="Logo" />
                </Link>
              </div>
              <span id="toggle-mobile-menu"><i className="zmdi zmdi-menu" /></span>
            </div>
            {/* Cart */}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="block-cart dropdown">
                <div className="cart-title">
                  <Link to="/cart">
                    <i className="fa fa-shopping-basket" />
                    <span className="cart-count">2</span>
                  </Link>

                </div>
                <div className="dropdown-content">
                  <div className="cart-content">
                    <table>
                      <tbody>
                        <tr>
                          <td className="product-image">
                            <Link to="/">
                              <img src="img/product/7.jpg" alt="Product" />
                            </Link>
                          </td>
                          <td>
                            <div className="product-name">
                              <Link to="product-detail-left-sidebar.html">Organic Strawberry Fruits</Link>
                            </div>
                            <div>
                              2 x <span className="product-price">$28.98</span>
                            </div>
                          </td>
                          <td className="action">
                            <Link className="remove" to="/">
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-image">
                            <Link to="product-detail-left-sidebar.html">
                              <img src="img/product/6.jpg" alt="Product" />
                            </Link>
                          </td>
                          <td>
                            <div className="product-name">
                              <Link to="product-detail-left-sidebar.html">Organic Strawberry</Link>
                            </div>
                            <div>
                              1 x <span className="product-price">$35.00</span>
                            </div>
                          </td>
                          <td className="action">
                            <Link className="remove" to="/">
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="total">
                          <td>Total:</td>
                          <td colSpan={2}>$92.96</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12">
              <div className="my-account dropdown toggle-icon">
                <div className="dropdown-toggle" data-toggle="dropdown">
                  <i className="zmdi zmdi-menu" style={{ fontSize: '40px' }} />
                </div>
                <div className="dropdown-menu" style={{ zIndex: 999 }}>
                  <div className="item">
                    <Link to="/profile" title="Log in to your customer account"><i className="fa fa-cog" />My Account</Link>
                  </div>
                  <div className="item">
                    <Link to="/login" title="Log in to your customer account"><i className="fa fa-sign-in" />Login</Link>
                  </div>
                  <div className="item">
                    <Link to="/register" title="Register Account"><i className="fa fa-user" />Register</Link>
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