import React, { useEffect } from 'react';
import convertMoney from '../convertMoney'
import { useDispatch, useSelector } from 'react-redux'
import { editUserAPI } from '../../redux/actions/user'
import { useHistory } from 'react-router-dom'
import { cartComplete } from '../../redux/actions/cart'
import { userAddBillAPI, getAllBillResult, userOrderDetailAPI } from '../../redux/actions/bill'

const Checkout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  let cartItem = useSelector(state => state.cart)

  var currentUser = useSelector(state => state.user.currentUser)

  let billOfUser = useSelector(state => state.bill.bill)

  const addBillDetails = (billId, cart) => {
    for (let i = 0; i < cart.length; i++) {
      let billDetail = {
        idhoadon: billId,
        idsanpham: cart[i].listProduct.id,
        soluong: cart[i].quantity,
        dongia: cart[i].listProduct.dongia
      }
      dispatch(userOrderDetailAPI(billDetail))
      // console.log('cart', billDetail)
    }
  }

  const listItemCart = useSelector(state => state.cart)

  const timestamp = () => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
    let year = date_ob.getFullYear()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()
    // console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
  }


  const totalMoneyFinal = (cart) => {
    const result = []

    cart.map(item => {
      const total = item.quantity * item.listProduct.dongia
      result.push(total)
      return true
    })
    return result.reduce((a, b) => a + b, 0)
  }

  const handleCheckoutProduct = () => {
    let newIdBill = billOfUser[billOfUser.length - 1]?.id + 1
    // console.log("billOfUser", newIdBill)
    let timeToday = timestamp()
    const [id, idkhachhang, thanhtoan, loaidon, tongtien, idnhanvien, thoigian] = [newIdBill, currentUser[0]?.id, 1, 3, totalMoneyFinal(listItemCart), 1, timeToday]
    const bill = {
      id,
      idkhachhang,
      thanhtoan,
      loaidon,
      tongtien,
      idnhanvien,
      thoigian
    }
    console.log("🚀 ~ file: time.js ~ line 30 ~ handleCheckoutProduct ~ bill", timeToday)

    dispatch(userAddBillAPI(bill))

    dispatch(getAllBillResult())

    addBillDetails(newIdBill,cartItem)

    dispatch(cartComplete())

    setTimeout(() => {
      history.push('/product')
    },4000)
    
  }

  const handleEditUser = event => {
    const diachi = document.formAddress.address.value
    const ten = document.formAddress.name.value
    const sdt = document.formAddress.phoneNumber.value
    const formData = {
      diachi,
      ten,
      sdt
    }
    // console.log('event', formData)
    // currentUser[0]?.id
    dispatch(editUserAPI(currentUser[0]?.id, formData))
    console.log("🚀 ~ file: Checkout.js ~ line 29 ~ Checkout ~ dispatch", dispatch(editUserAPI(7, formData)))
    // setTimeout(() => {
    //   history.go(0)
    // }, 1500)
    event.preventDefault()
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

  useEffect(() => {
    dispatch(getAllBillResult())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="container">
        <div className="page-checkout">
          <div className="row">
            <div className="checkout-left col-lg-9 col-md-9 col-sm-9 col-xs-12">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                        Địa chỉ
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" className="accordion-body collapse" style={{ height: 0 }}>
                    <div className="panel-body">
                      <form name="formAddress" id="formAddress" className="form-horizontal" onSubmit={(event) => handleEditUser(event)}>
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>Địa chỉ</label>
                            <input type="text" defaultValue={currentUser[0]?.diachi} className="form-control" name="address" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>Họ và tên</label>
                            <input type="text" defaultValue={currentUser[0]?.ten} className="form-control" name="name" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>Email:</label>
                            <input type="text" defaultValue={currentUser[0]?.email} className="form-control" disabled />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>Số điện thoại </label>
                            <input type="text" defaultValue={currentUser[0]?.sdt} className="form-control" name="phoneNumber" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <input type="submit" value={'Lưu' || ''} className="btn pull-right" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        Thanh toán
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" className="accordion-body collapse" style={{ height: 0 }}>
                    <div className="panel-body">
                      <table className="cart-summary table table-bordered">
                        <thead>
                          <tr>
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
                                  <td>
                                    <a href="product-detail-left-sidebar.html">
                                      <img width={80} alt="Product_Image" className="img-responsive" src={process.env.REACT_APP_URL + item.listProduct.anh} />
                                    </a>
                                  </td>
                                  <td>
                                    <a href="product-detail-left-sidebar.html" className="product-name">{item.listProduct.ten}</a>
                                  </td>
                                  <td className="text-center">
                                    {convertMoney(item.listProduct.dongia)}
                                  </td>
                                  <td className="text-center">
                                    {item.quantity}
                                  </td>
                                  <td className="text-center">
                                    {convertMoney(item.listProduct.dongia * item.quantity)}
                                  </td>
                                </tr>
                              )
                            })
                          }

                        </tbody>
                      </table>
                      <h4 className="heading-primary">Tổng cộng</h4>
                      <table className="table cart-total">
                        <tbody>
                          <tr>
                            <th>
                              Vận chuyển
                            </th>
                            <td>
                              Miễn phí vận chuyển
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <strong>Tổng tiền</strong>
                            </th>
                            <td className="total">
                              {totalMoney(listItemCart)}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
              <div className="pull-right">
                <button type="submit" name="proceed" className="btn btn-primary" onClick={() => handleCheckoutProduct()}>Thanh toán</button>
              </div>
            </div>
            <div className="checkout-right col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <h4 className="title">Tổng Tiền</h4>
              <table className="table cart-total">
                <tbody>
                  <tr className="shipping">
                    <th>
                      Vận chuyển
                    </th>
                    <td>
                      Miễn phí vận chuyển
                      <input type="hidden" defaultValue="free_shipping" className="shipping-method" name="shipping_method" />
                    </td>
                  </tr>
                  <tr className="total">
                    <th>
                      <strong>Tổng cộng</strong>
                    </th>
                    <td>
                      <strong><span className="amount">{totalMoney(listItemCart)}</span></strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Checkout;