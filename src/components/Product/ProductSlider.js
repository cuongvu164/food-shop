import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';


const ProductSlider = () => {
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
              <SwiperSlide style={styleSwiper}>
                <div className="product-item">
                  <div className="product-image">
                    <a href="product-detail-left-sidebar.html">
                      <img src="img/product/4.jpg" alt="ProductImage" style={{ display: "block", width: "100%" }} />
                    </a>
                  </div>
                  <div className="product-title">
                    <a href="product-detail-left-sidebar.html">
                      Organic Strawberry Fruits
                    </a>
                  </div>
                  <div className="product-rating">
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star" />
                  </div>
                  <div className="product-price">
                    <span className="sale-price">$80.00</span>
                    <span className="base-price">$90.00</span>
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
              <SwiperSlide style={styleSwiper}>
                <div className="product-item">
                  <div className="product-image">
                    <a href="product-detail-left-sidebar.html">
                      <img src="img/product/8.jpg" alt="Product Image" style={{ display: "block", width: "100%" }} />
                    </a>
                  </div>
                  <div className="product-title">
                    <a href="product-detail-left-sidebar.html">
                      Organic Strawberry Fruits
                    </a>
                  </div>
                  <div className="product-rating">
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on " />
                    <div className="star on" />
                    <div className="star" />
                  </div>
                  <div className="product-price">
                    <span className="sale-price">$120.00</span>
                  </div>
                  <div className="product-buttons">
                    <a className="add-to-cart" href="#">
                      <i className="fa fa-shopping-basket" aria-hidden="true" />
                    </a>
                    <a className="quickview" href="#">
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={styleSwiper}>
                <div className="product-item">
                  <div className="product-image">
                    <a href="product-detail-left-sidebar.html">
                      <img src="img/product/9.jpg" alt="Product Image" style={{ display: "block", width: "100%" }} />
                    </a>
                  </div>
                  <div className="product-title">
                    <a href="product-detail-left-sidebar.html">
                      Organic Strawberry Fruits
                    </a>
                  </div>
                  <div className="product-rating">
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on " />
                    <div className="star on" />
                    <div className="star on" />
                  </div>
                  <div className="product-price">
                    <span className="sale-price">$80.00</span>
                    <span className="base-price">$90.00</span>
                  </div>
                  <div className="product-buttons">
                    <a className="add-to-cart" href="#">
                      <i className="fa fa-shopping-basket" aria-hidden="true" />
                    </a>
                    <a className="quickview" href="#">
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={styleSwiper}>
                <div className="product-item">
                  <div className="product-image">
                    <a href="product-detail-left-sidebar.html">
                      <img src="img/product/10.jpg" alt="Product Image" style={{ display: "block", width: "100%" }} />
                    </a>
                  </div>
                  <div className="product-title">
                    <a href="product-detail-left-sidebar.html">
                      Organic Strawberry Fruits
                    </a>
                  </div>
                  <div className="product-rating">
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on " />
                    <div className="star on" />
                    <div className="star" />
                  </div>
                  <div className="product-price">
                    <span className="sale-price">$96.00</span>
                  </div>
                  <div className="product-buttons">
                    <a className="add-to-cart" href="#">
                      <i className="fa fa-shopping-basket" aria-hidden="true" />
                    </a>
                    <a className="quickview" href="#">
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={styleSwiper}>
                <div className="product-item">
                  <div className="product-image">
                    <a href="product-detail-left-sidebar.html">
                      <img src="img/product/33.jpg" alt="Product Image" style={{ display: "block", width: "100%" }} />
                    </a>
                  </div>
                  <div className="product-title">
                    <a href="product-detail-left-sidebar.html">
                      Organic Strawberry Fruits
                    </a>
                  </div>
                  <div className="product-rating">
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on " />
                    <div className="star on" />
                    <div className="star" />
                  </div>
                  <div className="product-price">
                    <span className="sale-price">$80.00</span>
                    <span className="base-price">$90.00</span>
                  </div>
                  <div className="product-buttons">
                    <a className="add-to-cart" href="#">
                      <i className="fa fa-shopping-basket" aria-hidden="true" />
                    </a>
                    <a className="quickview" href="#">
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={styleSwiper}>
                <div className="product-item">
                  <div className="product-image">
                    <a href="product-detail-left-sidebar.html">
                      <img src="img/product/5.jpg" alt="Product Image" style={{ display: "block", width: "100%" }} />
                    </a>
                  </div>
                  <div className="product-title">
                    <a href="product-detail-left-sidebar.html">
                      Organic Strawberry Fruits
                    </a>
                  </div>
                  <div className="product-rating">
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on " />
                    <div className="star on" />
                    <div className="star" />
                  </div>
                  <div className="product-price">
                    <span className="sale-price">$80.00</span>
                    <span className="base-price">$90.00</span>
                  </div>
                  <div className="product-buttons">
                    <a className="add-to-cart" href="#">
                      <i className="fa fa-shopping-basket" aria-hidden="true" />
                    </a>
                    <a className="quickview" href="#">
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={styleSwiper}>
                <div className="product-item">
                  <div className="product-image">
                    <a href="product-detail-left-sidebar.html">
                      <img src="img/product/6.jpg" alt="Product Image" style={{ display: "block", width: "100%" }} />
                    </a>
                  </div>
                  <div className="product-title">
                    <a href="product-detail-left-sidebar.html">
                      Organic Strawberry Fruits
                    </a>
                  </div>
                  <div className="product-rating">
                    <div className="star on" />
                    <div className="star on" />
                    <div className="star on " />
                    <div className="star on" />
                    <div className="star" />
                  </div>
                  <div className="product-price">
                    <span className="sale-price">$80.00</span>
                    <span className="base-price">$90.00</span>
                  </div>
                  <div className="product-buttons">
                    <a className="add-to-cart" href="#">
                      <i className="fa fa-shopping-basket" aria-hidden="true" />
                    </a>
                    <a className="quickview" href="#">
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

      </div>

    </>
  );
};

export default ProductSlider;