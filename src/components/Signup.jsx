import { useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Button, Carousel } from 'react-bootstrap';
import * as Yup from 'yup';
import cardifylogo from "./images/Cardify Logo.png";
import { FcGoogle } from "react-icons/fc";
import './App.css'
const Signup = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      password: '',
      referralCode: '',
      howDidYouHear: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
      referralCode: Yup.string(),
      howDidYouHear: Yup.string(),
    }),
    onSubmit: (values) => {
      // Handle submission logic
      console.log('Form values submitted:', values);
    },
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <Container className=" custom-width mt-5">
      <div style={{ display: "", alignItems: "center" }}>
        <div><img src={cardifylogo} style={{ width: "6rem" }} /></div>
      </div>

      <div>
            <div><p className=' fw-bold'>Create a new account with ...</p></div>
            <div>
                  <button className='form-control fw-bold' style={{ display: 'flex', gap: '10px', justifyContent: 'center'}}>
                    <div>
                    <FcGoogle style={{width:"40", height:"30px"}} />
                    </div>
                    
                    Signup with Google</button>
            </div>
            <div className='text-center'><p>or</p></div>
      </div>

      <Carousel activeIndex={step - 1} controls={false} indicators={false} interval={null}>
        <Carousel.Item>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label className=' fw-bold'>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </Form.Group>
            <Button type="button" onClick={nextStep} style={{ backgroundColor: 'rgb(39,174,96)', margin: "20px", justifyContent: "center", border: "none" }}>
              Next
            </Button>
          </Form>
        </Carousel.Item>

        <Carousel.Item>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label className='fw-bold'>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                {...formik.getFieldProps('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label className='fw-bold'>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                {...formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </Form.Group>
            <div style={{ marginTop: "20px", gap: "10px", display: "flex" }} className='button-container'>
              <Button variant="secondary" className="mr-2" type="button" style={{ backgroundColor: 'rgb(39,174,96)', border: "none" }} onClick={prevStep}>
                Previous
              </Button>
              <Button variant="primary" type="button" style={{ backgroundColor: 'rgb(39,174,96)', border: "none" }} onClick={nextStep}>
                Next
              </Button>
            </div>
          </Form>
        </Carousel.Item>

        <Carousel.Item>
          <Form onSubmit={formik.handleSubmit}>
            <p>YOUR IDENTIFIER</p>
            <h6 style={{fontSize:"12px"}}>Your username and password must be unique.</h6>
            <Form.Group controlId="username">
              <Form.Label className='fw-bold'>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                {...formik.getFieldProps('username')}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label className='fw-bold'>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error">{formik.errors.phone}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </Form.Group>
           

            <div style={{ marginTop: "20px", gap: "10px", display: "flex" }} className='button-container'>
              <Button variant="secondary" className="mr-2" type="button" style={{ backgroundColor: 'rgb(39,174,96)', border: "none" }}  onClick={prevStep}>
                Previous
              </Button>
              <Button variant="primary" style={{ backgroundColor: 'rgb(39,174,96)', border: "none" }}  type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Carousel.Item>

        <Carousel.Item>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="referralCode">
              <Form.Label>Referral Code (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your referral code"
                {...formik.getFieldProps('referralCode')}
              />
            </Form.Group>
            <Form.Group controlId="howDidYouHear">
              <Form.Label>How did you hear about us?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter how you heard about us"
                {...formik.getFieldProps('howDidYouHear')}
              />
            </Form.Group>
            <div style={{ marginTop: "20px", gap: "10px", display: "flex" }} className='button-container'>
              <Button variant="secondary" className="mr-2" type="button" onClick={prevStep}>
                Previous
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Carousel.Item>

      </Carousel>

      <div>
        <p>Already have a Cardify account? <a href="" style={{ color: 'rgb(39,174,96)' }}>Sign in instead</a></p>
      </div>
    </Container>
  );
};

export default Signup;
