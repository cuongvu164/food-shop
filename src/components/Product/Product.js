import React, { useEffect } from 'react';
import './product.scss'
import {
  Link,
  useParams
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Markup } from 'interweave';
import { getProductPaginationResult } from '../../redux/actions/product'
import { addToCart } from '../../redux/actions/cart'
import Pagination from '../Pagination/Pagination'
import  convertMoney  from '../convertMoney'

const Product = () => {
  const params = useParams()
  // console.log("🚀 ~ file: Product.js ~ line 15 ~ Product ~ params", params.page)
  const dispatch = useDispatch()
  var listProduct = useSelector(state => state.product.products)
  // console.log('listProduct123------', listProduct.current_page)

  const countPageNumber = array => {
    const count = array?.slice(1,array.length-1)
    return count?.length
  }
  // console.log('param', params)
  useEffect(() => {
    if (Object.getOwnPropertyNames(params).length !== 0) {
      dispatch(getProductPaginationResult(params.id, params.page))
    } else {
      dispatch(getProductPaginationResult(1, 1))
    }
  }, [params, dispatch])

  useEffect(() => {
    if (!params.id) {
      params.id = 1
    }
  }, [params])

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
                    listProduct.data?.map((item, index) => {
                      return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={index}>
                          <div className="product-item">
                            <div className="product-image">
                              <Link to={`/product/${item.id}`}>
                                <img className="img-responsive" src={process.env.REACT_APP_URL + item.anh} alt="Product_Image" />
                              </Link>
                            </div>
                            <div className="product-title">
                              <Link to="/">
                                {item.ten}
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
                              <span className="sale-price">{convertMoney(item.dongia)}</span>
                            </div>
                            <div className="product-buttons">
                              <div className="add-to-cart" onClick={() => dispatch(addToCart(item, 1))}>
                                {/* chu y */}
                                <i className="fa fa-shopping-basket" aria-hidden="true" />
                              </div>
                              <Link className="quickview" to={`/product/${item.id}`}>
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
                  listProduct.data?.map((item, index) => {
                    return (
                      <div className="product-item" key={index}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="product-image">
                              <Link to="/">
                                <img className="img-responsive" src={process.env.REACT_APP_URL + item.anh} alt="Product_Image" />
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="product-info">
                              <div className="product-title">
                                <Link to="/">
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
                                <span className="sale-price">{convertMoney(item.dongia)}</span>
                              </div>
                              <div className="product-stock">
                                <i className="fa fa-check-square-o" aria-hidden="true" />In stock
                              </div>
                              <div className="product-description">
                                <Markup content={item.mota} />
                              </div>
                              <div className="product-buttons" style={{ justifyContent: 'left' }}>
                                <button className="add-to-cart" style={{ border: 'none' }}>
                                  <i className="fa fa-shopping-basket" aria-hidden="true" onClick={() => dispatch(addToCart(item, 1))} />
                                  <span>Thêm vào giỏ hàng</span>
                                </button>
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
        <Pagination
          total={countPageNumber(listProduct.links)}
          categoryId={params.id}
          next={listProduct.next_page_url}
          prev={listProduct.prev_page_url}
          currentPage={params.page}
        />

      </div>
    </>
  );
};

export default Product;