import React from 'react';
import Banner from '../../components/Banner/Banner'
import SideBar from '../../components/SideBar/SideBar'
import Product from '../../components/Product/Product'

const ProductPage = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row">
          <SideBar/>
          <Product/>
        </div>
      </div>
    </>
  );
};

export default ProductPage;