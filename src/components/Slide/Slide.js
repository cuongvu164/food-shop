import React from 'react';

const Slide = () => {
  return (
    <div>
      <div className="section slideshow">
        <div className="tiva-slideshow-wrapper">
          <div id="tiva-slideshow" className="nivoSlider">
            <a href="/">
              <img className="img-responsive" src="/img/slideshow/home1-slideshow-1.jpg" alt="Slideshow_Image" />
            </a>
            <a href="/">
              <img className="img-responsive" src="img/slideshow/home1-slideshow-2.jpg" alt="Slideshow_Image" />
            </a>
            <a href="/">
              <img className="img-responsive" src="img/slideshow/home1-slideshow-3.jpg" alt="Slideshow_Image" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Slide;