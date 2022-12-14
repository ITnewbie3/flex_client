import React, { useEffect } from 'react';
import Header from '../include/Header';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'
import { getfavorit } from '../modules/favorit';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/amuguna';


const Favorites = () => {
    const {id} = useParams();
    const { data, loading, error } = useSelector(state => state.searchfavorit.favorit);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getfavorit(id))
    },[dispatch, id])


    function delfavorites(no){
        axios.post(`${API_URL}/delfavorites/${no}`)
        .then(result=>{
            console.log(result);
            document.location.href = document.location.href
        })
        .catch(e=>{
            console.log(e);
        })
    }

    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러..</div>
    if(!data) return null
    const onSubmit = (e)=>{
        e.preventDefault();
        const no = e.target[0].value
        delfavorites(no);

    }
    return (
        <div id='favorites'>
            <Header/>
            {data.map(data => (
            <div id='contanior'>
                <div className='fimgdiv'>
                <Link to={`/detail/${data.num}`}>
                    <img src={`${API_URL}/img/${data.img[0]}`}></img>
                    </Link>
                </div>
                <div className='ftextdiv'>
                    <h1>{data.name}</h1>
                    <p>관객수 : {data.attendance}</p>
                    <p>개봉일 : {data.opening}</p>
                    <p>등급 : {data.rating}</p>
                    <p>샹영시간 : {data.runningtime}</p>
                </div>
                <form onSubmit={onSubmit}>
                <button value={data.no}>X</button>
                </form>
            </div>
            ))}
        </div>
    );
};

export default Favorites;