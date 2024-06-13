import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WritingPage from './pages/WritingPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import SignUpPage from './pages/SignUpPage';
import MyPage from './pages/MyPages/MyPage';
import PaymentInfoPage from './pages/MyPages/PaymentInfoPage';
import UpdateInfoPage from './pages/MyPages/UpdateInfoPage';
import LoginPage from './pages/LoginPages/LoginPage';
import ForgotPasswordPage from './pages/LoginPages/ForgotPasswordPage';
import ChangePasswordPage from './pages/LoginPages/ChangePasswordPage';
import PaymentPage from './pages/PaymentPages/PaymentPage';
import MembershipCancelPage from './pages/PaymentPages/MembershipCancelPage';
import PaymentHistoryPage from './pages/PaymentPages/PaymentHistoryPage';
import PaymentMethodPage from './pages/PaymentPages/PaymentMethodPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/writing" element={<WritingPage/>} />
          <Route path="/main" element={<MainPage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route exact path="/" element={<LandingPage/>} />
          {/* Sub Pages */}
          <Route path="/mypage/update-info" element={<UpdateInfoPage/>} />
          <Route path="/mypage/payment-info" element={<PaymentInfoPage/>} />
          <Route path="/mypage/payment-history" element={<PaymentHistoryPage/>} />
          <Route path="/mypage/payment-method" element={<PaymentMethodPage/>} />
          <Route path="/mypage/membership-cancel" element={<MembershipCancelPage/>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
          <Route path="/change-password" element={<ChangePasswordPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
