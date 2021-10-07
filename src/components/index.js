import React from 'react';
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Slide from './Slide/Slide'
const Components = () => {
  return (
    <div id="all">
      {/* <header id="header"> */}
      <Header />
      <div id="content" className="site-content">
        <Navbar />
        <Slide />
      </div>
      {/* </header> */}

    </div>
  );
};

export default Components;