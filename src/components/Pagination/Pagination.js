import React, { useState } from 'react';
import './pagination.scss'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
  const pageNumber = []
  const [pagination, setPagination] = useState(1)

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
  return (
    <>
      <div className="pagination-bar">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="text">Showing 1-12 of 20 item(s)</div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="pagination">
              <ul className="page-list">
                <li><Link
                  to={`/product/category/${props.categoryId}/page=${splitStringURL(props.prev)}`}
                  className={pagination === 1 ? 'prev disabled' : 'prev'}
                  // setPagination={splitStringURL(props.prev) != 1 ? splitStringURL(props.prev) : 1}
                >
                  Previous
                </Link>
                </li>
                {
                  pageNumber.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`/product/category/${props.categoryId}/page=${item}`}
                          className={pagination === index + 1 ? 'current' : ''}
                          onClick={() => setPagination(item)}
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  })
                }
                <li><Link
                  to={`/product/category/${props.categoryId}/page=${splitStringURL(props.next)}`}
                  className={pagination === pageNumber.length ? 'next disabled' : 'next'}
                  // setPagination={splitStringURL(props.next) == pageNumber.length ? 3 : splitStringURL(props.next)}
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