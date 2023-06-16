import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Carousel  } from "react-bootstrap";
import './favourite.css'
import bannerImg from '../image/B10.png';
import bannersImg from '../image/B19.png';
import bannerImg3 from '../image/B17.png';
import bannerImg4 from '../image/B29.png';
import bannerImg5 from '../image/B22.png';
import bannerImg6 from '../image/B24.png';
import bannerImg7 from '../image/B1.png';
import bannerImg8 from '../image/B5.png';
import bannerImg9 from '../image/B6.png';
import bannerImg10 from '../image/B8.png';

export default function Banner() {


    return(
        <section className="bg-secondary pt-5 pb-5">
            <Container>
                <Carousel className="d-flex mb-3">
                    <h3 className="banner-header text-center">See All Your Favourites Posters/Movies</h3>
                    <Carousel.Item className="d-flex">
                        <img
                        className="d-block img-fluid"
                        src={bannerImg}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100 img-fluid"
                        src={bannersImg}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg3}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg4}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg5}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="d-flex">            
                        <img
                        className="d-block w-100 img-fluid"
                        src={bannerImg8}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg9}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg10}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg5}
                        alt="First slide"
                        />
                        <img
                        className="d-block img-fluid"
                        src={bannerImg7}
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>       
            </Container>
         </section>
    )
}