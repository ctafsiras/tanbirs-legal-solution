import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h2 className='mt-3'>Contact Us</h2>
            <div className='row row-cols-1 row-cols-md-2 container mx-auto'>
                <div className='col'>
                   <img src="https://www.smarttechnica.com/public/web/assets/image/get_quote_free.png" alt="" />
                </div>
                <div className='col'>
                    <h3>Get a Quote </h3>
                    <Form onSubmit={(e)=>e.preventDefault()}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;