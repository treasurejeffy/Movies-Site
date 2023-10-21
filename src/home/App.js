import React, { useEffect, useState} from "react";
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
// import pause from '../image/pause.png'
import './App.css';
import { Card,Spinner} from "react-bootstrap";



export default function App () {
  let [isLoading, setIsLoading] = useState(false);
  let[favouriteMovie,setFavouriteMovie]=useState([]);
  const[type,setType]=useState("");
  const[title,setTitle]=useState("");
  const[year,setYear]=useState("");
  let [searchError, setSearchError]=useState(false);
  let[moviess,setMoviess]=useState([]);
  // let [play, SetPlay]=useState(plays);
  let [noOfMovies, SetNoOfMovies]=useState(0)
  
  const handleClick=()=>{
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=20ecbe46&s=${title}&y=${year}&type=${type}`)
    .then((response) => response.json())
    .then(response => {
       setMoviess(response.Search);    
       setIsLoading(false) 
    })

    .catch(error=>{setIsLoading(true) })
    .finally()
  }

  useEffect(()=>{
    SetNoOfMovies(moviess.length)
  },[moviess.length])
   
    const handleAddToFavourite = (favouriteMovies) => {
      setFavouriteMovie([...favouriteMovie, favouriteMovies]);
    }

    const handleRemove = (removeFavourite) => {
      const filteredItems = favouriteMovie.filter(item => item !== removeFavourite)
      setFavouriteMovie(filteredItems);
      console.log(filteredItems)
    }
    
    console.log(favouriteMovie)

return(
  <>
    <Navbars favouriteMovie={favouriteMovie}/>
    <Banner/>

    {/* my favourite */}
    <section className="mb-4">
      <Container>
        <h3 className="myFavouriteHeader text-center mt-3">Favourite Movies</h3>
        <Row lg={5} md={4} sm={2} xs={1}>
            {favouriteMovie ? 
            (favouriteMovie.map((myfavour, index, favourites)=>{
                return( 
                    <Card key={index} className=" border myfavourite m-1">
                      <p id="remove" onClick={() => handleRemove (myfavour)}>&times;</p>
                      <Card.Img src={myfavour.Poster} variant="top" alt='favourite-img' id="favourite-itemsImg" className="myFavouritePosters w-200"/>
                      <h6 className="mt-1 title text-center">{myfavour.Title}</h6>
                      <h6 className="subtitlefavour text-center">{myfavour.Year}</h6> 
                    </Card>                                               
                )
            })) : (<p className="favouriteError text-center text-danger container">Sorry,your favourite is empty,pls add your favourite Posters. </p>)}
          </Row> 
      </Container>
    </section>
    {/* search for movies in the key */}
    <div id="main">  
      <Container>
        {/* this is the form for search */}
          <section className="border text-center" id="input-section">
              <Row  id="row">
                <p className="myheaderp">search for your movies&films</p>
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
                  <Card.Header className="d-flex card-Header border-0"><img src={favourite} alt="favourites" onClick={() => handleAddToFavourite (movie)} className="justify-content-end"/></Card.Header>
                  <div className="text-center">
                    <img src={plays} alt="play" id="play"/>
                  </div>
                </Card.ImgOverlay>
              </Card>
            )
          })}
        </Row>        
     </Container>
    <Button variant="outline-success" className="btn noOfMovies-btn"  title="Number of result" >{noOfMovies}</Button>
    <Posters/>
    <Footer/>
  </>
)
}