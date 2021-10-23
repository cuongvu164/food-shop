import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductResult } from '../../redux/actions/product'
import  convertMoney  from '../convertMoney'

const ProductSlider = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  console.log("🚀 ~ file: ProductSlider.js ~ line 11 ~ ProductSlider ~ products", products)

  useEffect(() => {
    dispatch(getProductResult())
  }, [dispatch])

  const styleSwiper = {
    width: '182.167px',
    marginRight: '30px'
  }
  return (
    <>
      <div className="tab-content">
        {/* All Products */}
        <div role="tabpanel" className="tab-pane fade in active" id="all-products">
          <div className="products owl-theme">
            <Swiper
              spaceBetween={15}
              slidesPerView={6}
            >
              {
                products.data?.map((item, index) => {
                  return (
                    <SwiperSlide style={styleSwiper} key={index}>
                      <div className="product-item">
                        <div className="product-image">
                          <Link to={`/product/${item.id}`}>
                            <img src={process.env.REACT_APP_URL + item.anh} alt="ProductImage" style={{ display: "block", width: "100%" }} />
                          </Link>
                        </div>
                        <div className="product-title">
                          <Link to={`/product/${item.id}`}>
                            {item.ten}
                          </Link>
                        </div>
                        <div className="product-rating">
                          <div className="star on" />
                          <div className="star on" />
                          <div className="star on" />
                          <div className="star on" />
                          <div className="star" />
                        </div>
                        <div className="product-price">
                          <span className="sale-price">{convertMoney(item.dongia)}</span>
                        </div>
                        <div className="product-buttons">
                          <a className="add-to-cart" href="/">
                            <i className="fa fa-shopping-basket" aria-hidden="true" />
                          </a>
                          <a className="quick-view" href="/">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }

              
            </Swiper>
          </div>
        </div>

      </div>

    </>
  );
};

export default ProductSlider;