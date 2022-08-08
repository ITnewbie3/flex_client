import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import Header from '../include/Header';
import "swiper/css"; //basic
import "swiper/css/pagination";
import "swiper/css/navigation";
import Action from './Action';
import Popularity from './Popularity';
import Login from './Login';
import Loading from '../loading/Loading';




const Main = () => {
    const [isloading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
      }, []); // 2초 후 로딩완료
    return (
        <>
            {isloading ?  <Loading/> : 
            <>
            <Header/>
            <div id='Main'>
                
            { (!sessionStorage.getItem("user_id") && !sessionStorage.getItem("view")) ? <Login />  : ""}
                
                <div id='movie'>
                    <div id='text'>
                <p>쥬라기 월드:도미니언</p>
                <span>공룡들의 터전이었던 이슬라 누블라 섬이 파괴된 후, 마침내 공룡들은 섬을 벗어나 
                    세상 밖으로 출몰한다. 지상에 함께 존재해선 안 될 위협적 생명체인 공룡의 등장으로 
                    인류 역사상 겪어보지 못한 사상 최악의 위기를 맞이한 인간들. 
                    지구의 최상위 포식자 자리를 걸고 인간과 공룡의 최후의 사투가 펼쳐진다.</span>
                    </div>
                    <img src='/img/juragi.jpg' id='mainimg'/>
                    <video autoPlay muted playsinline>
                    <source src='img/mov.mov' type='video/mp4' />
                    지원되지 않는 브라우저 입니다.
                    </video>
                </div>
                {/* 메인 movie */}


                <div className='imgdiv' >
               <p className='title'> 지금 뜨는 콘텐츠</p>
                <Popularity keyword={'드라마'}/>
                <p className='title'> 액션</p>
                <Action keywordaction={'액션'}/>
                </div>
                </div>
                </>
                }
                {/* 메인 영화 이미지 div */}
           
        </>
    );
};

export default Main;