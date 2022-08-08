import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/amuguna';
import './style.css'

const Login = () => {
    const [formData, setFormData] = useState({
        id : "",
        pw : ""
    })

const onChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value
    })
}
function login(){
    axios.post(`${API_URL}/member`,formData)
    .then(result=>{
        const {id, pw} = result.data
        if(result.data.id === undefined){
            // id 를 입력하지 않거나 틀린경우
            // console.log(result.data.id === undefined)
            // console.log(result.data.id)
            alert('입력하신 id 가 일치하지 않습니다.')
        } else if(pw !== formData.pw){
            // id는 맞지만, pw 는 
            alert('입력하신 비밀번호 가 일치하지 않습니다.')
        } else if(id === formData.id) {
            // id, pw 모두 일치 
            sessionStorage.setItem('user_id', id)
            document.location.href = '/main'
        // 작업 완료 되면 페이지 이동(새로고침)
        }
    })
    .catch(e=>{
        console.log(e);
    })
}
const onView =(e)=>{
    e.preventDefault();
    sessionStorage.setItem('view', 'view')
    document.location.href = '/main'
}


// 로그인 함수를 실행시킨다.
const onSubmit =(e)=>{
    e.preventDefault();
    login();
}
    return (
        <div id='bgbox'>
        <div id='loginbox'>
            <p>로그인 하시면 <br/>찜하기가 가능합니다.</p>
            <form onSubmit={onSubmit}>
            <table>
                <tr>
                    <th>ID : </th>
                    <td><input type='text' name='id' onChange={onChange}/></td>
                </tr>
                <tr>
                    <th>PW : </th>
                    <td><input type='password' name='pw' onChange={onChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2} className='loginbtn'>
                        <button type='submit'>로그인</button>
                      <Link to='/join'>  <button>회원가입</button></Link>
                        <button onClick={onView}>구경하기</button>
                    </td>
                </tr>
            </table>
            </form>
        </div>
    </div>
    );
};

export default Login;