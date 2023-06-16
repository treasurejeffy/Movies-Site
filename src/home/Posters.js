import React, { useState } from "react";
import FavouriteApp from "../favourite/favouriteApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container,Button} from 'react-bootstrap';
import poster1 from '../image/B19.png';
import poster2 from '../image/B6.png';
import poster3 from '../image/B7.png';
import poster4 from '../image/B8.png';
import poster5 from '../image/B1.png';
import poster6 from '../image/B10.png';
import poster7 from '../image/B11.png';
import poster8 from '../image/B12.png';
import poster9 from '../image/B13.png';
import poster10 from '../image/B14.png';
import poster11 from '../image/B22.png';
import poster12 from '../image/B26.png';

export default function Posters(props) {
    const [poster,setPoster] = useState([
        {
            id:1,
            img:poster1
        },
        {
            id:2,
            img:poster2
        },
        {
            id:3,
            img:poster3
        },
        {
            id:4,
            img:poster4
        },
        {
            id:5,
            img:poster5
        },
        {
            id:6,
            img:poster6
        },
        {
            id:7,
            img:poster7
        },
        {
            id:8,
            img:poster8
        },
        {
            id:9,
            img:poster9
        },
        {
            id:10,
            img:poster10
        },
        {
            id:11,
            img:poster11
        },
        {
            id:12,
            img:poster12
        }
    ]);
    let [favouritestorage,setFavouriteStorage]=useState([])
    const favourite=props.favourite;
    const setFavourite=props.setFavourite;

    const handleFavourite = (addToFavourite) =>{
        favouritestorage.push(addToFavourite)
        sessionStorage.setItem('myposters', JSON.stringify(favouritestorage))
    }
    return(
       <section>
        <Container fluid={true} className="border mb-4">
        <h2 className="mypostersHeader text-center pt-3">Trending Posters</h2>
            <Row lg={6} md={4} sm={2} xs={1}>
                {poster.map((myPosters, index, poster)=>{
                    return(
                        <Col key={myPosters.id} className="text-center" >
                            <img src={myPosters.img} alt="latest posters" className="myposters img-fluid"/>
                            <Button variant="outline-success" className="myPostersBtn " onClick={ () => handleFavourite(myPosters)}>Favourite</Button>
                        </Col>
                    )
                })}

            </Row>
        </Container>
       </section>
    )
}