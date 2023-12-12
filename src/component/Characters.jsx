import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import Char1 from "../Assets/Char1.jpg";
import Char2 from "../Assets/Char2.jpg";
import Char3 from "../Assets/Char3.jpg";
import Char4 from "../Assets/Char4.jpg";
import Char5 from "../Assets/Char5.jpg";
import Char6 from "../Assets/Char6.jpg";
import Char7 from "../Assets/Char7.jpg";
import Fade from 'react-reveal/Fade';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function Characters() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
        ]
    };

    return (
        <div>
            <Fade top distance="20%" duration={1500}>
                <div className='text-center pb-4'>
                    <h3>Featured Characters</h3>
                    <p>See the full list of the Game of Thrones cast and characters <a style={{ color: 'black' }} href="">here.</a></p>
                </div>
            </Fade>
            <Fade left distance="20%" duration={1500}>
                <div className='container p-2'>
                    <Slider {...settings}>
                        <div>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Char1} />
                                <Card.Body>
                                    <Card.Title>Daenerys Targaryen</Card.Title>
                                    <Card.Text>
                                        Emilia Clarke
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Char2} />
                                <Card.Body>
                                    <Card.Title>Jon Snow</Card.Title>
                                    <Card.Text>
                                        Kit Harington
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Char3} />
                                <Card.Body>
                                    <Card.Title>Cersei Lannister</Card.Title>
                                    <Card.Text>
                                        Lena Headey
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Char4} />
                                <Card.Body>
                                    <Card.Title>Arya Stark</Card.Title>
                                    <Card.Text>
                                        Maisie Williams
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Char5} />
                                <Card.Body>
                                    <Card.Title>Tyrion Lannister</Card.Title>
                                    <Card.Text>
                                        Peter Dinklage
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Char6} />
                                <Card.Body>
                                    <Card.Title>Jaime Lannister</Card.Title>
                                    <Card.Text>
                                        Nikolaj Coster-Waidau
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Char7} />
                                <Card.Body>
                                    <Card.Title>Sansa Stark</Card.Title>
                                    <Card.Text>
                                        Sophie Turner
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                    </Slider>
                </div>
            </Fade>
        </div>
    )
}

export default Characters