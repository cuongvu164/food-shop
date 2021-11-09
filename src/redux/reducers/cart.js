import { ADD_TO_CART, UPDATE_TO_CART, DELETE_TO_CART, CART_COMPLETE } from '../actionTypes'

const cartFood = JSON.parse(localStorage.getItem('cartFood'));

const initialState = cartFood ? cartFood : []

const findIndex = (cartFood, product) => {
  console.log('sizeasasdasd', cartFood)
  var index = -1
  if (cartFood.length > 0) {
    for (let i = 0; i < cartFood.length; i++) {
      console.log('cart[i].listProduct.Size-----', cartFood.length)

      if (cartFood[i].listProduct.id === product.id) {
        console.log('index trong function', index)
        index = i
        break
      }
    }
  } else {
    index = -1
  }
  return index
}

const cartReducer = (state = initialState, action) => {
  const { listProduct, quantity } = action
  // console.log('action cart', action)

  switch (action.type) {
    case ADD_TO_CART:
      // console.log('action add_to cart-----', state)
      // console.log('action add_to cart2-----', listProduct)

      var index = findIndex(state, listProduct)
      // console.log('index add to cart-----', index)

      if (index !== -1) {
        state[index].quantity += action.quantity
      } else {
        state.push({
          listProduct,
          quantity
        })
      }
      localStorage.setItem('cartFood', JSON.stringify(state))
      return [...state]

    case UPDATE_TO_CART:
      // console.log('action add_to cart update-----', state)
      // console.log('action add_to cart update2-----', size)
      // console.log('action add_to cart update3-----', listProduct)

      index = findIndex(state, listProduct)
      console.log('index updateToCart', index)

      state[index].quantity = action.quantity
      // console.log('state[index].quantity = quantity', quantity)
      if (quantity <= 0) {
        state.splice(index, 1)
      }
      localStorage.setItem('cartFood', JSON.stringify(state))
      return [...state]

    case DELETE_TO_CART:
      // console.log('action delete_to cart update-----', state)
      // console.log('action delete_to cart update3-----', listProduct)

      index = findIndex(state, listProduct)
      // console.log('index deleteToCart', index)
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('cartFood', JSON.stringify(state))
      return [...state]
    case CART_COMPLETE:
      localStorage.removeItem('cartFood')
      state = [];
      return [...state]


    default: return state
  }
}

export default cartReducer