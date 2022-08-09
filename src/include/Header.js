import './style.css'
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const onSubmit = (e)=> {
        e.preventDefault();
        sessionStorage.clear();
        document.location.href = '/'
    }

    const onmain = (e)=> {
        e.preventDefault();
        sessionStorage.clear();
        document.location.href = '/main'
    }
    // 구경하기　기능은　View세션에　View값이　들어가기에　세션을　지우고　새롭게　입력한다．
    return (
        <div id='header'>
            <ul>
                <Link to='/'><li><img src='/img/logo.gif'/></li></Link>
                <Link to='/main'><li>Home</li></Link>
                <Link to='/allmovie'><li>전체 보기</li></Link>
                <Link to='/best/인기'><li>인기 콘텐츠</li></Link>
                {sessionStorage.getItem("user_id") ? <li onClick={onSubmit}> 로그아웃 </li>  :
                 <li onClick={onmain}>Login</li>}
                 {/* 세션을　체크해　로그인과　로그아웃으로　구분 */}
                {sessionStorage.getItem("user_id") ==='admin' && <li><Link to='/inser'>영화등록</Link></li>}
                {/*　admin일시　영화등록페이지　활성화  */}
                {sessionStorage.getItem("user_id") && <li>
                    <Link to={`/favorite/${sessionStorage.getItem('user_id')}`}>찜목록</Link></li>}
            </ul>
          </div>
    )
}; 

export default Header;