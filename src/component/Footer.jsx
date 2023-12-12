import React from 'react'
import Logo from "../Assets/Logo.svg";
import { Facebook, Instagram, X, Youtube } from 'react-feather';
import { Col, Row } from 'react-bootstrap';

function Footer() {
    return (

        <Row style={{borderTop:'2px solid black'}} className='align-items-center'>
            <Col className='text-center'>
                <div className="footer-logo-container">
                    <img src={Logo} height={'100px'} width={'300px'} alt="" />
                </div>
            </Col>
            <Row>
                <Col></Col>
                <Col lg={4} className='d-flex'>
                    <div className="footer-icons ms-auto me-auto">
                        <a href='' className=''><Instagram/></a>
                        <a href='' className='me-2 ms-4'><Facebook/></a>
                        <a href='' className='me-4 ms-2'><X/></a>
                        <a href='' className=''><Youtube/></a>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col lg={6} className='d-flex mt-3 mb-3'>
                <div className="footer-section ms-auto me-auto">
                    <a href='' className=''>Privacy Policy</a>
                    <a href='' className='me-4 ms-4'>Terms of Use</a>
                    <a href='' className=''>Ad Choices</a>
                </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                <p className='text-center' style={{fontSize:'14px'}}>&copy;2023 mhd-ashmal, All Rights Reserved</p>
                </Col>
            </Row>
        </Row>
    )
}

export default Footer