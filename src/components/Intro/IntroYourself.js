import React from 'react';

const IntroYourself = () => {
  const styleName = {
    textTransform: "capitalize"
  }
  return (
    <>
      <div className="section testimonial">
        <div className="container">
          <div className="row">
            <div className="testimonial-wrap owl-theme owl-carousel">
              <div className="item">
                <div className="image"><img src="img/avtsmile.jpg" alt="avatar" /></div>
                <div className="content"><i className="fa fa-quote-left" aria-hidden="true" /> Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit .”</div>
                <div className="name" style={styleName}>Cường Cuội</div>
                <div className="job">C.E.O</div>
              </div>
              <div className="item">
                <div className="image"><img src="img/testimonial-2.png" alt="avatar" /></div>
                <div className="content"><i className="fa fa-quote-left" aria-hidden="true" /> Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit .”</div>
                <div className="name" style={styleName}>Trí Phạm</div>
                <div className="job">Coder</div>
              </div>
              <div className="item">
                <div className="image"><img src="img/testimonial-3.png" alt="avatar" /></div>
                <div className="content"><i className="fa fa-quote-left" aria-hidden="true" /> Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit .”</div>
                <div className="name" style={styleName}>Cao Quyền</div>
                <div className="job">Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default IntroYourself;