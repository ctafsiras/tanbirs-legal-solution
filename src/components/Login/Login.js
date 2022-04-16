import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()

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

                <Button className='w-100 mb-3' variant="success" type="submit">
                    Login
                </Button>
            </Form>
            <p>Don't have account? <Link className='text-decoration-none' to='/register'>Create an account now</Link></p>
        </div>
    );
};

export default Login;