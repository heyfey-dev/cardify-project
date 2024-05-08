import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import './App.css';

import cardifylogo from './images/Cardify Logo.png';

const ModalSpinner = () => {
    return (
        <div className="modal-spinner-overlay">
           
                <div className="spinner"></div>
                
            
        </div>
    );        
};


const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
        }),
        onSubmit: async (values) => {
    const { email,password, ...data } = values;
    setIsLoading(true);
            try {
              const userData = {email, password, ... data};
              console.log(userData, 'userData')

                const response = await axios.post('http://localhost:4000/login', userData);
                const { token, expirationTime } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('email', email);
                localStorage.setItem('tokenExpiration', expirationTime);  
                navigate('/dashboard');
                
            } catch (error) {
              if (error.response) {
                console.error('Server error:', error.response.data);
              } else if (error.request) {
                alert('e no dey')
              } else {
                alert('error sending request')
              }
            } finally{
                setIsLoading(false);
            }
        },
    });



    useEffect(() => {
       // Function to check if the token has expired
const isTokenExpired = () => {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    console.log('Token Expiration Time:', new Date(parseInt(tokenExpiration))); // Log token expiration time
    console.log('Current Time:', new Date()); // Log current time
    if (!tokenExpiration) {
        return true; // Token expiration information not found, consider it expired
    }
    return Date.now() > parseInt(tokenExpiration);
};

// Function to logout the user if the token has expired
const logoutIfTokenExpired = () => {
    if (isTokenExpired()) {
            console.log('Token has expired. Logging out...'); // Log if token has expired
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiration');
        navigate('/auth/login'); // Redirect the user to the login page
    }
};

// Check token expiration on component mount
logoutIfTokenExpired();

// Set up an interval to check token expiration periodically (e.g., every minute)
const tokenExpirationCheckInterval = setInterval(logoutIfTokenExpired, 30000);

// Clean up the interval on component unmount
return () => clearInterval(tokenExpirationCheckInterval);

    }, [navigate]);

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="cardi border-0">
                        <div className="car">
                            <img src={cardifylogo} style={{ width: '7rem' }} alt="Cardify Logo" />
                            <h2 className="mb-4" style={{ fontFamily: '' }}>
                                Login
                            </h2>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>
                                    Log right into the Cardify experience, with your email address and password.
                                </p>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        style={{ padding: '15px' }}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="error">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold' }}>
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        style={{ padding: '15px' }}
                                        name="password"
                                        placeholder="Enter your password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="error">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="mt-5">
                                    <button type="submit" style={{ backgroundColor: 'rgb(24,152,29)', color: 'white', width: '120px', height: '58px', border: 'none', borderRadius: '8px' }}>
                                            Login
                                    </button>
                                </div>
                                <div className="my-3 fw-bold">
                                    New to Cardify? <Link to="/auth/signup" style={{ color: 'rgb(24,152,29)' }}>Register now</Link>
                                </div>

                                <div className="my-3 fw-bold">
                                    Forgot password? <Link to="/auth/reset" style={{ color: 'rgb(24,152,29)' }}>Click here</Link>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && <ModalSpinner />} {/* Render modal spinner if isLoading is true */}
        </div>
    );
};

export default Login;
