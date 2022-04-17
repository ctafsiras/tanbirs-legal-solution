import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomComponents/CustomLink';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Tanbir's Legal Solution</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                            {user ? <button onClick={()=>signOut(auth)} className='border-0 rounded bg-danger text-white fw-bolder'>Log Out</button>: <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;