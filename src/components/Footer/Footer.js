import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="block text">
                    <div className="block-content">
                      <a href="index.html" className="logo-footer">
                        <img src="/img/logo-2.png" alt="Logo" />
                      </a>
                      <div className="contact">
                        <div className="item d-flex">
                          <div className="item-left">
                            <i className="zmdi zmdi-home" />
                          </div>
                          <div className="item-right">
                            <span>11 Phố 1, Mạo Khê, Đông Triều, Quảng Ninh</span>
                          </div>
                        </div>
                        <div className="item d-flex">
                          <div className="item-left">
                            <i className="zmdi zmdi-phone-in-talk" />
                          </div>
                          <div className="item-right">
                            <span>0789-376-769</span>
                          </div>
                        </div>
                        <div className="item d-flex">
                          <div className="item-left">
                            <i className="zmdi zmdi-email" />
                          </div>
                          <div className="item-right">
                            <span><a href="mailto:support@domain.com">cuongmk288@gmail.com</a></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="block instagram">
                    <h2 className="block-title">Photo Instagram</h2>
                    <div className="block-content">
                      <div className="row margin-0">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-1.png" alt="InstagramImage" />
                          </a>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-2.png" alt="InstagramImage" />
                          </a>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-3.png" alt="InstagramImage" />
                          </a>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-4.png" alt="InstagramImage" />
                          </a>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-5.png" alt="InstagramImage" />
                          </a>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-6.png" alt="InstagramImage" />
                          </a>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-7.png" alt="InstagramImage" />
                          </a>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding-0">
                          <a href="/">
                            <img src="/img/instagram-8.png" alt="InstagramImage" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="block newsletter">
                    <h2 className="block-title">Newsletter</h2>
                    <div className="block-content">
                      <p className="description">Sign up for newsletter to receive special offers and exclusive news about FreshMart products</p>
                      <form action="#" method="post">
                        <input type="text" placeholder="Enter Your Email" />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                      </form>
                    </div>
                  </div>
                  <div className="block social">
                    <h2 className="block-title">Follow Us</h2>
                    <div className="block-content">
                      <ul>
                        <li><a href="https://www.facebook.com/ariescuong20/"><i className="zmdi zmdi-facebook" /></a></li>
                        <li><a href="/"><i className="zmdi zmdi-twitter" /></a></li>
                        <li><a href="/"><i className="zmdi zmdi-dribbble" /></a></li>
                        <li><a href="/"><i className="zmdi zmdi-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="payment-intro">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="item d-flex">
                      <div className="item-left">
                        <img src="/img/home1-payment-1.png" alt="Payment Intro" />
                      </div>
                      <div className="item-right">
                        <h3 className="title">Free Shipping item</h3>
                        <div className="content">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="item d-flex">
                      <div className="item-left">
                        <img src="/img/home1-payment-2.png" alt="Payment Intro" />
                      </div>
                      <div className="item-right">
                        <h3 className="title">Secured Payment</h3>
                        <div className="content">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="item d-flex">
                      <div className="item-left">
                        <img src="/img/home1-payment-3.png" alt="Payment Intro" />
                      </div>
                      <div className="item-right">
                        <h3 className="title">Money Back Guarantee</h3>
                        <div className="content">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                <div className="copyright"><a href="/">Templates Hub</a></div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 align-right">
                <div className="payment">
                  <span>Payment Accept</span>
                  <img src="/img/payment.png" alt="Payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;