import React, { useState } from 'react';

const ProductDetail = () => {
  const [activeImage, setActiveImage] = useState('img/product/2.jpg')

  const chooseImage = (e) => {
    setActiveImage(e.target.getAttribute('src'))
  }
  return (
    <>
      <div className="container">
        <div className="product-detail">
          <div className="products-block layout-5">
            <div className="product-item">
              <div className="product-title">
                Organic Strawberry Fruits
              </div>
              <div className="row">
                <div className="product-left col-md-5 col-sm-5 col-xs-12">
                  <div className="product-image vertical">
                    <div className="main-image">
                      <img className="img-responsive" src={activeImage} alt="Product_Image" />
                    </div>
                    <div className="thumb-images">
                      <img className="img-responsive" src="img/product/33.jpg" alt="Product_Image" onClick={(e) => chooseImage(e)}/>
                      <img className="img-responsive" src="img/product/3.jpg" alt="Product_Image" onClick={(e) => chooseImage(e)}/>
                      <img className="img-responsive" src="img/product/7.jpg" alt="Product_Image" onClick={(e) => chooseImage(e)}/>
                      <img className="img-responsive" src="img/product/30.jpg" alt="Product_Image" onClick={(e) => chooseImage(e)}/>
                    </div>
                  </div>
                </div>
                <div className="product-right col-md-7 col-sm-7 col-xs-12">
                  <div className="product-info">
                    <div className="product-price">
                      <span className="sale-price">$80.00</span>
                      <span className="base-price">$90.00</span>
                    </div>
                    <div className="product-stock">
                      <span className="availability">Availability: </span><i className="fa fa-check-square-o" aria-hidden="true" />In stock
                    </div>
                    <div className="product-short-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula.Nam gravida nulla in convallis condimentum.
                    </div>
                    <div className="product-variants border-bottom">
                      <div className="product-variants-item">
                        <span className="control-label">Size: </span>
                        <select>
                          <option value={1} title="S">S</option>
                          <option value={2} title="M">M</option>
                          <option value={3} title="L">L</option>
                          <option value={4} title="One size">One size</option>
                        </select>
                      </div>
                    </div>
                    <div className="product-add-to-cart border-bottom">
                      <div className="product-quantity">
                        <span className="control-label">Số lượng: </span>
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
                      <div className="product-buttons">
                        <a className="add-to-cart" href="#">
                          <i className="fa fa-shopping-basket" aria-hidden="true" />
                          <span>Add To Cart</span>
                        </a>
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
                        <span>Description</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Tab Content */}
                <div className="tab-content">
                  {/* Description */}
                  <div role="tabpanel" className="tab-pane fade in active" id="description">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="products-block related-products item-4">
          <div className="block-title">
            <h2 className="title">Related <span>Products</span></h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;