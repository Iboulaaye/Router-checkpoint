import React from "react";


const MovieList = props => {
   
    return (
        <div>
            <div style={{marginBottom : 10, width: 100, marginRight:250 }} className='image-container justify-content-start '> 
             <img src= {props.poster}  />
            </div>
            <p> {props.title} </p>  
        </div>
    )
}
export default MovieList;