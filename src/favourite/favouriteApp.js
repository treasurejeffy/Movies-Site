import React, { useState } from "react";
import Navbars from "./Navbar";
import Footer from "./footer";
import Banner from "./banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container,Button} from 'react-bootstrap';
import './favourite.css';

export default function FavouriteApp(props) {
    const [favourites, setFavourites]=useState(
        JSON.parse(sessionStorage.getItem('myposters')))

    console.log(favourites)
    const handleRemove = (removeFavourite) => {
        const filteredItems = favourites.filter(item => item.id !== removeFavourite);
        setFavourites(filteredItems);
        console.log(favourites)
        sessionStorage.setItem('myposters',JSON.stringify(favourites))
    }
    
    return(
        <>
            <Navbars/>
            <Banner/>
            <h3 className= "mypostersHeader text-center mt-4">Favourites Movies</h3>
            <Container>
                <Row lg={5} md={4} sm={2} xs={1}>
                    {favourites ? (favourites.map((myfavour, index, favourirtes)=>{
                        return( 
                            <Col key={index} className="text-center">
                                <img src={myfavour.img} alt='favourite-img' id="favourite-itemsImg" className="myFavouritePosters w-100 img-fluid"/>
                                <Button variant="outline-danger" className="myFavouritePostersBtn " onClick={ () => handleRemove(myfavour.id)}>Remove</Button>     
                            </Col>                                               
                        )
                    })) : (<p className="favouriteError text-center text-danger container">Sorry,your favourite is empty,pls add your favourite Posters. </p>)}
                 </Row> 
            </Container>
            <Footer/>
        </>

    )
}