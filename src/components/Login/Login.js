import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../CustomComponents/Loading';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [emailForReset, setEmailForReset]=useState('');
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );
      const handleResetPassword=e=>{
        sendPasswordResetEmail(emailForReset)
        
      }
      if (sending) {
        toast("Verification email sent!");
      }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
               <ToastContainer />
            <h2 className='my-3'>Login</h2>
            <Form style={{maxWidth: '350px'}} className='mx-auto' onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Control required onBlur={(e)=>setEmailForReset(e.target.value)} name='email' type="email" placeholder="Enter Email" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control required name='password' type="password" placeholder="Enter Password" />
                </Form.Group>
                {loading && <p className='text-primary'>Please Wait...</p>}
                {error && <p className='text-danger'>{error.message}</p>}
                <Button className='w-100 mb-3' variant="success" type="submit">
                    Login
                </Button>
            </Form>
            <p>Don't have account? <Link className='text-decoration-none' to='/register'>Create an account now</Link></p>
            {resetError && <p className='text-danger'>{resetError.message}</p>}
            <p>Forget Password? <span onClick={handleResetPassword} className='text-primary'>Reset Now</span></p>
            <SocialLogin></SocialLogin>
         
        </div>
    );
};

export default Login;