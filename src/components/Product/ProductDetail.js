import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom'
import { Markup } from 'interweave';
import { useDispatch, useSelector } from 'react-redux'
import { getProductByIDResult } from '../../redux/actions/product'
import { addToCart } from '../../redux/actions/cart'
import  convertMoney  from '../convertMoney'

const ProductDetail = () => {
  const productByID = useSelector(state => state.product.productByID)
  const params = useParams()
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(1)

  const handleAddToCart = () => {
    console.log('test amount form',)
    dispatch(addToCart(productByID, parseInt(amount)))
  }

  console.log('productByID------', productByID)
  useEffect(() => {
    dispatch(getProductByIDResult(params.id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <>
      <div className="container">
        <div className="product-detail">
          <div className="products-block layout-5">
            <div className="product-item">
              <div className="product-title">
                {productByID.ten}
              </div>
              <div className="row">
                <div className="product-left col-md-5 col-sm-5 col-xs-12">
                  <div className="product-image vertical">
                    <div className="main-image">
                      <img className="img-responsive" src={process.env.REACT_APP_URL + productByID.anh} alt="Product_Image" />
                    </div>
                    <div className="thumb-images">
                      <img className="img-responsive" src={process.env.REACT_APP_URL + productByID.anh} alt="Product_Image" />
                    </div>
                  </div>
                </div>
                <div className="product-right col-md-7 col-sm-7 col-xs-12">
                  <div className="product-info">
                    <div className="product-price">
                      <span className="sale-price">{convertMoney(productByID.dongia)}</span>
                    </div>
                    <div className="product-stock">
                      <span className="availability">Availability: </span><i className="fa fa-check-square-o" aria-hidden="true" />In stock
                    </div>
                    <div className="product-short-description">
                      <Markup content={productByID.mota} />
                    </div>
                    <div className="product-variants border-bottom">
                      <div className="product-variants-item">
                        <span className="control-label">Size: </span>
                        <select>
                          <option value={productByID.donvi} title={productByID.donvi}>{productByID.donvi}</option>
                        </select>
                      </div>
                    </div>
                    <div className="product-add-to-cart border-bottom">
                      <div className="product-quantity">
                        <span className="control-label">Số lượng: </span>
                        <div className="qty">
                          <div className="input-group">
                            <input
                              type="number"
                              name="qty"
                              defaultValue={amount}
                              min={1}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="product-buttons">
                        <button className="add-to-cart" onClick={() => handleAddToCart()} style={{border: 'none'}}>
                          <i className="fa fa-shopping-basket" aria-hidden="true" />
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-tab">
                {/* Tab Navigation */}
                <div className="tab-nav">
                  <ul>
                    <li className="active">
                      <a data-toggle="tab" href="#description">
                        <span>Thông tin sản phẩm</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Tab Content */}
                <div className="tab-content">
                  {/* Description */}
                  <div role="tabpanel" className="tab-pane fade in active" id="description">
                    <Markup content={productByID.mota} />
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

export default ProductDetail;