import React from 'react';
import {Link} from 'react-router-dom'

const Banner = (props) => {
  return (
    <>
      <div id="breadcrumb">
        <div className="container">
          <h2 className="title">{props.title}</h2>
          <ul className="breadcrumb">
            <li><Link to="/" title="Home">Home</Link></li>
            <li><span>{props.title}</span></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;