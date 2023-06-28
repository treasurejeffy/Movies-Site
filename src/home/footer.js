import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Container, Col,  } from 'react-bootstrap';
import './App.css';
import facebook from "../image/facebook.png";
import instargram from '../image/instagram-new.png';
import linkedin from '../image/linkedin.png';
import twitter from '../image/twitter--v3.png';
import email from '../image/mail.png';
import call from '../image/silent-call.png'

export default function Footer() {
    return(
        <>
            <footer>
                <Container>
                    <div className="text-center pb-4" id="logo"><span>M</span>Movies</div>
                    <Row lg={4} md={2} sm={2} xs={2}>
                        <Col className="mb-2">
                            <ul>
                            <h6 className="contact">Contact Us</h6>
                            <div id="social-media"><img src={twitter} alt="twitter"/><img src={instargram} alt="instagram"/><img src={linkedin} alt="linkedin"/><img src={facebook} alt="facebook"/> /Treasure Japheth</div>
                            <div id="email"><img src={email} alt="Email"/> treasurejeffy@gmail,com</div>
                            <div id="call"><img src={call} alt="call us"/> 09082487241, 091101712113</div>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <h6>Types Of Movies</h6>
                                <li>Action Movies</li>
                                <li>Episode</li>
                                <li>Series</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="pt-2">
                                <h6>Links</h6>
                                <li>Home</li>
                                <li>Favourite</li>
                                <li>About Us</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <h6>News</h6>
                                <li>Trending Movies</li>
                                <li>Latest Movies</li>
                                <li>Old Movies</li>
                            </ul>
                        </Col>
                    </Row>
                    <p className="text-muted text-center pt-2">copyright.2023</p>
                </Container>
            </footer>
        </>
    )
}