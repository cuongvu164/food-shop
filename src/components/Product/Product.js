import React, { useEffect, useState } from 'react';
import './product.scss'
import {
  Link,
  useParams,
  useHistory
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Markup } from 'interweave';
import { getProductPaginationResult, getProductByKeywordResult } from '../../redux/actions/product'
import { addToCart } from '../../redux/actions/cart'
import Pagination from '../Pagination/Pagination'
import convertMoney from '../convertMoney'

const Product = () => {
  const params = useParams()
  const history = useHistory()
  // console.log("🚀 ~ file: Product.js ~ line 15 ~ Product ~ params", params.page)
  const dispatch = useDispatch()
  let user = useSelector(state => state.user)
  let listProduct = useSelector(state => state.product.products)
  // console.log('listProduct123------', listProduct.data)

  const [products, setProducts] = useState(listProduct.data)

  const addProductToCart = (item) => {
    if (user?.isLogin) {
      dispatch(addToCart(item,1))
    } else {
      alert('Bạn cần phải đăng nhập')
     history.push('/login')
    }
  }

  const sortByPrice = (e) => {
    const sort = e.target.value
    console.log('sortasd', sort)
    if (sort === 'low') {
      let sortByPrice = listProduct.data?.sort((a, b) => a.dongia - b.dongia)
      setProducts(sortByPrice)
      // return sortByPrice
    } else if (sort === 'high') {
      let sortByPrice = listProduct.data?.sort((a, b) => b.dongia - a.dongia)
      setProducts(sortByPrice)
      // return sortByPrice
    }
  }

  const countPageNumber = array => {
    const count = array?.slice(1, array.length - 1)
    return count?.length
  }
  console.log('param id', params.id)
  useEffect(() => {
    if (params.id > 0) {
      dispatch(getProductPaginationResult(params.id, params.page))
    }
    if (params?.keyword != undefined) {
      dispatch(getProductByKeywordResult(params.keyword, params.page))
    }
    // else {
    //   dispatch(getProductPaginationResult(1, 1))
    //   // setProducts(listProduct.data)
    // }
    // if (params.keyword !== '') {
    //   dispatch(getProductByKeywordResult(params.keyword))
    // }
  }, [params.id, params.keyword, params])

  useEffect(() => {
    if (!params.id && params.keyword == undefined) {
      // params.id = 1
      dispatch(getProductPaginationResult(1, 1))
    }
    if (params.id > 0) {
      dispatch(getProductPaginationResult(params.id, params.page))
    }
  }, [params.id])

  // useEffect(() => {
  //   dispatch(getProductPaginationResult(1, 1))
  // },[])

  // useEffect(() => {
  //   setProducts(listProduct.data)
  // }, [listProduct.data])

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
              </div>
              <div className="col-md-6 col-xs-6">
                <div className="filter-bar">
                  <form action="#" className="pull-right">
                    <div className="select">
                      <select className="form-control" onChange={(event) => sortByPrice(event)}>
                        <option value>Sort By</option>
                        <option value="low">Price: Lowest first</option>
                        <option value="high">Price: Highest first</option>
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
                              <div className="add-to-cart" onClick={() => addProductToCart(item)}>
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
          keyword={params.keyword}
        />

      </div>
    </>
  );
};

export default Product;