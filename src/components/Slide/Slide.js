import React from 'react';
import {
  Link
} from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'


const Slide = () => {
  return (
    <>
      {/* <div className="section slideshow"> */}
      {/* <div className="tiva-slideshow-wrapper"> */}
      {/* <div id="tiva-slideshow" className="nivoSlider"> */}
      <Carousel
        next={() => { }}
        prev={() => { }}
        navButtonsAlwaysVisible="true"
        autoPlay="true"
        animation="slide"
        interval="6000"
        swipe
      >
        <Paper>
          <Link to="/">
            <img className="img-responsive" src="/img/slideshow/home1-slideshow-1.jpg" alt="Slideshow_Image" />
          </Link>
        </Paper>
        <Paper>
          <Link to="/">
            <img className="img-responsive" src="img/slideshow/home1-slideshow-2.jpg" alt="Slideshow_Image" />
          </Link>
        </Paper>
        <Paper>
          <Link to="/">
            <img className="img-responsive" src="img/slideshow/home1-slideshow-3.jpg" alt="Slideshow_Image" />
          </Link>
        </Paper>
      </Carousel>

      {/* <Link to="/">
        <img className="img-responsive" src="img/slideshow/home1-slideshow-2.jpg" alt="Slideshow_Image" />
      </Link>
      <Link to="/">
        <img className="img-responsive" src="img/slideshow/home1-slideshow-3.jpg" alt="Slideshow_Image" />
      </Link> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

    </>
  );
};

export default Slide;