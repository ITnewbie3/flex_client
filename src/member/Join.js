import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../config/amuguna';
import Header from '../include/Header';
import './style.css'

const Join = () => {
    const [formData, setFormData] = useState({
        id: "",
        pw: "",
        name: "",
        email: "",
        phone1 : "",
        phone2 : "",
        phone3 : "",
        //초기 상태값 관리
    })

    const onChange=(e)=>{
        console.log(formData);
        console.log(formData.id.length);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    //      const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 숫자1개 특수문자1개 반드시포함
    const regPw = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const regEma = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    const phon = `${formData.phone1}-${formData.phone2}-${formData.phone3}`
    const boxcheck = (formData.id.length > 3 && formData.id.length < 9 && formData.name.length > 3 && formData.name.length < 9)


    function insertMember(){
        axios.post(`${API_URL}/addmember`,formData)
        .then(result=>{
            console.log(result);
            alert('회원등록완료.')
            document.location.href = '/main'
        })
        .catch(e=>{
            console.log(e);
        })
    }

    function checkMember(){
        axios.get(`${API_URL}/checkmember/${formData.id}`)
        .then(result=>{
            if(result.data.length === 0){
                alert('사용가능한 아이디 입니다.')
            } else{
                alert('이미 존재하는 아이디 입니다.')
            }
        })
        .catch(e=>{
            console.log(e);
        })
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        if(!boxcheck){
            alert('id와 name은 3글자이상 8글자 이하로 입력해주세요')
         } else if (!regPw.test(formData.pw)){
             alert('password는 특수문자 1개를 포함한 8글자 이상 입력해주세요.')
         } else if (!regEma.test(formData.email)){
             alert('이메일 형식에 맞게 작성해주세요 ex)aaaaa@naver.com')
         } else if (!regExp.test(phon)){
             alert('핸드폰 번호엔 숫자만 적어주세요. ex)010-123-1234')
         } else {
            insertMember();
         }

    }
    let btn = document.querySelector('#mbtn');
    
    return (

        <div id='insertdiv'>
            <Header/>
            <form id='insertform' onSubmit={onSubmit}>
                <table>
                <tr>
                    
                    <td colSpan={2}> 회원가입</td>
                </tr>
                <tr>
                    <th>ID</th>
                    <td><input type='text' required onChange={onChange} placeholder='4글자 이상 8글자 이하로 입력' name='id'/>
                   </td> <button id='checkbtn' onClick={checkMember}>ID중복체크</button>
                </tr>                <tr>
                    <th>PASSWORD</th>
                    <td><input type='password' required onChange={onChange} placeholder='하나이상의 숫자, 특수문자 포함 입력' name='pw'/></td>
                </tr>                <tr>
                    <th>name</th>
                    <td><input type='text' onChange={onChange} placeholder='8글자 이하로 입력' name='name'/></td>
                </tr>                <tr>
                    <th>email</th>
                    <td><input type='text' onChange={onChange} placeholder='메일 형식으로 입력' name='email'/></td>
                </tr>                     <tr>
                    <th>phone</th>
                    <td id='phon'><input type='text' defaultValue='01' onChange={onChange} name='phone1'/>- 
                        <input type='text' onChange={onChange} name='phone2'/>- 
                        <input type='text' onChange={onChange} name='phone3'/>
                    </td>
                </tr>
                    <th colSpan={2}><button id='mbtn' type='submit'>가입</button><button type='reset'>취소</button></th>
                </table>
            </form>
        </div>
    );
};

export default Join;