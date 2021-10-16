import React from 'react';

const Checkout = () => {
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
                      <form action="#" id="formaddress" method="post" className="form-horizontal">
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>Country</label>
                            <select className="form-control">
                              <option value>Select a country</option>
                              <option value="australia">Australia</option>
                              <option value="brazil">Brazil</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-6">
                            <label>First Name</label>
                            <input type="text" defaultValue className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label>Last Name</label>
                            <input type="text" defaultValue className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>Company Name</label>
                            <input type="text" defaultValue className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>Address </label>
                            <input type="text" defaultValue className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <label>City </label>
                            <input type="text" defaultValue className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <input type="submit" defaultValue="Save" className="btn pull-right" />
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
                            <th className="width-80 text-center">Image</th>
                            <th>Name</th>
                            <th className="width-100 text-center">Unit price</th>
                            <th className="width-100 text-center">Qty</th>
                            <th className="width-100 text-center">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="product-detail-left-sidebar.html">
                                <img width={80} alt="Product_Image" className="img-responsive" src="img/product/19.jpg" />
                              </a>
                            </td>
                            <td>
                              <a href="product-detail-left-sidebar.html" className="product-name">Organic Strawberry Fruits</a>
                            </td>
                            <td className="text-center">
                              $265
                            </td>
                            <td className="text-center">
                              1
                            </td>
                            <td className="text-center">
                              $265
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="product-detail-left-sidebar.html">
                                <img width={80} alt="Product_Image" className="img-responsive" src="img/product/31.jpg" />
                              </a>
                            </td>
                            <td>
                              <a href="product-detail-left-sidebar.html" className="product-name">Organic Strawberry Fruits</a>
                            </td>
                            <td className="text-center">
                              $150
                            </td>
                            <td className="text-center">
                              2
                            </td>
                            <td className="text-center">
                              $300
                            </td>
                          </tr>
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
                              $431
                            </td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
              <div className="pull-right">
                <button type="submit"  name="proceed" className="btn btn-primary">Thanh toán</button>
              </div>
            </div>
            <div className="checkout-right col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <h4 className="title">Cart Total</h4>
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
                      <strong><span className="amount">$431</span></strong>
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