import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '../components/loading/loading';
const UsersLogins = lazy(()=> import('../pages/user/login'))
const UserSignUp = lazy(()=> import('../pages/user/signUp'))
const VerifyOTP = lazy(()=> import('../pages/user/VOTP'))
const HomePage = lazy(()=>import('../pages/user/Home'))

const UserRouter = () => {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/signIn" element={<UsersLogins />} />
        <Route path="/signUp" element={<UserSignUp/>}/>
        <Route path="/OTP" element={<VerifyOTP/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </Suspense>
    </>
  );
};

export default UserRouter;
