import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../Assets/Logo.svg";



function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} height={'50px'} width={'150px'} alt='no image'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">ABOUT</Nav.Link>
                            <NavDropdown title="SEASON" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">SEASON 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">SEASON 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">SEASON 3</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">SEASON 4</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">SEASON 5</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">SEASON 6</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">SEASON 7</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">SEASON 8</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="SOCIAL" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">INSTAGRAM</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">YOUTUBE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">X</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">FACEBOOK</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">CAST & CREW</Nav.Link>
                            <Nav.Link href="#home">HOUSE OF THE DRAGON</Nav.Link>
                            <NavDropdown title="MORE" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">PODCAST</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">THE IRON ANNIVERSARY</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">BLOG</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">SHOP</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header