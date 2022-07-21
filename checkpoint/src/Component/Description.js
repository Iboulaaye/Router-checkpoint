import React from "react";
import { Link, useParams } from "react-router-dom";
import {datas} from './data' ;



const Description = () => {
    const {id} =useParams() ;
    const trailer = datas[id]


    return (
        <div >
            <h1>
                <Link to = "/" > HOME </Link>
            </h1> 
            <p> {trailer.description} </p>
            <iframe src={trailer.trailer} />

    </div>
    )
} 

export default Description;