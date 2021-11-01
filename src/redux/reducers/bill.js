import { GET_ALL_BILL, GET_BILL_BY_CUSTOMER, ADD_BILL, ADD_BILL_DETAIL, GET_ALL_BILL_DETAIL, GET_BILL_DETAIL_BY_ID_BILL, GET_PURCHASE_HISTORY } from '../actionTypes'
import { message } from 'antd';
const key = 'updatable';

const initialState = {
  bill: [],
  billDetail: [],
  order: []
}

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BILL:
      return {
        ...state,
        bill: action.payload.data,
      }
    case GET_BILL_BY_CUSTOMER:
      return {
        ...state,
        bill: action.id.data
      }

    case ADD_BILL:
      const { payload } = action
      message.loading({ content: 'Đang xử lý...', key });
      setTimeout(() => {
        message.success({ content: 'Thanh toán thành công', key, duration: 2 });
      }, 1000);

      return {
        ...state,
        bill: payload.data
      }

    case ADD_BILL_DETAIL:
      return {
        ...state,
        billDetail: action.payload.data
      }
    case GET_ALL_BILL_DETAIL:
      return {
        ...state,
        billDetail: action.payload.data
      }

    case GET_BILL_DETAIL_BY_ID_BILL:
      return {
        ...state,
        order: action.id.data
      }
    
    case GET_PURCHASE_HISTORY:
      return {
        ...state,
        order: action.payload.data
      }


    default: return state
  }
}

export default billReducer