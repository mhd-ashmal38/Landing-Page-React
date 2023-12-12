import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Blog1 from "../Assets/Blog.jpg";
import Fade from 'react-reveal/Fade';

function Blog() {
  return (
    <div>
      <Fade top distance="20%" duration={1500}>
        <Row className='p-5'>
          <Col lg={6}>
            <img src={Blog1} width={'100%'} alt="" />
          </Col>
          <Col lg={6}>
            <div className='epi-text' style={{ marginTop: '15%' }}>
              <h5>Visit the Official Blog</h5>
              <p style={{ fontSize: '16px' }}>Stocked with interviews, storyboards, prop photos and facts from seasons past, use Making Game of Thrones to go deeper inside the epic series.</p>
              <a href="" style={{ fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>FIND OUT MORE</a>
            </div>
          </Col>
        </Row>
      </Fade>
    </div >
  )
}

export default Blog