import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryResult } from '../../redux/actions/category'

const SideBar = () => {
  const dispatch = useDispatch()
  const listCategory = useSelector(state => state.category.categorys)
  console.log('listCategory-----', listCategory)
  useEffect(() => {
    dispatch(getCategoryResult())
  }, [])

  return (
    <>
      <div id="left-column" className="sidebar col-lg-3 col-md-3 col-sm-3 col-xs-12">
        {/* Block - Product Categories */}
        <div className="block product-categories">
          <h3 className="block-title">Categories</h3>
          <div className="block-content">
            {
              listCategory.map((item, index) => {
                return (
                  item.cha === null ? 
                  <div className="item" key={index}>
                    <span className="arrow collapsed" data-toggle="collapse" data-target={'#'+item.id} aria-expanded="false" role="button">
                      <i className="zmdi zmdi-minus" />
                      <i className="zmdi zmdi-plus" />
                    </span>
                    <Link className="category-title" to="/">{item.ten}</Link>
                    <div className="sub-category collapse" id={item.id} role="main">
                      <div className="item">
                        <Link to="/">{item.ten}</Link>
                      </div>
                      <div className="item">
                        <Link to="/">Broccoli</Link>
                      </div>
                      <div className="item">
                        <Link to="/">Cabbage</Link>
                      </div>
                      <div className="item">
                        <Link to="/">Cucumber</Link>
                      </div>
                    </div> 
                  </div>
                  : false
                )
              })
            }

            {/* <div className="item">
              <span className="arrow collapsed" data-toggle="collapse" data-target="#fruits" aria-expanded="false" role="button">
                <i className="zmdi zmdi-minus" />
                <i className="zmdi zmdi-plus" />
              </span>
              <Link className="category-title" to="/">Fruits</Link>
              <div className="sub-category collapse" id="fruits" role="main">
                <div className="item">
                  <Link to="/">Orange</Link>
                </div>
                <div className="item">
                  <Link to="/">Apple</Link>
                </div>
                <div className="item">
                  <Link to="/">Banana</Link>
                </div>
                <div className="item">
                  <Link to="/">Strawberry</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <span className="arrow collapsed" data-toggle="collapse" data-target="#juices" aria-expanded="false" role="button">
                <i className="zmdi zmdi-minus" />
                <i className="zmdi zmdi-plus" />
              </span>
              <Link className="category-title" to="/">Juices</Link>
              <div className="sub-category collapse" id="juices" role="main">
                <div className="item">
                  <Link to="/">Orange Juices</Link>
                </div>
                <div className="item">
                  <Link to="/">Tomato Juices</Link>
                </div>
                <div className="item">
                  <Link to="/">Apple Juices</Link>
                </div>
                <div className="item">
                  <Link to="/">Peaches Juices</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <Link className="category-title" to="/">Tea and Coffee</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="/">Jam</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="/">SeaFood</Link>
            </div>
            <div className="item">
              <Link className="category-title" to="/">Fresh Meats</Link>
            </div> */}
          </div>
        </div>
      </div>

    </>
  );
};

export default SideBar;