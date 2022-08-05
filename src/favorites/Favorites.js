import React, { useEffect } from 'react';
import Header from '../include/Header';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'
import { getfavorit } from '../modules/favorit';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Favorites = () => {
    const {id} = useParams();
    const { data, loading, error } = useSelector(state => state.searchfavorit.favorit);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getfavorit(id))
    },[dispatch, id])


    function delfavorites(no){
        axios.post(`http://localhost:3001/delfavorites/${no}`)
        .then(result=>{
            console.log(result);
            // document.location.href = document.location.href
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
        console.log(no);
        delfavorites(no);

    }
    return (
        <div id='favorites'>
            <Header/>
            {data.map(data => (
            <div id='contanior'>
                <div className='fimgdiv'>
                    <img src={`http://localhost:3001/img/${data.img[0]}`}></img>
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