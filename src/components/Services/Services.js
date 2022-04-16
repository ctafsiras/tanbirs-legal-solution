import React from 'react';
import { Container, Row } from 'react-bootstrap';
import contracts from '../../images/services/business-contracts.jpg'
import family from '../../images/services/family-personal.jpg'
import realState from '../../images/services/real-estate.jpg'
import Service from './Service';

const Services = () => {
    const services = [
        { id: 1, img: contracts, name: 'Business and Contracts', description: 'Non-Disclosure Agreement, LLC Operating Agreement, Independent Contractor Agreement,Business Contract' },
        { id: 2, img: realState, name: 'Real Estate', description: 'Lease Agreement, Eviction Notice, Intent to Purchase Real Estate, Quitclaim Deed, Apartment Agreement' },
        { id: 3, img: family, name: 'Family and Personal', description: 'Last Will and Testament, Living Will,Divorce Settlement Agreement, Child Care Authorization' }
    ]
    return (
        <div>
            <h2 className='mt-4 text-success mb-3'>Our Services</h2>
            <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Services;