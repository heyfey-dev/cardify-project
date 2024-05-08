import { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
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

const Resetpassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required'),
        }),
        onSubmit: () => {
            
    setIsLoading(true);
        }
    });

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <img src={cardifylogo} style={{ width: '7rem' }} alt="Cardify Logo" />
                            <h2 className="mt-3" style={{ fontFamily: '' }}>
                                Forgot password
                            </h2>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>
                                Forgotten your password? Hang on, we can email you instructions to <br /> reset your  password.
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
                                        placeholder="Enter the email address of the lost password"
                                        style={{ padding: '15px' }}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="error">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div className="mt-2">
                                <button type="submit" style={{ backgroundColor: 'rgb(24,152,29)', color: 'white', width: '15 0px', height: '50px', border: 'none', borderRadius: '8px' }}>
                                            Send reset code
                                    </button>
                                </div>
                            </form>
                            <div className="my-3 fw-bold">
                                <Link to="/auth/login" style={{ color: 'rgb(24,152,29)' }}>Register now</Link>
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
