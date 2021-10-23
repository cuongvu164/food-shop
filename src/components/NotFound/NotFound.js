import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div id="content" className="site-content page-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 page-left">
              <div className="image">
                <img className="img-responsive" src="/img/404-left.png" alt="Image_404" />
              </div>
              <div className="title">We’re sorry — something has gone wrong on our end.</div>
              <div className="content">If difficulties persist, please contact the System Administrator of this site and report the error below.</div>
              <Link className="btn btn-primary" to="/"><i className="fa fa-home" aria-hidden="true" /><span>Back to homepage</span></Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 page-right">
              <div className="image">
                <img className="img-responsive" src="/img/404-right.jpg" alt="Image_404" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default NotFound;