import React, { useEffect } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    function startup(){
    }
    useEffect(() => {
    let star = setTimeout(() => {  
        document.querySelector('.home').classList.add('on')},2000);},[])  
        // 시작화면 스타트
const navigate = useNavigate();
useEffect(()=>{
    let timer = setTimeout(()=>{ navigate(`/main`);   }, 5000);
  });
//   스타트 완료 후 -> /main 2초후 이동
    return (
        <div className='home'>
            <div className='over'>
            <p><img src='img/logo.gif'/></p>
            </div>
        </div>
    );
};

export default Home;