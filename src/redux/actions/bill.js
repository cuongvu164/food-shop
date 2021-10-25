import callAPI from '../../callAPI/callAPI'
import { GET_ALL_BILL, GET_BILL_BY_CUSTOMER, ADD_BILL, ADD_BILL_DETAIL, GET_ALL_BILL_DETAIL, GET_BILL_DETAIL_BY_ID_BILL } from '../actionTypes'
import { message } from 'antd';

const key = 'updatable'

//Bill
export const getAllBill = payload => {
  return {
    type: GET_ALL_BILL,
    payload
  }
}

export const getAllBillResult = () => {
  return dispatch => {
    return callAPI(`bill`, 'GET', null)
      .then(response => {
        dispatch(getAllBill(response))
      })
  }
}

export const getBillByCustomer = id => {
  return {
    type: GET_BILL_BY_CUSTOMER,
    id
  }
}

export const getBillByCustomerResult = id => {
  return dispatch => {
    return callAPI(`bill/id-customer/${id}`, 'GET', null)
      .then(response => {
        dispatch(getBillByCustomer(response))
      })
  }
}

export const userAddBill = payload => {
  return {
    type: ADD_BILL,
    payload
  }
}

export const userAddBillAPI = bill => {
  return dispatch => {
    return callAPI('bill', 'POST', bill)
      .then(response => {
        dispatch(userAddBill(response))
      }).catch(error => {
        message.loading({ content: 'Đang xử lý...', key })

        setTimeout(() => {
          message.error({ content: 'Thanh toán không thành công !', key, duration: 2 })
        }, 1000);
      })
  }
}


//Add bill-detail
export const userAddBillDetail = payload => {
  return {
    type: ADD_BILL_DETAIL,
    payload
  }
}

export const userOrderDetailAPI = billDetail => {
  return dispatch => {
    return callAPI('bill-detail', 'POST', billDetail)
      .then(response => {
        dispatch(userAddBillDetail(response))
      })
  }
}

//Get information bill detail
export const getBillDetail = payload => {
  return {
    type: GET_ALL_BILL_DETAIL,
    payload
  }
}

export const getBillDetailResult = () => {
  return dispatch => {
    return callAPI('bill-detail', 'GET', null)
      .then(response => {
        dispatch(getBillDetail(response))
      })
  }
}

//Get information bill detail by id customer
export const getBillDetailByCustomer = id => {
  return {
    type: GET_BILL_DETAIL_BY_ID_BILL,
    id
  }
}

export const getBillDetailByCustomerResult = id => {
  return dispatch => {
    return callAPI(`bill-detail/id-bill/${id}`, 'GET', null)
      .then(response => {
        dispatch(getBillByCustomer(response))
      })
  }
}