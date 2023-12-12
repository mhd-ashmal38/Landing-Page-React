import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Img4 from "../Assets/Img4.jpg";
import Fade from 'react-reveal/Fade';
// import VideoPlayer from './VideoPlayer'
// import { Button } from '@mui/material'

function Episodes() {
  return (
    <div>

      <Fade top distance="20%" duration={1500}>
        <Row className='p-5'>
            <Col lg={6}>
              <img src={Img4} width={'100%'} alt="" />
            </Col>
            <Col lg={6}>
              <Row>
                <Row>
                <div className='epi-text' style={{marginTop:'25%'}}>
                    <h5>Watch the First Episode for Free</h5>
                    <p style={{fontSize:'16px'}}>Start from the beginning and watch the first episode of the series for free.</p>
                    <a href="" style={{fontSize:'14px', textDecoration:'none', fontWeight:'500'}}>FIND MORE FREE EPISODES</a>
                </div>
                </Row>
              </Row>
              
            </Col>
        </Row>
      </Fade>
    </div>
  )
}

export default Episodes