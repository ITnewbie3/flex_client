import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../config/amuguna';
import { getreview } from "../modules/review"
import './style.css'

const Review = ({moviedata}) => {

    const { data, loading, error } = useSelector(state => state.searchreviews.review);
    const dispatch = useDispatch();
    const movname = (moviedata && moviedata[0].name)
    useEffect(()=>{ 
        dispatch(getreview(movname))
    },[dispatch, movname])
    
    
    const [formData, setFormData] = useState({
        id:"",
        nicname:"",
        mname:"",
        review:""
       })
       // 폼데이터 선언

       const onChange=(e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    // textarea 입력시 값 관리
    useEffect(() => {
        setFormData({
            id: (sessionStorage.getItem('user_id') ? sessionStorage.getItem('user_id') : ""),
            nicname : (sessionStorage.getItem('nicname') ? sessionStorage.getItem('nicname') : ""),
            mname: (moviedata ? moviedata[0].name : "")
        })
       },[moviedata])
       // 폼으로 보내줄값을 미리 입력

       function insertreview(){
        axios.post(`${API_URL}/insertreview`,formData)
        .then(result=>{
            console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    } 

    // 서버전송
       const onSubmit = (e)=>{
        e.preventDefault();
        insertreview();
        alert("REVIEW 작성 완료")
        document.location.href = document.location.href
       }

       function deletereview(no){
        axios.post(`${API_URL}/deletereview/${no}`)
        .then(result=>{
            console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    } 
        // 삭제
        const onDelete = (e)=>{
        e.preventDefault();
        const no = e.target.value
        deletereview(no);
        alert("REVIEW 삭제 완료")
        document.location.href = document.location.href
        }

       if(loading) return <div>로딩중입니다.</div>
       if(error) return <div>에러..</div>
       if(!data) return null
       console.log(data && data)
    return (
        <>
        {(sessionStorage.getItem("user_id")) ?  <div id='reviewinput'>
            <p>Review 를 작성해보세요!</p>
            <ul>
            <li><p>{sessionStorage.getItem('user_id')}</p></li>
            <li><textarea onChange={onChange} placeholder='리뷰를 작성해보세요~' name="review"></textarea></li>
            <li><button onClick={onSubmit}>작성</button></li>
            </ul>
        </div> : 
         <div id='reviewinput'>
         <p>Review 를 작성해보세요!</p>
        <p>로그인 후 이용가능 합니다.</p>
        </div>
        }
       

        <div id='review'>
        {data.map(review => (
            <ul>
                <li><p>{review.nicname}</p></li>
                <li><p>{review.desc}</p> </li>
              {(sessionStorage.getItem('user_id') === review.id || sessionStorage.getItem('user_id') ==='admin') &&
               <li><button onClick={onDelete} value={review.no}>삭제</button></li>}
            </ul>
            ))}
        </div>
        </>
    );
};

export default Review;