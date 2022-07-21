import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Routes, Route, Link } from "react-router-dom";
import Moviecard from './Component/Moviecard';
import Description from './Component/Description';



function App() {
   return (
    <div className= 'container-fluid movie-app body'>
      
      <Routes> 
        <Route path= '/' element = { <Moviecard/>} />
        <Route path='/description/:id' element = {<Description/>} />
      </Routes>
    </div>
  );
}

export default App;
