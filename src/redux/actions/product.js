import callAPI from '../../callAPI/callAPI'
import { GET_ALL_PRODUCT, GET_PRODUCT_CATEGORY_ID, GET_PRODUCT_ID, GET_PRODUCT_PAGINATION, SEARCH_PRODUCTS } from '../actionTypes'

export const getProduct = payload => {
  return {
    type: GET_ALL_PRODUCT,
    payload
  }
}

export const getProductResult = () => {
  return dispatch => {
    return callAPI('product', 'GET', null)
      .then(response => {
        dispatch(getProduct(response))
      })
  }
}

export const getProductCategoryByID = id => {
  return {
    type: GET_PRODUCT_CATEGORY_ID,
    id
  }
}

export const getProductCategoryByIDResult = id => {
  return dispatch => {
    return callAPI(`product/category/${id}`, 'GET', null)
      .then(response => {
        dispatch(getProductCategoryByID(response))
      })
  }
}

export const getProductByID = id => {
  return {
    type: GET_PRODUCT_ID,
    id
  }
}

export const getProductByIDResult = id => {
  return dispatch => {
    return callAPI(`product/${id}`, 'GET', null)
      .then(response => {
        dispatch(getProductByID(response))
      })
  }
}

export const getProductPagination = (id) => {
  return {
    type: GET_PRODUCT_PAGINATION,
    id
  }
}

export const getProductPaginationResult = (id, pageNumber) => {
  return dispatch => {
    return callAPI(`product/category/${id}?page=${pageNumber}`, 'GET', null)
      .then(response => {
        dispatch(getProductPagination(response))
      })
  }
}

export const getProductByKeyword = payload => {
  return {
    type: SEARCH_PRODUCTS,
    payload
  }
}

export const getProductByKeywordResult = (keyword,pageNumber) => {
  return dispatch => {
    return callAPI(`product/search/${keyword}?page=${pageNumber}`, 'GET', null)
      .then(response => {
        dispatch(getProductByKeyword(response))
      })
  }
}