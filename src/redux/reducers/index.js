import { combineReducers } from "redux";
import productReducer from './product'
import categoryReducer from './category'
import cartReducer from './cart'
import userReducer from './user'
import billReducer from './bill'

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  user: userReducer,
  bill: billReducer
})

export default rootReducer