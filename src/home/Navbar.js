import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Row,Container} from 'react-bootstrap';
import home from '../image/home.png';
import bell from '../image/bell.png';
import heart from '../image/hearts.png';
import './App.css'

export default function Navbars() {
    
    return(
        <Navbar expand="lg"  sticky="top" id="navbar" className="bg-dark"> 
            <Container >                                 
                <Navbar.Brand href="#home" className="logo"> <span>M</span>Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                {/* <Navbar.Collapse id="basic-navbar-nav" className="m-auto"> */}
                    <Nav className="navbar-nav navbar-right">
                        <Nav.Link className="muted" title="you"><img src={home} alt="you" /></Nav.Link>
                        <Nav.Link className="muted" title="Notification"><img src={bell} /></Nav.Link>
                        <Nav.Link className="muted" href="./favourite" title="Favourite"><img src={heart}/></Nav.Link>
                    </Nav>
                {/* </Navbar.Collapse> */}
           </Container>
        </Navbar>                               
    )
}