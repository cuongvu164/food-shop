import React, { useState } from 'react';
import './pagination.scss'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
  const pageNumber = []
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: props.total
  })

  const numberPages = number => {
    for (let i = 1; i <= number; i++) {
      pageNumber.push(i)
    }
  }
  numberPages(3)
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
                <li><Link to="#" className={pagination.currentPage === 1 ? 'prev disabled' : 'prev'}>Previous</Link></li>
                {
                  pageNumber.map((item, index) => {
                    return (
                      <li key={index}><Link to="#" className={pagination.currentPage === index + 1 ? 'current' : ''}>{item}</Link></li>
                    )
                  })
                }
                <li><Link to="#" className="next">Next</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;