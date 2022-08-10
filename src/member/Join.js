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
        phone1 : "01",
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
    const boxcheck = (formData.id.length > 7 && formData.name.length > 7)
    useEffect(() => {
        console.log(boxcheck)
        if(boxcheck){
               btn.disabled=true;
        }
        
    },[formData])

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

    const onSubmit =(e)=>{
        e.preventDefault();

        // insertMember();
    }
    let btn = document.querySelector('#mbtn');
    // btn.disabled=false
    
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
                    <td><input type='text' required onChange={onChange} placeholder='4글자 이상 8글자 이하로 입력' name='id'/></td>
                </tr>                <tr>
                    <th>PASSWORD</th>
                    <td><input type='password' required onChange={onChange} placeholder='6글자 이상 특수문자 포함 입력' name='pw'/></td>
                </tr>                <tr>
                    <th>name</th>
                    <td><input type='text' onChange={onChange} placeholder='8글자 이하로 입력' name='name'/></td>
                </tr>                <tr>
                    <th>email</th>
                    <td><input type='text' onChange={onChange} placeholder='메일 형식으로 입력' name='email'/></td>
                </tr>                     <tr>
                    <th>phone</th>
                    <td id='phon'><input type='text' value='01' onChange={onChange} name='phone1'/>- 
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