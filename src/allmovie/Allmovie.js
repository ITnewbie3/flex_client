import React, { useEffect, useState } from 'react';
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
      const [serchsns, setSerchsns] = useState("전체")

      const onClick =(e)=>{
       setSerchsns(e.target.innerText)
      }
      if(loading) return <Loading/>
      if(error) return <div>에러..</div>
      if(!data) return null
      return (
        <>
           <div id='allmovie'>
             <Header/>
             <div id='menu'>
              <ul>
                <li onClick={onClick}>전체</li>
                <li onClick={onClick}>액션</li>
                <li onClick={onClick}>드라마</li>
                <li onClick={onClick}>로맨스</li>
                <li onClick={onClick}>판타지</li>
              </ul>
             </div>
            <div id='movierun'>
          {serchsns === '전체' ?
          <> 
            {data.map(movie =>( 
              <Fade bottom>
                 <Link to={`/detail/${movie.no}`}><div className='movediv'>
                 <img src={`${API_URL}/img/${movie.img[0]}`} alt=''/>
                </div> 
                </Link>
                </Fade>
                ))}
                </>
               : <> 
               {data.map(movie =>( 
                movie.sns.includes(serchsns) ? (
                 <Fade bottom>
                    <Link to={`/detail/${movie.no}`}><div className='movediv'>
                    <img src={`${API_URL}/img/${movie.img[0]}`} alt=''/>
                   </div> 
                   </Link>
                   </Fade> ) : ""
                   ))}
                   </>}
                </div>
                </div>
        </>
    );
};

export default Allmovie;