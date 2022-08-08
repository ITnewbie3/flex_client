import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  getmovieaction } from '../modules/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination} from "swiper";
import { Link } from 'react-router-dom';
import "swiper/css"; //basic
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styleaction.css'
import Loading from '../loading/Loading';
import { API_URL } from '../config/amuguna';

const Action = ({keywordaction}) => {
      // 값 받아오기(keyword)
      const { dataa, loading, error } = useSelector(state => state.searchmovies.movieaction);
      const dispatch = useDispatch();
      useEffect(()=>{
          dispatch(getmovieaction(keywordaction))
      },[dispatch, keywordaction])


      if(loading) return <Loading/>
      if(error) return <div>에러..</div>
      if(!dataa) return null
      return (
        <>
             <Swiper
        spaceBetween={50} //슬라이드 여 백
      slidesPerView={5} //한 슬라이드에서 보여줄 갯수
      scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
      pagination={{
        type: "progressbar",
      }}
      breakpoints={{
        390: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }}
      navigation={false} //버튼
      modules={[Pagination, Navigation]}
      loop={true} //무한반복
      className="mySwiper"
      
        >
             
            {dataa.map(movieaction =>( 
             <SwiperSlide>
            
                 <Link to={`/detail/${movieaction.no}`}><div className='movediv'>
                 <img src={`${API_URL}/img/${movieaction.img[0]}`} alt=''/>
               
                </div> 
                </Link>
               
                </SwiperSlide>
                                ))}
                </Swiper>
            
        </>
    );
};

export default Action;