import './style.css'
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <ul>
                <Link to='/'><li><img src='/img/logo.gif'/></li></Link>
                <Link to='/main'><li>Home</li></Link>
                <Link to='/allmovie'><li>전체 보기</li></Link>
                <Link to='/best/인기'><li>인기 콘텐츠</li></Link>
                <li>로그인</li>
            </ul>
          </div>
    )
}; 

export default Header;