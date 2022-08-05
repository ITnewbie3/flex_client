import axios from 'axios';
import React, { useState } from 'react';
import Header from '../include/Header';
import './style.css'

const Join = () => {
    const [formData, setFormData] = useState({
        id: "",
        pw: "",
        name: "",
        phone : "",
        //초기 상태값 관리
    })

    const onChange=(e)=>{
        console.log(formData);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }


    function insertMember(){
        axios.post('http://localhost:3001/addmember',formData)
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
        insertMember();

    }
    return (

        <div id='insertdiv'>
            <Header/>
            <form id='insertform' onSubmit={onSubmit}>
                <table>
                <tr>
                    
                    <td colSpan={2}> 회원가입</td>
                </tr>
                <tr>
                    <th>ID *</th>
                    <td><input type='text' required onChange={onChange} name='id'/></td>
                </tr>                <tr>
                    <th>PASSWORD *</th>
                    <td><input type='text' required onChange={onChange} name='pw'/></td>
                </tr>                <tr>
                    <th>name</th>
                    <td><input type='text' onChange={onChange} name='name'/></td>
                </tr>                <tr>
                    <th>phone</th>
                    <td><input type='text' onChange={onChange} name='phone'/></td>
                </tr>
                    <td colSpan={2}><button type='submit'>전송</button><button type='reset'>취소</button></td>
                </table>
            </form>
        </div>
    );
};

export default Join;