/* eslint-disable */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Button, Alert } from 'react-bootstrap';
import Imgcom from '../imgcom/imgcom.jsx'; 
import doneImage from '../../../assets/icons/register and login icon/Done.png'; 

const SuccessMessage = ({ message }) => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/login_student'); 
    };
   return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
        }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{
                height: '100vh',
                background: 'linear-gradient(180deg, #FFCF6B 0%, #C01F59 213.56%)'
            }}>
                <div style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    maxWidth: '80%',
                    margin: 'auto',
                }}>
                    <img src={doneImage} alt="Done Icon" style={{ width: '150px', marginBottom: '20px' }} />
                    <h2 style={{ direction: 'rtl' }}>{message}</h2>
                    <Link to="/signup" style={{ textDecoration: 'none', marginTop: '20px' }}>
                        <Button
                            style={{
                                padding: '12px 24px',
                                backgroundColor: '#ACEADF',
                                color: 'black',
                                border: 'none',
                                cursor: 'pointer',
                                borderRadius: '30px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.2s ease-in-out',
                            }}
                            onClick={handleNavigateHome}
                        >
الرجوع لصفحة تسجيل الدخول 
</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessMessage;
