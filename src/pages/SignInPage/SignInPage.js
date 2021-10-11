import React from 'react';
import SignIn from '../../components/SignIn/SignIn'
import Banner from '../../components/Banner/Banner'

const SignInPage = () => {
  return (
    <>
      <Banner title="Login" />
      <SignIn />
    </>
  );
};

export default SignInPage;