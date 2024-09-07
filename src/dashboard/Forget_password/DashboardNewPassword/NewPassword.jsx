/* eslint-disable */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Form, Button, Alert } from 'react-bootstrap';
import Api_website from "../../../utlis/axios_utils_websit.jsx";
import passIcon from '../../../assets/icons/register and login icon/pngtree-password-vector-icon-design-illustration-png-image_6597553 3.svg';
import lockIcon from '../../../assets/icons/register and login icon/padlock-icon-lock-and-unlock-icon-design-free-vector 1.svg';
import Imgcom from '../../../websit/register and login/imgcom/imgcom.jsx';
import { useNavigate } from 'react-router-dom';
import Api_Dashboard from '../../interceptor/interceptorDashboard.jsx';
import { ToastContainer, toast } from 'react-toastify';
function NewPassDashBoard() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    document.body.style.removeProperty('overflow');
    e.preventDefault();
    // console.log(  email,
    //     token,
    //     password);
    Api_Dashboard.post('/reset-password', {
      email,
      token,
      password,
      password_confirmation: passwordConfirmation,
    })
      .then((response) => {
        notify("mm")
        setTimeout(()=>{
          navigate('/dashboard')
        },3000)
        setSuccess('تم إعادة تعيين كلمة المرور بنجاح.');
        setError('');
      })
      .catch((error) => {
        // console.error('An error occurred while resetting password:', error);
        setError(error.response?.data?.message || 'فشل إعادة تعيين كلمة المرور.');
        setSuccess();
        Errornotify(error.response?.data?.message)
        setTimeout(() => setError(''), 3000);
      });
  };

  
  const notify = (AlertPointSuccess) => {
    toast.success("تم التغيير بنجاح", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
};


const Errornotify = (AlertPoint) => {
    toast.error(" AlertPoint", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
};



  // if (success) {
  //   return <SuccessMessage message={success} />;
  // }

  return (
    
    <div className='new_pass'>
                  <ToastContainer position='top-center' />


      <div className="new_pass d-flex flex-wrap">
        <Imgcom />
        <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className="d-flex flex-column new_pass_card">
          <p className='card-title '>أدخل معلومات تسجيل الدخول </p>
          <div className="header1">
            <p className='card-title between-borders1'>لتحصل على جميع الخدمات</p>
          </div>
          <Form className="new_pass-form" onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="password">
              <Form.Label className='new_password'>كلمة المرور الجديدة</Form.Label>
              <div className='relative1'>
                <Form.Control
                  className='p_new_pass'
                  type="password"
                  placeholder="أدخل كلمة السر الخاصة بك"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='icon-container password-icon'>
                  <img src={passIcon} alt="password icon" />
                </div>
                <div className='icon-container lock-icon'>
                  <img src={lockIcon} alt="lock icon" />
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <Form.Label className='con_new_password'>تأكيد كلمة المرور الجديدة</Form.Label>
              <div className='relative1'>
                <Form.Control
                  className='p_con_new_password'
                  type="password"
                  placeholder="أدخل كلمة السر الخاصة بك"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <div className='icon-container password-icon'>
                  <img src={passIcon} alt="password icon" />
                </div>
                <div className='icon-container lock-icon'>
                  <img src={lockIcon} alt="lock icon" />
                </div>
              </div>
            </Form.Group>
            <Button type="submit" className="new_pass_btn">تم</Button>
          </Form>
        </Col>
      </div>
    </div>
  );
}

export default NewPassDashBoard;
