import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()

    }
    return (
        <div>
            <h2>Register</h2>
            <Form className='w-25 mx-auto' onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Control name='name' type="text" placeholder="Enter Email" />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='email' type="email" placeholder="Enter Email" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control name='password' type="password" placeholder="Enter Password" />
                </Form.Group>

                <Button className='w-100 mb-3' variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have account? <Link className='text-decoration-none' to='/login'>Login now</Link></p>
        </div>
    );
};

export default Register;