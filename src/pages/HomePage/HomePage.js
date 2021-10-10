import React from 'react';
import Slide from '../../components/Slide/Slide'
import Intro from '../../components/Intro/Intro'
import TabNav from '../../components/TabNav/TabNav'
import BannerImage from '../../components/Banner/BannerImage'
import IntroYourself from '../../components/Intro/IntroYourself'

const HomePage = () => {

  return (
    <>
      <Slide />
      <Intro />
      <TabNav />
      <BannerImage />
      <IntroYourself />
    </>
  );
};

export default HomePage;