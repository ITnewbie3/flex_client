import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation,Autoplay ,Pagination} from "swiper";
import { useSelector, useDispatch } from 'react-redux';
import { getonemovie } from '../modules/movies';
import { useParams } from 'react-router-dom';
import Header from '../include/Header';
import "swiper/css"; //basic
import './style.css'
import axios from 'axios';
SwiperCore.use([Navigation, Pagination, Autoplay])

const Detail = () => {
    const {id} = useParams();
   const { data, loading, error } = useSelector(state => state.searchmovies.onemovie);
   const dispatch = useDispatch();
   useEffect(()=>{
       dispatch(getonemovie(id))
   },[dispatch, id])
   
   const [formData, setFormData] = useState({
    id:"",
    name:""
   })

   function inserfavorites(){
    axios.post('http://localhost:3001/favorites',formData)
    .then(result=>{
        console.log(result);

    })
    .catch(e=>{
        console.log(e);
    })
}

   useEffect(() => {
    setFormData({
        id: (sessionStorage.getItem('user_id') ? sessionStorage.getItem('user_id') : ""),
        name: (data ? data[0].name : "")
    })
   },[data])
   
   if(loading) return <div>로딩중입니다.</div>
   if(error) return <div>에러..</div>
   if(!data) return null
 
   const onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData.id);
    inserfavorites();
    document.location.href = `/favorite/${sessionStorage.getItem('user_id')}`
}
    return (
        <>
           
             <div id='blindbox'>
             <Header/>
             { (sessionStorage.getItem("user_id") && !sessionStorage.getItem("view")) ?
             <form onSubmit={onSubmit}>
            <button className='btn' type='submit' >찜하기</button> 
            </form> : ""}
            <div id='detailimg'>
            <Swiper
                slidesPerView={1} 
                scrollbar={{ draggable: true }}
                pagination={{
                    type: "progressbar",
                  }}
                  navigation={false} //버튼
                  modules={[Pagination, Navigation]}
                  autoplay={{delay: 3000}} //3초마다 자동으로 넘기기
                  loop={true} //무한반복
                  className="mySwiper"
                  >
             <SwiperSlide>
             <img src={`http://localhost:3001/img/${data[0].img[0]}`} alt=''/>
             </SwiperSlide>
             <SwiperSlide>
             <img src={`http://localhost:3001/img/${data[0].img[1]}`} alt=''/>
                </SwiperSlide>
                </Swiper>
                <div className='detailtext'>
             <p>{data[0].name}</p> 
             <table>
                <tr>
                    <th>관객수</th>
                    <td>{data[0].attendance}</td>
                </tr>
                <tr>
                    <th>개봉일 / 배급사 </th>
                    <td>{data[0].opening} / {data[0].distribution}</td>
                </tr>
                <tr>
                    <th>등급 / 장르</th>
                    <td>{data[0].rating} / {data[0].genre}</td>
                </tr>
                <tr>
                    <th>국가 / 상영시간</th>
                    <td>{data[0].country} / {data[0].runningtime}</td>
                </tr>
                <tr>
                    <th>줄거리</th>
                    <td>{data[0].desc}</td>
                </tr>
             </table>
             </div>
             </div>
            </div>
    
        </>
    );
};

export default Detail;