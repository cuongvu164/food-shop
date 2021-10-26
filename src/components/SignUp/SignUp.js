import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import {
  useHistory
} from "react-router-dom";
import { registerUserAPI, getAllUserResult } from '../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css'
import md5 from '../md5'

const SignUp = () => {
  const user = useSelector(state => state.user.user)
  console.log('user------', user)
  const dispatch = useDispatch()

  const [form] = Form.useForm()
  let history = useHistory()

  useEffect(() => {
    dispatch(getAllUserResult())
  }, [dispatch])

  const styleSize = {
    paddingLeft: '47px',
    display: 'flex',
    color: 'black',
    fontSize: '30px',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '9px'
  }

  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 5,
    },
  };

  const tailLayoutSignUp = {
    wrapperCol: {
      offset: 12,
      span: 5,
    },
  };

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 5,
    },
  };

  const onFinish = async (values) => {
    const loaitaikhoan = 1
    const newData = { ...values, loaitaikhoan }
    console.log('test newdata', newData)
    let emailUser = user.filter(item => item.email === newData.email)
    console.log("🚀 ~ file: SignUp.js ~ line 60 ~ onFinish ~ emailUser", emailUser)
    // dispatch(getUserByEmailResult(newData.Email))

    if (user.length === 0 || emailUser.length === 0) {
      dispatch(registerUserAPI(newData))
      setTimeout(() => {
        // history.push('/login')
      }, 3000)
    } else {
      alert('Email đăng kí đã sử dụng. Vui lòng thử lại')
    }
  }

  const submitForm = async () => {
    const payload = await form.getFieldValue()

    console.log('payload Sign Up', payload)

  }

  const validatePhoneNum = (rule, value) => {
    const regex = /[^0-9]/g
    const match = regex.test(value)
    if (match) {
      return Promise.reject('Số điện thoại chỉ được nhập từ 0-9')
    }
    return Promise.resolve()
  }

  const validateEmail = (rule, value) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const match = regex.test(value)
    if (!match) {
      return Promise.reject('Phải nhập đúng định dạng Email')
    }
    return Promise.resolve()
  }
  return (
    <>
      <span style={styleSize}>ĐĂNG KÝ</span>
      <Form
        {...layout}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onSubmit={submitForm}
      >
        <Form.Item {...tailLayout}
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { validator: validateEmail },
            { message: 'Phải nhập đúng định dạng Email' }
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="matkhau"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="ten"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Họ tên" />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="diachi"
          rules={[
            {
              required: true,
              message: 'Please input your Address!',
            },
          ]}
        >
          <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Địa chỉ" />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="sdt"
          rules={[
            { required: true, message: 'Please input your PhoneNumber!' },
            { validator: validatePhoneNum },
            { max: 10, message: 'Chỉ được nhập 10 số' }
          ]}
        >
          <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Số điện thoại" />
        </Form.Item>

        <Form.Item {...tailLayoutSignUp}>
          <Button type="primary" htmlType="submit" className="login-form-button" onSubmit={submitForm} style={{ backgroundColor: '#78b144', borderColor: '#78b144' }}>
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SignUp