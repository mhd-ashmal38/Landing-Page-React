import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Hod1 from "../Assets/Hod1.jpg";
import Hod2 from "../Assets/Hod2.jpg";
import Fade from 'react-reveal/Fade';

function Hod() {
    return (
        <div>
            <Fade top distance="20%" duration={1500}>
                <div className='text-center'>
                    <h2>House of the Dragon</h2>
                </div>
            </Fade>
            <Fade left distance="40%" duration={1500}>
            <Row className='p-5'>
                <Col lg={6}>
                    <img src={Hod1} width={'100%'} alt="" />
                    <div className='pt-3'>
                        <p style={{ fontSize: '13px', fontWeight: '100' }}>SUNDAYS AT 9 PM</p>
                        <h5 style={{ marginTop: '-13px' }}>House of the Dragon</h5>
                        <p style={{ fontSize: '17px' }}>The reign of House Targaryen begins. House of the Dragon, the prequel to Game of Thrones, is available now.</p>
                        <a href="" style={{ fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>FIND OUT MORE</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <img src={Hod2} width={'100%'} alt="" />
                    <div className='pt-3'>
                        <h5>The Official Guide</h5>
                        <p style={{ fontSize: '17px' }}>
                            Dive even deeper into the world of House of the Dragon to learn more about the characters and their connections, the dragons and their riders, and an interactive map of Westeros and Essos. Updated throughout the season.</p>
                        <a href="" style={{ fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>GO TO THE GUIDE</a>
                    </div>

                </Col>
            </Row>
        </Fade>
        </div >
    )
}

export default Hod