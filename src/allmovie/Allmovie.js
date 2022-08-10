import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  getmovies } from '../modules/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../include/Header';
import './style.css'
import Loading from '../loading/Loading';
import { API_URL } from '../config/amuguna';
import Fade from 'react-reveal/Fade'; // 페이드

const Allmovie = () => {
      const { data, loading, error } = useSelector(state => state.searchmovies.movies);
      const dispatch = useDispatch();
      useEffect(()=>{
          dispatch(getmovies())
      },[dispatch])


      if(loading) return <Loading/>
      if(error) return <div>에러..</div>
      if(!data) return null
      console.log(data)
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

export default Allmovie;