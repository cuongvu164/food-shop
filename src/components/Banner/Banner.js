import React from 'react';

const Banner = () => {
  return (
    <>
      <div id="breadcrumb">
        <div className="container">
          <h2 className="title">Our Blog</h2>
          <ul className="breadcrumb">
            <li><a href="/" title="Home">Home</a></li>
            <li><span>Our Blog</span></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;