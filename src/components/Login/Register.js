import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <h2 className='my-3'>Register</h2>
            <Form style={{ maxWidth: '350px' }} className='mx-auto' onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control required name='email' type="email" placeholder="Enter Email" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control required name='password' type="password" placeholder="Enter Password" />
                </Form.Group>
                {loading && <p className='text-primary'>Please Wait...</p>}
                {error && <p className='text-danger'>{error.message}</p>}
                <Button className='w-100 mb-3' variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have account? <Link className='text-decoration-none' to='/login'>Login now</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;