import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import PurchaseHistory from './PurchaseHistory'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchaseHistoryResult } from '../../redux/actions/bill'

const { TabPane } = Tabs;

const Profile = () => {
  const dispatch = useDispatch()
  let user = useSelector(state => state.user.currentUser)
  let purchaseHistory = useSelector(state => state.bill.order)
  console.log("purchaseHistory------", purchaseHistory.id_order)
  // console.log('user------profile', user[0]?.id)

  const totalMoney = (cart) => {
    const result = []

    cart.map(item => {
      const total = item.quantity * item.listProduct.dongia
      result.push(total)
      return true
    })
    return result.reduce((a, b) => a + b, 0)
  }
  const productDetails = purchaseHistory.id_order
  console.log("🚀 ~ file: Profile.js ~ line 28 ~ Profile ~ productDetails", productDetails)

  useEffect(() => {
    dispatch(getPurchaseHistoryResult(user[0]?.id))
  }, [])

  return (
    <div className="container">
      <div className="row">
        <Tabs tabPosition='left'>
          <TabPane tab="Hồ sơ của tôi" key="1">
            <ul>
              <li><span style={{ fontWeight: 600 }}>Họ và tên:</span> {user[0]?.ten}</li>
              <li><span style={{ fontWeight: 600 }}>Địa chỉ:</span> {user[0]?.diachi}</li>
              <li><span style={{ fontWeight: 600 }}>Email:</span> {user[0]?.email}</li>
              <li><span style={{ fontWeight: 600 }}>Số điện thoại:</span> {user[0]?.sdt}</li>
            </ul>
          </TabPane>
          <TabPane tab="Lịch sử mua hàng" key="2">
            {
              productDetails?.map((item, index) => {
                return (
                  <PurchaseHistory key={index} bill={item} />
                )
              })
            }
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;