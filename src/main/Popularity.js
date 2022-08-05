import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getmovie } from '../modules/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination} from "swiper";
import { Link } from 'react-router-dom';
import "swiper/css"; //basic
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styleaction.css'

const Popularity = ({keyword}) => {
   // 값 받아오기(keyword)
   const { data, loading, error } = useSelector(state => state.searchmovies.movie);
   const dispatch = useDispatch();
   useEffect(()=>{
       dispatch(getmovie(keyword))
   },[dispatch, keyword])

   if(loading) return <div>로딩중입니다.</div>
   if(error) return <div>에러..</div>
   if(!data) return null
   return (
     <>
          <Swiper
     spaceBetween={50} //슬라이드 여 백
   slidesPerView={5} //한 슬라이드에서 보여줄 갯수
   scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
   pagination={{
     type: "progressbar",
   }}
   navigation={false} //버튼
   modules={[Pagination, Navigation]}
   loop={true} //무한반복
   className="mySwiper"
     >
         {data.map(movie =>( 
          <SwiperSlide>
             <Link to={`/detail/${movie.no}`}>
             <div className='movediv'>
             <img src={`http://localhost:3001/img/${movie.img[0]}`} alt=''/>
             </div>
             </Link>
             </SwiperSlide>
                             ))}
                             
             </Swiper>

     </>
 );
};

export default Popularity;