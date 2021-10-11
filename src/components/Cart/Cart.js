import React from 'react';
import './cart.scss'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="page-cart">
          <div className="table-responsive">
            <table className="cart-summary table table-bordered">
              <thead>
                <tr>
                  <th className="width-20">&nbsp;</th>
                  <th className="width-80 text-center">Image</th>
                  <th>Name</th>
                  <th className="width-100 text-center">Unit price</th>
                  <th className="width-100 text-center">Qty</th>
                  <th className="width-100 text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-remove">
                    <i className="fa fa-times" />
                  </td>
                  <td>
                      <img width={80} alt="Product_Image" className="img-responsive" src="img/product/19.jpg" />
                  </td>
                  <td>
                    <p className="product-name">Organic Strawberry Fruits</p>
                  </td>
                  <td className="text-center">
                    $265
                  </td>
                  <td>
                    <div className="product-quantity">
                      <div className="qty">
                        <div className="input-group">
                          <input type="text" name="qty" defaultValue={1} data-min={1} />
                          <span className="adjust-qty">
                            <span className="adjust-btn plus">+</span>
                            <span className="adjust-btn minus">-</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    $265
                  </td>
                </tr>
                <tr>
                  <td className="product-remove">
                    <a title="Remove_item" className="remove" href="/">
                      <i className="fa fa-times" />
                    </a>
                  </td>
                  <td>
                      <img width={80} alt="Product_Image" className="img-responsive" src="img/product/31.jpg" />
                  </td>
                  <td>
                    <a href="product-detail-left-sidebar.html" className="product-name">Organic Strawberry Fruits</a>
                  </td>
                  <td className="text-center">
                    $150
                  </td>
                  <td>
                    <div className="product-quantity">
                      <div className="qty">
                        <div className="input-group">
                          <input type="text" name="qty" defaultValue={2} data-min={1} />
                          <span className="adjust-qty">
                            <span className="adjust-btn plus">+</span>
                            <span className="adjust-btn minus">-</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    $300
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="cart-total">
                  <td rowSpan={3} colSpan={3} />
                  <td colSpan={2} className="text-right">Total products</td>
                  <td colSpan={1} className="text-center">$565</td>
                </tr>
                <tr className="cart-total">
                  <td colSpan={2} className="text-right">Total shipping</td>
                  <td colSpan={1} className="text-center">$10</td>
                </tr>
                <tr className="cart-total">
                  <td colSpan={2} className="total text-right">Total</td>
                  <td colSpan={1} className="total text-center">$575</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="checkout-btn">
            <Link to="/checkout" className="btn btn-primary pull-right" title="Proceed to checkout">
              <span>Proceed to checkout</span>
              <i className="fa fa-angle-right ml-xs" />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;