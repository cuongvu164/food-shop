import { REGISTER_USER, LOGIN_USER, GET_USER, GET_ALL_USER, LOGOUT_USER, EDIT_USER } from '../actionTypes'
import { message } from 'antd';
const key = 'updatable';

// const user = JSON.parse(localStorage.getItem('user'));
const userInLogged = JSON.parse(localStorage.getItem('userLoginFood'))
// const initialState = {
//   user: [],
//   currentUser: [],
//   isLogin: false
// }

const initialLoginUser = {
  user: [],
  currentUser: [],
  isLogin: false
}
const initialState = userInLogged ? userInLogged : initialLoginUser


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        user: action.payload.data,
        // currentUser: action.user.data
      }
    case GET_USER:
      return {
        ...state,
        user: action.email.data,
        // currentUser: action.email.data
      }

    case REGISTER_USER:
      const { payload } = action
      message.loading({ content: 'Đang xử lý...', key });
      setTimeout(() => {
        message.success({ content: 'Đăng ký thành công', key, duration: 2 });
      }, 1000);
      const newUser = [...state.user];
      newUser.push(payload.data);
      return {
        ...state,
        user: newUser
      }

    case EDIT_USER:
      console.log('action Edit currentUser------', state)
      const editUserLogin = {
        currentUser: action.user.data,
        isLogin: true
      }
      localStorage.setItem('userLoginFood', JSON.stringify(editUserLogin))
      return {
        ...state,
        currentUser: action.user.data,
      }

    case LOGIN_USER:
      console.log('action currentUser------', state)
      const userLogin = {
        currentUser: action.user.data,
        isLogin: true
      }
      localStorage.setItem('userLoginFood', JSON.stringify(userLogin))
      return {
        ...state,
        currentUser: action.user.data,
        isLogin: true
      }

    case LOGOUT_USER:
      const userLogout = {
        currentUser: [],
        isLogin: false
      }
      localStorage.setItem('userLoginFood', JSON.stringify(userLogout))
      localStorage.removeItem('cartFood')
      return {
        ...state,
        currentUser: [],
        isLogin: false
      }


    default: return state
  }
}

export default userReducer