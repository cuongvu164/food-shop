import React from 'react';
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="login-page">
          <div className="login-form form">
            <div className="block-title">
              <h2 className="title"><span>Đăng nhập</span></h2>
            </div>
            <form action="#" method="post" encType="multipart/form-data">
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" />
              </div>
              <div className="form-group text-center">

                <div className="link">
                  <span>Nếu bạn chưa có tài khoản hãy. </span>
                  <Link to="/register" style={{fontWeight: 700}}>Đăng ký?</Link>
                </div>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default SignIn;