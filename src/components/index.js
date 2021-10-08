import React from 'react';
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Slide from './Slide/Slide'
import Footer from './Footer/Footer'
import Intro from './Intro/Intro'
import TabNav from './TabNav/TabNav'
import BannerImage from './Banner/BannerImage'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import IntroYourself from './Intro/IntroYourself'

const Components = () => {
  return (
    <>
      <ScrollToTop/>
        <div id="all">
          {/* <header id="header"> */}
          <Header />
          <div id="content" className="site-content">
            <Navbar />
            <Slide />
            <Intro />
            <TabNav />
            <BannerImage />
            <IntroYourself/>
          </div>
          <Footer />
          {/* </header> */}

        </div>
    </>
  );
};

export default Components;