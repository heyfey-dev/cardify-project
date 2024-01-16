
import { useFormik } from 'formik';
import {Link} from 'react-router-dom'

import * as Yup from 'yup';
import './App.css'


import cardifylogo from "./images/Cardify Logo.png"
const Login = () => {



    const formik = useFormik({
        initialValues: {
          emailOrUsername: '',
          password: '',
        },
        validationSchema: Yup.object({
            emailOrUsername: Yup.string()
              .required('Email or Username is required')
              .test('emailOrUsernameFormat', 'Invalid email or username format', value => {
                // Custom validation logic for email or username format
                return /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/.test(value);
              }),
            password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
          }),
        onSubmit: values => {
          // Handle login logic here, e.g., send data to server
          console.log('Form values submitted:', values);
        },
      });


  return (
    <div>
         <div className="row justify-content-center mt-5">
                 <div className="col-md-5">
                         <div className="card border-0">
                                 <div className="card-body">


                                            <img src={cardifylogo} style={{width:"7rem"}} />
                                            <h2 className=" mb-4" style={{fontFamily:""}}>Login</h2>
                                            <div><p style={{ fontWeight:"bold"}}>Log right into the Cardify experience, with your email address or <br />username, and password.</p></div>


              <form onSubmit={formik.handleSubmit}>
                            
                            <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ fontWeight:"bold"}}>
                                        Email or Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="emailOrUsername"
                                        name='emailOrUsername'
                                        placeholder="Enter your email address or username"
                                        style={{padding:'15px'}}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.emailOrUsername}
                                    />

                                            {formik.touched.emailOrUsername && formik.errors.emailOrUsername ? (
                                                        <div className='error'>{formik.errors.emailOrUsername}</div>
                                                    ) : null}
                            </div>


                            <div className="mb-3">
                                        <label htmlFor="password" className="form-label" style={{ fontWeight:"bold"}}>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            style={{padding:'15px'}}
                                            name="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                        />
                                         {formik.touched.password && formik.errors.password ? (
                                                <div className='error'>{formik.errors.password}</div>
                                            ) : null}

                                       
                            </div>

                            <div className="mt-5"><button type="submit" style={{backgroundColor:'rgb(24,152,29)', color:"white", width:"120px", height:"58px", border:"none", borderRadius:"8px"}}>
                                        Next</button>
                            </div>


                                <div className="my-3 fw-bold">New to Cardify? <Link to='/auth/signup'  style={{color:"rgb(24,152,29)",}}>Register now</Link></div>
                                <div className="fw-bold">Forogt password? <a href=""style={{color:"rgb(24,152,29)"}}>Click here</a></div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
