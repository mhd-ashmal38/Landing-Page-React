import React from 'react'
import VideoPlayer from './VideoPlayer';
import Carousel from 'react-bootstrap/Carousel';
import VideoPlayer2 from './VideoPlayer2';
import VideoPlayer3 from './VideoPlayer3';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import Hbo from "../Assets/Hbo.svg";
import Logo from "../Assets/Logo.svg";
import Episodes from './Episodes';
import Characters from './Characters';
import Blog from './Blog';
import Hod from './Hod';
import CounterUp from './CounterUp';
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <div className='p-3'>

            <Row>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <VideoPlayer />
                    </Carousel.Item>
                    <Carousel.Item>
                        <VideoPlayer2 />
                    </Carousel.Item>
                    <Carousel.Item>
                        <VideoPlayer3 />
                    </Carousel.Item>
                </Carousel>

                <Fade top distance="20%" duration={1500}>
                    <Row>
                        
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <div className='ps-3'>
                                <h6 className='pt-2'>WINNER OF 59 EMMYS</h6>
                                <h1 className=''><img src={Logo} height={'100px'} width={'300px'} alt="" /></h1>
    
                                <CounterUp/>
    
                                {/* <p style={{ fontSize: '14px' }} className=''>8 SEASONS | 73 EPISODES | TV-MA</p> */}
                                <Button variant="outlined">
                                    Watch Now<img className='ps-2' src={Hbo} height={'40px'} width={'50px'} alt='no image' />
                                </Button>
                            </div>
    
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Fade>
                <Fade top distance="20%" duration={1500}>
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <div className="ps-3 pt-5">
                                <p style={{fontSize:'18px', textAlign:'justify'}}>
                                    Trouble is brewing in Westeros. For the inhabitants of this world, control of the Iron Throne holds the lure of great power. But in a land where seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, a forgotten evil has returned. HBO presents this epic series based on the book series A Song of Ice and Fire by George R.R. Martin.
                                </p>
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                
                    </Row>
                </Fade>
                
            </Row>

            <Row>
                <Episodes/>
            </Row>
            
            <Row>
                <Characters/>
            </Row>

            <Row className='mt-5'>
                <Blog/>
            </Row>

            <Row className='mt-5'>
                <Hod/>
            </Row>

        </div>
    )
}

export default Home