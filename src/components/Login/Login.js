import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const navigate=useNavigate()
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
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <h2 className='my-3'>Login</h2>
            <Form className='w-25 mx-auto' onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Control name='email' type="email" placeholder="Enter Email" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control name='password' type="password" placeholder="Enter Password" />
                </Form.Group>
                {loading && <p className='text-primary'>Please Wait...</p>}
                {error && <p className='text-danger'>{error.message}</p>}
                <Button className='w-100 mb-3' variant="success" type="submit">
                    Login
                </Button>
            </Form>
            <p>Don't have account? <Link className='text-decoration-none' to='/register'>Create an account now</Link></p>
        </div>
    );
};

export default Login;