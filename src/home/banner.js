import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Container,Card,Button, Col } from 'react-bootstrap';
import './App.css';

export default function Banner() {
    
    return(
        <section id="mybanner" className="align-items-center">
            <Container>
                <Row >
                    <Col lg={5} md={5} sm={12}>
                        <h3 className="myBannerHeader text-muted">Get Your Movies, Episode & It's Series.With Just A Search For It Here!</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}