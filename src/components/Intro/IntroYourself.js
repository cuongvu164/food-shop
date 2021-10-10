import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

const IntroYourself = () => {
  const styleName = {
    textTransform: "capitalize"
  }
  return (
    <>
      <div className="section testimonial">
        <div className="container">
          <div className="row">
            <div className="testimonial-wrap">
              <Carousel
                next={() => { }}
                prev={() => { }}
                navButtonsAlwaysVisible="true"
                autoPlay="true"
                animation="slide"
                interval="3000"
                swipe
              >
                <Paper>
                    <div className="item">
                      <div className="image"><img src="img/avtsmile.jpg" alt="avatar" /></div>
                      <div className="content"><i className="fa fa-quote-left" aria-hidden="true" /> Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit .”</div>
                      <div className="name" style={styleName}>Cường Cuội</div>
                      <div className="job">C.E.O</div>
                    </div>
                </Paper>
                <Paper>
                  <div className="item">
                    <div className="image"><img src="img/testimonial-2.png" alt="avatar" /></div>
                    <div className="content"><i className="fa fa-quote-left" aria-hidden="true" /> Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit .”</div>
                    <div className="name" style={styleName}>Trí Phạm</div>
                    <div className="job">Coder</div>
                  </div>
                </Paper>
                <Paper>
                  <div className="item">
                    <div className="image"><img src="img/testimonial-3.png" alt="avatar" /></div>
                    <div className="content"><i className="fa fa-quote-left" aria-hidden="true" /> Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit .”</div>
                    <div className="name" style={styleName}>Cao Quyền</div>
                    <div className="job">Marketing</div>
                  </div>
                </Paper>
              </Carousel>



            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default IntroYourself;