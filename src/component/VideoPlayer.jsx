import React from 'react'
import ReactPlayer from 'react-player'
import Video from "../Assets/Video.mp4";
import Img from "../Assets/Img.jpg";
import { Col, Row } from 'react-bootstrap';

function VideoPlayer() {
  return (
    <div>
        <div className='p-3'>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <ReactPlayer url={Video} light={Img} playing={true} controls={true} width={'100%'} height={'650px'} />
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div>
    </div>
  )
}

export default VideoPlayer