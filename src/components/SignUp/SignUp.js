import React from 'react';

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="register-page">
          <div className="register-form form">
            <div className="block-title">
              <h2 className="title"><span>Đăng ký</span></h2>
            </div>
            <form action="#" method="post" encType="multipart/form-data">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="first_name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="last_name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">Đăng ký</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;