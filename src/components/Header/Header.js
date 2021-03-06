import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div>

            <div className="pb-5">
                <Navbar className="fixed-top" collapseOnSelect navbar-expand-lg expand="lg" bg="dark" variant="dark">
                    <Container>
                        <img as style={{ width: '15%' }} src="https://i.ibb.co/hFvX2G4/Screenshot-48-removebg-preview-removebg-preview.jpg" />

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="ps-5" id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="head-text tw-pr-56" to="/home">Home</Link>
                                <Link className="head-text pl-5" to="/findadoctor">Find a Doctor</Link>
                                <Link className="head-text pl-5 " to="/insurance">Health Insurance</Link>
                                <Link className="head-text pl-3" to="/services">Services</Link>

                                <Link className="head-text pl-3" to="/aboutus">About Us</Link>

                            </Nav>


                            {user.email && <Navbar.Text>
                                Signed in as- {user.displayName}

                            </Navbar.Text>}
                            {
                                user?.email ?
                                    <button className="text-white ml-3" onClick={logOut}>Log Out</button>
                                    :
                                    <NavLink className="head-text pl-3 fs-5" to="/login">LogIn</NavLink>}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;