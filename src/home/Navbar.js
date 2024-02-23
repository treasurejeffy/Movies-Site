import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import home from '../image/home.png';
import bell from '../image/bell.png';
import heart from '../image/hearts.png';
import './App.css'
import { HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Navbars(props) {
    const count =props.favouriteMovie.length
    return(
        <Navbar expand="lg"  sticky="top" id="navbar" className="bg-dark"> 
            <Container >                                 
                <Navbar.Brand href="#home" className="logo"> <span>M</span>Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none bg-light"/>
                <Navbar.Collapse id="basic-navbar-nav"  className="d-lg-flex justify-content-end ">
                    <Nav className="navbar-nav navbar-right">
                        <Nav.Link className="muted" title="you"><img src={home} alt="you" /></Nav.Link>
                        <Nav.Link className="muted" title="Notification"><img src={bell} /></Nav.Link>
                        <Nav.Link className="muted" as={Link} to={'/favourite'} title="Favourite"><HeartFill className="text-warning heart"/><Button className="favouriteCount m-1" variant='outline-success'>{count}</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
           </Container>
        </Navbar>                               
    )
}