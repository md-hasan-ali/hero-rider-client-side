// import necessary file 
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigation.css'

// Navigation functional component 
const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Hero Rider</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Rider</Nav.Link>
                    <Nav.Link href="#pricing">Driving Lessons</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;