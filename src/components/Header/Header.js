import React, {useEffect} from 'react';
import './header.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUserRequest, getUserByEmailResult } from '../../redux/actions/user'
import convertMoney from '../convertMoney'

const Header = () => {
  const dispatch = useDispatch()
  let cart = useSelector(state => state.cart)
  let user = useSelector(state => state.user)
  console.log("🚀 ~ file: Header.js ~ line 12 ~ Header ~ userCurrent", user.currentUser.email)
  console.log('cartFood------', cart)

  useEffect(() => {
    dispatch(getUserByEmailResult(user.currentUser.email))
  }, [dispatch])

  const setLogout = () => {
    dispatch(logoutUserRequest())
  }

  const totalMoney = (cart) => {
    const result = []

    cart.map(item => {
      const total = item.quantity * item.listProduct.dongia
      result.push(total)
      return true
    })
    return convertMoney(result.reduce((a, b) => a + b, 0))
  }

  const total = quantities => {
    let dem = 0
    quantities.forEach(item => dem += item.quantity)

    return dem
  }
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
                  <img className="img-responsive" src="/img/logo.png" alt="Logo" />
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
                    <span className="cart-count">{total(cart)}</span>
                  </Link>

                </div>
                <div className="dropdown-content">
                  <div className="cart-content">
                    <table>
                      <tbody>
                        {
                          cart.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="product-image">
                                  <Link to="/">
                                    <img src={process.env.REACT_APP_URL + item.listProduct.anh} alt="Product" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="product-name">
                                    <Link to="product-detail-left-sidebar.html">{item.listProduct.ten}</Link>
                                  </div>
                                  <div>
                                    {item.quantity} x <span className="product-price">{convertMoney(item.listProduct.dongia)}</span>
                                  </div>
                                </td>
                                <td className="action">
                                  <Link className="remove" to="/">
                                    <i className="fa fa-trash-o" aria-hidden="true" />
                                  </Link>
                                </td>
                              </tr>
                            )
                          })
                        }


                      </tbody>
                      <tfoot>
                        <tr className="total">
                          <td>Tổng:</td>
                          <td colSpan={2}>{totalMoney(cart)}</td>
                        </tr>
                      </tfoot>
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
                  {
                    user?.isLogin ?
                      <div className="item">
                        <div className="item">
                          <Link to="/profile" title="Log in to your customer account"><i className="fa fa-cog" />Welcome {user?.currentUser[0]?.ten}</Link>
                        </div>
                        <div className="item">
                          <Link to="/" title="Register Account" onClick={() => setLogout()}><i className="fa fa-sign-out" />Sign Out</Link>
                        </div>
                      </div>
                      : <div className="item">
                        <div className="item">
                          <Link to="/login" title="Log in to your customer account"><i className="fa fa-sign-in" />Login</Link>
                        </div>
                        <div className="item">
                          <Link to="/register" title="Register Account"><i className="fa fa-user" />Register</Link>
                        </div>
                      </div>

                  }



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