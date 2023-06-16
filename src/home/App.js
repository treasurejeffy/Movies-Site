import React, { useState } from "react";
import Navbars from "./Navbar";
import Banner from "./banner";
import Footer from "./footer";
import Posters from "./Posters";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import favourite from '../image/hearts.png';
import Button from 'react-bootstrap/Button';
import plays from '../image/playes.png';
import './App.css';
import { Card,Spinner} from "react-bootstrap";


export default function App (props) {
  let [isLoading, setIsLoading] = useState(false);
  const[type,setType]=useState("");
  const[title,setTitle]=useState("");
  const[year,setYear]=useState("");
  let [error, setError]=useState(false);
  let[moviess,setMoviess]=useState([]);
  let [noOfMovies, SetNoOfMovies]=('0')
  
  const handleClick=()=>{
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=20ecbe46&s=${title}&y=${year}&type=${type}`)
    .then((response) => response.json())
    .then(response => {
      console.log(response.Search)
       setMoviess(response.Search);
       SetNoOfMovies(response.totalResults);       
       setIsLoading(false) 
    })
    .catch(error=>{setError(false)|| setIsLoading(false)})
    .finally()
  }

return(
  <>
    <Navbars/>
    <Banner/>
    <Posters/>

    {/* search for movies in the key */}
    <div id="main">  
      <Container>
        {/* this is the form for search */}
          <section className="border text-center" id="input-section">
              <Row  id="row">
                <p >search for your movies&films</p>
                <Col lg={6}  sm={12} className='input'><Form.Label>Title:</Form.Label><Form.Control  placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/></Col>
                <Col lg={6} sm={12} className='input'><Form.Label>Year:</Form.Label><Form.Control  placeholder="Year" value={year} type="number" onChange={(e)=>setYear(e.target.value)} required/></Col>   
              </Row>   
                  <div className="text-center">
                    <div>
                      <Form.Label>Type of movies:
                      <Form.Select value={type} onChange={(e)=>setType(e.target.value)} className="select">
                        <option>Movies</option>
                        <option>Series</option>
                        <option>Episode</option>
                      </ Form.Select>
                      </Form.Label>
                      </div> 
                  </div> 
                    <Button onClick={handleClick} id="btn" className="btn btn-success pd-3">search</Button>
          </section>
      </Container>
      {/* this is for the spinner and the network error */}
        {isLoading ? 
          (<div className="divSpinner mb-3"> 
            <Spinner animation="border" variant="success" className="spinner"/>
          </div>) : ('')
          }
        {error ? (<div className="error text-center text-danger p-2">Pls check your internet connection!</div>) : ('')}
    </div>

    {/* this is the result of the api */}
    <Container className="border">
        <Row  xs={1} sm={3} md={4} lg={4}>
          {moviess.map((movie, index)=>{
            console.log(moviess)
            return(
              <Card key={index}  id="myResult">
                <Card.Img src={movie.Poster} alt={movie.Title} className="card-Img"/>
                <Card.ImgOverlay>
                  <Card.Header className="card-Header"><img src={favourite} alt="favourites"/></Card.Header>
                  <div className="text-center">
                    <img src={plays} alt="play" id="play"/>
                  </div>
                </Card.ImgOverlay>
                <Card.Title className="Title text-center">{movie.Title}</Card.Title>            
                <Card.Footer className="text-center">{movie.Year}</Card.Footer>
              </Card>
            )
          })}
        </Row>        
     </Container>
    <Button variant="outline-success" className="btn noOfMovies-btn" title="Number" >{noOfMovies}</Button>
    <Footer/>
  </>
)
}