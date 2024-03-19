import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import './App.css';

import cardifylogo from './images/Cardify Logo.png';

const Login = () => {
    const navigate = useNavigate();

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

            try {
              const userData = {email, password, ... data};
              console.log(userData, 'userData')

                const response = await axios.post('http://localhost:4000/login', userData);
                const { token } = response.data;
                localStorage.setItem('token', token);
                navigate('/dashboard');
                
            } catch (error) {
              if (error.response) {
                console.error('Server error:', error.response.data);
              } else if (error.request) {
                console.error('No response from server:', error.request);
              } else {
                console.error('Error setting request:', error.message);
              }
            }
        },
    });

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="card border-0">
                        <div className="card-body">
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
                                        type="text"
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
                                <div className="fw-bold">
                                    Forgot password? <a href="" style={{ color: 'rgb(24,152,29)' }}>Click here</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
