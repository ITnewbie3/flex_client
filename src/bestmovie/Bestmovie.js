import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getmovie } from '../modules/movies';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../include/Header';
import Loading from '../loading/Loading';
import { API_URL } from '../config/amuguna';
import Fade from 'react-reveal/Fade';

const Bestmovie = () => {
    const params = useParams();
    const key = params.keyword
    const { data, loading, error } = useSelector(state => state.searchmovies.movie);
   const dispatch = useDispatch();
   useEffect(()=>{
       dispatch(getmovie(key))
   },[dispatch, key])

   if(loading) return <Loading/>
   if(error) return <div>에러..</div>
   if(!data) return null
    return (
        <>
            <div id='allmovie'>
             <Header/>
            <div id='movierun'>
            {data.map(movie =>( 
              <Fade bottom>
                 <Link to={`/detail/${movie.no}`}><div className='movediv'>
                 <img src={`${API_URL}/img/${movie.img[0]}`} alt=''/>
                </div>
                </Link>
                </Fade> 
                           ))}
                </div>
                </div>
        </>
    );
};

export default Bestmovie;