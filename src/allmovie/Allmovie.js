import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  getmovies } from '../modules/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../include/Header';
import './style.css'

const Allmovie = () => {
      const { data, loading, error } = useSelector(state => state.searchmovies.movies);
      const dispatch = useDispatch();
      useEffect(()=>{
          dispatch(getmovies())
      },[dispatch])


      if(loading) return <div>로딩중입니다.</div>
      if(error) return <div>에러..</div>
      if(!data) return null
      console.log(data)
      return (
        <>
           <div id='allmovie'>
             <Header/>
            <div id='movierun'>
            {data.map(movie =>( 

                 <Link to={`/detail/${movie.no}`}><div className='movediv'>
                 <img src={`http://localhost:3001/img/${movie.img[0]}`} alt=''/>
                </div> 
                </Link>           ))}
                </div>
                </div>
        </>
    );
};

export default Allmovie;