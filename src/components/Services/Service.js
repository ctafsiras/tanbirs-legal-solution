import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name, description } = service;
    const navigate=useNavigate()
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={()=>navigate('/checkout')} variant="success">Order Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;