import React, {useState} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import FavouriteApp from './favourite/favouriteApp'
import App from './home/App'


export default function Routswitch (){

    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/' element={<App />}/>
                    <Route path='/favourite' element={<FavouriteApp />}/>
                </Route>  
            </Routes>
        </BrowserRouter>
    )

}