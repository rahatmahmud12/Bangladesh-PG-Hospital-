import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slide = () => {
    return (
        <div className="pb-4 pt-4 font-bold">
            <h4 className="w-75 mx-auto text-xl pt-5 pb-4 text-dark">Health 'camps' are one of the strategies adopted by both government and non-government organizations. This literally means that a team of health professionals 'camp' in an area to carry out a limited health intervention.</h4>
            <Carousel variant="dark ">
                <Carousel.Item>
                    <img
                        className="d-block w-50 h-50 mx-auto"
                        src="https://i.ibb.co/YjLFJs1/free-medical-camp-design-template-b6101353f0605b9179200e35e650d2e5-screen.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Our initiatives</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 h-50 mx-auto"
                        src="https://i.ibb.co/FwQ6TmF/5330588.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Our specialist doctors</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 h-50 mx-auto"
                        src="https://i.ibb.co/swKVhGL/1519306032.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Free camp for poor people</h5>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slide;