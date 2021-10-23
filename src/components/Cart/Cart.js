import React from 'react';
import './cart.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { updateToCart, deleteToCart } from '../../redux/actions/cart'
import { useHistory } from 'react-router-dom'
import  convertMoney  from '../convertMoney'

const Cart = () => {
  const dispatch = useDispatch()
  const listItemCart = useSelector(state => state.cart)
  let history = useHistory()

  const totalMoney = (cart) => {
    const result = []

    cart.map(item => {
      const total = item.quantity * item.listProduct.dongia
      result.push(total)
      return true
    })
    return convertMoney(result.reduce((a, b) => a + b, 0))
  }


  return (
    <>
      <div className="container">
        <div className="page-cart">
          <div className="table-responsive">
            <table className="cart-summary table table-bordered">
              <thead>
                <tr>
                  <th className="width-20">&nbsp;</th>
                  <th className="width-80 text-center">Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th className="width-100 text-center">Đơn giá</th>
                  <th className="width-100 text-center">Số lượng</th>
                  <th className="width-100 text-center">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {
                  listItemCart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="product-remove">
                          <i className="fa fa-times" onClick={() => dispatch(deleteToCart(item.listProduct))}/>
                        </td>
                        <td>
                          <img width={80} alt="Product_Image" className="img-responsive" src={process.env.REACT_APP_URL + item.listProduct.anh} />
                        </td>
                        <td>
                          <p className="product-name">{item.listProduct.ten}</p>
                        </td>
                        <td className="text-center">
                          {convertMoney(item.listProduct.dongia)}₫
                        </td>
                        <td>
                          <div className="product-quantity">
                            <div className="qty">
                              <div className="input-group">
                                <input
                                  type="number"
                                  name="qty"
                                  defaultValue={item.quantity}
                                  min={1}
                                  onChange={(e) => dispatch(updateToCart(item.listProduct, parseInt(e.target.value)))}
                                  />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          {convertMoney(item.listProduct.dongia * item.quantity)}₫
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
              <tfoot>
                <tr className="cart-total">
                  <td rowSpan={3} colSpan={3} />
                  <td colSpan={2} className="text-right">Tổng tiền</td>
                  <td colSpan={1} className="text-center">{totalMoney(listItemCart)}₫</td>
                </tr>
                <tr className="cart-total">
                  <td colSpan={2} className="text-right">Phí vận chuyển</td>
                  <td colSpan={1} className="text-center">0₫</td>
                </tr>
                <tr className="cart-total">
                  <td colSpan={2} className="total text-right">Tổng</td>
                  <td colSpan={1} className="total text-center">{totalMoney(listItemCart)}₫</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="checkout-btn">
            <Link to="/checkout" className="btn btn-primary pull-right" title="Proceed to checkout">
              <span>Thanh Toán</span>
              <i className="fa fa-angle-right ml-xs" />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;