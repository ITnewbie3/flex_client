import React, { useEffect } from 'react';
import './style.css'
import Header from '../include/Header';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation,Mousewheel,EffectCoverflow, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";
import "swiper/css/navigation";


const Main = () => {
    return (
        <>

            <Header/>
            <div id='Main'>
                <div id='movie'>
                    <div id='text'>
                <p>쥬라기 월드:도미니언</p>
                <span>공룡들의 터전이었던 이슬라 누블라 섬이 파괴된 후, 마침내 공룡들은 섬을 벗어나 
                    세상 밖으로 출몰한다. 지상에 함께 존재해선 안 될 위협적 생명체인 공룡의 등장으로 
                    인류 역사상 겪어보지 못한 사상 최악의 위기를 맞이한 인간들. 
                    지구의 최상위 포식자 자리를 걸고 인간과 공룡의 최후의 사투가 펼쳐진다.</span>
                    </div>
                    <video autoPlay muted>
                    <source src='img/mov.mov' type='video/mp4'/>
                    지원되지 않는 브라우저 입니다.
                    </video>
                </div>
                <div id='imgdiv' >
                <p className='title'> 지금 뜨는 콘텐츠</p>
                <Swiper
        spaceBetween={50} //슬라이드 여 백
      slidesPerView={8} //한 슬라이드에서 보여줄 갯수
      scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
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
                <div className='movediv'>
                <img src='img/aven3.jpg' alt=''/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='movediv'>
                <img src='img/aven1.jpg' alt=''/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='movediv'>
                <img src='img/aven3.jpg' alt=''/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='movediv'>
                <img src='img/aven2.jpg' alt=''/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='movediv'>
                <img src='img/aven3.jpg' alt=''/>
                </div>
                </SwiperSlide>
                </Swiper>
                
                </div>
            </div>
        </>
    );
};

export default Main;