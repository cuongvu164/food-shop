import React from 'react';
import convertMoney from '../convertMoney';
import { Tag } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

const PurchaseHistory = (props) => {
  // var elements = props.bill.details;
  const bills = props.bill.details;
  // bills.push(elements)
  // const bills = [props.bill]
  // console.log('bill details', bills);

  return (
    <>
      <div className="panel-body">
        <div className="status-order" style={{marginBottom: '15px'}}>
          <span>Trạng thái đơn hàng:
            {
              props.bill.loaidon === 3
                ? <Tag icon={<ClockCircleOutlined />} color="error" style={{marginLeft: '5px'}}>Đang chờ</Tag>
                : <Tag icon={<CheckCircleOutlined />} color="success">Thành công</Tag>
            }
          </span>
        </div>
        <table className="cart-summary table table-bordered">
          <thead>
            <tr>
              <th className="width-80 text-center">Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th className="width-100 text-center">Đơn giá</th>
              <th className="width-100 text-center">Số lượng</th>
              <th className="width-100 text-center">Tổng</th>
            </tr>
          </thead>
          <tbody>
            {
              bills.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <a href="product-detail-left-sidebar.html">
                        <img width={80} alt="Product_Image" className="img-responsive" src={process.env.REACT_APP_URL + item.product.anh} />
                      </a>
                    </td>
                    <td>
                      <a href="product-detail-left-sidebar.html" className="product-name">{item.product.ten}</a>
                    </td>
                    <td className="text-center">
                      {convertMoney(item.dongia)}
                    </td>
                    <td className="text-center">
                      {item.soluong}
                    </td>
                    <td className="text-center">
                      {convertMoney(item.dongia * item.soluong)}
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
        <h4 className="heading-primary">Tổng cộng</h4>
        <table className="table cart-total">
          <tbody>
            <tr>
              <th>
                Vận chuyển
              </th>
              <td>
                Miễn phí vận chuyển
              </td>
            </tr>
            <tr>
              <th>
                <strong>Tổng tiền</strong>
              </th>
              <td className="total">
                {convertMoney(props.bill.tongtien)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PurchaseHistory;