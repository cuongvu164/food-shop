import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryResult } from '../../redux/actions/category'

const SideBar = () => {
  const dispatch = useDispatch()
  const listCategory = useSelector(state => state.category.categorys)
  console.log('listCategory-----', listCategory)

  const convertArrayByParentID = (arr, id) => {
    const newArrayParent = arr
      .filter(item => item.cha === id)
      .map(item => {
        // const children = convertArrayByParentID(arr, item.id);
        return {
          ...item,
        }
      })
    console.log(id, newArrayParent);
    return newArrayParent
  }

  const convertArrayByChildrenID = (arr, id) => {
    const newArrayChildren = arr
      .filter(item => item.cha !== id)
      .map(item => {
        // const children = convertArrayByParentID(arr, item.id);
        return {
          ...item,
        }
      })
    console.log('newArrayChildren-------', newArrayChildren);
    return newArrayChildren
  }

  const newListProductParents = convertArrayByParentID(listCategory, null)
  // console.log('arrayAfterConvert-------', newListProductParents)
  const newArrayChildren = convertArrayByChildrenID(listCategory, null)
  // console.log('arrayAfterConvertChildren-------', newArrayChildren)

  useEffect(() => {
    dispatch(getCategoryResult())
  }, [dispatch])

  return (
    <>
      <div id="left-column" className="sidebar col-lg-3 col-md-3 col-sm-3 col-xs-12">
        {/* Block - Product Categories */}
        <div className="block product-categories">
          <h3 className="block-title">Categories</h3>
          <div className="block-content">
            {
              newListProductParents.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <span className="arrow collapsed" data-toggle="collapse" data-target={'#' + item.id} aria-expanded="false" role="button">
                      <i className="zmdi zmdi-minus" />
                      <i className="zmdi zmdi-plus" />
                    </span>
                    <Link className="category-title" to={`/product/category/${item.id}`}>{item.ten}</Link>
                    <div className="sub-category collapse" id={item.id} role="main">
                      {
                        newArrayChildren.map((itemChild, index) => {
                          return (
                            item.id === itemChild.cha ?
                              <div className="item" key={index}>
                                <Link to={`/product/category/${itemChild.id}`}>{itemChild.ten}</Link>
                              </div>
                              : false
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </>
  );
};

export default SideBar;