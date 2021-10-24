import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import { useSelector } from 'react-redux'

const { TabPane } = Tabs;

const Profile = () => {
  const user = useSelector(state => state.user.currentUser)
  console.log('user------', user)

  return (
    <div className="container">
      <div className="row">
        <Tabs tabPosition='left'>
          <TabPane tab="Hồ sơ của tôi" key="1">
            <ul>
              <li><span style={{fontWeight: 600}}>Họ và tên:</span> {user[0]?.ten}</li>
              <li><span style={{fontWeight: 600}}>Địa chỉ:</span> {user[0]?.diachi}</li>
              <li><span style={{fontWeight: 600}}>Email:</span> {user[0]?.email}</li>
              <li><span style={{fontWeight: 600}}>Số điện thoại:</span> {user[0]?.sdt}</li>
            </ul>
          </TabPane>
          <TabPane tab="Lịch sử mua hàng" key="2">
            Content of Tab 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;