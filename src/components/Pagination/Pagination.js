import React, { useState, useEffect } from 'react';
import './pagination.scss'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
  const pageNumber = []
  const [pagination, setPagination] = useState(null)

  const splitStringURL = string => {
    if (string != null) {
      var newString = string?.split('=')
      return parseInt(newString[1])
    }
    return 1
  }

  const numberPages = number => {
    for (let i = 1; i <= number; i++) {
      pageNumber.push(i)
    }
  }
  numberPages(props.total)
  // console.log('pagination', pagination)
  // console.log('pageNumber', pageNumber)

  useEffect(() => {
    props.currentPage ? setPagination(props.currentPage) : setPagination(1)
  }, [props.currentPage])
  return (
    <>
      <div className="pagination-bar">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="pagination">
              <ul className="page-list">
                <li >
                  <Link
                    to={`/product/category/${props.categoryId}/page=${splitStringURL(props.prev)}`}
                    className={parseInt(pagination) === 1 ? 'prev disabled' : 'prev'}
                    onClick={() => setPagination(pagination - 1)}
                  >
                    Previous
                  </Link>
                </li>
                {
                  pageNumber.map((item, index) => {
                    // console.log('pagination--------2', pagination)
                    return (
                      <li key={index}>
                        <Link
                          to={`/product/category/${props.categoryId}/page=${item}`}
                          className={parseInt(pagination) === index + 1 ? 'current' : ''}
                          onClick={() => setPagination(item)}
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  })
                }
                <li>
                  <Link
                    to={`/product/category/${props.categoryId}/page=${splitStringURL(props.next)}`}
                    className={parseInt(pagination) === parseInt(pageNumber.length) ? 'next disabled' : 'next'}
                    onClick={() => setPagination(pagination + 1)}
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;