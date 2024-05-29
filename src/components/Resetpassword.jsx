import { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import './App.css';
import cardifylogo from './images/Cardify Logo.png';

const ModalSpinner = () => {
    return (
        <div className="modal-spinner-overlay">
            <div className="spinner"></div>
        </div>
    );
};

const Resetpassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:4000/reset-password', { newPassword: values.password, token });
                if (response.data.status) {
                    alert("Password has been reset successfully.");
                    navigate('/auth/login');
                } else {
                    alert("Failed to reset password. Please try again.");
                }
            } catch (error) {
                alert("An error occurred. Please try again.");
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="ca border-0">
                        <div className="car-body">
                            <img src={cardifylogo} style={{ width: '7rem' }} alt="Cardify Logo" />
                            <h2 className="mt-3">
                                Reset Password
                            </h2>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold' }}>
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your new password"
                                        style={{ padding: '15px' }}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="error">{formik.errors.password}</div>
                                    ) : null}
                                </div>

                                <div className="mt-2">
                                    <button type="submit" style={{ backgroundColor: 'rgb(24,152,29)', color: 'white', width: '150px', height: '50px', border: 'none', borderRadius: '8px' }}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                            <div className="my-3 fw-bold">
                                <Link to="/auth/login" style={{ color: 'rgb(24,152,29)' }}>Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && <ModalSpinner />} {/* Render modal spinner if isLoading is true */}
        </div>
    );
};

export default Resetpassword;
