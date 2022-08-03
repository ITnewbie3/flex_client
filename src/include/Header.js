import './style.css'
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <ul>
                <Link to='/'><li><img src='img/logo.gif'/></li></Link>
                <Link to='/main'><li>Home</li></Link>
                <li>TV프로그램</li>
                <li>영화</li>
                <li>인기 있는 콘텐츠</li>
            </ul>
          </div>
    )
}; 

export default Header;