import React from "react";
import Movielist from './Movielist';
import Header from './Header'
import { datas } from './data';
import { Link } from 'react-router-dom';



const Moviecard = () => {
    return (
        <div >
            <div className='row d-flex align-items-center head mb-4'>
                <Header title="Welcome to my MovieApp" />
            </div>
            <div style={{ display: 'flex', overflowX: 'auto', }}>
                {
                    datas.map((movie) => (
                        <div>

                            <Link to={`/description/${movie.id}`} > <Movielist poster={movie.poster} /> </Link>

                            <Movielist
                                title={movie.title}
                                description={movie.description}
                            />
                        </div>

                    ))}

            </div>

        </div>
    )
}
export default Moviecard;