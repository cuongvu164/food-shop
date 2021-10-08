import React from 'react';

const BannerImage = () => {
  return (
    <>
      <div className="section banners-block">
        <div className="row margin-0">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-0">
            <div className="banner-item effect">
              <a href="/">
                <img className="img-responsive" src="img/banner/home1-banner-1.png" alt="Banner 1" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-0">
            <div className="banner-item effect">
              <a href="/">
                <img className="img-responsive" src="img/banner/home1-banner-2.png" alt="Banner 2" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-0">
            <div className="banner-item effect">
              <a href="/">
                <img className="img-responsive" src="img/banner/home1-banner-3.png" alt="Banner 3" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default BannerImage;