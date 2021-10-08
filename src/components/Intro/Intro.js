import React from 'react';

const Intro = () => {
  return (
    <>
      <div className="section intro">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="intro-header">
                <h3>Welcome To FreshMart</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="intro-left">
                <div className="intro-item">
                  <p><img src="img/intro-icon-1.png" alt="Intro_Image" /></p>
                  <h4>Luôn luôn tươi sạch</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="intro-item">
                  <p><img src="img/intro-icon-3.png" alt="Intro_Image" /></p>
                  <h4>Tốt cho sức khỏe</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="effect">
                <a href="/">
                  <img className="img-responsive" src="img/intro-1.png" alt="Intro_Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="intro-right">
                <div className="intro-item">
                  <p><img src="img/intro-icon-2.png" alt="Intro_Image" /></p>
                  <h4>100% Tự Nhiên</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="intro-item">
                  <p><img src="img/intro-icon-4.png" alt="Intro_Image" /></p>
                  <h4>Chất lượng tốt</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Intro;