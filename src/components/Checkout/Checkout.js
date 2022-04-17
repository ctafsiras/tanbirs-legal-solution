import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <Form style={{ maxWidth: '350px' }} className='mx-auto' onSubmit={(e)=>{
                e.preventDefault()
                toast("Information saved")
            }}>
                <Form.Group className="mb-3">
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='email' type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='phone' type="text" placeholder="Enter Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='address' type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='district' type="text" placeholder="Enter District" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='country' type="text" placeholder="Enter Country" />
                </Form.Group>

                <Button className='w-100 mb-3' variant="success" type="submit">
                    Save
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;