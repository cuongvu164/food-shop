import { ADD_TO_CART, UPDATE_TO_CART, DELETE_TO_CART, CART_COMPLETE } from '../actionTypes'

export const addToCart = (listProduct, quantity) => {
  return {
    type: ADD_TO_CART,
    listProduct,
    quantity
  }
}

export const updateToCart = (listProduct, quantity) => {
  return {
    type: UPDATE_TO_CART,
    listProduct,
    quantity
  }
}

export const deleteToCart = (listProduct) => {
  return {
    type: DELETE_TO_CART,
    listProduct
  }
}

export const cartComplete = () => {
  return {
    type: CART_COMPLETE
  }
}